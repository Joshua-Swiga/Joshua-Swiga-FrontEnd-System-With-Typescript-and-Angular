import { Component } from '@angular/core';
import { StudentResponse, StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {
message: any;
  constructor(private studentService: StudentService){}
  students!: StudentResponse[];

  // This is used to get the data from the API
  ngOnInit(){
    this.getStudentList();
  }
  deleteStudent(event: any, studentId: number){
    if (confirm('Are you sure you want to delete this record?')){
      event.target.innerText = "Deleting...";

    }

    this.studentService.destroy_student(studentId).subscribe((res: any)=>{
      this.getStudentList(); // This is used to refresh the page after a delete operation is done
      alert(res.message)
    })

  }
  getStudentList(){
    this.studentService.getStudent().subscribe((res: any)=>{
      
      // message is the itteration variable that is being served by the server
      console.log(res.message);
      this.students = res.message
    });
  }

}
