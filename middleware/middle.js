const AddDate=(req,res,next)=>{
 const date=new Date();
  req.date = date;
const heure = date.getHours();
if(heure>=9 && heure<=13){
    res.send("opened");
}
next();


}

module.exports= AddDate