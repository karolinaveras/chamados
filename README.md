# Sistema de Chamados Automatizado

Um sistema simples e eficiente para gerenciar chamados, integrado com Google Forms, Google Sheets e Google Apps Script. Automatiza a geração de números de chamados únicos e o envio de notificações por e-mail.

---

## 🚀 Funcionalidades

- **Abertura de Chamados**: Os usuários abrem chamados através de um Google Forms.
- **Número Único de Chamado**: Cada chamado recebe um número único no formato `AAAAMMDDHHMMSS`.
- **Notificação por E-mail**: Envio automático de e-mails com os detalhes do chamado.
- **Gerenciamento de Chamados**: Todos os chamados são armazenados em uma planilha do Google Sheets para fácil acompanhamento.

---

## 🛠️ Tecnologias Utilizadas

- **Google Forms**: Interface para abertura de chamados.
- **Google Sheets**: Armazenamento e gerenciamento dos chamados.
- **Google Apps Script**: Automação da geração de números de chamados e envio de e-mails.
- **Markdown**: Documentação do projeto.

---

## 📋 Como Funciona

1. **Abertura de Chamado**:
   - O usuário preenche o formulário no Google Forms com os detalhes do chamado.
   - Os dados são enviados para uma planilha do Google Sheets.

2. **Geração do Número do Chamado**:
   - Um script no Google Apps Script gera um número único no formato `AAAAMMDDHHMMSS` e o insere na planilha.

3. **Notificação por E-mail**:
   - O mesmo script envia um e-mail para o responsável, com todos os detalhes do chamado.

4. **Acompanhamento**:
   - A equipe pode visualizar e gerenciar os chamados diretamente na planilha do Google Sheets.

---

## 📂 Estrutura do Projeto
