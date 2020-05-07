import { Component, OnDestroy } from '@angular/core';
import { DoomService } from '../../service/doom.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {

  selection: number;

  itemSrc = '../../../assets/images/menu/menu-';

  items = [];

  constructor(private doomService: DoomService) {

    this.items = Array(4);

    this.selection = this.doomService.selection;

    document.onkeydown = (keyboard) => {

      this.doomService.navigation(keyboard , 3);

      this.selection = this.doomService.selection; };
   }

   ngOnDestroy() {

     this.doomService.selection = 0;

   }
}
