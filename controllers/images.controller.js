const fs = require ('fs')
const pathAct = './images/cities/activities/' ;
const pathHead = './images/cities/headers/';
const pathUser = './images/users/';


const getCityHeader = (req,res)=>{
    fs.readFile(pathHead + req.params.cityID,(err,data)=>{
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}

const getActivityImages = (req,res)=>{
    
    fs.readFile(pathAct + req.params.activID,(err,data)=>{
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}


const getUserImage = (req,res)=>{
    
    fs.readFile(pathUser + req.params.userName,(err,data)=>{
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}

// NO TE OLVIDES DE SACAR LA EXTENSION DEL ARCHIVO CUANDO TENGAS EL FRONT!!!

module.exports = {
    getCityHeader,
    getActivityImages,
    getUserImage
}




