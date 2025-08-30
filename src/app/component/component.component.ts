import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  eUrl: string = 'https://www.google.co.in/';
  edis: boolean = false;
  clcolor: string = "c1";
name: string = "mariapps";
  str :string = "Hello friends!!";
  a: number = 10;
  b: number = 20;
clicked(){ 
 this.str = this.str =='Hello friends!!'? 'Button clicked' :'Hello friends!!'
 }

//  ✅ Equivalent if-else
// clicked() {
//   if (this.str == 'Hello friends!!') {
//     this.str = 'Button clicked';
//   } else {
//     this.str = 'Hello friends!!';
//   }
// }

}
