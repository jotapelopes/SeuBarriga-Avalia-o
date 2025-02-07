import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(function () {
    cy.fixture('usuarios').then((usuarios) => {
        this.usuarios = usuarios;
    });
});

Given("que estou logado no sistema", function() {
    cy.request('POST', 'https://seubarriga.wcaquino.me/logar', {
        email: this.usuarios.usuarioExistente.email,
        senha: this.usuarios.usuarioExistente.senha
    });
    cy.request('POST', 'https://seubarriga.wcaquino.me/salvarConta', {
        nome: 'Gerando uma conta',
    })
});

Given("acesso a página de Movimentação", () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao');
});

When("cadastro uma movimentação com dados válidos", () => {
    cy.get('#tipo').select(0);
    cy.get('#data_transacao').type('05/02/2025');
    cy.get('#data_pagamento').type('05/02/2025');
    cy.get('#descricao').type('Inserindo uma movimentação válida');
    cy.get('#interessado').type('Seu Barriga');
    cy.get('#valor').type('10000');
    cy.get('#conta').select(0);
    cy.get('input[type="radio"][value="1"]').check();
    cy.get('button[type="submit"]').click();
    cy.get('.alert-success').should('be.visible');
});

When("faço um fluxo completo", () => {
    cy.visit('https://seubarriga.wcaquino.me/extrato');
});

Then("ao acessar o extrato deve conter a movimentação cadastrada", () => {
    cy.get('tr').last().should('contain', 'Inserindo uma movimentação válida');
});

When("tento cadastrar uma movimentação com {string}, {string} e {string}", (dataTransacao, dataPagamento, valor) => {
    cy.get('#tipo').select(0);
    if (dataTransacao) cy.get('#data_transacao').type(dataTransacao);
    if (dataPagamento) cy.get('#data_pagamento').type(dataPagamento);
    if (valor) cy.get('#valor').type(valor);
    cy.get('#descricao').type('Testando cadastro inválido');
    cy.get('#interessado').type('Seu Madruga');
    cy.get('#conta').select(0);
    cy.get('input[type="radio"][value="1"]').check();
    cy.get('button[type="submit"]').click();
});

Then("deve ser exibida a mensagem de erro {string}", (mensagemErro) => {
    cy.get('.alert-danger').should('contain', mensagemErro);
});

When("seleciono o tipo de movimentação {string}", (tipo) => {
    const value = tipo === "Receita" ? "REC" : "DESP";
    cy.get('#tipo').select(value);
});

Then("o campo deve estar marcado corretamente como {string}", (valorEsperado) => {
    cy.get('#tipo').should('have.value', valorEsperado);
});

When("seleciono cada situação disponível", () => {
    cy.get('input[type="radio"]').each(situacao => {
        cy.wrap(situacao).check().should('be.checked');
    });
});

