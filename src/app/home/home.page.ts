import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { TestPopComponent } from '../test-pop/test-pop.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  showList = true
  title = "Home Page"
  list = [
    "gokul",
    "sathish",
    "Nagarjun",
    "Vishnu"
  ]
  listObjects = [
    {
      name: "gokul",
      age: "25"
    },
    {
      name: "sathish",
      age: "26"
    },
    {
      name: "Nagarjun",
      age: "27",
      city:"Bangalore"
    }
  ]
  constructor(
    private navCtrl: NavController,
    private popoverController: PopoverController,
    private modalCtrl: ModalController
  ) {
    console.log("HomePage Constructor Executed")
    // this.printNumbers()
    // this.showPopOver()

    setTimeout(() => {
      this.title = "Modified"
    }, 3000);
  }

  async showPopOver(ev) {
    const popover = await this.popoverController.create({
      // const popover = await this.modalCtrl.create({
      component: TestPopComponent,
      event: ev,
      mode: "md",
      // backdropDismiss:false,
      componentProps: {
        data: '123',
        others: 'abc'
      }
    });

    popover.style.setProperty('--width', '500px')
    popover.style.setProperty('--backdrop-opacity', '0.7')

    popover.onWillDismiss().then((data) => {
      console.log("popover.onWillDismiss()", data)
    })

    popover.onDidDismiss().then((data) => {
      console.log("popover.onDidDismiss()", data)
    })

    return await popover.present();
  }

  goToOfficePage() {
    this.navCtrl.navigateForward('office/123')
  }

  ngOnInit() {
    console.log("HomePage Oninit Function Executed")
  }

  // printNumbers() {
  //   console.log("printNumbers Called...")
  //   setInterval(() => {
  //     console.log('Hello')
  //   }, 4000);
  // }

  ionViewWillEnter() {
    console.log("HomePage ionViewWillEnter Function Executed")
  }

  ionViewDidEnter() {
    console.log("HomePage ionViewDidEnter Function Executed")
  }

  ionViewWillLeave() {
    console.log("HomePage ionViewWillLeave Function Executed")
  }

  ionViewDidLeave() {
    console.log("HomePage ionViewDidLeave Function Executed")
  }

  ngOnDestroy() {
    console.log("HomePage OnDestroy Function Executed")
  }

}
