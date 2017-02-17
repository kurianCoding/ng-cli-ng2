import { Component } from '@angular/core';
import {Player} from './models/player';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k';
  player: Player={
  score: 29,
  name:'kurian',
  id:12
  };
  constructor(){
  }
}
