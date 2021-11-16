import { UsersData } from "./usersData";

export class UsersDataResponse{
    constructor(){}
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:Array<UsersData>
}