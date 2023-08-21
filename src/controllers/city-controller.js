const { CityServices } = require("../services/index");

const cityServices = new CityServices();


// POST -> /city
const create = async (req, res) => {

    try {
        const city = await cityServices.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        })
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }

}
// DELETE -> /city/:id
const destroy = async (req, res) => {

    try {
            const response = await cityServices.deleteCity(req.params.id);
            res.status(200).json({
                data: response,
                success: true,
                message: "Successfully deleted a city",
                err: {}
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    }

}

// Patch -> /city/:id && data -> req.body
const update = async (req, res) => {
    try {
            const city= await cityServices.updateCity(req.params.id, req.body);
            res.status(201).json({
                data : city,
                success: true,
                message: "Successfully updated a city",
                err: {}
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Not able to update a city",
            err: error
        })
    }
}


// GET -> /city/:id
const get = async (req, res) => {
    try {
            const city= await cityServices.getCity(req.params.id);

            if(city!=null)
            {
                return res.status(201).json({
                    data : city,
                    success : true,
                    message : "Successfully get a city"
                }) 
            }
            else
            {
                return res.status(404).json({
                    data : city,
                    success : true,
                    message : "City not found"
                })
            }

            
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Not able to get a city",
            err: error
        })
    }
}


module.exports ={
    create,
    destroy,
    update,
    get
}