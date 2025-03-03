const jwt = require("jsonwebtoken")

const auth=  async(req,res,callback)=>{
    try{

        const token = req.header("Authorization");
        if(!token)
        {
            return res.status(400).json("invalid token");

        }  
        const actualToken = token.split(" ")[1]
        const SECRETE_KEY = "15141245151";
        const obj = jwt.verify(actualToken,SECRETE_KEY);
        let decodedObject = obj
         req.u = decodedObject; // just making sure the credintilas are getting back again removed also no problem

        callback();

}
     catch(e){
            console.log(e);
     }
}
module.exports= auth;
