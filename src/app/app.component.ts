import { Component, VERSION } from '@angular/core';
import {Car} from './car';
@Component(
  {
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})




export class AppComponent 
 {
 
  name = 'Angular ' + VERSION.major;


  fruits :string[]=['apple','orange','banana','pear','peach'];

  subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
cars:Car[ ] = [this.subaru, this.honda, this.bmw];
}



