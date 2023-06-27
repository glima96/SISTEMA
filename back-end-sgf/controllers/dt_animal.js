import Animal from "../models/animalModel.js";

function findAll(req, res) {
  Animal.findAll().then((result) => res.json(result));
}

function findAnimal(req, res) {
  Animal.findByPk(req.params.animal_code).then((result) => res.json(result));
}

function addAnimal(req, res) {
  Animal.create({
    animal_code: req.body.animal_code,
    zona_id: req.body.zona_id,
    prop_cod: req.body.prop_cod,
    p_nucleo: req.body.p_nucleo,
    a_racao: req.body.a_racao,
    a_sexo: req.body.a_sexo,
    a_porte: req.body.a_porte,
    a_peso: req.body.a_peso,
    a_idade: req.body.a_idade,
    a_nasc: req.body.a_nasc,
    a_faixa: req.body.a_faixa,
    a_cor: req.body. a_cor,
    a_comportamental: req.body. a_comportamental,
    a_descritivo: req.body.a_descritivo,
    a_obs: req.body.a_obs,
    a_recinto: req.body. a_recinto,
    a_local: req.body.a_local,
    a_prenhez: req.body.a_prenhez,
    ciic: req.body.ciic,
    id_grupo: req.body.id_grupo,
    id_marcacao: req.body.id_marcacao,
    id_tipo_marcacao: req.body.id_tipo_marcacao
  }).then((result) => res.json(result));
}

async function updateAnimal(req, res) {
  await Animal.update(
    {
    animal_code: req.body.animal_code,
    zona_id: req.body.zona_id,
    prop_cod: req.body.prop_cod,
    p_nucleo: req.body.p_nucleo,
    a_racao: req.body.a_racao,
    a_sexo: req.body.a_sexo,
    a_porte: req.body.a_porte,
    a_peso: req.body.a_peso,
    a_idade: req.body.a_idade,
    a_nasc: req.body.a_nasc,
    a_faixa: req.body.a_faixa,
    a_cor: req.body. a_cor,
    a_comportamental: req.body. a_comportamental,
    a_descritivo: req.body.a_descritivo,
    a_obs: req.body.a_obs,
    a_recinto: req.body. a_recinto,
    a_local: req.body.a_local,
    a_prenhez: req.body.a_prenhez,
    ciic: req.body.ciic,
    id_grupo: req.body.id_grupo,
    id_marcacao: req.body.id_marcacao,
    id_tipo_marcacao: req.body.id_tipo_marcacao
    },
    {
      where: {
        animal_code: req.params.animal_code,
      },
    }
  );

  Animal.findByPk(req.params.animal_code).then((result) => res.json(result));
}

async function deleteAnimal(req, res) {
  await Animal.destroy({
    where: {
      animal_code: req.params.animal_code,
    },
  });

  Animal.findAll().then((result) => res.json(result));
}

function dadosAtendimento(req, res) {
  Animal.findAll().then((result) => res.json(result));
}


export default { findAll, addAnimal, findAnimal, updateAnimal, deleteAnimal};
