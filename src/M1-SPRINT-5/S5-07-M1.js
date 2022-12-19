/*Contextualizando
Um de seus clientes é barbeiro, sua babearia oferece cortes de cabelo e claro,
barba.
Com a alta demanda ele não está conseguindo dar conta de atender todos
os clientes.
Com a grande dificuldade em atender todas as demandas dos clientes,
ele te contratou para desenvolver um sistema,
onde o cliente poderá realizar uma série de ações. Como:
Buscar Corte.
buscaCortePorId(). Esta função recebe como parâmetro um id.
Ela retorna quando encontrado, um objeto corte completo.
Caso o id não exista na lista de cortes, retorne:
⁠Corte não encontrado.
Observe que para acessar a lista, você primeiro precisa acessar
o objeto barbearia.
Em seguida, percorrer de cortes, os índices da lista acessando
os valores de id.
Teste se os valores dos id's que estão sendo acessados
são iguais ao id recebido como parâmetro.
Caso seja, retorne o objeto(corte) referente ao id.
Buscar Barba.
buscaBarbaPorId().Esta função recebe como parâmetro um id.
Ela retorna quando encontrado, um objeto barba completo.
Caso o id não exista na lista de cortes, retorne:
⁠Barba não encontrada.
Observe que para acessar a lista, você primeiro precisa acessar
o objeto barbearia.
Em seguida, percorrer a lista de barbas, os índices da lista
acessando os valores de id.
Teste se os valores dos id's que estão sendo acessados
são iguais ao id recebido como parâmetro.
Caso seja, retorne o objeto(corte) referente ao id.
Consultar se a barbearia está aberta ou fechada.
verificaStatusBarbearia(). Esta função não irá receber parâmetros.
Ela retorna se o estaAberto da barbearia é true ou false.
Caso seja true retorne:
"Estamos abertos", caso seja false, retorne: "Estamos fechados".
Para chegar a resolução acima, é necessário que você teste a
propriedade estaAberto. Acessando, estaAberto através do objeto barbearia.
Buscar Todos os cortes que a barbearia oferece.
retornaTodosCortes(). Esta função não irá receber parâmetros.
Ela retorna a lista de cortes que a barbearia oferece.
Acesse a propriedade cortes do objeto barbearia e a retorne.
Buscar todas as barbas que a barbearia oferece.
retornaTodasBarbas(). Esta função não irá receber parâmetros.
Ela retorna a lista de barbas que a barbearia oferece.
Acesse a propriedade barbas do objeto barbearia e a retorne.
Orçar um pedido.
criaPedido(). Esta função recebe três parâmetros, o nome do cliente,
o id do corte a ser realizado e o id da barba a ser feita.
Antes de criar o pedido, você deverá consultar se os id's que
foram recebidos pela função pertencem a algum dos objetos das
listas(cortes e barbas).
Use as funções já criadas buscaCortePorId() e buscaBarbaPorId().
Crie uma variável para armazenar o retorno de cada uma das funções.
Ou seja, uma variável para cada função.
Apenas um dos id's é obrigatório. Pelo menos um id.
Crie um objeto pedido, que tenha as seguintes propriedades:
nome -> Armazena a variável nome do cliente recebida como parâmetro.
pedidoCorte -> Armazena o tipo do corte pedido.
pedidoCortePreco -> Armazena o valor do corte.
pedidoBarba -> Armazena o tipo da barba do pedido.
pedidoBarbaPreco -> Armazena o valor da barba.
Retorne o objeto pedido.
Calcular o valor total.
calculaTotal(). Esta função recebe um pedido como parâmetro.
Acesse as propriedades pedidoCortePreco e pedidoBarbaPreco,
verifique se alguma é nula ou undefined, caso seja retorne a outra propriedade,
se nenhuma das duas forem nulas ou undefined.
Some o valor as duas e retorne a soma.
O cliente também solicitou uma funcionalidade para
atualização dos preços e dos tipos de serviços oferecidos.
Atualizar serviço.
atualizarServico(). Esta função recebe uma lista(Cortes ou Barbas),
o id do item a ser atualizado, o novo tipo e ou novo preço.
Caso o item não seja encontrado ou se pelo menos 1 dos novos valores for nulo.
Retorne: "Entrada de valores inválida". Valores vazios não são permitidos.
Acesse o índice da lista e efetue a atualização.
Retorne: "Item atualizado com sucesso".*/