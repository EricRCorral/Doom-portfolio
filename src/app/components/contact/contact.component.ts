import { Component, OnDestroy } from '@angular/core';
import { DoomService } from '../../service/doom.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnDestroy {

  selection: number;

  itemSrc = '../../../assets/images/contact/contact-';

  items = [];

  constructor(private doomService: DoomService) {

    this.items = Array(5);

    this.selection = this.doomService.selection;

    document.onkeydown = (keyboard) => {

      this.doomService.navigation(keyboard , 4);

      this.selection = this.doomService.selection; };
   }

   ngOnDestroy() {

     this.doomService.selection = 0;

   }

}
