import mysql from 'mysql';
import {constants} from '../config/constants';

const con = mysql.createConnection({
        host: constants.host,
        user: constants.user,
        password: constants.password,
        database: constants.database,
        multipleStatements:constants.multipleStatements
      });

      con.connect((err) => {
        if(err){
            console.log("No hay conexion");
        }else{
            console.log("Conectados");
        }
      });
export default con;