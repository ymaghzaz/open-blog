
export class userRegisterInfos {
    firstName: string;
    password: string;
    lastName: string;
    username: string;
    userID: string;
    email: string;
    address: string;
    address2: string;
    city: string;
    zipCode: number;
    phoneNumbre: string;
    registerStep: string;
    constructor(object?: any) {

        this.firstName = object && object.firstName || '';
        this.lastName = object && object.lastName || '';
        this.userID = object && object.userID || '';
        this.username = object && object.username || '';
        this.email = object && object.email || '';
        this.address = object && object.address || '';
        this.address2 = object && object.address2 || '';
        this.city = object && object.city || '';
        this.zipCode = object && object.zipCode || '';
        this.phoneNumbre = object && object.phoneNumbre || '';
        this.registerStep = object && object.registerStep || '';
    }
}