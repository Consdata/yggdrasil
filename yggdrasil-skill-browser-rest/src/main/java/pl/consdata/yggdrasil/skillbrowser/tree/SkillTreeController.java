package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SkillTreeController {

    @GetMapping("/mocktree")
    public Tree getMockTree() {
        return MockTree.getMockTree();
    }

    @GetMapping("/tree")
    public Tree getRealTree() {
        return treeParser.getParsedTree();
    }

    private final TreeParser treeParser;
}
