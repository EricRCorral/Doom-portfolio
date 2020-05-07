import { Component, OnDestroy } from '@angular/core';
import { DoomService } from '../../service/doom.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnDestroy  {

  selection: number;

  show: boolean;

  itemSrc = '../../../assets/images/about-me/about-';

  items = [];

  constructor(private doomService: DoomService) {

    this.items = Array(9);

    this.show = true;

    this.selection = this.doomService.selection;

    document.onkeydown = (keyboard) => {

      this.doomService.navigation(keyboard , 8);

      this.selection = this.doomService.selection; };
   }

   showFace() {

    this.doomService.show.play();

    this.show = false;
   }

   ngOnDestroy() {

    this.doomService.selection = 0;

  }

}
