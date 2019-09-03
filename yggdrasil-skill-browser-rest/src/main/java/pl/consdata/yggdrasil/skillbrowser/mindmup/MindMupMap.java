package pl.consdata.yggdrasil.skillbrowser.mindmup;

import lombok.Data;

import java.util.Map;

@Data
public class MindMupMap {
    private Map<String, MindMupNode> ideas;
}
