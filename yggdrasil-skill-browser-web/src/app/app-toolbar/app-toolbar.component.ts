import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yg-app-toolbar',
  template: `
      <mat-toolbar color="primary">
          <mat-toolbar-row>
              <span>Yggdrasil</span>
          </mat-toolbar-row>
      </mat-toolbar>
  `,
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
