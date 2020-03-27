import {Request,Response} from 'express';
import con from '../../connection/connection'
export default (req:Request,res:Response) => {
        const idBooking = req.body.params.idBooking;
        con.query(`UPDATE booking SET deleted_at=CURRENT_TIMESTAMP,active=0 WHERE idBooking = ${idBooking};`, function (err, result, fields) {
          if (err){
              throw err
            }else{
                con.query(`SELECT booking.*,hotel.*,cities.* FROM booking INNER JOIN hotel ON booking.idHotel = hotel.idHotel
                INNER JOIN cities ON hotel.idCity = cities.idCity
                WHERE booking.active = 1;`,function(err,result,fields){
                    if(err){
                        throw err
                    }else{
                        res.status(200).send(result);
                    }
                });
                
            }
        });
};