package pl.consdata.yggdrasil.skillbrowser.tree;

import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Tree {

    private String id;
    private String title;
    @Singular
    private List<TreeNode> children;

}
