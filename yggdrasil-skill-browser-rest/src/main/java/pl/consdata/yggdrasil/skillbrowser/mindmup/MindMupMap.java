package pl.consdata.yggdrasil.skillbrowser.mindmup;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
class MindMupMap {
    private Map<String, MindMupNode> ideas = new HashMap<>();
}
