import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

//TODO: separarlo en helpers
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

//importacion dinamica
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando ${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
