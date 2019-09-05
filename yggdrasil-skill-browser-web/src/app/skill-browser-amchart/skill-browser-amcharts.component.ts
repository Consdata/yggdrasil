import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {AfterViewInit, Component, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {combineLatest, Subject} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeNode} from '../skill-tree/skill-tree-node';

interface AmChartNode {
  id: string;
  name: string;
  children: AmChartNode[];
}

@Component({
  selector: 'yg-skill-browser-amcharts',
  template: `
      <div class="skill-tree mat-typography"></div>
  `,
  styleUrls: ['./skill-browser-amcharts.component.scss']
})
export class SkillBrowserAmchartsComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() tree: SkillTree;
  private chart: am4plugins_forceDirected.ForceDirectedTree;
  private treeChange: Subject<SkillTree> = new Subject();
  private chartCreated: Subject<am4plugins_forceDirected.ForceDirectedTree> = new Subject();

  constructor(private zone: NgZone) {
  }

  ngOnInit(): void {
    combineLatest(this.chartCreated, this.treeChange).subscribe(
      pair => pair[0].data = this.mapToAmChartNode([pair[1].childNodes[0]])
    );
  }

  private mapToAmChartNode(nodes: SkillTreeNode[]): AmChartNode[] {
    return nodes.map(
      node => ({
        id: 'id',
        name: node.title,
        children: node.childNodes ? this.mapToAmChartNode(node.childNodes) : []
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tree) {
      this.treeChange.next(this.tree);
    }
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      this.chart = am4core.create('skill-tree', am4plugins_forceDirected.ForceDirectedTree);

      const skillsSerie = this.chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
      skillsSerie.maxLevels = 1;
      skillsSerie.dataFields.name = 'name';
      skillsSerie.dataFields.children = 'children';
      skillsSerie.nodes.template.togglable = false;
      skillsSerie.minRadius = am4core.percent(5);
      skillsSerie.nodes.template.label.text = '{name}';
      skillsSerie.fontSize = 14;
      skillsSerie.nodes.template.expandAll = false;
      skillsSerie.nodes.template.events.on(
        'hit',
        (ev) => {
          ev.target.setActive(!ev.target.isActive);
        },
        this
      );

      this.chartCreated.next(this.chart);
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
