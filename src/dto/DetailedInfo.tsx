import Type from "./Type";

class DetailedInfo {
    login: string;
    password: string;
    type: Type;
    endAt: Date;
    redirectUrl: string;


    constructor(login: string, password: string, type: Type, endAt: Date, redirectUrl: string) {
        this.login = login;
        this.password = password;
        this.type = type
        this.endAt = endAt
        this.redirectUrl = redirectUrl
    }
}

export default DetailedInfo;