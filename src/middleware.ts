import { Request, Response, NextFunction } from 'express';

export class Validation {
    validateApiKey(req: Request, res: Response, next: NextFunction): void {
        const apiKey = req.headers.apikey;
    
        if (apiKey && apiKey === '123') {
            next();
        } else {
            res.status(401).send('Invalid Key');
        }
    }
}