![image](https://github.com/PatrickLeite1301/BackEnd_CompJr/assets/106989436/adf39d01-1078-4c48-86bd-130f7de3b277)# Desafio BackEnd CompJunior

## Visão Geral:
BackEnd CompJr em NodeJs, MongoDB e Express.


Neste projeto tive como objetivo criar um controle de estoque, desta forma não tenho tabelas que se relacionam pois a unica informação manipulada são os itens presentes em estoque ou a serem cadastrados.

Para utilizar o controle de estoque basta utilizar o comando "npm start"

Insomnia foi minha ferramenta de teste de requisições para este projeto

Pela questão de relacionamentos e requisitos do desafio optei pelas seguintes tecnologias:
-MongoDB
-Node.js

/usr - rotas de usuário sem permissão de admin, apenas token <br>
/adm - rotas para permissão de admin <br>
Todas as rotas utilizam o bearer token gerado no login para requisições! 

## Rotas de requisição: <br>
1) post - http://localhost:3000/adm/item/add <br>
2) get - http://localhost:3000/usr/item/all <br>
3) get - http://localhost:3000/usr/item/:id <br>
4) patch - http://localhost:3000/adm/item/:id <br>
5) del - http://localhost:3000/adm/item/:id <br>
6) post - http://localhost:3000/usr/register <br>
7) post - http://localhost:3000/usr/login <br>
8) get - http://localhost:3000/usr/all <br>
9) get - http://localhost:3000/usr/:id <br>
10) patch - http://localhost:3000/adm/:id <br>
11) del - http://localhost:3000/adm/delete/:id

## Funcionalidade das rotas:<br>
1) Adiciona um item ao banco com parametros {name, quant, price, producer}<br>
2) Busca e retorna todos os itens do banco<br>
3) Retorna o item cujo :id foi passado<br>
4) Atualiza o campo do item de :id sem a necessidade de utilizar todos os campos por ser um patch<br>
5) Remove do banco de dados o item de :id<br>
6) Permite o registro de uma nova conta no banco utilizando parametros {name, email, password, passwordConfirmation}<br>
7) Permite o login de uma conta criada utilizando parametros { email, password } e retorna o token de acesso as outras requisições<br>
8) Lista todos os usuários no banco<br>
9) Retorna apenas o usuário de :id<br>
10) Atualiza o campo passado do usuário de :id, sem a necessidade de passar todos pois é um patch<br>
11) Remove o usuário de :id
