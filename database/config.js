const mongoose = require('mongoose')

const dbConnection = async () => {

    try {

        await mongoose.connect('mongodb+srv://kevin_om:UbdGf0MLa0Nwun3q@cluster0.pi1bqz9.mongodb.net/cafeDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('BD en linea');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inciar la base de datos');
    }

}

module.exports = {
    dbConnection
}