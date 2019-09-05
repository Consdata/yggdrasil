package pl.consdata.yggdrasil.skillbrowser.tree;

import org.springframework.stereotype.Component;
import pl.consdata.yggdrasil.skillbrowser.mindmup.MindMupMap;
import pl.consdata.yggdrasil.skillbrowser.mindmup.MindMupNode;

@Component
public class MindMupToTreeConverter {

    Tree mindMupToTree(MindMupMap map) {
        Tree result = new Tree();
        // narazie zalozenie ze jest jeden root drzewa jako pierwsza "idea" mapy
        result.setTreeTitle(map.getIdeas().get("1").getTitle());
        map.getIdeas().forEach((nodeIndex, nodeValue) -> result.getChildNodes().add(parseNode(nodeValue)));
        return result;
    }

    private TreeNode parseNode(MindMupNode mindMupNode) {
        TreeNode result = new TreeNode();
        result.setTitle(mindMupNode.getTitle());
        result.setId(mindMupNode.getId());
        if (mindMupNode.getIdeas() != null) {
            mindMupNode.getIdeas().forEach(
                    (nodeIndex, nodeValue) -> result.getChildNodes().add(parseNode(nodeValue)));
        }
        return result;
    }
}
