
const fs = require ('fs')

const getCityHeader = (req,res)=>{
    fs.readFile('./images/cities/headers/'+ req.params.cityID,(err,data)=>{
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}

const getActivityImages = (req,res)=>{
    fs.readFile('./images/cities/activities/'+ req.params.activID,(err,data)=>{
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();
    })
}


module.exports = {
    getCityHeader,
    getActivityImages
}




