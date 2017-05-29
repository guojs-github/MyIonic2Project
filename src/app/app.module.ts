import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Hello } from '../pages/hello/hello';
import { ModalContentPage } from '../pages/modalContentPage/modalContentPage';
import { NavigationDetailsPage } from '../pages/naviDetailsPage/naviDetailsPage';
import { PopoverDemoPage} from '../pages/popoverDemo/popoverDemo';
import { PopoverPage } from '../pages/popoverDemo/popoverDemo';
import { SegmentsDemoPage } from '../pages/segmentsDemo/segmentsDemo';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ToolbarDemoPage } from '../pages/toolbarDemo/toolbarDemo';
import { NativePage } from '../pages/native/native';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
	MyApp
	, AboutPage
	, ContactPage
	, HomePage
	, TabsPage
	, Hello
	, ModalContentPage
	, NavigationDetailsPage
	, PopoverDemoPage
	, PopoverPage
	, SegmentsDemoPage
	, TutorialPage
	, ToolbarDemoPage
	, NativePage
  ],
  imports: [
    BrowserModule
	, IonicModule.forRoot(MyApp)
	, IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
	, AboutPage
	, ContactPage
	, HomePage
	, TabsPage
	, Hello
	, ModalContentPage
	, NavigationDetailsPage	
	, PopoverDemoPage
	, PopoverPage
	, SegmentsDemoPage
	, TutorialPage
	, ToolbarDemoPage
	, NativePage
  ],
  providers: [
    StatusBar
	, SplashScreen
	, {provide: ErrorHandler, useClass: IonicErrorHandler}
	, AndroidFingerprintAuth
	, BarcodeScanner
  ]
})
export class AppModule {}
