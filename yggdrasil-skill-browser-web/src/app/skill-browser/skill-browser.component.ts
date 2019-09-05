import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeService} from '../skill-tree/skill-tree.service';

@Component({
  selector: 'yg-skill-browser',
  template: `
      <pre>{{ tree$ | async | json }}</pre>
  `,
  styleUrls: ['./skill-browser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBrowserComponent implements OnInit {

  tree$: Observable<SkillTree>;

  constructor(private service: SkillTreeService) {
  }

  ngOnInit() {
    this.tree$ = this.service.tree();
  }

}
