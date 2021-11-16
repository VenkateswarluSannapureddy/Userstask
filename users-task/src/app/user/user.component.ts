import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UsersData } from '../usersData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:UsersData;
  constructor(private route:ActivatedRoute, private userService:UserServiceService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => { // delivers our array of route parameters.
      let id = +params['id']; // The person id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
      this.userService.getUsers().subscribe(res=>{
         let userList:Array<UsersData> = res.data;
         userList.forEach(user => {
           if(user.id === id){
             this.user = user;
           }
         })
  
      })

    });
  }
}
