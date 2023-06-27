import { Sequelize } from "sequelize";
import db from "../db.js";
import dt_animal from "../controllers/dt_animal.js";
import marcacao from "./marcacaoModel.js"


export default db.define("dt_animal",  {
    animal_code: {
        type: Sequelize.STRING,
        primaryKey:true,
    },
    zona_id: {
        type: Sequelize.INTEGER
        
    },
    prop_cod: {
        type: Sequelize.STRING
    },
    p_nucleo: {
        type: Sequelize.STRING,
        
    },
    a_nome: {
        type: Sequelize.STRING
    },
    a_raca: {
        type: Sequelize.STRING
    },
    a_sexo: {
        type: Sequelize.STRING
    },
    a_porte: {
        type: Sequelize.STRING
    },
    a_peso: {
        type: Sequelize.STRING
    },
    a_idade: {
        type: Sequelize.STRING
    },
    a_nasc: {
        type: Sequelize.STRING
    },
    a_faixa: {
        type: Sequelize.STRING
    },
    a_cor: {
        type: Sequelize.STRING
    },
    a_comportamental: {
        type: Sequelize.STRING
    },
    a_descritivo: {
        type: Sequelize.STRING
    },
    a_obs: {
        type: Sequelize.STRING
    },
    a_recinto: {
        type: Sequelize.STRING
    },
    a_local: {
        type: Sequelize.STRING
    },
    a_prenhez: {
        type: Sequelize.STRING
    },
    ciic: {
        type: Sequelize.STRING
    },
    id_grupo: {
        type: Sequelize.STRING
    },
    id_marcacao: {
        type: Sequelize.INTEGER
    },
    id_tipo_marcacao: {
        type: Sequelize.INTEGER
    }
    
    
    
}, { freezeTableName: true },{

    this.associate=function


});


