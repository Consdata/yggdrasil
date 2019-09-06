import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import {AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subject} from 'rxjs';
import {SkillBrowserAmchartsChartBuilder} from './skill-browser-amcharts-chart-builder.service';
import {SkillBrowserState} from './skill-browser-state.service';

@Component({
    selector: 'yg-skill-browser',
    template: `
        <div class="skill-tree mat-typography"></div>
    `,
    styleUrls: ['./skill-browser.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        SkillBrowserState, SkillBrowserAmchartsChartBuilder
    ]
})
export class SkillBrowserComponent implements OnInit, OnDestroy, AfterViewInit {

    private chart$: Subject<am4plugins_forceDirected.ForceDirectedTree> = new Subject();
    private destroy$: Subject<void> = new Subject();

    constructor(private state: SkillBrowserState, private chartBuilder: SkillBrowserAmchartsChartBuilder, private zone: NgZone) {
    }

    ngOnInit() {
        this.state.init();
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
