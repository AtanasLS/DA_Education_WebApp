import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {

  courses: any[] = [];


  constructor(
    private router: Router,
   private backendService: BackendService
  ) {}

  ngOnInit(): void {
    this.backendService.gatAllCourses().subscribe(
      (res)=> {
        res.responseData.forEach((e: {id: number, name: string; ownerId: string | null; }) => {
          if(e.ownerId == localStorage.getItem('user')){
            this.courses.push(e);
            console.log(this.courses)
          }

        });
            }
    );

    }

  createCourse(){
    this.router.navigate(['create-course']);

  }

  selectCource(id:number){
    this.router.navigate(['course/' +id]);

  }
}
