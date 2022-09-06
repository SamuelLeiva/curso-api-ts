import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Esto lo ven las personas con sesion / JWT",
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getItems };
