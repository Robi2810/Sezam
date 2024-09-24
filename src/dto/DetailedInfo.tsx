import Type from "./Type";

class DetailedInfo {
    login: string;
    password: string;
    type: Type;

    constructor(login: string, password: string, type: Type) {
        this.login = login;
        this.password = password;
        this.type = type
    }
}

export default DetailedInfo;