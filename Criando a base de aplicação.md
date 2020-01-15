
# Criando a base de aplicação

## Comentários a respeito da 2° dia da semana Omnistack

duranta a aula informações importantes foram apresentadas, essas informações serão registradas para esclarecimentos futuros.

## Introdução

Obs.: a metodologia do resumo desenvolvida aqui será destinado primeiramente para minha compreensão, caso se interesse e tenha alguma duvida entre em contato.

1. Abra o *powershell* modo administrados (verificar o caminho que o **ps** inicializou).
1.1 Caso tenha inicializado em ***Systen32***, volte a pasta usando **cd  . ./**,  e depois para entrar na pasta de escolha usar **cd *nome da pasta*/**. 

2. Cria uma pasta onde será armazenado os arquivos do projeto.
2.1 Para criar uma pasta só usar **mkdir *nome***.

 3. Após criar uma pasta e verificar se o local está certo, entre na pasta e roda o comando **yarn init -y**.  Será criado uma pasta com nome **node_modulo** e dois arquivos **yarn.lock** e **package.json**.
 3.1 Após feito isso, rode **" code . "** e abrirá o VScode, onde se irá se iniciar o desenvolvimento do projeto.

3. Com o VScode aberto é possivel verificar os arquivos e pastas existentes. Nesse momento crie um arquivo **index.js** que será utilizado para escrever os códigos (nos restantes dos arquivos, com exceção do **package.json** , não deverá ser alterado ***NADA***.)

4. No VScode é possível abrir um terminal de comando **ps** com o atalho **Ctrl+'**. No terminado execute **yarn add express** para adicionar o **package express** e utilizar suas funcionalidades.
5.1 Para isso é preciso criar uma variável **"const"** -> `const express =  require ('express');`  (que não deverá ser alterada). E para usar o package express é necessário criar outra variável que será a aplicação ->`const app =  express();`

5. Após feito isso, para acessar a aplicação no ambiente de desenvolvimento é comum usar ***localhost:(n° porta)***, para isso deverá usar uma função que lista sua aplicação no servidor que será `app.listen(3333);`(porta escolhida 3333, mas pode ser outra).
6.1 Como fazer quando acessar o localhost receber uma resposta do servidor? através de um método ***GET***  -> `app.get();` 

	6.1.1 O código para mostrar uma resposta do servidor ao acessar o localhost da aplicação.
 ```javascript
	 app.get('/', (request, response) => {
			return response.json({message:'Salve galera'});
	});
```

*  Os parâmetros da função a seguir:
1° parâmetro é o caminho que o usuário irá acessar.
2° parâmetro é uma função denominada *array function,* os parâmetro dessa função são ***(request, response)*** ,  esses parâmetros são embutidos pelo *express* e são sempre fixos, e o que são esses parâmetros:
-	*request* -> é a requisição (ocorre quando acessar alguma rota da aplicação)
-	*response* -> é a resposta (é como for devolver uma resposta, podendo ser através de texto, imagem, donwload, etc...)
 
 - Repare que na função não está sendo solicitado um *request*, apenas está retornando uma resposta. Vala apena observar o que está sendo utilizado o **.json** no *response*, pois o json é uma estrutura de dados que vai enviar dados para o *back-end* e o *front-end*, e a forma que o json é escrito é em formato de *objeto* ou um *vetor*. 
7. E por fim para observar a resposta do servidor execute no terminal do VScode o comando **node index.js** e abra o **localhost:3333**. Você irá receber a mensagem escrita no `return response.json(message:"Salve galera");`.

## Nodemon

### yarn dev
### Insomnia
### Métodos HTTP:
1. Query Parms: request.query (Filtros, ordenação, paginação, ..)
```javascript
	app.get('/users', (request, response) => {
		console.log(request.query);
		return response.json({message:'Salve galera'});
});
```

2. Route Parms: request.params (Identificar um recurso na alteração ou remoção)
```javascript
	app.delete('/users/:id', (request, response) => {
		console.log(request.parms);
		return response.json({message:'Salve galera'});
});
```
3. Body: request.body (Dados para a criação ou alteração de um registro)
```javascript
	app.use(express.json());
	
	app.post('/users', (request, response) => {
		console.log(request.body);
		return response.json({message:'Salve galera'});
});
```
* o express não reconhece o formato json, por isso é fazer um que a aplicação passe a identificar, isso é feito através do **.use()** , como está escrito logo acima.

## MongoDB (não-relacional)
### yarn add mongoose (biblioteca mongo)
### MongoDB Compass
 
> Written with [StackEdit](https://stackedit.io/).
