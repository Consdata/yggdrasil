import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {combineLatest, Subject} from 'rxjs';
import {Network} from 'vis-network';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeNode} from '../skill-tree/skill-tree-node';

@Component({
    selector: 'yg-skill-browser-visjs',
    template: `
        <div class="skill-tree" #graph></div>
    `,
    styleUrls: ['./skill-browser-visjs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBrowserVisjsComponent implements AfterViewInit, OnDestroy, OnInit, OnChanges {

    @Input() tree: SkillTree;
    @ViewChild('graph', {static: true, read: ElementRef}) private graph: ElementRef<HTMLElement>;
    private network: Network;
    private graphElement$: Subject<HTMLElement> = new Subject();
    private tree$: Subject<SkillTree> = new Subject();

    constructor(private zone: NgZone) {
    }

    ngOnInit(): void {
        combineLatest(this.tree$, this.graphElement$).subscribe(
            ([tree, graphElement]) => {
                this.zone.runOutsideAngular(() => {
                    const data = {nodes: [], edges: []};
                    const travers = (node: SkillTreeNode, parent?: SkillTreeNode, depth = 0) => {
                        if (depth > 1) {
                            return;
                        }
                        data.nodes.push({
                            id: node.id,
                            label: node.title,
                            color: '#16A085'
                        });
                        if (parent) {
                            data.edges.push({
                                from: parent.id,
                                to: node.id
                            });
                        }
                        node.children.forEach(child => travers(child, node, depth + 1));
                    };
                    travers(tree.children[0]);
                    setTimeout(() => {
                            this.network = new Network(
                                this.graph.nativeElement,
                                data,
                                {
                                    layout: {
                                        improvedLayout: false
                                    }
                                }
                            );
                        },
                        0
                    );
                });
            }
        );
    }

    ngAfterViewInit(): void {
        this.graphElement$.next(this.graph.nativeElement);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.tree) {
            this.tree$.next(this.tree);
        }
    }

    ngOnDestroy(): void {
        if (this.network) {
            this.network.destroy();
        }
    }

}
