import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
username: string = '';
password: string = '';

  constructor(
    private router: Router,
   private backendService: BackendService
  ) { }

  logIn(){
    this.backendService.gatAllUsers().subscribe((res)=>{
      res.responseData.forEach((e: { username: string; password: string; id: string; }) => {
        console.log (res);
        if(e.username == this.username && e.password == this.password){

          localStorage.setItem('user', e.id);
          this.router.navigate(['home']);
          window.location.reload()



        }

      });
    })

  }
}
