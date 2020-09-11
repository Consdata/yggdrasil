import {SkillTreeState} from './skill-tree.state';

export const skillTreeStateInitial: SkillTreeState = {
    nodes: {
      byId: {
        root: {
          name: 'Software Developer',
          id: 'root',
          path: ['root'],
          children: [
            {id: 'frontend', name: 'Frontend', path: ['root', 'frontend']},
            {id: 'webdev', name: 'WebDev', path: ['root', 'webdev']},
            {id: 'storage', name: 'Storage', path: ['root', 'storage']},
          ],
          breadcrumbs: [[]]
        },
        'frontend': {
          id: 'frontend',
          name: 'Frontend',
          path: ['root', 'frontend'],
          children: [
            {id: 'frameworks', name: 'Frameworks', path: ['root', 'frontend', 'frameworks']},
          ],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}]],
          siblings: [
            {id: 'webdev', name: 'WebDev', path: ['root', 'webdev']},
            {id: 'storage', name: 'Storage', path: ['root', 'storage']},
          ]
        },
        'webdev': {
          id: 'webdev',
          name: 'WebDev',
          path: ['root', 'webdev'],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}]],
          siblings: [
            {id: 'frontend', name: 'Frontend', path: ['root', 'frontend']},
            {id: 'storage', name: 'Storage', path: ['root', 'storage']},
          ]
        },
        'storage': {
          id: 'storage',
          name: 'Storage',
          path: ['root', 'storage'],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}]],
          siblings: [
            {id: 'frontend', name: 'Frontend', path: ['root', 'frontend']},
            {id: 'webdev', name: 'WebDev', path: ['root', 'webdev']},
          ]
        },
        'frameworks': {
          id: 'frameworks',
          name: 'Frameworks',
          path: ['root', 'frontend', 'frameworks'],
          children: [
            {id: 'angular', name: 'Angular', path: ['root', 'frontend', 'frameworks', 'angular']},
            {id: 'react', name: 'React', path: ['root', 'frontend', 'frameworks', 'react']},
            {id: 'gwt', name: 'GWT', path: ['root', 'frontend', 'frameworks', 'gwt']},
          ],
          siblings: [],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}, {id: 'frontend', name: 'Frontend', path: ['root', 'frontend']}]]
        },
        'angular': {
          id: 'angular',
          name: 'Angular',
          path: ['root', 'frontend', 'frameworks', 'angular'],
          siblings: [
            {id: 'react', name: 'React', path: ['root', 'frontend', 'frameworks', 'react']},
            {id: 'gwt', name: 'GWT', path: ['root', 'frontend', 'frameworks', 'gwt']},
          ],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}, {
            id: 'frontend',
            name: 'Frontend',
            path: ['root', 'frontend']
          }, {id: 'frameworks', name: 'Frameworks', path: ['root', 'frontend', 'frameworks']}]]
        },
        'react': {
          id: 'react',
          name: 'React',
          path: ['root', 'frontend', 'frameworks', 'react'],
          siblings: [
            {id: 'angular', name: 'Angular', path: ['root', 'frontend', 'frameworks', 'angular']},
            {id: 'gwt', name: 'GWT', path: ['root', 'frontend', 'frameworks', 'gwt']},
          ],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}, {
            id: 'frontend',
            name: 'Frontend',
            path: ['root', 'frontend']
          }, {id: 'frameworks', name: 'Frameworks', path: ['root', 'frontend', 'frameworks']}]]
        },
        'gwt': {
          id: 'gwt',
          name: 'GWT',
          path: ['root', 'frontend', 'frameworks', 'gwt'],
          siblings: [
            {id: 'angular', name: 'Angular', path: ['root', 'frontend', 'frameworks', 'angular']},
            {id: 'react', name: 'React', path: ['root', 'frontend', 'frameworks', 'react']},
          ],
          breadcrumbs: [[{id: 'root', name: 'Software Developer', path: ['root']}, {
            id: 'frontend',
            name: 'Frontend',
            path: ['root', 'frontend']
          }, {id: 'frameworks', name: 'Frameworks', path: ['root', 'frontend', 'frameworks']}]]
        },
      }
    }
  }
;
