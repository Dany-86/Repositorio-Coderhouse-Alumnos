// Importamos la clase contenedor (de aqui se crean los DAOs)
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

// SE CREA EL DAO DE CARRITOS:
// Esta clase va a heredar de la contenedor
// Heredar significa que va a tener los mismo metodos y atributos y puede utilizar su constructor
// Al heredar la clase contenedor seria la clase padre y esta clase seria la hija
// Para indicarle a Javascript que una clase hereda de otra se utiliza la palabra reservada "extends" seguido del nombre de la clase padre
class CarritosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('carritos', {  
            productos: { type: [], required: true } 
        })
            // la palabra super significa que se utilizara el construtor de la clase padre (clase contenedor),
                                                    // por eso a dicho constructor se le envian dos parametros:
                                                    // 1. El nombre de la collecion: 'carritos'
                                                    // 2- La configuracion de esquema (schema), el cual tendra la propiedad "productos"
    }

    // Ademas de heredar los metodos de la clase conetenedor este DAO nesesitara un metodo adicional para crear un carrito vacio:
    async save(carrito = { productos: [] }) {
        return super.save(carrito)
    }
}

// Exportamos el DAO de carritos para luego utilizarlo a nivel de rutas, es decir, dentro de los endpoints
export default CarritosDaoMongoDb
