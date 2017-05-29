/*
	本地功能演示
	2017.5.29 GuoJS
*/
import { Component } from '@angular/core';
import { AlertController} from 'ionic-angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  templateUrl: 'template.html'
})
export class NativePage {
	constructor(
		public alertCtrl: AlertController // 消息窗口
 		, public androidFingerprintAuth: AndroidFingerprintAuth // 指纹识别	
 		, public barcodeScanner: BarcodeScanner // 条码扫描
	) {		
	}
	
	alert(message) { // 消息提示
		let alert = this.alertCtrl.create({
		  title: "提示",
		  message: message,
		  buttons: [
			{
				text: "朕知道了",
				handler: () => {
					console.log("朕知道了");
				}
			}
		  ]
		});
		alert.present()			
	}

	detectFingerprint() { // 检测指纹支持
		let fpa = this.androidFingerprintAuth;
		fpa.isAvailable()
			.then((result)=> {
			if(result.isAvailable){
				// it is available
				this.alert("当前设备支持指纹检测");
			} else {
				// fingerprint auth isn't available
				this.alert("当前设备不支持指纹检测！");
			}
		})
		.catch(error => {
			console.error(error);
			this.alert("抱歉！发生错误【" + error + "】");
		});		
	}
	
	scanBarcode() { // 扫描二维码
		let scan = this.barcodeScanner;
		scan.scan().then((barcodeData) => {
			// Success! Barcode data is here
			this.alert(
				"<p><b>内容：</b>" + barcodeData.text + "</p>" 
				+ "<p><b>格式：</b>" + barcodeData.format + "</p>" 
				+ "<p><b>取消？</b>" + barcodeData.cancelled + "</p>" 
			);
		}
		, (error) => {
			// An error occurred
			console.error(error);
			this.alert("抱歉！发生错误【" + error + "】");
		}
		);		
	}
}