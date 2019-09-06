package pl.consdata.yggdrasil.skillbrowser.mock;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import pl.consdata.yggdrasil.skillbrowser.tree.Tree;
import pl.consdata.yggdrasil.skillbrowser.tree.TreeNode;
import pl.consdata.yggdrasil.skillbrowser.tree.TreeParser;

import java.util.UUID;

@Service
class MockTreeParser implements TreeParser {

    @Override
    public Tree tree(String path) {
        return Tree.builder()
            .id(randomId())
            .title("Developer")
            .child(
                node().title("Developer")
                    .child(
                        node().title("Craftsmanship")
                            .child(
                                node().title("Design Patterns")
                                    .build()
                            )
                            .build()
                    )
                    .child(
                        node().title("Frontend")
                            .child(
                                node().title("Frameworks")
                                    .build()
                            )
                            .build()
                    )
                    .build()
            )
            .build();
    }

    @Override
    public boolean isApplicable(String path) {
        return StringUtils.isEmpty(path);
    }

    private static TreeNode.TreeNodeBuilder node() {
        return TreeNode.builder().id(randomId());
    }

    private static String randomId() {
        return UUID.randomUUID().toString();
    }

}
