package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.Data;

import java.util.List;

@Data
class Tree {

    private String treeTitle;
    private List<TreeNode> childNodes;
}
