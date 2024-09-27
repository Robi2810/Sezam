import Type from "./Type";

class DetailedInfo {
    login: string;
    password: string;
    type: Type;
    endAt: Date;



    constructor(login: string, password: string, type: Type, endAt: Date) {
        this.login = login;
        this.password = password;
        this.type = type
        this.endAt = endAt
    }
}

export default DetailedInfo;