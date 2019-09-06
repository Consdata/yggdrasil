package pl.consdata.yggdrasil.skillbrowser.mindmup;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
class MindMupNode {
    private String id;
    private String title;
    private Map<String, MindMupNode> ideas = new HashMap<>();
}
