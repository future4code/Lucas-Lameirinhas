### Exercício 1
a) DROP COLUMN remove uma coluna da tabela.

b) O comando CHANGE, na tabela Actor, o gender vai ser trocado pelo gender que terá um limite de caracteres = 6. VARCHAR(6).

c) O comando CHANGE na letra c não está mudando o valor, então continuará sendo gender. O que foi mudado é o limite de caracteres que passa a ser 255.
VARCHAR(255)

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a)UPDATE Actor SET name = "Glória Pires", birth_date= "1940-2-21" WHERE id= "003";

b)UPDATE Actor SET name = "JULIANA PAES" where name = "Juliana Paes";

c)UPDATE Actor SET name = "Ju Paes", salary = 302012, birth_date = "1978-3-21",gender = "male" WHERE id = "005";

d)UPDATE Actor SET city = "Brazil" WHERE id = "001";
Erro: Error Code: 1054. Unknown column 'city' in 'field list'
O erro existe porque quero colocar valor em uma coluna que não existe (city)

### Exercício 3
a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;

### Exercício 4
a)SELECT MAX(salary) FROM Actor;

b)SELECT MIN(salary) FROM Actor;

c)SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)SELECT SUM(salary) FROM Actor;

### Exercício 5
a) O operador GROUP BY organiza a tabela, ele acabou organizando pelo "gender"

b)SELECT id, name FROM Actor ORDER BY name DESC;

c)SELECT salary FROM Actor ORDER BY salary;

d)SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e)SELECT AVG(salary) fROM Actor GROUP BY gender;
