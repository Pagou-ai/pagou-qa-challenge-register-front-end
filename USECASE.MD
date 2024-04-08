# Caso de uso

Eu como cliente, quero poder me cadastrar na aplicação e após isso conseguir fazer login.

## Regras de cadastro
Na primeira etapa:
 - Validar se Email foi preenchido e se é um email válido.
 - Validar se Telefone foi preenchido e se é um telefone válido.
 - Validar se Nome completo foi preenchido e se é o nome completo do usuário.
 - Validar se senha foi preenchida e se tem no mínimo 8 catacters, 1 caractere maiúsculo, 1 caractere minúsculo e 1 caractere numérico.
 - Após o cadastro bem sucedido, deve redirecionar para a tela de informação, indicando para o usuário fazer o login para finalizar o cadastro.
 - Os dados devem ser salvos no banco de dados conforme as informações fornecidas pelo usuário.

## Regras de login
Em seguida:
 - Verificar se o Usuário existe no banco de dados.
 - Se sim, retornar as informações desse usuário e salvar no localstorage.
 - Mostrar mensagem que o login foi feito com sucesso.