import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(function() {
    cy.fixture('usuarios').then((usuarios) => {
        this.usuarios = usuarios;
    });
});

Given("que acesso a página de Login", () => {
    cy.visit("https://seubarriga.wcaquino.me/");
});

And("digito o email recém cadastrado", function() {
    cy.get('#email').type(this.usuarios.usuarioExistente.email);
});

And("a senha válida", function() {
    cy.get('#senha').type(this.usuarios.usuarioExistente.senha);
});

And("uma senha inválida", () => {
    cy.get('#senha').type('senhaerrada123');
});

When("clico no botão de Entrar", () => {
    cy.get('button[type="submit"]').click();
});

Then("deve ser exibida a mensagem de Bem vindo", () => {
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Bem vindo');
});

Then("deve ser exibida a mensagem de erro", () => {
    cy.get('.alert-danger')
      .should('be.visible')
      .and('contain', 'Problemas com o login do usuário');
});
