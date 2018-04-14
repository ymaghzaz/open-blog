import { userRegisterInfos } from "./user.step1";
import { GoogleProfile } from "./google.profile.model";

export class UserInfoFromGoogle extends userRegisterInfos {

    constructor(googleProfile?: GoogleProfile) {
        super();
        this.username = googleProfile && googleProfile.name;
        this.firstName = googleProfile && googleProfile.name;
        this.lastName = googleProfile && googleProfile.family_name;
        this.email = googleProfile && googleProfile.email;
        this.picture = googleProfile && googleProfile.picture
        this.verified_email = googleProfile && googleProfile.verified_email;
    }
}