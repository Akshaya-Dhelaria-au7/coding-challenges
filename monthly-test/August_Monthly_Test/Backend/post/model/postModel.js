const Sequelize = require('sequelize')
const database = require('../config/database')

const userPost = database.define('posts',{
    post_id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    },
    user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
            model:'users',
            key:'uuid'
        }
    },
    likes:{
        type:Sequelize.INTEGER,
        defaultValue:0,
        required:false
    },
    comments:{
        type:Sequelize.STRING,
        required:false
    }
},
    {
       timestamp:true
    }
)

userPost.associate = (models) => {
    userPost.belongsTo(models.signup)
}

module.exports = userPost