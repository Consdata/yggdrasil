import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeService} from '../skill-tree/skill-tree.service';

@Component({
  selector: 'yg-skill-browser',
  template: `
      <div class="switch-view">
          <button (click)="view = 'blank'">hide</button>
          <button (click)="view = 'json'">json</button>
          <button (click)="view = 'd3'">d3</button>
          <button (click)="view = 'amcharts'">amcharts</button>
      </div>
      <div *ngIf="view === 'json'">
          <b>raw json</b>
          <pre>{{ tree$ | async | json }}</pre>
      </div>
      <yg-skill-browser-d3 [tree]="tree$ | async" *ngIf="view === 'd3'"></yg-skill-browser-d3>
      <yg-skill-browser-amcharts [tree]="tree$ | async" *ngIf="view === 'amcharts'"></yg-skill-browser-amcharts>
  `,
  styleUrls: ['./skill-browser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBrowserComponent implements OnInit {

  tree$: Observable<SkillTree>;
  view: 'json' | 'amcharts' | 'd3' | 'blank' = 'blank';

  constructor(private service: SkillTreeService) {
  }

  ngOnInit() {
    this.tree$ = this.service.tree();
  }

}
