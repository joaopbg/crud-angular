import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {



  courses: Course[] = [];
  displayedColumns = ['name','category'];


  //essa chamada tornou-se possivel no contrutor por conta do HttpClientModule - Injectable
  constructor(private coursesService: CoursesService){
    this.courses = coursesService.list();

  }

  ngOninit(): void{


  }

}
