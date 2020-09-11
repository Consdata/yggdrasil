import {SkillTreeState} from './skill-tree.state';

export const skillTreeStateInitial: SkillTreeState = {
  nodes: {
    byId: {
      root: {
        name: 'Software Developer',
        id: 'root',
        children: ['frontend', 'webdev', 'storage', 'company', 'craftsmanship', 'common', 'cloud', 'security']
      },
      'frontend': {
        id: 'frontend',
        name: 'Frontend',
        children: ['frameworks', 'memes']
      },
      'webdev': {
        id: 'webdev',
        name: 'WebDev'
      },
      'storage': {
        id: 'storage',
        name: 'Storage'
      },
      'company': {
        id: 'company',
        name: 'Company'
      },
      'craftsmanship': {
        id: 'craftsmanship',
        name: 'Craftsmanship'
      },
      'common': {
        id: 'common',
        name: 'Common'
      },
      'cloud': {
        id: 'cloud',
        name: 'Cloud'
      },
      'security': {
        id: 'security',
        name: 'Security'
      },
      'memes': {
        id: 'memes',
        name: 'Memy',
      },
      'frameworks': {
        id: 'frameworks',
        name: 'Frameworki',
        children: ['angular', 'react', 'gwt'],
      },
      'angular': {
        id: 'angular',
        name: 'Angular'
      },
      'react': {
        id: 'react',
        name: 'React'
      },
      'gwt': {
        id: 'gwt',
        name: 'GWT'
      },
    }
  }
};
