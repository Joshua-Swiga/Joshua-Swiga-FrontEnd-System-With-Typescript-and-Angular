import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent {
  
  studentId: any;
  student: any;
  errors: any =[];

  constructor(private route: ActivatedRoute, private studentservice: StudentService){}
  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
    // alert(this.studentId);

    
    this.studentservice.getStudent_by_id(this.studentId).subscribe((res: any) =>{
      console.log(res);
      this.student = res.student


    })


  }
  updateStudent(){
    // What should be sent to the API 
    var  inputData={
      name: this.student.name,
      course: this.student.course,
      email: this.student.email,
      phone: this.student.phone
    }
    this.studentservice.updateStudent(inputData, this.studentId).subscribe({
      next: (res: any)=>{
        console.log(res);
        alert(res.message);
        
      },
      error: (err: any)=>{
        console.log(err)
        this.errors = err.error.errors;
      }
    });
  }

}
