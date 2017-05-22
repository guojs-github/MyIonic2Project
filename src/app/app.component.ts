import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Hello } from '../pages/hello/hello';
import { PopoverDemoPage } from '../pages/popoverDemo/popoverDemo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage:any = TabsPage;
	
	private _helloPage = Hello;
	private _popoverDemoPage = PopoverDemoPage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}

	openHelloPage() { /* 打开指定页面 */
		// helpers.debounce(this.content.setRoot(helloPage), 60, false);
		this.nav.push(this._helloPage);
	}

	openPopoverDemoPage() { /* 打开Popover演示 */
		this.nav.push(this._popoverDemoPage);
	}
}
