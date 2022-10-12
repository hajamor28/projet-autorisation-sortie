const Demande = require('../Modles/DemandeSchema')




const AddDemande = async(req,res)=>{

    try {
        const newDemande = await Demande.create({...req.body,owner:req.userID})
        res.json({newDemande,msg:'Demand has been registered successfully'})
    } catch (error) {
         res.status(501).json({message:error})
    }
    }

    const getDemandes = async(req,res)=>{

        try {
            const AllDemandes = await Demande.find({}).populate('owner')
            res.json(AllDemandes)
        } catch (error) {
             res.status(501).json({message:error})
        }
        }

        const DeleteDemandes= async(req,res)=>{
            try {
                const DeleteDemandes = await Demande.findByIdAndDelete(req.params.id)
                res.json({DeleteDemandes, msg: 'the Demande has been deleted'})
            } catch (error) {
                res.status(501).json({message: error})
                
            }
        }

        const getMyDemands = async(req,res)=>{
            try {
                const mydemands = await Demande.find({owner:req.userID}).populate('owner')
                res.json(mydemands)
                
            } catch (error) {
                res.status(501).json({message: error})
            }
        }

        const UpDateDemands = async(req,res)=>{
              try {
                const updatedDemand = await Demande.findByIdAndUpdate(req.params.id,req.body,{new:true})
                res.json({updatedDemand,msg:'updated successfully'})
              } catch (error) {
                res.status(501).json({message: error})

              }
        }

         
    module.exports = {AddDemande,getDemandes,DeleteDemandes,getMyDemands,UpDateDemands}