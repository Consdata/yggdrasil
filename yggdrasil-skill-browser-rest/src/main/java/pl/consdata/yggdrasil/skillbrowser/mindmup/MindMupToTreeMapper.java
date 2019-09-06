package pl.consdata.yggdrasil.skillbrowser.mindmup;

import org.springframework.stereotype.Service;
import pl.consdata.yggdrasil.skillbrowser.tree.Tree;
import pl.consdata.yggdrasil.skillbrowser.tree.TreeNode;

import java.util.*;
import java.util.stream.Collectors;

@Service
class MindMupToTreeMapper {

    Tree asTree(final MindMupMap map) {
        return Tree.builder()
            .id(UUID.randomUUID().toString())
            .title("Developer")
            .children(asTreeNodes(map.getIdeas().values()))
            .build();
    }

    private List<TreeNode> asTreeNodes(final Collection<MindMupNode> nodes) {
        return nodes.parallelStream().map(this::asTreeNode).collect(Collectors.toList());
    }

    private TreeNode asTreeNode(final MindMupNode node) {
        return TreeNode.builder()
            .id(node.getId())
            .title(node.getTitle())
            .children(asTreeNodes(node.getIdeas().values()))
            .build();
    }

}
