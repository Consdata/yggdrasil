package pl.consdata.yggdrasil.skillbrowser.mindmup;

import lombok.Data;

import java.util.Map;

@Data
public class MindMupNode {
    private String id;
    private String title;
    private Map<String, MindMupNode> ideas;
}
