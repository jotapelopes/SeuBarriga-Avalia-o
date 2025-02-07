Feature: Login no sistema

  Scenario: Login válido
    Given que acesso a página de Login
    And digito o email recém cadastrado
    And a senha válida
    When clico no botão de Entrar
    Then deve ser exibida a mensagem de Bem vindo

  Scenario: Login inválido
    Given que acesso a página de Login
    And digito o email recém cadastrado
    And uma senha inválida
    When clico no botão de Entrar
    Then deve ser exibida a mensagem de erro
