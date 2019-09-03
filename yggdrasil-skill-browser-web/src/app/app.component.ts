import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'yg-root',
  template: `
      ygg
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
