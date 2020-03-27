import {Request,Response} from 'express';
import con from '../../connection/connection'
import bodyParser from 'body-parser';

export default (req:Request,res:Response) => {
        con.query(`SELECT hotel.*,cities.stateName,cities.cityName,stars.*,category.* FROM hotel INNER JOIN cities 
        ON hotel.idCity = cities.idCity INNER JOIN stars ON hotel.rate = stars.idRate INNER JOIN category ON hotel.idCategory = category.idCategory`, function (err, result, fields) {
          if (err){throw err};
          if(result.length == 0){
            return res.status(404).send(err);
          }else{
          res.status(200).send(result);
          }
        });
};