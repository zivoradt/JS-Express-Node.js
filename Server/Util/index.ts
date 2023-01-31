import express, { Request, Response, NextFunction } from 'express';

// enable jwt
import jwt from 'jsonwebtoken';

// Import DB.Secret
import * as DBConfig from '../Config/db';

export function UserDisplayName(req: Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}

export function AuthGard(req:Request, res:Response, next:NextFunction):void
{
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

export function GenerateToken(user: UserDocument): string {

    const payload = 
    {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        emailAddress: user.emailAddress
    }

    const jwtOption = 
    {
        expiresIn: 604800 // 1 week
    };

    return jwt.sign(payload, DBConfig.Secret, jwtOption);
};