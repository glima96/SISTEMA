import Marcacao from "../models/marcacaoModel.js";

function findAll(req, res) {
  Marcacao.findAll().then((result) => res.json(result));
}

function findMarcacao(req, res) {
  Marcacao.findByPk(req.params.id).then((result) => res.json(result));
}

function addMarcacao(req, res) {
  Marcacao.create({
   
  }).then((result) => res.json(result));
}

async function updateMarcacao(req, res) {
  await Marcacao.update(
    {
   
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  Marcacao.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteMarcacao(req, res) {
  await Marcacao.destroy({
    where: {
      id: req.params.id,
    },
  });

  Marcacao.findAll().then((result) => res.json(result));
}











export default { findAll, addMarcacao, findMarcacao, updateMarcacao, deleteMarcacao };
