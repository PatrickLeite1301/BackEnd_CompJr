# Desafio BackEnd CompJunior

##Visão Geral:
BackEnd CompJr em NodeJs, MongoDB e Express.


Neste projeto tive como objetivo criar um controle de estoque, desta forma não tenho tabelas que se relacionam pois a unica informação manipulada são os itens presentes em estoque ou a serem cadastrados.

Para utilizar o controle de estoque basta utilizar o comando "npm start"

Insomnia foi minha ferramenta de teste de requisições para este projeto

Pela questão de relacionamentos e requisitos do desafio optei pelas seguintes tecnologias:
-MongoDB
-Node.js

/usr - rotas de usuário sem permissão de admin, apenas token
/adm - rotas para permissão de admin

##Rotas de requisição:
post - http://localhost:3000/adm/item/add <br>
get - http://localhost:3000/usr/item/all <br>
get - http://localhost:3000/usr/item/:id <br>
patch - http://localhost:3000/adm/item/:id <br>
del - http://localhost:3000/adm/item/:id <br>
post - http://localhost:3000/usr/register <br>
post - http://localhost:3000/usr/login <br>
get - http://localhost:3000/usr/all <br>
get - http://localhost:3000/usr/:id <br>
patch - http://localhost:3000/adm/:id <br>
del - http://localhost:3000/adm/delete/:id
