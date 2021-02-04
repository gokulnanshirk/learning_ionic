import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  studentList = [
    { name: "gokul", age: "25", score: "60" },
    { name: "arjun", age: "28", score: "70" },
    { name: "sathish", age: "28", score: "90" },
    { name: "chandru", age: "30", score: "80" },
  ]
  getStudent() {
    return this.studentList
  }
  insertStudent(obj) {
    this.studentList.unshift(obj)
    console.log(this.studentList)
  }

  returnPromiseVal() {
    return new Promise((data) => {
      setTimeout(() => {
        data("My Value (1)")
      }, 4000);
    })
  }

  returnObservableVal() {
    const observable = new Observable(observer => {

      setTimeout(() => {
        observer.next("Value 1")
      }, 1000);

      setTimeout(() => {
        observer.next("Value 2")
      }, 2000);

      setTimeout(() => {
        observer.next("Value 3")
      }, 3000);

    })

    return observable
  }


}
