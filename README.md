# LIGA BJJ

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

## NPM Scripts

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser.

A página será recarregada se você fizer edições.\
Você também verá quaisquer erros de lint no console

### `npm test`

Inicia o executor de teste no modo de observação interativo.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `npm run build`

Cria o aplicativo para produção na pasta `build`.\
Ele empacota corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

---

## Bibliotecas utilizadas
Irei abordar um pouco sobre as ferramentas/bibliotecas utilizadas, o porque foram desenvolvidas de tal maneiras.

### Material UI
Material UI é uma biblioteca de componentes React UI que implementa o Material Design do Google.

Ele inclui uma coleção abrangente de componentes pré-construídos que estão prontos para uso.

A interface do Material é bonita e apresenta um conjunto de opções de personalização que facilitam a implementação de um sistema de interface personalizado.

### Axios
Axios é um cliente HTTP baseado em Promises para fazer requisições. O Axios traz algumas vantagens e simplificações, sendo melhor utilza-lo do que apenas o Fetch, como configuração simples, conversão automática do JSON, Interceptores, etc...

### Unform
Unform, API de formulários, vantagem em utilizar por não usa state, aí quando é digitado na input as outras inputs  não sofrem render.

### Yup
Yup é um construtor de esquema JavaScript para análise e validação do esquema.

### CryptoJs
CryptoJs, como o próprio nome diz, é uma biblioteca de criptografia, possibilitando utilizar ALGORITHM e Secret Key, usado na aplicação de Encrypt end-to-end.

### React Router Dom
O React Router permite "roteamento do lado do cliente".

React é uma biblioteca popular para criar aplicações de página única (SPAs) que são renderizadas no lado do cliente.

e, diferentemente das aplicações convencionais de várias páginas, a navegação nessas views não deve resultar no recarregamento da página inteira.

## Segurança
Essa aplicação React consome serviço de uma aplicação Java Spring com Autenticação Oauth2, e o esquema de login deve seguir os requisitos de validação e autenticação da API.

### Camada de segurança no front
Conforme dito anteriormente o back-end trabalha com Authentication Server Oauth2, abaixo detalho melhor o funcionamento do login, resumidamente a sessão será validada atraves do token jwt, caso o mesmo esteja expirado ou seja inexistente, o usuário será deslogado.

> Request: oauth/token
```ts
    const encryptedPassword = encryptedAES(login.password);
        const encryptedKeyVerify = encryptedAES(process.env.REACT_APP_KEY_VERIFY || '');
        const passwordEncoded = Buffer.from(`${encryptedPassword}|${encryptedKeyVerify}`).toString('base64');

        const data = new URLSearchParams({ 'username': login.username });
        data.append('password', passwordEncoded);
        data.append('grant_type', 'password');

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}/oauth/token`,
            withCredentials: true,
            auth: {
                username: process.env.REACT_APP_AUTH_USERNAME || '',
                password: process.env.REACT_APP_AUTH_PASSWORD || ''
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data
        };

        const res = await axios(config);
```

> O username e password informados no body, é relacionado ao cliente(usuário) que esta efetuando o login, o clientId e clientSecret informado no bloco auth é para o application_client se autenticar com o Authentication server.

## Varios Temas
O portal possibilita a criação de usuário para diversas faixas dentro do Jiu-Jitsu.

Sendo elas: 'Preta', 'Azul', 'Marrom', 'Verde', 'Laranja', 'Roxa', 'Branco', 'Amarelo'

e para cada faixa o portal possui temas Dark e Light personalizados.

### Funcionamento
O portal possui um contexto, `AppThemeContext` que recebe informações do usuário logado, e se o tema é tema selecionado é Dark ou Light.

Depois retorna o tema correspondente da faixa/Dark-Light e esse tema é aplicado a interface do portal.

## Considerações
A LigaBJJ desenvolve um novo e inédito conceito em ligas e disputas de jiu-jitsu,
sendo a primeira liga totalmente interativa da internet brasileira;

> **Liga BJJ** \
*Dev*: André Carlos
