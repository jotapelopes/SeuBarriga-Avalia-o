Feature: Cadastro de Movimentação

  Background:
    Given que estou logado no sistema
    And acesso a página de Movimentação

  Scenario: Cadastro de movimentação válida
    When cadastro uma movimentação com dados válidos
    And faço um fluxo completo
    Then ao acessar o extrato deve conter a movimentação cadastrada

  Scenario Outline: Cadastro de movimentação inválida
    When tento cadastrar uma movimentação com "<Data Transação>", "<Data Pagamento>" e "<Valor>"
    Then deve ser exibida a mensagem de erro "<Mensagem de erro>"

    Examples:
      | Data Transação | Data Pagamento | Valor  | Mensagem de erro                            |
      | abcde         | 05/02/2025     | 100    | Data da Movimentação inválida (DD/MM/YYYY)    |
      | 05/02/2025    | abcde          | 100    | Data do pagamento inválida (DD/MM/YYYY)    |
      | 05/02/2025    | 04/02/2025     | abcde  | Valor deve ser um número                   |

  Scenario: Seleção de tipo de movimentação
    When seleciono o tipo de movimentação "Receita"
    Then o campo deve estar marcado corretamente como "REC"

    When seleciono o tipo de movimentação "Despesa"
    Then o campo deve estar marcado corretamente como "DESP"

