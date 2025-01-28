const { Client } = require("pg")


const client = new Client({
    host: 'localhost',         // Ma'lumotlar bazasi serveri
    user: 'abbasuz2_user',     // Foydalanuvchi nomi
    password: 'NVLVu45HnZ.u',  // Parol
    database: 'abbasuz2_sql',  // Ma'lumotlar bazasi nomi
});

  
client.connect(err => {
    if(err) {
        console.log("Connect Error");
    } else {
        console.log("Connect To PostgreSql");
    }
})

module.exports = client