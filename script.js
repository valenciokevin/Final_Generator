document.getElementById('generateButton').addEventListener('click', function() {
    const ticketNumber = document.getElementById('ticketNumber').value;
    const slaPriority = document.querySelector('input[name="slaPriority"]:checked');
    const contactChannel = document.getElementById('contactChannel').value;

    if (!ticketNumber || !slaPriority) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const slaValue = slaPriority.value;

    const message = `Obrigado por ter aguardado.\n` +
        `A sua solicitação já foi registrada e encaminhada para a equipe de analistas que vai atendê-la.\n\n` +
        `O número do chamado é *${ticketNumber}*.\n` +
        `O SLA de solução é de *${slaValue}* horas úteis, podendo ser paralisado devido a fatores externos de terceiros.\n\n` +
        `Foi enviado também uma confirmação de abertura do chamado para o seu e-mail.\n` +
        `A medida que o chamado for recebendo interações, você receberá notificações por e-mail. Como combinado, também estaremos retornando feedbacks sobre o seu chamado através do ${contactChannel}. Por gentileza se atente ao seu canal escolhido, que estaremos realizando contato através dos nossos canais oficiais de atendimento.\n\n` +
        `Quando o chamado for encerrado, você também receberá por e-mail uma pesquisa de satisfação para avaliar o atendimento recebido no chamado.\n\n` +
        `Algo mais em que podemos te ajudar?`;

    document.getElementById('output').value = message;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert('Mensagem copiada para a área de transferência!');
});
