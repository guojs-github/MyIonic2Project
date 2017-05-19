import { Component } from '@angular/core';
import { IonicPage/* , NavController*/, NavParams , ActionSheetController, Platform, AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular'; /* loading窗口 */
import { ModalController } from 'ionic-angular'; /* 对话框 */
import { ViewController} from 'ionic-angular';
import { ModalContentPage } from '../modalContentPage/modalContentPage';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the Hello page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */ 
@IonicPage()
/* 
	导航明细页
 */
@Component({
	templateUrl: 'navigation-details.html',
})

export class NavigationDetailsPage {
	private _item; // 显示数据信息

	constructor(params: NavParams) {
		this._item = params.data.item;
	}
}


@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class Hello {  
	private _platform: Platform; /* platform API reference */
	private _event = { // 日期输入的相关数据项目
		month: '2017-08-19',
		timeStarts: '07:43',
		timeEnds: '2017-08-20'
	};

	/* 手势测试 gesture */
	private press: number = 0;
	private pan: number = 0;
	private swipe: number = 0;
	private tap: number = 0;	
	
	/* 导航栏示例 */
	private _naviItems = [
		  {
			'title': 'Angular',
			'icon': 'angular',
			'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
			'color': '#E63135'
		  },
		  {
			'title': 'CSS3',
			'icon': 'css3',
			'description': 'The latest version of cascading stylesheets - the styling language of the web!',
			'color': '#0CA9EA'
		  },
		  {
			'title': 'HTML5',
			'icon': 'html5',
			'description': 'The latest version of the web\'s markup language.',
			'color': '#F46529'
		  }
	  ];
	
	constructor(
		public platform: Platform,
		public actionSheetCtrl: ActionSheetController,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public modalCtrl: ModalController,
		public nav: NavController
	) { 
		this._platform = platform;
	}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad Hello');
	}

 	openMenu() { // deom action sheet
		let actionSheet = this.actionSheetCtrl.create({
		  title: '相册',
		  cssClass: 'action-sheets-basic-page',
		  buttons: [
			{
			  text: '删除',
			  role: 'destructive',
			  icon: !this._platform.is('ios') ? 'trash' : null, // 判断是否iOS,确认是否使用图标
			  handler: () => {
				console.log('Delete clicked');
			  }
			},
			{
			  text: '分享',
			  icon: !this._platform.is('ios') ? 'share' : null,
			  handler: () => {
				console.log('Share clicked');
			  }
			},
			{
			  text: '播放',
			  icon: !this._platform.is('ios') ? 'arrow-dropright-circle' : null,
			  handler: () => {
				console.log('Play clicked');
			  }
			},
			{
			  text: '收藏',
			  icon: !this._platform.is('ios') ? 'heart-outline' : null,
			  handler: () => {
				console.log('Favorite clicked');
			  }
			},
			{
			  text: '关闭',
			  role: 'cancel', // will always sort to be on the bottom
			  icon: !this._platform.is('ios') ? 'close' : null,
			  handler: () => {
				console.log('Cancel clicked');
			  }
			}
		  ]
		});
		actionSheet.present();
	}; /* openMenu */
	
	doAlert() {
		/* 一般消息窗口 */
		let alert = this.alertCtrl.create({
		  title: '消息',
		  message: '亲爱的朋友，你好!',
		  buttons: [
			{
				text: "当我没说",
				handler: () => {
					console.log("当我没说");
				}
			},
			{
				text: "不懂",
				handler: () => {
					console.log("不懂");
				}
			},
			{
				text: "朕知道了",
				handler: () => {
					console.log("朕知道了");
				}
			}
		  ]
		});
		alert.present()			
	}; /* doAlert */

	doAlertCheckbox() {
		/* 可多选的对话框 */
		let alert = this.alertCtrl.create();
		alert.setTitle('你去过哪些行星呢？');

		alert.addInput({ /* 添加选项 */
			type: 'checkbox',
			label: 'Alderaan 奥德兰',
			value: 'value1',
			checked: true /* 默认选中 */
		});

		alert.addInput({
			type: 'checkbox',
			label: 'Bespin 贝斯平',
			value: 'value2'
		});

		/* 添加按钮 */
		alert.addButton('取消');
		alert.addButton({
			text: '选好了',
			handler: data => {
				console.log('Checkbox data:', data);
			}
		});
		alert.present();		
	}; /* doAlertCheckbox */	

	/* 手势 */
	onTap(e) { // 点一下立即放松
		this.tap++
	}
	onPress(e) { // 按下去，等一下松开
		this.press++;
	}
	onPan(e) { // 按下去，在屏幕上左右滑动，别抬起来
		this.pan++
	}
	onSwipe(e) { // 按下去，在屏幕上一侧滑动后，手抬起来
		this.swipe++
	}
	
	flashWait() { // 闪现一个等待窗口
		let loading = this.loadingCtrl.create({
			content: '换衣服，请等一下...'
		});

		loading.present();

		setTimeout(() => {
			loading.dismiss();
		}, 3000);	
	}
	
	openModal(num) { /* 对话框演示 */
		let modal = this.modalCtrl.create(ModalContentPage, num); /* 创建对话框 */
		modal.present(); /* 显示对话框 */
	}
	
	openNaviDetail(item) { /* 打开导航栏明细 */
		this.nav.push(NavigationDetailsPage, { item: item });
	}
}

