import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { TestService } from '../api/test.service';

import { MenuController } from '@ionic/angular'; 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  testSendDataFromApi:any;
  theTestReturn:any;

  constructor(
    public modal:ModalController,
    private api: TestService,
    private menuCtrl:MenuController,
    ) {}

    async presentModal() {
      const modal = await this.modal.create({
        component: SideNavComponent,
        componentProps:{
          allResultFromApi : 20,
        }
      });
      modal.onDidDismiss().then((detail: OverlayEventDetail) => {
        if (detail !== null) {
          console.log('The result:', detail.data);
          this.theTestReturn = detail.data;
        }
     });
      return await modal.present();
    }

    openFirst() {
      this.menuCtrl.enable(true);
      this.menuCtrl.open();
    }
}
