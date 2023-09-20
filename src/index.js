import express from 'express'
import { createPool } from 'mysql2/promise'
//para poder leer las variables de entorno, llamamos a dotenv
import {config} from 'dotenv'

//metodo config de dotenv para leer .env
config()

const app = express();


// con este createPool nos conectamos a la BBDD:
const pool = createPool({
  host: process.env.MYSQLDB_HOST, // como my app esta dockerizada, ya no puedo usar localhost, uso el nombre del contenedor.
  user: 'root',
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  port: process.env.MYSQLDB_DOCKER_PORT //Como ya no estamos en localhost, tenemos que poner el puerto por defecto
})


app.get('/', (req, res)=> {
  res.send('Hello world')
})

app.get('/ping', async (req, res)=> {
  const result = await pool.query('SELECT NOW()')
  res.json(result[0]) 
})

app.listen(process.env.NODE_DOCKER_PORT)
console.log('Server on port ', process.env.NODE_DOCKER_PORT)