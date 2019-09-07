import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {SkillTree} from '../skill-tree/skill-tree';
import {SkillTreeNode} from '../skill-tree/skill-tree-node';

interface TreeNode {
    id: string;
    title: string;
    nodes: TreeNode[];
    color: string;
    links: string[];
}

interface SkillTreeIndex {
    [key: string]: FlatTreeNode;
}

interface FlatTreeNode {
    id: string;
    title: string;
    children: string[];
    parent: string;
    breadcrumb: string[];
}

@Injectable()
export class SkillBrowserState {

    readonly tree$: Subject<TreeNode[]> = new Subject();

    private nodeIndex: SkillTreeIndex;
    private currentNode: string;

    constructor() {
    }

    setTree(tree: SkillTree) {
        this.nodeIndex = this.flatTree(tree);
        this.currentNode = this.nodeIndex.root.id;
        this.tree$.next(this.buildTree(this.currentNode));
    }

    nodeSelected(node: TreeNode): void {
        if (this.nodeIndex[node.id].children.length > 0) {
            if (this.currentNode !== node.id) {
                this.currentNode = node.id;
                this.tree$.next(this.buildTree(node.id));
            }
        } else {
            console.log('Tutej będą newsy na temat tego cuda');
        }
    }

    private flatTree(tree: SkillTree): SkillTreeIndex {
        const nodes: SkillTreeIndex = {};
        const travers = (node: SkillTreeNode, parent: string) => {
            nodes[node.id] = {
                id: node.id,
                title: node.title,
                children: (node.children || []).map(n => n.id),
                parent,
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
        for (const bread of node.breadcrumb.map(br => this.nodeIndex[br])) {
            breadcrumb.push({
                id: bread.id,
                title: bread.title,
                nodes: [],
                links: [lastBread.id],
                color: '#2C3E50',
            });
            lastBread = bread;
        }

        return [
            {
                id: node.id,
                title: node.title,
                nodes: node.children
                    .map(child => this.nodeIndex[child])
                    .map(child => ({
                        id: child.id,
                        title: child.title,
                        nodes: child.children.length > 0 ? [this.collapsedChildNode()] : [],
                        color: child.children.length > 0 ? '#16A085' : '#2ecc71',
                        collapsed: true
                    })),
            },
            ...breadcrumb
        ];
    }

    private collapsedChildNode(): TreeNode {
        return {
            id: 'hidden-node',
            color: '',
            links: [],
            nodes: [],
            title: 'hidden-node'
        };
    }

}
