import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit, OnDestroy {

  studentList = [
    { name: "gokul", age: "25", score: "60" },
    { name: "arjun", age: "28", score: "70" },
    { name: "sathish", age: "28", score: "90" },
    { name: "chandru", age: "30", score: "80" },
  ]

  arr1 = [1, 2, 3, 4];


  constructor(private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {

    let subscription = studentService.returnObservableVal().subscribe(data => {
      console.log(data)
    })

    setTimeout(() => {
      subscription.unsubscribe()
    }, 2000);

    let promise=studentService.returnPromiseVal().then(data => {
      console.log(data)
    })


    // console.log(studentService.getStudent())
    this.createStudent()
    // this.filterFunction()
    // this.mapFunction()
    // this.flatmapFunction()
    // console.log("OfficePage Constructor Executed", this.activatedRoute.snapshot.paramMap.get("id"))
  }

  createStudent() {
    let newStudent = {
      name: "Dinesh", age: "26", score: "99"
    }
    this.studentService.insertStudent(newStudent)
  }

  // filterFunction() {
  //   let result = this.studentList.find((item, index) => {
  //     console.log(index)
  //     return item.age == "28"
  //   })

  //   console.log(result)
  // }

  // flatmapFunction() {
  //   // let result = this.arr1.flatMap()
  //   let arr1 = [1, 2, 3, 4];


  //   // console.log(arr1.flatMap(x => [[x * 2]]))
  // }

  // mapFunction() {
  //   let result = this.studentList.map((item: any) => {
  //     item.city = "Bangalore"
  //     return item
  //   })
  //   console.log(result)
  // }

  ngOnInit() {
    // console.log("OfficePage Oninit Function Executed")
  }

  // ionViewWillEnter() {
  //   console.log("OfficePage ionViewWillEnter Function Executed")
  // }

  // ionViewDidEnter() {
  //   console.log("OfficePage ionViewDidEnter Function Executed")
  // }

  // ionViewWillLeave() {
  //   console.log("OfficePage ionViewWillLeave Function Executed")
  // }

  // ionViewDidLeave() {
  //   console.log("OfficePage ionViewDidLeave Function Executed")
  // }

  ngOnDestroy() {
    // console.log("OfficePage OnDestroy Function Executed")
  }

}
