import {Request,Response} from "express";
import con from '../../connection/connection'
export default (req:Request,res:Response) => {
    const city = req.query.city;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    con.query(`SELECT hotel.*,cities.stateName,cities.cityName FROM hotel INNER JOIN cities 
        ON hotel.idCity = cities.idCity WHERE UPPER(cities.cityName) = "${city}" AND hotel.start_date = "${startDate}" AND hotel.end_date = "${endDate}";`,
        function(err,result,fields){
            if(err) throw err;
            if(result.length == 0){
                res.status(404).send(result);
             }else{
             res.status(200).send(result);
             }
        });
};

