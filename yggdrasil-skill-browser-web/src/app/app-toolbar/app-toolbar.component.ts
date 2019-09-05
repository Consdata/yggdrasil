import {Component} from '@angular/core';

@Component({
  selector: 'yg-app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <img class="yggdrasil-logo" src="assets/yggdrasil-logo-3.svg" alt="yggdrasil">
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent {

}
