const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10, // aqui colocamos um limite de conexão que o usuário irá ficar logado.
  host: "localhost", // host do banco de dados
  user: "root", // usuario do banco de dados
  password: "", // senha para acessar nosso banco de dados
  database: "nodemysql2", // Banco de dados que estamos acessando.
});

module.exports = pool;
