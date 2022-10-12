const express= require('express')
const { AddDemande, getDemandes,getMyDemands, UpDateDemands, DeleteDemandes } = require('../Controllers/DemandeControlles')
const { AuthMiddleWare } = require('../Middlewares/AuthMiddleware')
const router = express.Router()


router.post('/',AuthMiddleWare,AddDemande)
router.get('/',AuthMiddleWare,getDemandes)
router.get('/mydemands',AuthMiddleWare,getMyDemands)
router.put('/:id',AuthMiddleWare,UpDateDemands)
router.delete('/:id',AuthMiddleWare,DeleteDemandes)


module.exports = router