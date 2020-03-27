import {Request,Response} from 'express';
import con from '../../connection/connection'
import bodyParser from 'body-parser';

export default (req:Request,res:Response) => {
    con.query(`SELECT booking.*,hotel.*,cities.* FROM booking INNER JOIN hotel ON booking.idHotel = hotel.idHotel
    INNER JOIN cities ON hotel.idCity = cities.idCity
    WHERE booking.active = 1;`,function (err, result, fields) {
        if (err){throw err};
        if(result.length == 0){
          return res.status(404).send(err);
        }else{
        res.status(200).send(result);
        }
      });
};