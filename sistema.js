function handleFormSubmit(e) {
  // Gera o número do chamado
  var sheet = e.source.getActiveSheet();
  var lastRow = sheet.getLastRow();

  // Obtém a data e hora atuais
  var now = new Date();
  var year = now.getFullYear().toString(); // Ano com 4 dígitos
  var month = ("0" + (now.getMonth() + 1)).slice(-2); // Mês com 2 dígitos
  var day = ("0" + now.getDate()).slice(-2); // Dia com 2 dígitos
  var hours = ("0" + now.getHours()).slice(-2); // Hora com 2 dígitos
  var minutes = ("0" + now.getMinutes()).slice(-2); // Minutos com 2 dígitos
  var seconds = ("0" + now.getSeconds()).slice(-2); // Segundos com 2 dígitos

  // Formata o número do chamado: AAAAMMDDHHMMSS
  var ticketNumber = year + month + day + hours + minutes + seconds;

  // Insere o número do chamado na coluna "Número do Chamado" (coluna A no exemplo)
  sheet.getRange(lastRow, 1).setValue(ticketNumber);

  // Obtém os dados do chamado conforme o layout da planilha
  var data = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
  var timestamp = data[1]; // Carimbo de data/hora (coluna B)
  var nomeSolicitante = data[2]; // Nome do solicitante (coluna C)
  var contatoSolicitante = data[3]; // Contato do solicitante (coluna D)
  var departamento = data[4]; // Departamento (coluna E)
  var descricaoProblema = data[5]; // Descrição do problema (coluna F)
  var prioridade = data[6]; // Prioridade (coluna G)

  // Monta o assunto e o corpo do e-mail
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

  // Envia o e-mail
  MailApp.sendEmail("seu-email@dominio.com", assunto, mensagem);
}
