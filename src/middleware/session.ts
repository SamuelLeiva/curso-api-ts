import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = (await verifyToken(`${jwt}`)) as { id: string };
    console.log("isUser", isUser);
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    console.log({ error });
    res.status(400);
    res.send("NOT_VALID_SESSION");
  }
};

export { checkJwt };
