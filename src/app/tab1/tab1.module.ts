import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { MorePageModule } from '../pages/more/more.module'
// import { MoreMenuComponent } from '../components/more-menu/more-menu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // MorePageModule,
    // MoreMenuComponent,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  exports:[],
  entryComponents: [],
  declarations: [Tab1Page,]
})
export class Tab1PageModule {}
