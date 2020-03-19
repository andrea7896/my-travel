import express, { Application } from "express";
import { constants } from "./src/config/constants"
import entryPoint from "./src/app";
const app: Application = express();
app.use(entryPoint);
app.use(express.json());

app.listen(constants.port, () => console.log(`Servidor iniciado en ${ constants.port }`) );

