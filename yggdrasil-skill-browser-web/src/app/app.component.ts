import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'yg-root',
  template: `
      <yg-skill-browser></yg-skill-browser>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
