const express = require("express");
const app = express();

app.get("/users", (request, response)=>{
    const {id, user} = request.query
    response.send(`
        Id da mensagem: ${id}
        usuário: ${user}
        `)
})

const PORT = 3333;

app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}`));
