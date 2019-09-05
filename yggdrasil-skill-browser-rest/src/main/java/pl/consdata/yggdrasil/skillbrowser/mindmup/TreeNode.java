package pl.consdata.yggdrasil.skillbrowser.mindmup;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
class TreeNode {

    private String title;
    private List<TreeNode> childrenNodes = new ArrayList<>();
}
