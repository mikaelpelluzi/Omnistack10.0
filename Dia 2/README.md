
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


### #Organização de pastas e arquivos
*  Nesta etapa será passada os códigos e metodologias que foram utilizadas.

* Durando o processo de criação da aplicação será criadas pastas e arquivos para armazenamento de códigos, rotas e depois funcionalidades.

* 1° - Foi criada ***pasta scr*** armazenar o *index.js* e criado ***arquivo routes.js*** (arquivo de rotas da aplicação).  
* 2° - Foi criada ***pasta models*** para armazenar as representações de entidades (**entidades** => *são informações que serão armazenados no banco de dados*). a entidade armazenada na pasta é **Devs.js**.
* 3° - Foi criada ***pasta controllers*** e criado ***DevController.js*** para conter controle da criação de usuário, caso já exista um perfil com um determinado usuário o código impede que haja duplicação de perfil, e se não houver o perfil o código irá criar. 
* 4° - Ainda na ***pasta controllers*** foi criado outro arquivo ***SearchController.js***, que contém códigos destinado a fazer buscar de valores (usuários criados na aplicação) através de filtros.
* 5° - No fim, foi criado uma ***pasta utils*** dentro da ***pasta src*** para conter um arquivo ***parseStringAsArray.js*** que contem código de funcionalidade que está sendo utilizado em mais de um arquivo, e para evitar a repetição de regras da aplicação.

### #Nodemon

O nodemon é uma biblioteca que será instalada através do **yarn add nodemon -D** ( ***-D*** significa uma dependencia de desenvolvimento, que só vai ser executado em ambiente de desenvolvimento, não será utilizada quando for pra produção, online), que será para acompanhar as alterações feitas no servidor e atualizar o processo, sem que seja necessário para e restartar, como seria o caso do **node "nome do arquivo.js"**,  a partir dai toda vez que for feita uma alteração no código e for salvo o nodemon irá ver as mudanças e recomeçar o processo.

* Uma maneira eficiente para executar o nodemon sem precisar escrever o comando por extenso no terminal do VScode **yarn nodemon index.js**, é ir em package.json e criar um *script* para executar o comando, ` "Script": { "dev" : "nodemon index.js"} `. E quando for executar no terminal só dar o comando **yarn dev** que dará inicio ao processo. 

### #Insomnia
* É um programa que sera utilizado para auxiliar na criação da aplicação e ajudará a observar os resultados, valores devolvidos, sem que seja necessário a utilização do browser para tal.
* O progama é encontrar no site [https://insomnia.rest/](https://insomnia.rest/), encontra-se downloads para versão Mac IOs, Windows (64bit) e Ubuntu linux. 

### Métodos HTTP: 
* **GET** -> Buscar valores dentro da aplicação.
* **POST** -> Criar um valor dentro da aplicação.
* **PUT**   -> Editar um valor dentro da aplicação.
* **DELETE** -> Deletar um valor dentro da aplicação.

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

*  Obs.: Instalação do pacote **axios** pelo terminal -> **yarn add axios**. 
o axios faz busca pelos ***API***.

### #Banco de dados para armazenamento dos dados da aplicação, MongoDB (não-relacional)

* Para dar continuidade é preciso fazer a instalação da biblioteca **MongoDB** (é um banco de dados não relacional em nuvem, para mais informações  acesse [www.mongodb.com](http://mongodb.com). )pelo terminal do VScode com o comando **yarn add mongoose**.
* Após a instalação, será necessário que tenha um [cadastro](https://www.mongodb.com/download-center) para poder utilizar o banco de dados. 
* Feito o cadastro e a instalação corretamente, o próximo passo:
*  1. Criar um **cluster**(*um servidor onde pode hospedar várias bases de dados*).
* 2.  Criar um conta de acesso do banco de dados (*database access*), usuário e senha.
* 3. Criar uma rede de acesso (*network access*), com o IP address configurado para ambiente de desenvolvimento.
* 4. Por fim iniciar a conexão. Selecionar a opção *connect your application*, e configurar o drive e a versão que serão utilizadas (*node.js* e *3.0 or latter*). Feito isso será liberado em **Connection String Olny** um código (copiar e colar) onde será feito a conexão da aplicação direta com o banco de dados para armazenamento .
```javascript
	mongoose.connect('código exibido'), {
		useNewUrlParser:  true, //parâmetro pra debug/liberar acesso.
		useUnifiedTopology:  true, //parâmetro pra debug/liberar acesso.
});
```


### MongoDB Compass
* Aplicativo para visualização do banco de dado criado para aplicações.
download disponível em [aqui](https://www.mongodb.com/products/compass).

## Criação de Devs
```javascript
	async  store(request, response) {
		const { github_username, techs, latitude, longitude } = request.body;
		let dev =  await Dev.findOne({ github_username }); 
		if (!dev){...}
		return response.json(dev);
	}
```

#### Funções do controller
 1. **Index** -> Mostrar lista do recurso
 2. **Show** -> Mostrar um único valor do recurso
 3.  **Store** -> Criar um valor
 4. **Update** -> Editar um valor
 5. **Destroy** -> Deletar em valor

## Listagem de Devs 
```javascript
	async  index(request, response){
		const devs =  await Dev.find();
		return response.json(devs);
	},
```

## Busca de Devs 
*  Será feita busca de devs através das técnicas do usuário e em um raio máximo determinado de 10km.
```javascript
	async  index(request, response){
		
		const { latitude, longitude, techs } = request.query;
		const techsArray =  parseStringAsArray(techs);
		const devs =  await Dev.find({...});

		return response.json({ devs });
	},
		
```

> Written with [StackEdit](https://stackedit.io/).
