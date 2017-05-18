import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hello } from './hello';

@NgModule({
  declarations: [
    Hello
  ],
  imports: [
    IonicPageModule.forChild(Hello),
  ],
  exports: [
    Hello
  ]
})
export class HelloModule {}
