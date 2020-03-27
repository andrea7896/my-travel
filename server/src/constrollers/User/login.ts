import {Request,Response} from 'express';
import con from '../../connection/connection'
import bodyParser from 'body-parser';

export default (req:Request,res:Response) => {
        con.query(`SELECT * FROM users WHERE (password = "${req.body.password}") AND (email = "${req.body.email}");`, function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          // if there is no error, you have the result
          if(result.length == 0){
             res.status(404).send(result);
          }else{
          res.status(200).send(result);
          }
        });
};