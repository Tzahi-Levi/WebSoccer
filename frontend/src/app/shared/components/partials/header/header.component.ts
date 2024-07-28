import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user!:User;
  constructor(private userService:UserService){
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.id;
  }

}
