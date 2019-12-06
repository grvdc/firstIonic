import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular'; //import MenuController to access toggle() method.
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public nav:NavController
  ) {
    let data = localStorage.getItem('data');
   
    this.initializeApp();
    if(!data){
      this.nav.navigateForward('/login');

    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openFirst() {
    
    console.log('togle click2');

    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');

  }

  goToSecondPage(){
    console.log("testNavControl");
    this.nav.navigateForward('/contact');
    this.menuCtrl.close('first');
  }


}
