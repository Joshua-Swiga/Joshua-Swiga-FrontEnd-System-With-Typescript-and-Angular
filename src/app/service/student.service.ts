// This is where we make all the HTTP calls

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse{
  "id": number,
  "name": string,
  "course": string,
  "email": string,
  "phone": string,
  "created_at": string,
  "updated_at": string
}
@Injectable({
  providedIn: 'root'
})


export class StudentService {
  // What is this service code do and why is it being used in the student-crate.components.ts
  constructor(private httpClient: HttpClient) { }

  getStudent_by_id(studentId: number){
    return this.httpClient.get(`http://127.0.0.1:8000/api/student/${studentId}/edit`)

  }

  updateStudent(inputData: object, studentId: number){
    return this.httpClient.put(`http://127.0.0.1:8000/api/student/${studentId}/edit`, inputData)

  }
  
  getStudent(){
    return this.httpClient.get('http://127.0.0.1:8000/api/student'); // What does this do and why is it connecting to the backend
  }

  destroy_student(studentId: number){
    return this.httpClient.delete(`http://127.0.0.1:8000/api/student/${studentId}/delete`)

  }
  saveStudent(inputData: object){
    return this.httpClient.post('http://127.0.0.1:8000/api/student', inputData); // What does this do and why is it connecting to the backend
  }
}
