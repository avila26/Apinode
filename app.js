import express from 'express';
import { sequelize1 } from './db/conexion.js'
import {routerUser} from './router/UserRouter.js';
import {routerType}  from './router/TypesUserRoute.js'; 
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/type', routerType);
app.use('/user', routerUser);
app.use(cors());


const conexion = async () =>{
    try {
      await sequelize1.authenticate();
      await sequelize1.sync({ force: false}); //
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
      })
  } catch (error) {
      console.error(`Error ${error}`);
  }
}
    conexion(); //Llamada del metodo de await
  
