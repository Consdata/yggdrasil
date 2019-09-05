package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TreeGetter {

    Tree getTree() {
        if (treeInstance == null) {
            this.treeInstance = treeParser.getParsedTree();
        }
        return treeInstance;
    }

    private final TreeParser treeParser;

    private Tree treeInstance;
}
