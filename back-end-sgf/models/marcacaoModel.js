import { Sequelize } from "sequelize";
import db from "../db.js";



export default db.define("dt_marcacao",  {
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
    },
    marcacao01: {
        type: Sequelize.STRING
        
    },
    marcacao02: {
        type: Sequelize.STRING
        
    },
    marcacao03: {
        type: Sequelize.STRING
        
    },
   
    
    
    
}, { freezeTableName: true })

