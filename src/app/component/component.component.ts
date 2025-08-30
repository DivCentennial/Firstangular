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
}
