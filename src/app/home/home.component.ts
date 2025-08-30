import { Component } from '@angular/core';
import { Hoseloc } from '../hoseloc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hoseLoc: Hoseloc = {
    houseNo: 101,
    houseLOC: "Edappally",
    houseName: "Krishna",
    
  };

  
}
