export class UserAccountModel {

    constructor(
        public email: string,
        public passwd: string,
        public firstName: string,
        public lastName: string,
        public phone: number,
        public company: string
    ) { }

}
