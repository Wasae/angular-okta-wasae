import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuth:boolean = false
  constructor(public auth: AuthService,
              private _router:Router) {}

  async ngOnInit() {
    this.isAuth = await this.auth.isAuthenticated$.toPromise()
      if(this.auth.isAuthenticated$){
        this._router.navigateByUrl('/logincallback')
      }
      else{
        // this.auth.loginWithRedirect({screen_hint: "signup"});
        this.auth.loginWithRedirect();
      }
    }
}
