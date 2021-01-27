import mongoose from 'mongoose';
import { SchtroumpfSchema} from '../models/SchtroumpfModel';

const Schtroumpf=mongoose.model('Schtroumpf',SchtroumpfSchema);
export const addNewSchtroumpf=(req,res)=>{
    let newSchtroumpf=new Schtroumpf(req.body);
    newSchtroumpf.save((err,schtroumpf)=>{
        if(err){
            res.send(err)
        }
        res.json(schtroumpf);
    })
}

export const getSchtroumpfs=(req,res)=>{

    Schtroumpf.find({},(err,schtroumpf)=>{
        if(err){
            res.send(err)
        }
        res.json(schtroumpf);
    })
}

export const getSchtroumpfwithID=(req,res)=>{

    Schtroumpf.findById(req.params.schtroumpfId,(err,schtroumpf)=>{
        if(err){
            res.send(err)
        }
        res.json(schtroumpf);
    })
}

export const updateSchtroumpf=(req,res)=>{

    Schtroumpf.findOneAndUpdate({_id:req.params.schtroumpfId},req.body,{new:true},(err,schtroumpf)=>{
        if(err){
            res.send(err)
        }
        res.json(schtroumpf);
    })
}

export const deleteSchtroumpf=(req,res)=>{

    Schtroumpf.remove({_id:req.params.schtroumpfId},(err,schtroumpf)=>{
        if(err){
            res.send(err)
        }
        res.json({message:'Schtroumpf effacé avec succés'});
    })
}
