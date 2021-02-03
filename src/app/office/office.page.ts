import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit, OnDestroy {

  constructor(private activatedRoute:ActivatedRoute) {
    console.log("OfficePage Constructor Executed",this.activatedRoute.snapshot.paramMap.get("id"))
    
  }

  ngOnInit() {
    console.log("OfficePage Oninit Function Executed")
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
    console.log("OfficePage OnDestroy Function Executed")
  }

}
