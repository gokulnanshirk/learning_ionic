import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-test-pop',
  templateUrl: './test-pop.component.html',
  styleUrls: ['./test-pop.component.scss'],
})
export class TestPopComponent implements OnInit {
  // data
  constructor(
    private navParams: NavParams,
    private popOver: PopoverController
  ) {

  }

  ngOnInit() {
    console.log(this.navParams.get("data"))
    console.log(this.navParams.get("others"))
  }

  close() {
    this.popOver.dismiss({ data1: "abc", data2: 'efg' })
  }

}
