package pl.consdata.yggdrasil.skillbrowser.freemind;

import org.springframework.stereotype.Service;
import pl.consdata.yggdrasil.skillbrowser.tree.Tree;
import pl.consdata.yggdrasil.skillbrowser.tree.TreeNode;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
class FreeMindToTreeMapper {

    Tree asTree(final FreeMindMap map) {
        return Tree.builder()
            .id(UUID.randomUUID().toString())
            .title(map.node.text)
            .children(asTreeNodes(map.node.nodes))
            .build();
    }

    private List<TreeNode> asTreeNodes(final Collection<FreeMindNode> nodes) {
        return nodes.parallelStream().map(this::asTreeNode).collect(Collectors.toList());
    }

    private TreeNode asTreeNode(final FreeMindNode node) {
        return TreeNode.builder()
            .id(node.id)
            .title(node.text)
            .children(node.nodes != null ? asTreeNodes(node.nodes) : Collections.emptyList())
            .build();
    }

}
