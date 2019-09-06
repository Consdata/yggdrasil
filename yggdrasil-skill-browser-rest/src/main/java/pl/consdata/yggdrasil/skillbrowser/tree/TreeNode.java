package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TreeNode {

    private String title;
    private String id;
    @Singular
    private List<TreeNode> children;

}
