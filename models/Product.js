const {Sequelize, DataTypes, Model} = require('sequelize');
const { options } = require('../app');
const {DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);
sequelize.authenticate()
.then(()=> console.log('aa'))
.catch(()=> console.log('aa'));

class Product extends Model{


}
const properties = {
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        // bos deger girilmemesi icin
        primaryKey:true,
        autoIncrement: true, 
        // artisin saglanmasi icin
        field: 'ID'
        // tabloda nasil gözükecegini belirtiyor
    },
    status:{
        type:DataTypes.STRING,
        allowNull:null
    },
    productName:{
        type:DataTypes.STRING,
        allowNull:false,
        field: 'Product Name'
    },
    unitPrice:{
        type:DataTypes.INTEGER,
        allowNull:true,
        defaultValue: 0,
        field:'Unit Price'
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:true,
        field: 'Stock',
        defaultValue:0
    },
    createdAt:{
        type:DataTypes.DATEONLY,
        defaultValue:Sequelize.NOW,
        // defaultValue:Date.now()
        field: 'Created At',
    },
    updatedAt:{
        type:DataTypes.DATEONLY,
        field: 'Updated At',

    },
    deletedAt:{
        type:DataTypes.DATEONLY,
        field: 'Deleted At',
    }
}

const options = {
    sequelize,
    modelName:'Product',
    tableName: 'Products'
    // son satir belirtilmek zorunda degil
}

Product.init(properties, options);

module.exports = Product;