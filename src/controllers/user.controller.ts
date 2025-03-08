import { Request, Response } from "express"
import express from 'express';

const signup = (req:Request, res: Response ) => {
    res.send('signup');
}

const signin = (req:Request, res: Response ) => {
    res.json({ msg : 'signin'});
}

const purchases = (req:Request, res: Response ) => {
    res.send('purchases');
}

const makePurchase = (req:Request, res: Response ) => {
    res.send('makePurchase');
}

const courses = (req:Request, res: Response ) => {
    res.send('courses');
}

export {
    signup,
    signin,
    purchases,
    makePurchase,
    courses,
}