import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user = localStorage.getItem('user');

  title = 'app-frontend';

  loggedIn: boolean = true;
  page: string = 'home';

  constructor(private router: Router, private backendService: BackendService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log(this.user);
    if(!this.user){
    this.router.navigate(['login']);
    }else{
      this.router.navigate(['home']);

    }
  }

  switchPage(page: number) {
    switch (page) {
      case 1:
        this.router.navigate(['login']);
        break;
      case 2:
        this.router.navigate(['signup']);
        break;
      case 3:
        this.router.navigate(['my-courses']);
        break;
      case 4:
        this.router.navigate(['home']);
        break;
    }
  }
}
