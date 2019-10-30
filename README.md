<h1 align="center">
MeetApp
</h1>

## Overview

Projeto desenvolvido durante o Bootcamp GoStack 2019, conduzido pela Rocketseat.

O projeto contempla backend, frontend e mobile, fazendo uso da stack NodeJS, React e React Native.

#### Instruções para execução da aplicação
- Clonar o projeto (master)
- Entrar na pasta **backend**
- Configurar o arquivo **.env**, a partir do modelo disponível no arquivo **.env.example**
- Em uma instância MySQL, criar uma *database* com o mesmo nome atribuído ao parâmetro **DB_NAME** do arquivo **.env**
- Executar as **migrations** do sistema, para geração da base de dados

        yarn sequelize db:migrate

- Executar as **seeds** para criação de dados fictícios para teste

        yarn sequelize db:seed:all

#### Aplicação backend

- Entrar na pasta **backend**
- Realizar a instalação de todas as dependências com o comando:

        yarn

- Executar a aplicação com o comando:

        yarn start  <ou>  yarn dev

Obs.: Neste momento, podem ser executados os teste da API. O arquivo com as chamadas configuradas para o Insomnia está disponível na pasta *backend*.

#### Aplicação web

- Entrar na pasta **frontend**
- Realizar a instalação de todas as dependências com o comando:

        yarn

- Criar e configurar o arquivo **.env**, conforme a seguir, seguindo a estrutura do arquivo **.env.example**

        NODE_ENV=development
        REACT_APP_URL=http://<IP da máquina backend>
        REACT_APP_PORT=<porta da aplicação backend>

- Executar o comando

        yarn start

- Aguardar o browser padrão ser aberto no endereço http://localhost:3000

- Um dos usuários criados pelas *seeds* pode ser autenticado com os seguintes dados:
        
        e-mail: rocketseat@rocketseat.com
        senha: 123

- Executar, neste momento, todos os testes necessários na aplicação web

#### Aplicação mobile

##### * **Infelizmente a aplicação mobile desenvolvida foi testada apenas em dispositivos Android (emulador e dispositivo físico, ambos com Android 9.0 - Pie).**

- Realizar a instalação de todas as dependências com o comando:

        yarn

- Criar e configurar o arquivo **.env**, exatamente igual ao **.env** da aplicação *frontend*
- Assumindo que há um **emulador** em execução ou que há um **dispositivo real** conectado à máquina de teste, entrar na pasta **mobile** e executar o comando:

        yarn android

- Espera-se que a aplicação seja iniciada pela tela de autenticação

- As *seeds* criaram um segundo usuário para teste com o seguinte login:
        
        e-mail: felipe@rocketseat.com
        senha: 123

- Ao autenticar no aplicativo, deverá ser mostrada uma *FlatList*, de carregamento dinâmico (3 em 3 itens), contendo 10 meetups cadastradas a partir das *seeds*

- Efetuar os testes necessários.

