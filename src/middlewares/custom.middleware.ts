import { NextFunction, Response } from 'express';
import { RequestWithSession } from '@/interfaces/auth.interface';

const customMiddleware = (req: RequestWithSession, res: Response, next: NextFunction) => {
  if (req.session && (req.url.startsWith('/pub/proxy') || req.url.startsWith('/api/proxy'))) {
    return next();
  }
  res.status(400).json({ message: 'Unauthorized' });
};

export default customMiddleware;
