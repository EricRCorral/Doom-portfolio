import { Component, OnDestroy } from '@angular/core';
import { DoomService } from '../../service/doom.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnDestroy  {

  selection: number;

  itemSrc = '../../../assets/images/music/track-';

  items = [];

  constructor(private doomService: DoomService) {

    this.items = Array(16);

    this.selection = this.doomService.selection;

    document.onkeydown = (keyboard) => {

      this.doomService.navigation(keyboard , 15);

      this.selection = this.doomService.selection; };
   }

   ngOnDestroy() {

    this.doomService.selection = 0;

  }
}
