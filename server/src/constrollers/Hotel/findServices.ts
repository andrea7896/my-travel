import {Request,Response} from 'express';
import con from '../../connection/connection'

export default (req:Request,res:Response) => {
        con.query(`SELECT * FROM stars WHERE idRate = ${req.params.id}`, function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err){throw err};
          // if there is no error, you have the result
          if(result.length == 0){
            return res.status(404).send(err);
          }else{
          res.status(200).send(result);
          }
        });
};