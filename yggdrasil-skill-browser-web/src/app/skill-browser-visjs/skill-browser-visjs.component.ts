import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {SkillTree} from '../skill-tree/skill-tree';

@Component({
    selector: 'yg-skill-browser-visjs',
    template: `
        skill-browser-visjs works!
    `,
    styleUrls: ['./skill-browser-visjs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBrowserVisjsComponent {

    @Input() tree: SkillTree;

}
