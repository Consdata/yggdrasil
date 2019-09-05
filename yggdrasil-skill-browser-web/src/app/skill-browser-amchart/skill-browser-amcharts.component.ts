import {Component, Input} from '@angular/core';
import {SkillTree} from '../skill-tree/skill-tree';

@Component({
  selector: 'yg-skill-browser-amcharts',
  template: `
      <b>amcharts</b>
      <pre>{{ tree | json }}</pre>
  `,
  styleUrls: ['./skill-browser-amcharts.component.scss']
})
export class SkillBrowserAmchartsComponent {
  @Input() tree: SkillTree;
}
