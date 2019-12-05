import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  imgArr = [
    {src:'https://dummyimage.com/hd1080',title:'First'},
    {src:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png',title:'Second'},
    {src:'https://www.osea-asia.com/wp-content/uploads/Dummy-Icon-Female-x-1.jpg',title:'Third'},
    {src:'https://www.dummymag.com/wp-content/themes/pstarter/assets/images/logo-black.jpg', title:'fourth'}
  ];
  constructor(    
    private menuCtrl:MenuController,
    )  {}

  indexPrint(index){
    console.log("Index=> ", index);

  }

  openFirst() {
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
}
