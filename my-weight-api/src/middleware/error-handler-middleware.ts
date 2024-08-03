import { NextFunction, Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class ErrorHandlerMiddleware {
    handleError(err: Error, req: Request, res: Response, next: NextFunction) {
        res.status(500).json(
            {message: err.message || "Internal Server Error"}
        )
    }
}