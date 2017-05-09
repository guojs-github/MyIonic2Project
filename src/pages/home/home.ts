import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Hello } from '../hello/hello';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	helloPage = Hello;
	
	constructor(public navCtrl: NavController) {

	}
}
