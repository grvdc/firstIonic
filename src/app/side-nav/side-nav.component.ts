import { Component, OnInit, Input, ViewChild ,} from '@angular/core';
import { MenuController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TestService } from '../api/test.service';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() allResultFromApi: any;
  // @ViewChild() infiniteScroll: IonInfiniteScroll;

  user:any;
  dataList:any;
  offset :any;
  constructor(
    private modal: ModalController,
    navParams: NavParams,
    private api: TestService,
    public loadingController: LoadingController,
    ) { 
      // navParams.get('firstName');
      this.dataList = [];
    
    for (let i = 0; i < 25; i++) { 
      this.dataList.push("Item number "+this.dataList.length);
      }
    }

  ngOnInit() {
    this.offset = this.allResultFromApi;
    console.log('allResultFromApi in open Modal',this.allResultFromApi);
    this.showLoader(this.allResultFromApi);
  }

  async myDismiss() {
    const result: any = "Closed";
    await this.modal.dismiss(result);
  }

  reload(){
    this.showLoader(20);
  }

  async showLoader(data_) {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      
    });
    this.api.tesApi(data_).subscribe(data=>{
      this.loadingController.dismiss();
      this.user = data['results'];
      console.log("data.result",this.user);
      })
    await loading.present();
  }

  async hitAgainApi(event) {

    setTimeout(() => {
    event.target.complete();
    }, 500);

    let oldOffset = this.offset;
    this.offset = this.offset + 20;
    this.api.tesApi(this.offset).subscribe(data=>{
      for(let i = oldOffset ; i<this.offset; i++){
        this.user.push(data['results'][i]);
      }
    })
  }

  doRefresh(event) {
    console.log('Begin async operation');

    let oldOffset = this.offset;
    this.api.tesApi(this.offset).subscribe(data=>{
      event.target.complete();
      for(let i = oldOffset ; i<this.offset; i++){
        this.user.push(data['results'][i]);
      }
      this.offset += 20 ;
      console.log('this.userlength', this.user.length);
    })
  }

}
