import { Request, Response } from 'express';

const signup = (req: Request, res: Response) => {
  res.send('signup');
};

const signin = (req: Request, res: Response) => {
  res.json({ msg: 'signin' });
};

const purchases = (req: Request, res: Response) => {
  res.send('purchases');
};

const makePurchase = (req: Request, res: Response) => {
  res.send('makePurchase');
};


export { signup, signin, purchases, makePurchase };
