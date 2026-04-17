import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'workly_peoplecore_secret', // use a chave do .env. se não encontrar, usa essa chave padrão.
        });
    }

    async validate(payload: any) {
        return {
            id: payload.sub,
            usuario: payload.usuario
        };
    }

}