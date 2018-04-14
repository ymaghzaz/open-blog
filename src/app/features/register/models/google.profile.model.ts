

export class GoogleProfile {
    email: string;
    family_name: string;
    gender: string;
    given_name: string;
    id: string;
    link: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
    constructor(googleProfile?: any) {
        this.email = googleProfile && googleProfile.email;
        this.family_name = googleProfile && googleProfile.family_name;
        this.given_name = googleProfile && googleProfile.given_name;
        this.id = googleProfile && googleProfile.id;
        this.link = googleProfile && googleProfile.link;
        this.locale = googleProfile && googleProfile.locale;
        this.picture = googleProfile && googleProfile.picture;
        this.verified_email = googleProfile && googleProfile.verified_email;
    }
}