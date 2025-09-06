import { Injectable } from "@nestjs/common";
import { Request } from "express";

function cookieExtractor(req: Request) {
    return req?.cookies?.['access_token'] || null;
}

@Injectable()
export class JwtStrategy {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken([
                cookieExtractor
                ExtractJtw.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_ACESS_SECRET,
        });
    }
}