package pl.consdata.yggdrasil.skillbrowser.mindmup;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SkillTreeController {

    @GetMapping("/tree")
    public Tree getTree() {
        return MockTree.getMockTree();
    }
}
