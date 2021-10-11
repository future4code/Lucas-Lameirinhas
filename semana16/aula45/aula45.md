### Exercício 1

a) O FLOAT foi usado para indicar qual o salário porque salários possuem normalmente casas decimais.
Outros comandos:VARCHAR(n) e DATE.

b) SHOW DATABASES mostra o nome do banco de dados que estamos trabalhando, já o SHOW TABLES só mostra o nome da tabela que estamos trabalhando.

c) DESCRIBE mostra a tabela toda com todas as colunas e linhas.

### Exercício 2

a) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) Entrada duplicada para chave primária.

c) Error Code: 1136. Contagem do número de colunas não bate com valor da tabela.

d) Error Code: 1136. Contagem do número de colunas não bate com valor da tabela.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

f)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Nicole Kidman",
  7562000.98,
  "1967-06-20", 
  "female"
);

### Exercício 3

a) SELECT * from Actor 
WHERE gender = "female"

b)SELECT salary from Actor WHERE name = "Tony Ramos";

c) SELECT * from Actor 
WHERE gender = "testgenderinvalid";
// >>> voltou NULL 

d) SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Error Code: 1054. Unknown column 'nome' in 'field list'
Coluna "nome" é desconhecida.
O erro ocorreu porque era "name" e não "nome"