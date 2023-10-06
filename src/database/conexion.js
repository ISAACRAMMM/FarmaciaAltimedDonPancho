import pkg from "pg";

const { Pool } = pkg;

const configDB = {
  user: "postgres",
  host: "localhost",
  password: "1234",
  database: "Farmacia_altimed",
  port: "5432",
};

const pool = new Pool(configDB);

export default pool
