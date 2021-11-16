import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UsersData } from '../usersData';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userList:Array<UsersData>;
  constructor(private userService:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res=>{
      console.log(res);
      this.userList = res.data;
    })
  }
  goToDetails(id:number): void {
    this.router.navigate(['/user', id])
  }
}
