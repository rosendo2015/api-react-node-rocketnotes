const knex = require("../knex");

class SessionsController{
async create(request, response){
    const {email, password} = request.body

    const user = await knex


    return response.json({email, password})
}
}

module.exports = SessionsController;