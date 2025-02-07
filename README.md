# SeuBarriga - Avaliação Prática

Este projeto é uma automação de testes para o sistema [Seu Barriga](https://seubarriga.wcaquino.me/).

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework para testes end-to-end
- [Cucumber](https://cucumber.io/) - Framework para BDD (Devido a estrura dos cenários encaminhados)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação utilizada

## Instalação

Para rodar o projeto em uma pasta local, execute os comandos abaixo:

1. **Clone o repositório**  
   ```sh
   git clone https://github.com/jotapelopes/SeuBarriga-Avalia-o.git
   ```
2. Acesse a pasta do projeto
   ```sh
   cd SeuBarriga-Avalia-o
   ```
3. Instale as dependências
   ```sh
   npm install
   ```

##  Como Executar os Testes?

1. Via interface gráfica:
   ```sh
   npx cypress open
   ```
2. Via terminal:
   ```sh
   npx cypress run
   ```

## Observação: Credênciais utilizadas

Como não é possível realizar a exclusão do usuário ao fim da execução dos testes, as credênciais utilizadas podem interferir no resultado esperado da tela de cadastro (por exemplo), por esse motivo acesse as credênciais configuradas no arquivo `cypress/fixtures/usuarios.json`.

### Como corrigir:

1. **Abra o arquivo** `cypress/fixtures/usuarios.json`.
2. **Verifique ou atualize as credenciais** com os dados novos. O formato do arquivo deve ser algo assim:

```json
{
  "usuarioExistente": {
    "email": "usuario@exemplo.com",
    "senha": "senhaDeTeste"
  }
}
```

3. Salve o arquivo e reexecute os testes.

# Funcionalidades testadas

- Login
- Cadastro
- Movimentações

# Feito por 

**João Pedro dos Santos Lopes**
