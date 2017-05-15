import { Component } from '@angular/core';
import { IonicPage/* , NavController, NavParams */, ActionSheetController, Platform, AlertController} from 'ionic-angular';

/**
 * Generated class for the Hello page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class Hello {  
	public _platform: Platform; /* platform API reference */
	
	constructor(
		public platform: Platform,
		public actionSheetCtrl: ActionSheetController,
		public alertCtrl: AlertController
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
}
