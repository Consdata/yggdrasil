import {AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subject} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeService} from '../skill-tree/skill-tree.service';
import {SkillTreeNode} from "../skill-tree/skill-tree-node";

import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

interface FlatTreeNode {
    id: string;
    title: string;
    children: string[];
    parent: string;
    breadcrumb: string[];
}

interface TreeNode {
    id: string;
    title: string;
    nodes: TreeNode[];
    color: string;
    links: string[];
}

type SkillTreeIndex = { [key: string]: FlatTreeNode };

@Component({
    selector: 'yg-skill-browser',
    template: `
        <div class="skill-tree mat-typography"></div>
    `,
    styleUrls: ['./skill-browser.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBrowserComponent implements OnInit, OnDestroy, AfterViewInit {

    private chart: am4plugins_forceDirected.ForceDirectedTree;
    private chartCreated: Subject<am4plugins_forceDirected.ForceDirectedTree> = new Subject();
    private nodeIndex: SkillTreeIndex;

    constructor(private service: SkillTreeService, private zone: NgZone) {
    }

    ngOnInit() {
        combineLatest(this.chartCreated, this.service.tree()).subscribe(
            pair => {
                this.nodeIndex = this.flatTree(pair[1]);
                pair[0].data = this.buildTree('root');
            }
        );
    }

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }

    ngAfterViewInit(): void {
        this.zone.runOutsideAngular(() => {
            am4core.useTheme(am4themes_animated);

            this.chart = am4core.create('skill-tree', am4plugins_forceDirected.ForceDirectedTree);

            const skillsSeries = this.chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
            skillsSeries.dataFields.name = 'title';
            skillsSeries.dataFields.children = 'nodes';
            skillsSeries.dataFields.linkWith = 'links';
            skillsSeries.dataFields.color = 'color';
            skillsSeries.dataFields.id = 'id';
            skillsSeries.nodes.template.togglable = false;
            skillsSeries.minRadius = am4core.percent(5);
            skillsSeries.nodes.template.label.text = '{name}';
            skillsSeries.fontSize = 14;
            skillsSeries.nodes.template.label.truncate = true;
            skillsSeries.links.template.strength = 0.5;
            skillsSeries.nodes.template.tooltipText = '{name}';
            // skillsSeries.links.template.distance = 2;
            skillsSeries.manyBodyStrength = -30;

            skillsSeries.colors.list = [am4core.color('#2980b9')];
            skillsSeries.colors.wrap = false;

            skillsSeries.nodes.template.events.on(
                'hit',
                (ev) => {
                    const node = ev.target.dataItem.dataContext as TreeNode;
                    if (this.nodeIndex[node.id].children.length > 0) {
                        this.chart.data = this.buildTree(node.id);
                    } else {
                        console.log('Tutej będą newsy na temat tego cuda');
                    }
                }
            );

            this.chartCreated.next(this.chart);
        });
    }

    private flatTree(tree: SkillTree): SkillTreeIndex {
        const nodes: SkillTreeIndex = {};
        const travers = (node: SkillTreeNode, parent: string) => {
            nodes[node.id] = {
                id: node.id,
                title: node.title,
                children: (node.children || []).map(node => node.id),
                parent: parent,
                breadcrumb: this.breadcrumb(nodes, parent)
            };
            (node.children || []).forEach(child => travers(child, node.id));
        };
        travers(
            {
                id: 'root',
                title: tree.children[0].title,
                children: tree.children[0].children,
            },
            null
        );
        return nodes;
    }

    private breadcrumb(nodes: SkillTreeIndex, parent: string): string[] {
        const breadcrumb = [];
        let parentNode = nodes[parent];
        while (parentNode) {
            breadcrumb.push(parentNode.id);
            parentNode = nodes[parentNode.parent];
        }
        return breadcrumb;
    }

    private buildTree(nodeId: string): TreeNode[] {
        const node = this.nodeIndex[nodeId];
        const breadcrumb = [];

        let lastBread = node;
        for (let bread of node.breadcrumb.map(breadcrumb => this.nodeIndex[breadcrumb])) {
            breadcrumb.push({
                id: bread.id,
                title: bread.title,
                nodes: [],
                links: [lastBread.id],
                color: '#2C3E50'
            });
            lastBread = bread;
        }

        let tree = [
            {
                id: node.id,
                title: node.title,
                nodes: node.children
                    .map(child => this.nodeIndex[child])
                    .map(child => ({
                        id: child.id,
                        title: child.title,
                        nodes: [],
                        color: child.children.length > 0 ? '#16A085' : '#2ecc71'
                    }))
            },
            ...breadcrumb
        ];

        return tree;
    }

}
