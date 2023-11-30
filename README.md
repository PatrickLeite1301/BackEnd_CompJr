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
post - http://localhost:3000/adm/item/add
get - http://localhost:3000/usr/item/all
get - http://localhost:3000/usr/item/:id
patch - http://localhost:3000/adm/item/:id
del - http://localhost:3000/adm/item/:id
post - http://localhost:3000/usr/register
post - http://localhost:3000/usr/login
get - http://localhost:3000/usr/all
get - http://localhost:3000/usr/:id
patch - http://localhost:3000/adm/:id
del - http://localhost:3000/adm/delete/:id
