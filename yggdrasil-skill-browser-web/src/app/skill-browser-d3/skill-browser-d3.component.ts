import {Component, Input} from '@angular/core';
import {SkillTree} from '../skill-tree/skill-tree';

@Component({
  selector: 'yg-skill-browser-d3',
  template: `
      <b>d3.js</b>
      <pre>{{ tree | json }}</pre>
  `,
  styleUrls: ['./skill-browser-d3.component.scss']
})
export class SkillBrowserD3Component {
  @Input() tree: SkillTree;
}
