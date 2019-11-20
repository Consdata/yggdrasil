import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeService} from '../skill-tree/skill-tree.service';

@Component({
    selector: 'yg-skill-browser',
    template: `
        <!--        <div class="toggle-graph-lib">-->
        <!--            <mat-button-toggle-group #group="matButtonToggleGroup">-->
        <!--                <mat-button-toggle value="amcharts">-->
        <!--                    amcharts-->
        <!--                </mat-button-toggle>-->
        <!--                <mat-button-toggle value="visjs">-->
        <!--                    visjs-->
        <!--                </mat-button-toggle>-->
        <!--                <mat-button-toggle value="d3">-->
        <!--                    d3-->
        <!--                </mat-button-toggle>-->
        <!--            </mat-button-toggle-group>-->
        <!--        </div>-->
        <!--        <yg-skill-browser-amcharts [tree]="tree$ | async" *ngIf="group.value === 'amcharts'">-->
        <!--        </yg-skill-browser-amcharts>-->
        <!--        <yg-skill-browser-visjs [tree]="tree$ | async" *ngIf="group.value === 'visjs'">-->
        <!--        </yg-skill-browser-visjs>-->
        <!--        <yg-skill-browser-d3 [tree]="tree$ | async" *ngIf="group.value === 'd3'">-->
        <!--        </yg-skill-browser-d3>-->
        <yg-skill-browser-amcharts [tree]="tree$ | async">
        </yg-skill-browser-amcharts>
    `,
    styleUrls: ['./skill-browser.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBrowserComponent implements OnInit {

    tree$: Observable<SkillTree>;

    constructor(private skillTree: SkillTreeService) {
    }

    ngOnInit(): void {
        this.tree$ = this.skillTree.tree();
    }

}
