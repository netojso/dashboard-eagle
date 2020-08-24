<h1>Dashboard Eagle - Teste | 2T Informática</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>


### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)


## Descrição do projeto

<p align="justify">
  Aplicação destinada à empresa com cadastro de clientes e colaboradores.
</p>

## Funcionalidades

:heavy_check_mark:   Visualizar colaboradores cadastrados, tanto quanto seu status, horário de login e número de clientes.

:heavy_check_mark:  Visualizar clientes cadastros e alguns dados como CPF ou CNPJ.

:heavy_check_mark:  Clicar em algum cliente específico para ter mais informações e se necessário editar alguns dados.

:heavy_check_mark:  Adicionar novo cliente.

## Layout:

![Dashboard](https://github.com/netojso/teste-eagle/blob/master/prints/Pagina%20Dashboard.png)

## Pré-requisitos

:warning:  [Node](https://nodejs.org/en/download/)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto:

```
git clone https://github.com/netojso/teste-eagle.git
```
Acesse a pasta raiz do repositório clonado e rode:

```
yarn install
```

Usei o **json-server** para criar uma api local com o arquivo server.json, para isso rode:

```
yarn json-server server.json -p 3333
```

Em outro terminal, rode:

```
yarn start
```

## Linguagens, dependencias e libs utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Styled-Components](https://react-pdf.org/)
- [CoreUI](https://coreui.io/)
- [React-Base-Table](https://autodesk.github.io/react-base-table/)
- [Json-server](https://github.com/typicode/json-server)


## Desenvolvedores/Contribuintes :octocat:

**Linkedin:** [Octacilio Serafim](https://www.linkedin.com/in/octacilio-serafim/)


## Licença

The [MIT License]() (MIT)
