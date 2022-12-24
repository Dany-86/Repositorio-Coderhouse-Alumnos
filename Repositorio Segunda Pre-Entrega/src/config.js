// El archivo config va a tener la configuracion para la conexion a moongose, 
//  esta configuracion de conexion sera utilizada en la clase contenedor

export default {
    mongodb: {
        url: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    }
}
