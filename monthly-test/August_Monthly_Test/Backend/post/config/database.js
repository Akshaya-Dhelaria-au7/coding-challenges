const Sequelize = require('sequelize')

const database = new Sequelize(
    "dqwliarb",
    "dqwliarb",
    "XdQZIARy34Xi_SNecm9kgVNhpOIFNPV2",
    {
        host:'rosie.db.elephantsql.com',
        dialect:'postgres'
    }
)

database.sync({
    force:false
})

module.exports = database