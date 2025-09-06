import { Injectable } from "@nestjs/common";


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