// importamos el modulo de mongoose para utilizarlo y el archivo config.js con los datos para la conexion
import mongoose from 'mongoose'
import config from '../config.js'

// El metodo connect es el metodo que se usa para conectarse a la base de datos con mongoose
// se le pasan 2 parametros: 1- la url, 2- options. Ambos parametros son obtenidos del archivo config.js que creamos
await mongoose.connect(config.mongodb.url, config.mongodb.options)

// Clase contenedor, es la clase base, luego se crearan dos clases derivadas de esta, las cuales seran los DAOs
class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema) // definimos el nombre de la collecion y el modelo: 
                                                                    // en el DAO de productos la colleccion sera 'productos'
                                                                    // en el DAO de carritos la colleccion sera 'carritos'
                                                                    // los esquemas (schemas) tambien seran definidos en los DAOs al momento de instanciarse
    }


    // METODOS DE LA CLASE CONTENEDOR:
    // Estos metodos se realizan teniendo en cuanta la sintaxis de mongoose para acceder a la base de datos mongo y operar
    // tener en cuenta que los id mongo los llama "_id"
    async get(id) {
        try {
            const docs = await this.coleccion.find({ '_id': id }, { __v: 0 }) // el segundo parametro es para que no traiga el __v:0
            return docs[0]
        } catch (error) {
            throw new Error(`Error al listar por id: ${error}`)
        }
    }

    async getAll() {
        try {
            let docs = await this.coleccion.find({}, { __v: 0 })
            return docs
        } catch (error) {
            throw new Error(`Error al listar todo: ${error}`)
        }
    }

    async save(nuevoElemento) {
        try {
            let doc = await this.coleccion.create(nuevoElemento);
            return doc
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async update(nuevoElemento) {
        try {
            await this.coleccion.replaceOne({ '_id': nuevoElemento._id }, nuevoElemento)
            return nuevoElemento
        } catch (error) {
            throw new Error(`Error al actualizar: ${error}`)
        }
    }

    async deleteById(id) {
        try {
            await this.coleccion.deleteOne({ '_id': id })
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async deleteAll() {
        try {
            await this.coleccion.deleteMany({})
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }
}

// Exportamos el contenedor para luego crear las clases derivadas llamadas DAOs y utilizar todos estos metodos con esas clases
export default ContenedorMongoDb