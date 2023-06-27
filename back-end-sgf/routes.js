import express from "express";
import animal from "./controllers/dt_animal.js";
import marcacao from "./controllers/dt_marcacao.js";


const routes = express.Router();

routes.get("/dt_animal", animal.findAll);
routes.post("/dt_animal", animal.addAnimal);
routes.get("/dt_animal/:animal_code", animal.findAnimal);
routes.put("/dt_animal/:animal_code", animal.updateAnimal);
routes.delete("/dt_animal/:animal_code", animal.deleteAnimal);



routes.get("/dt_marcacao", marcacao.findAll);
routes.post("/dt_marcacao", marcacao.addMarcacao);
routes.get("/dt_marcacao/:id", marcacao.findMarcacao);
routes.put("/dt_marcacao/:id", marcacao.updateMarcacao);
routes.delete("/dt_marcacao/:id", marcacao.deleteMarcacao);






export { routes as default };