import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {combineLatest, Subject} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillBrowserAmchartsChartBuilder} from './skill-browser-amcharts-chart-builder.service';
import {SkillBrowserState} from './skill-browser-state.service';

@Component({
    selector: 'yg-skill-browser-amcharts',
    template: `
        <div class="skill-tree mat-typography"></div>
    `,
    styleUrls: ['./skill-browser-amcharts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        SkillBrowserState, SkillBrowserAmchartsChartBuilder
    ]
})
export class SkillBrowserAmchartsComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

    @Input() tree: SkillTree;
    private chart$: Subject<am4plugins_forceDirected.ForceDirectedTree> = new Subject();
    private destroy$: Subject<void> = new Subject();

    constructor(private state: SkillBrowserState, private chartBuilder: SkillBrowserAmchartsChartBuilder, private zone: NgZone) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.tree && this.tree) {
            this.state.setTree(this.tree);
        }
    }

    ngOnInit() {
        combineLatest(this.chart$, this.state.tree$).subscribe(
            ([chart, tree]) => chart.data = tree
        );
        combineLatest(this.chart$, this.destroy$).subscribe(
            ([chart]) => this.zone.runOutsideAngular(() => chart.dispose())
        );
    }

    ngAfterViewInit(): void {
        this.zone.runOutsideAngular(() => {
            const chart = this.chartBuilder.buildChart(
                'skill-tree',
                node => this.state.nodeSelected(node as any)
            );
            this.chart$.next(chart);
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
    }

}
