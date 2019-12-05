import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; //import MenuController to access toggle() method.

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public menuCtrl: MenuController,
  ) {
    console.log('Tab1');

  }

  toggleMenu() {
    console.log('togle click');
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

  openFirst() {
    console.log('togle click2');

    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }

}
