Feature: Cadastro de usuário 

  Scenario: Cadastro de usuário válido
    Given acesso a página de Novo Usuário
    And digito um nome, email e senha válidos
    When clico no botão de Cadastrar
    Then deve ser exibida a mensagem de sucesso

  Scenario: Cadastro de usuário existente
    Given acesso a página de Novo Usuário
    And possuo um email já cadastrado
    And digito um nome, o email já cadastrado e senha válida
    When clico no botão de Cadastrar
    Then deve ser exibida a mensagem de usuário existente 