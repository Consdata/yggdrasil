import * as fs from 'fs';
import * as xml2js from 'xml2js';

let currentId = 1;

function asRawNodesById(result) {
  const nodesById = {};
  const scanNode = (node, depth, parent?) => {
    const id = currentId++;
    nodesById[id] = {
      id: id,
      name: node.$.TEXT,
      children: [],
      parent: parent?.id
    };
    if (parent) {
      parent.children.push(id);
    }
    if (node.node) {
      node.node.forEach(child => scanNode(child, depth + 1, nodesById[id]));
    }
  };
  scanNode(result.map.node[0], 0);
  return nodesById;
}

function asYggdrasilFormat(nodesById) {
  const root = nodesById[1];
  const result = {};
  const fillNode = (node, parent?) => {
    const path = parent ? [...parent.path, node.id] : [node.id];
    const created = result[node.id] = {
      id: node.id,
      name: node.name,
      path: path,
      children: node.children
        ?.map(child => nodesById[child])
        .map(node => ({
          id: node.id,
          name: node.name,
          path: [...path, node.id]
        })) ?? [],
      siblings: parent ? [...parent.children.filter(child => child.id !== node.id)] : [],
      breadcrumbs: []
    };
    created.breadcrumbs = parent ? [
      parent.path.map(id => result[id])
        .map(node => ({
          id: node.id,
          name: node.name,
          path: node.path
        }))
    ] : [[]];
    node.children?.map(child => nodesById[child]).forEach(node => fillNode(node, created));
  };
  fillNode(root, undefined);
  return result;
}

(() => {
  const parser = new xml2js.Parser();
  fs.readFile(__dirname + '/skill-tree.mm', (fsErr, data) => {
    parser.parseString(data, (err, result) => {
      const nodesById = asRawNodesById(result);
      const yggdrasilFormat = asYggdrasilFormat(nodesById);
      const output = `export const skillTreeDump = ${JSON.stringify(yggdrasilFormat, undefined, 2)};`;
      fs.writeFile(__dirname + '/../../apps/web-app/src/app/features/skill-tree/dump/skill-tree-dump.ts', output, err => console.log(err));
    })
  });
})();
