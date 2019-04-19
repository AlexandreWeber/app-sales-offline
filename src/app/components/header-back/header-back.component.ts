import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  navigateTo () {
    this.navCtrl.navigateBack(this.link);
  }

}
