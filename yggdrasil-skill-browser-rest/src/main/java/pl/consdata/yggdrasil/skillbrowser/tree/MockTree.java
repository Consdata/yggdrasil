package pl.consdata.yggdrasil.skillbrowser.tree;

import java.util.Arrays;
import java.util.List;

class MockTree {

    static Tree getMockTree() {
        Tree result = new Tree();
        result.setTreeTitle("Software Developer");

        List<TreeNode> nodes = Arrays.asList(
                TreeNode.builder().title("Company Man")
                        .childrenNodes(
                        Arrays.asList(
                                TreeNode.builder().title("OpenSource")
                                .childrenNodes(Arrays.asList(
                                        TreeNode.builder().title("Heimdall").build(),
                                        TreeNode.builder().title("Kafka Companion").build(),
                                        TreeNode.builder().title("SonarQube Companion").build(),
                                        TreeNode.builder().title("tsling-config").build(),
                                        TreeNode.builder().title("sasslint-config").build()
                                ))
                                .build(),
                                TreeNode.builder()
                                        .title("blot.condata.tech")
                                        .childrenNodes(Arrays.asList(
                                                TreeNode.builder().title("support").build(),
                                                TreeNode.builder().title("posts").build()
                                        ))
                                        .build(),
                                TreeNode.builder()
                                        .title("Consdathon")
                                        .childrenNodes(Arrays.asList(
                                                TreeNode.builder().title("organiser").build(),
                                                TreeNode.builder().title("paricipant").build()
                                        ))
                                        .build(),
                                TreeNode.builder()
                                        .title("Konferencje")
                                        .childrenNodes(Arrays.asList(
                                                TreeNode.builder().title("wystapienia").build()
                                        ))
                                        .build()
                        )
                ).build()
                , TreeNode.builder().title("temp")
                        .childrenNodes(
                                Arrays.asList(
                                        TreeNode.builder().title("znajomość osx")
                                                .build(),
                                        TreeNode.builder()
                                                .title("znajomość windows")
                                                .build(),
                                        TreeNode.builder()
                                                .title("ppliszko")
                                                .childrenNodes(Arrays.asList(
                                                        TreeNode.builder()
                                                                .title("Frontend")
                                                                .childrenNodes(Arrays.asList(
                                                                        TreeNode.builder()
                                                                                .title("HTML")
                                                                                .childrenNodes(Arrays.asList(
                                                                                        TreeNode.builder().title("HTML5").build(),
                                                                                        TreeNode.builder().title("znajomość standardu").build(),
                                                                                        TreeNode.builder().title("semantyczny html").build(),
                                                                                        TreeNode.builder().title("tagi i atrybuty").build(),
                                                                                        TreeNode.builder().title("wsparcie przeglądarek").build()
                                                                                ))
                                                                                .build(),
                                                                        TreeNode.builder()
                                                                                .title("stacking context")
                                                                                .build(),
                                                                        TreeNode.builder()
                                                                                .title("web components")
                                                                                .childrenNodes(Arrays.asList(
                                                                                        TreeNode.builder().title("custom elements").build(),
                                                                                        TreeNode.builder().title("shadow dom").build(),
                                                                                        TreeNode.builder().title("polymer").build(),
                                                                                        TreeNode.builder().title("html templates").build()
                                                                                )).build()

                                                                ))
                                                                .build()
                                                ))
                                                .build()
                                )
                        ).build()
        );
        result.setChildNodes(nodes);
        return result;
    }
}
