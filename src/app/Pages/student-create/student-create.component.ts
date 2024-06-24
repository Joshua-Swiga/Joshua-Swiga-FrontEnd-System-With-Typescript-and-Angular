import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent {
  
  // This is calling te service: saveStudent(inpotData: object)
  

  constructor(private studentService: StudentService) {

  } 
  name!: string
  course!: string
  email!: string
  phone!: string
  isLoading:boolean = false;
  loadingTitle: string = 'Loading'
  errors: any =[];
  
  saveStudent(){
    this.isLoading = true;
    this.loadingTitle = 'Saving';
    var inputData={
      name: this.name,
      course: this.course,
      email: this.email,
      phone: this.phone,

    }

    this.studentService.saveStudent(inputData).subscribe({
      next: (res: any)=>{
        console.log(res, 'Response');
        alert(res.message);
        
        
        // This is used to clear the input field when the data is receved and processed. 
        this.name = '';
        this.course = '';
        this.email = '';
        this.phone = '';
        
        this.isLoading = false;
      },
      error: (err: any)=>{
        this.errors =err.error.errors
        console.log(err.error.errors, 'Errors')

      }
    })

  }

}
