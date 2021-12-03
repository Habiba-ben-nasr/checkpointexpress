const express= require ('express');
const app= express();

app.use(express.json());
app.use(express.static('public'))
let day = new Date().getDay()
let hours= new Date().getHours()

app.use(
    (addRequestTime= (req,res,next)=>{
        if (hours > 9 && hours <17 && day>0 && day<6){
            next();
        }else{
            res.sendFile(__dirname + "/public/outOfService.html")
        }
    }))




app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
  });
  
  app.get("/Contact", (req, res) => {
    res.sendFile(__dirname + "/public/contactUs.html");
  });
  
  app.get("/Services", (req, res) => {
    res.sendFile(__dirname + "/public/ourServices.html");
  });
  

const port = 5000;






app.listen(port, ()=> {console.log(`server is running on the port ${port}`)});