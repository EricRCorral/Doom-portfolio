import { Component, OnDestroy } from '@angular/core';
import { DoomService } from '../../service/doom.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy {

  selection: number;

  itemSrc = '../../../assets/images/projects/project-';

  items = [];

  constructor(private doomService: DoomService) {

    this.items = Array(12);

    this.selection = this.doomService.selection;

    document.onkeydown = (keyboard) => {

      this.doomService.navigation(keyboard , 11);

      this.selection = this.doomService.selection; };
  }

  ngOnDestroy() {

    this.doomService.selection = 0;
  }

}
