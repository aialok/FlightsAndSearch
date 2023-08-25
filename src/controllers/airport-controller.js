const {AirportServices} = require("../services/index");


const airportServices= new AirportServices();

const create= async (req,res)=>{
    
    try {
           const airport= await airportServices.createAirport(req.body); 
           return res.status(201).json({
            data: airport,
            success : true,
            message : "Successfully created Airport",
            err : {}
           })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Not able to create airport",
            err: error
        })
    }

}

const destroy= async (req,res)=>{
    
    try {
           const response= await airportServices.deleteAirport(req.params.id); 
           return res.status(201).json({
            data: response,
            success : true,
            message : "Successfully deleted Airport",
            err : {}
           })
    } catch (error) {
        return  res.status(500).json({
            success: false,
            message: "Not able to delete airport",
            err: error
        })
    }

}

const update= async (req,res)=>{
    try {
        const airport= await airportServices.updateAirport(req.params.id, req.body);

        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully updated the airport",
            err : {}
        })

    } catch (error) {
       return res.status(500).json({
            success : false,
            message : "Not able to update a airport",
            err : error
        })
    }
}

const getAllAirport= async (req,res)=>{
        try {
            const airport= await airportServices.getAllAirports(req.query);

            if (airport != null) {
                return res.status(201).json({
                    data: airport,
                    success: true,
                    message: "Successfully get a Airport"
                })
            }
            else {
                return res.status(404).json({
                    data: airport,
                    success: false,
                    message: "Airport not found"
                })
            }

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Not able to fetch filter Airport",
                err: error
            })
        }
}

const get = async (req, res) => {
    try {
        const airport = await airportServices.getAirport(req.params.id);

        if (airport != null) {
            return res.status(201).json({
                data: airport,
                success: true,
                message: "Successfully get a airport"
            })
        }
        else {
            return res.status(404).json({
                data: Airport,
                success: true,
                message: "Airport not found"
            })
        }
    } catch (error) {
       return  res.status(500).json({
            success: false,
            message: "Not able to get a airport",
            err: error
        })
    }
}

module.exports={
    create,
    destroy,
    update,
    getAllAirport,
    get
}
