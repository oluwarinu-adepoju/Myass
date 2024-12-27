import { Request, Response } from 'express';

export const getSkills = (req: Request, res: Response) => {
  res.send('Get skills');
};

export const getInterests = (req: Request, res: Response) => {
  res.send('Get interests');
};

export const getPersonality = (req: Request, res: Response) => {
  res.send('Get personality');
};