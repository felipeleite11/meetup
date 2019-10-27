<h1 align="center">
MeetApp
</h1>

---

### Overview

Projeto desenvolvido durante o Bootcamp GoStack 2019, conduzido pela Rocketseat.

O projeto contempla backend, frontend e mobile, fazendo uso da stack NodeJS, React e React Native.

#### Instruções para execução da aplicação
- Clonar o projeto (master)
- Configurar o arquivo **.env**, a partir do modelo disponível no arquivo **.env.example**
- Executar as **migrations** do sistema, para geração da base de dados

        yarn sequelize db:migrate

- Executar as **seeds** para criação de dados fictícios para teste

        yarn sequelize db:seed:all

##### Aplicação backend

- Entrar na pasta **backend** e executar

        yarn start  <ou>  yarn dev

Obs.: Neste momento, podem ser executados os teste da API. O arquivo com as chamadas configuradas para o Insomnia está disponível na pasta *backend*.

##### Aplicação web

- Entrar na pasta **frontend** e executar

        yarn start

- Aguardar o browser padrão ser aberto no endereço http://localhost:3000

- Um dos usuários criados pelas *seeds* pode ser autenticado com os seguintes dados:
        
        e-mail: rocketseat@rocketseat.com
        senha: 123

- Executar, neste momento, todos os testes necessários na aplicação web

##### Aplicação mobile

**Infelizmente a aplicação mobile desenvolvida é suportada apenas por dispositivos Android.**

- Assumindo que há um **emulador** em execução ou que há um **dispositivo real** conectado à máquina de desenvolvimento, entrar na pasta **mobile** e executar

        yarn android

- Espera-se que a aplicação seja iniciada pela tela de autenticação.

- As *seeds* criaram um segundo usuário para teste com o seguinte login:
        
        e-mail: felipe@rocketseat.com
        senha: 123

- Ao autenticar no aplicativo, deverá ser mostrada uma *FlatList*, de carregamento dinâmico (3 em 3 itens), contendo 10 meetups cadastradas a partir das *seeds*

- Efetuar os testes necessários.

