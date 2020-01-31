var axios = require("axios")

axios.get("https://api.github.com/users/anamlcl").then(function(resposta){
    console.log(resposta.data);
}).catch(function(error){
    if(error){
        console.log("404 não encontrado.");
    }
})