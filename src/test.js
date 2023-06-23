import axios from "axios";

/*
fetch("https://randomuser.me/api/")
.then((response)=>{
      response.json().then((jsonResponse)=>{
        console.log(jsonResponse);
      })
})
.catch((error)=>{}
)
*/
/*
axios("https://randomuser.me/api/")
.then((reponse)=>{
    console.log(reponse.data)
    console.log("End of code !");
})
.catch((error)=>{});
*/
 
async function req (){
    try
    {
      const jsonResponse = await axios("https://randomuser.me/api");
      console.log("Response ", jsonResponse.data);
    }
    catch(error){
           console.log("Error : ",error.message);
    }
}

req();
console.log("End of code !");