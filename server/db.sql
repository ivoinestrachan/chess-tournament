  CREATE TABLE information (
    id BIGSERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
  );


INSERT INTO information ( name, email) values ( 'John', 'test@gmail.com');