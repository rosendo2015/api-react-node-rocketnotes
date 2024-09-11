const { compare } = require("bcryptjs");
const knex = require("../knex");
const AppError = require("../utils/AppError")

class SessionsController{
async create(request, response){
    const {email, password} = request.body

    const user = await knex("users").where({email}).first();

    if(!user){
        throw new AppError("E-Mail e/ou Senha incorretos!", 401)
    }
    const passwordMatched = await compare(password, user.password)
   
    if(!passwordMatched){
        throw new AppError("E-Mail e/ou Senha incorretos!", 401)
    }

    return response.json(user)
}
}

module.exports = SessionsController;