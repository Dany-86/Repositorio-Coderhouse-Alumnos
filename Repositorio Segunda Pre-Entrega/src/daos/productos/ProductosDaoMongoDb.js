// Importamos la clase contenedor (de aqui se crean los DAOs)
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

// SE CREA EL DAO DE PRODUCTOS:
// Esta clase va a heredar de la clase contenedor
// Heredar significa que va a tener los mismo metodos y atributos y puede utilizar su constructor
// Al heredar la clase contenedor seria la clase padre y esta clase seria la hija
// Para indicarle a Javascript que una clase hereda de otra se utiliza la palabra reservada "extends" seguido del nombre de la clase padre
class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('productos', {
            title: { type: String, required: true }, 
            price: { type: Number, required: true },
            thumbnail: { type: String, required: true },
        })
        // la palabra super significa que se utilizara el construtor de la clase padre (clase contenedor),
                                                    // por eso a dicho constructor se le envian dos parametros:
                                                    // 1. El nombre de la collecion: 'productos'
                                                    // 2- La configuracion de esquema (schema), el cual tendra "title", "price" y "thumbnail"
    }
}

// Exportamos el DAO de productos para luego utilizarlo a nivel de rutas, es decir, dentro de los endpoints
export default ProductosDaoMongoDb
