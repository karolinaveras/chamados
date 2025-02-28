function handleFormSubmit(e) {

  var sheet = e.source.getActiveSheet();
  var lastRow = sheet.getLastRow();

  var now = new Date();
  var year = now.getFullYear().toString();
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var day = ("0" + now.getDate()).slice(-2);
  var hours = ("0" + now.getHours()).slice(-2);
  var minutes = ("0" + now.getMinutes()).slice(-2);
  var seconds = ("0" + now.getSeconds()).slice(-2);

  var ticketNumber = year + month + day + hours + minutes + seconds;

  sheet.getRange(lastRow, 1).setValue(ticketNumber);

  var data = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
  var timestamp = data[1];
  var nomeSolicitante = data[2];
  var contatoSolicitante = data[3];
  var departamento = data[4];
  var descricaoProblema = data[5];
  var prioridade = data[6];

  var assunto = "Novo Chamado Aberto: " + ticketNumber;
  var mensagem = `
    Novo chamado aberto:
    Número do Chamado: ${ticketNumber}
    Data/Hora: ${timestamp}
    Nome do Solicitante: ${nomeSolicitante}
    Contato do Solicitante: ${contatoSolicitante}
    Departamento: ${departamento}
    Descrição do Problema: ${descricaoProblema}
    Prioridade: ${prioridade}
  `;

  MailApp.sendEmail("seu-email@dominio.com", assunto, mensagem);
}
