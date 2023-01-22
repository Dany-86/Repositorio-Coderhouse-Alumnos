// importaciones de moongose y congiguracion
import mongoose from 'mongoose'
import config from '../../database/mongoConnection.js'

await mongoose.connect(config.mongodb.url, config.mongodb.options)

class ContenedorUsuarios {
    constructor(usuario, usuarioSchema) {
    this.coleccion = mongoose.model(usuario, usuarioSchema)
}
    async findOne(){
        try {
            let buscarUsuario = await this.coleccion.findOne({ username })
            return buscarUsuario
        } catch (error){
            throw new Error ("error")
        }
    }

    // REALIZAR: contenedorUsuarios tambien debe poder guardar un usuario, por lo que habra que crear el metodo para poder realizar esa accion

}

export default ContenedorUsuarios