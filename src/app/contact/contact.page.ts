import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { AdmobFreeService } from '../service/admobfree.service';
import { TestService } from '../api/test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  toggle: boolean = true;
  constructor(public nav:NavController,    private admobFree: AdMobFree,
    private admobFreeService: AdmobFreeService,
    private api: TestService,

    ) { }


  ngOnInit() {
      // this.admobFreeService.BannerAd();
  }
  goToSecondPage(){
    console.log("testNavControl");
    this.nav.navigateForward('/tabs');
  }

// my Id :   App ID: ca-app-pub-5671272181774947~5211850922
// TestIonicca-app-pub-5671272181774947~5211850922
// TestIonsca-app-pub-5671272181774947/7905941808
// 


//   showBannerAd() {
//     let bannerConfig: AdMobFreeBannerConfig = {
//         isTesting: true, // Remove in production
//         autoShow: true,//,
//         id: "ca-app-pub-5671272181774947/7905941808"
//     };
//     this.admobFree.banner.config(bannerConfig);

//     this.admobFree.banner.prepare().then(() => {
//         // success
//     }).catch(e => alert(e));
// }

  hitapi(){
    let data = {
      firstName: 'FrintEnd',
      lastNameName: 'FrontEnd',
      testName:'Frontend',
    }
    this.api.saveUser(data).subscribe(res => {
      console.log("done saved");
    })
  }

  

}
