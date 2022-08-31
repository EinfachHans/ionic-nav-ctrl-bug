import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  openDetailPage() {
    this.navCtrl.navigateForward('/detail');
  }

}
