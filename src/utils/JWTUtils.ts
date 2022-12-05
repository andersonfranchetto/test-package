import { verify, sign } from "jsonwebtoken";
import { User } from "../models/User";
import { UserToken } from "../models/UserToken";

export abstract class JWTUtils {
    static generateToken = async (user: User) => {

        const userToken: UserToken = {
            id: user.id,
            email: user.email,
            name: user.name,
            subdomain: "public"
        }

        return sign(JSON.parse(JSON.stringify(userToken)),
            process.env.GLOBAL_SALT_KEY!,
            { expiresIn: "1d" });
    }

    static decodeToken = (token: string) => {
        return verify(token, process.env.GLOBAL_SALT_KEY!);
    }
}
