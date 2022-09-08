const mongoose = require('mongoose')

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
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