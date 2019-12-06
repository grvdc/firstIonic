import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public nav:NavController, 
    
  ) { 
    let data = localStorage.getItem('data');
    if(data){
      this.nav.navigateForward('/tabs');

    }
    console.log('data',data);

  }

  ngOnInit() {
  }

  setitem(){
    localStorage.setItem('data','true');
    console.log(localStorage.getItem('data'));
    let data = localStorage.getItem('data');
    if(data){
      this.nav.navigateForward('/tabs');

    }
  }

}
