-- testado em https://www.mycompiler.io/new/sql
-- criacao das tabelas
CREATE TABLE pessoas (
  id INTEGER NOT NULL,
  nome VARCHAR(50) NOT NULL,
  contrato_id INTEGER,
  inadimplente VARCHAR(100) NOT NULL,
  dt_completo DATE,
  PRIMARY KEY(id),
  FOREIGN KEY(contrato_id) REFERENCES contratos
);

CREATE TABLE contratos (
  id INTEGER NOT NULL,
  valor_parcela INTEGER NOT NULL,
  parcelas INTEGER NOT NULL,
  PRIMARY KEY(id)
);


CREATE TABLE pagamentos (
  id INTEGER,
  pessoa_id INTEGER NOT NULL,
  dt_pagamento INTEGER NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(pessoa_id) REFERENCES pessoas,
  FOREIGN KEY(dt_pagamento) REFERENCES contratos
);

-- insercao dos dados
INSERT INTO pessoas VALUES(1, 'Cristian Ghyprievy', 2, 'S', NULL);
INSERT INTO pessoas VALUES(2, 'Joana Cabel', 1, 'S', NULL);
INSERT INTO pessoas VALUES(3, 'John Serial', 3, 'S', NULL);
INSERT INTO pessoas VALUES(4, 'Michael Seven', 2, 'N', '2021-09-25');

INSERT INTO contratos VALUES(1, 150, 100);
INSERT INTO contratos VALUES(2, 300, 48);
INSERT INTO contratos VALUES(3, 550, 24);
INSERT INTO contratos VALUES(4, 1000, 12);

INSERT INTO pagamentos VALUES(1, 4, '2021-09-01');
INSERT INTO pagamentos VALUES(2, 3, '2021-09-05');
INSERT INTO pagamentos VALUES(3, 1, '2021-09-19');
INSERT INTO pagamentos VALUES(4, 2, '2021-09-25');

-- queries

-- Selecionar o nome, dia do mês e valor da parcela para clientes que estão inadimplentes.
SELECT pessoas.nome, pagamentos.dt_pagamento, contratos.valor_parcela FROM pessoas INNER JOIN pagamentos ON pessoas.id = pagamentos.pessoa_id INNER JOIN contratos on pessoas.contrato_id = contratos.id WHERE pessoas.inadimplente = 'S' ORDER BY pessoas.nome ASC;

-- Selecionar o nome e valor total pago de clientes com pagamento completo.
SELECT pessoas.nome, contratos.valor_parcela * contratos.parcelas FROM pessoas INNER JOIN contratos on pessoas.contrato_id = contratos.id WHERE pessoas.inadimplente = 'N' ORDER BY pessoas.nome ASC;