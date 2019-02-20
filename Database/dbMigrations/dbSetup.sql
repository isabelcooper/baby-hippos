CREATE TABLE users (
    id SERIAL,
    email VARCHAR(280),
    password VARCHAR(60),
    PRIMARY KEY (id));


    CREATE TABLE properties (
      id SERIAL,
      name VARCHAR(280),
      description VARCHAR(280),
      host int,
      PRIMARY KEY (id),
      FOREIGN KEY (host) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE);


      CREATE TABLE bookin (
        id SERIAL,
        name VARCHAR(280),
        description VARCHAR(280),
        host int,
        PRIMARY KEY (id),
        FOREIGN KEY (host) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE);
