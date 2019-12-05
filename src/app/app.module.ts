import { NgModule , ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy ,RouterModule, Routes} from '@angular/router';

import { IonicModule, IonicRouteStrategy, } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule ,} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx'; 
import { MorePageModule } from './pages/more/more.module';
import { MoreMenuComponent } from './components/more-menu/more-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
@NgModule({
  declarations: [AppComponent, SideNavComponent,MoreMenuComponent],
  entryComponents: [SideNavComponent,],
  imports:
    [
      // MoreMenuComponent,
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      // HTTP
      MorePageModule,
      BrowserAnimationsModule,
      MatButtonModule, 
      MatCheckboxModule,
    ],
  providers: [
    StatusBar,
    MorePageModule,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AdMobFree,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent],
  exports:[MorePageModule,MoreMenuComponent]
})
export class AppModule { }
