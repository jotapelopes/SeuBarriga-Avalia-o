import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(function() {
    cy.fixture('usuarios').then((usuarios) => {
        this.usuarios = usuarios;
    });
});

Given("acesso a página de Novo Usuário", () => {
    cy.visit("https://seubarriga.wcaquino.me/cadastro");
});

And("digito um nome, email e senha válidos", function () {
    cy.get('#nome').type(this.usuarios.usuarioNovo.nome);
    cy.get('#email').type(this.usuarios.usuarioNovo.email);
    cy.get('#senha').type(this.usuarios.usuarioNovo.senha);
});

And("possuo um email já cadastrado", function () {
    cy.request('POST', 'https://seubarriga.wcaquino.me/cadastrarUsuario', {
        nome: this.usuarios.usuarioExistente.nome,
        email: this.usuarios.usuarioExistente.email,
        senha: this.usuarios.usuarioExistente.senha
    });
});

And("digito um nome, o email já cadastrado e senha válida", function() {
    cy.get('#nome').type(this.usuarios.usuarioNovo.nome);
    cy.get('#email').type(this.usuarios.usuarioExistente.email);
    cy.get('#senha').type(this.usuarios.usuarioNovo.senha);
});

When("clico no botão de Cadastrar", () => {
    cy.get('input[type="submit"]').click();
});

Then("deve ser exibida a mensagem de sucesso", () => {
    cy.get('.alert-success').should('be.visible');
});

Then("deve ser exibida a mensagem de usuário existente", () => {
    cy.get('.alert-danger').should('be.visible');
});
