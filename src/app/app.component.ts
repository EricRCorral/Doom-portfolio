import { Component } from '@angular/core';
import { DoomService } from './service/doom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private doomService: DoomService) {

  }

 takeDamage() {
   this.doomService.takeDamageService();
 }

 openHyperlink() {

  this.doomService.hyperlink.play();
 }

}
