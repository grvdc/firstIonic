import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ContactPage } from './contact.page';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobFreeService } from '../service/admobfree.service';

// import { AdmobFreeService } from './service/admobfree.service';
const routes: Routes = [
  {
    path: '',
    component: ContactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule, 
    MatCheckboxModule,
    MatExpansionModule,
  ],
  declarations: [ContactPage],
  providers:[AdMobFree,
    AdmobFreeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class ContactPageModule {}
