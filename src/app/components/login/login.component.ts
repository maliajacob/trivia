import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  user$: Observable<User | undefined> | undefined;
  constructor(private loginService: LoginService) {
    this.user$ = this.loginService.getUserOvservable();
  }

  ngOnInit(): void {
  }

}
