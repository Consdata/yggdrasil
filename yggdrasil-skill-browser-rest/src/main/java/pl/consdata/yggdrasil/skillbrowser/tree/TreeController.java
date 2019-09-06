package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tree")
class TreeController {

    private final TreeService treeService;

    @GetMapping("")
    public Tree tree() {
        return treeService.tree();
    }

}
