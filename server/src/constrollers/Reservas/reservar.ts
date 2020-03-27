import {Request,Response} from 'express';
import con from '../../connection/connection'

export default (req:Request,res:Response) => {
        const idHotel = req.body.params.idHotel;
        const username = req.body.params.username;
        const firstName = req.body.params.firstName;
        const lastName = req.body.params.lastName;
        const email = req.body.params.email;
        const hotelDate = req.body.params.hotel_Date;

        con.query(`INSERT INTO booking(idHotel,username,firstName,lastName,email,hotel_date,active) 
        VALUES (${idHotel},"${username}","${firstName}","${lastName}","${email}","${hotelDate}",1)`, function (err, result, fields) {
          if (err){
              throw err
            }else{
                res.status(201).send(result);
            }
        });
};