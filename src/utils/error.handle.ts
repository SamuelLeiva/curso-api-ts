//manejador de errores. puede ser util para luego
// meterlo en una db u otro lugar

import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log("errorRaw", errorRaw);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
