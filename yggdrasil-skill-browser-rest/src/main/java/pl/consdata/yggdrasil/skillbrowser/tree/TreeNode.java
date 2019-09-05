package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
class TreeNode {

    private String title;
    private List<TreeNode> childNodes = new ArrayList<>();
}
