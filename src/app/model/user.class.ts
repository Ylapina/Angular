export class User{
    id:number;
    userName:String;
    password:String;
    firstName:string;
    lastName:string;
    phoneNumber:string;
    email:string;
    isreviewer:boolean;
    isadmin:boolean;
    isactive:boolean;

    constructor(id: number, userName: String, password:String,firstName:string,lastName:string,phoneNumber:string,
        email:string,isreviewer:boolean,isadmin:boolean,isactive:boolean){
            this.id=id;
            this.userName=userName;
            this.password=password;
            this.firstName=firstName;
            this.lastName=lastName;
            this.phoneNumber=phoneNumber;
            this.email=email;
            this.isreviewer=isreviewer;
            this.isadmin=isadmin;
            this.isactive=isactive;

        }
        about():String{
            return `User: id=${this.id},userName=${this.password},password=${this.userName},
            firstName=${this.firstName},lastName=${this.lastName},phoneNumber=${this.phoneNumber},
            email=${this.email},isreviewer=${this.isreviewer},admin=${this.isadmin},active=${this.isactive}`;
        }


}