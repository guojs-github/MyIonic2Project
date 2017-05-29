import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Hello } from '../pages/hello/hello';
import { PopoverDemoPage } from '../pages/popoverDemo/popoverDemo';
import { SegmentsDemoPage } from '../pages/segmentsDemo/segmentsDemo';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ToolbarDemoPage } from '../pages/toolbarDemo/toolbarDemo';
import { NativePage } from '../pages/native/native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage:any = TabsPage;
	
	private _helloPage = Hello;
	private _popoverDemoPage = PopoverDemoPage;
	private _segmentsDemoPage = SegmentsDemoPage;
	private _tutorialPage = TutorialPage;
	private _toolbarDemoPage = ToolbarDemoPage;
	private _nativePage = NativePage; // native function demo

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
			
			// 此处可以设置登录界面，或者广告界面
			this.nav.setRoot(this._tutorialPage);
		});
	}

	openHelloPage() { /* 打开指定页面 */
		this.nav.push(this._helloPage);
		// this.nav.setRoot(this._helloPage); // 设为根页面无法回到原有界面
	}

	openPopoverDemoPage() { /* 打开Popover演示 */
		this.nav.push(this._popoverDemoPage);
	}
	
	openSegmentsDemoPage() { /* 片段演示 */
		this.nav.push(this._segmentsDemoPage);
	}
	
	openToolbarDemoPage() { /* 工具条演示*/
		this.nav.push(this._toolbarDemoPage);
	}

	openNativePage() { /* Native function demo */
		this.nav.push(this._nativePage);
	}
}
