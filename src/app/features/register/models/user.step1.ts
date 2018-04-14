
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
    picture: string;
    verified_email: boolean;
    gender: string;
    constructor(userProfile?: any) {
        this.firstName = userProfile && userProfile.firstName || '';
        this.lastName = userProfile && userProfile.lastName || '';
        this.userID = userProfile && userProfile.userID || '';
        this.username = userProfile && userProfile.username || '';
        this.email = userProfile && userProfile.email || '';
        this.address = userProfile && userProfile.address || '';
        this.address2 = userProfile && userProfile.address2 || '';
        this.city = userProfile && userProfile.city || '';
        this.zipCode = userProfile && userProfile.zipCode || '';
        this.phoneNumbre = userProfile && userProfile.phoneNumbre || null;
        this.registerStep = userProfile && userProfile.registerStep || '';
        this.picture = userProfile && userProfile.picture || null;
        this.verified_email = userProfile && userProfile.verified_email || false;
        this.gender = userProfile && userProfile.gender || null;
    }
}