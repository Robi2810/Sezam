import keycloak from "./Keycloak";
import {jwtDecode} from "jwt-decode";

interface TokenPayload {
    name: string;
    iat: number;
    exp: number;
}

class TokenHolder {
    private static decodedToken: any;
    private static isExpired: boolean;

    static setToken(token: string) {
        if (token === undefined){
            return
        }
        this.decodedToken = jwtDecode(token)
    }

    static getToken() {
        return this.decodedToken;
    }

    static getName(){
        console.log(this.decodedToken)
        if (this.decodedToken === undefined) {
            return ""
        }

        return this.decodedToken.given_name[0] + "" +this.decodedToken.family_name[0]
    }
}

export default TokenHolder;