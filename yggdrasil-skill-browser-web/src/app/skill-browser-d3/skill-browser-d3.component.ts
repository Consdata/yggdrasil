import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {Subject} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';

@Component({
    selector: 'yg-skill-browser-d3',
    template: `
        <div class="skill-tree" #graph></div>
    `,
    styleUrls: ['./skill-browser-d3.component.scss']
})
export class SkillBrowserD3Component implements AfterViewInit, OnChanges {

    @Input() tree: SkillTree;
    @ViewChild('graph', {static: true, read: ElementRef}) private graph: ElementRef<HTMLElement>;
    private tree$: Subject<SkillTree> = new Subject();

    ngAfterViewInit(): void {
        this.tree$.subscribe(tree => {
            this.graph.nativeElement.append(this.chartWithSimulationAndDrag(tree));
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.tree) {
            this.tree$.next(this.tree);
        }
    }

    private chartWithSimulationAndDrag(tree: SkillTree) {
        const width = 1000;
        const height = 400;

        const drag = sim => {
            function dragstarted(d) {
                if (!d3.event.active) {
                    sim.alphaTarget(0.3).restart();
                }
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }

            function dragended(d) {
                if (!d3.event.active) {
                    sim.alphaTarget(0);
                }
                d.fx = null;
                d.fy = null;
            }

            return d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended);
        };

        const click = ev => {
            console.log(ev);
            console.log(`Clicked node [id=${ev.data.id}`);
        };

        const root = d3.hierarchy(tree.children[0]);
        const data = {
            links: root.links().filter((link) => {
                return link.target.depth < 2;
            }),
            nodes: root.descendants().filter((node) => {
                return node.depth < 2;
            })
        };

        const simulation = d3.forceSimulation(data.nodes as any)
            .force('link', d3.forceLink(data.links as any).id(d => (d as any).id).distance(120).strength(1))
            .force('charge', d3.forceManyBody().strength(-2000))
            .force('x', d3.forceX())
            .force('y', d3.forceY());

        const svg = d3.create('svg')
            .attr('viewBox', [-width / 2, -height / 2, width, height] as any);

        const links = svg.append('g')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', 2)
            .selectAll('line')
            .data(data.links)
            .join('line');

        const nodes = svg.append('g')
            .attr('fill', '#fff')
            .selectAll('circle')
            .data(data.nodes)
            .join('g')
            .classed('node', true)
            .on('click', click);

        nodes.append('circle')
            .attr('r', 40)
            .call(drag(simulation) as any);

        nodes.append('text')
            .style('pointer-events', 'none')
            .text(d => d.data.title);

        nodes.append('title')
            .text(d => d.data.title);

        simulation.on('tick', () => {
            links
                .attr('x1', d => (d.source as any).x)
                .attr('y1', d => (d.source as any).y)
                .attr('x2', d => (d.target as any).x)
                .attr('y2', d => (d.target as any).y);
            nodes
                .selectAll('circle')
                .attr('cx', d => (d as any).x)
                .attr('cy', d => (d as any).y);
            nodes
                .selectAll('text')
                .attr('x', d => (d as any).x - 30)
                .attr('y', d => (d as any).y + 5);
        });

        return svg.node();
    }

}
