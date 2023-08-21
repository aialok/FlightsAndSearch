const express=require('express');
const CityController=require('../../controllers/city-controller');

const router=express.Router();

router.get('/city/:id', CityController.get);
router.post('/city/', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id',CityController.update);

module.exports=router;




