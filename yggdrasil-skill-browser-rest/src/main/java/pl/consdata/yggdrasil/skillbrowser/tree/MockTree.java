package pl.consdata.yggdrasil.skillbrowser.tree;

import java.util.Arrays;
import java.util.List;

class MockTree {

    static Tree getMockTree() {
        Tree result = new Tree();
        result.setTreeTitle("Software Developer");

        List<TreeNode> nodes = Arrays.asList(
                TreeNode.builder().title("Company Man").id("6")
                        .childNodes(
                        Arrays.asList(
                                TreeNode.builder().title("OpenSource").id("7")
                                .childNodes(Arrays.asList(
                                        TreeNode.builder().title("Heimdall").id("1").build(),
                                        TreeNode.builder().title("Kafka Companion").id("2").build(),
                                        TreeNode.builder().title("SonarQube Companion").id("3").build(),
                                        TreeNode.builder().title("tsling-config").id("4").build(),
                                        TreeNode.builder().title("sasslint-config").id("5").build()
                                ))
                                .build(),
                                TreeNode.builder()
                                        .title("blot.condata.tech").id("8")
                                        .childNodes(Arrays.asList(
                                                TreeNode.builder().title("support").id("9").build(),
                                                TreeNode.builder().title("posts").id("10").build()
                                        ))
                                        .build(),
                                TreeNode.builder()
                                        .title("Consdathon").id("11")
                                        .childNodes(Arrays.asList(
                                                TreeNode.builder().title("organiser").id("12").build(),
                                                TreeNode.builder().title("paricipant").id("13").build()
                                        ))
                                        .build(),
                                TreeNode.builder()
                                        .title("Konferencje")
                                        .id("14")
                                        .childNodes(Arrays.asList(
                                                TreeNode.builder().title("wystapienia").id("15").build()
                                        ))
                                        .build()
                        )
                ).build()
                , TreeNode.builder().title("temp").id("16")
                        .childNodes(
                                Arrays.asList(
                                        TreeNode.builder().title("znajomość osx").id("17")
                                                .build(),
                                        TreeNode.builder()
                                                .title("znajomość windows").id("18")
                                                .build(),
                                        TreeNode.builder()
                                                .title("ppliszko").id("19")
                                                .childNodes(Arrays.asList(
                                                        TreeNode.builder()
                                                                .title("Frontend").id("20")
                                                                .childNodes(Arrays.asList(
                                                                        TreeNode.builder()
                                                                                .title("HTML").id("21")
                                                                                .childNodes(Arrays.asList(
                                                                                        TreeNode.builder().title("HTML5").id("22").build(),
                                                                                        TreeNode.builder().title("znajomość standardu").id("23").build(),
                                                                                        TreeNode.builder().title("semantyczny html").id("24").build(),
                                                                                        TreeNode.builder().title("tagi i atrybuty").id("25").build(),
                                                                                        TreeNode.builder().title("wsparcie przeglądarek").id("26").build()
                                                                                ))
                                                                                .build(),
                                                                        TreeNode.builder()
                                                                                .title("stacking context").id("27")
                                                                                .build(),
                                                                        TreeNode.builder()
                                                                                .title("web components").id("28")
                                                                                .childNodes(Arrays.asList(
                                                                                        TreeNode.builder().title("custom elements").id("29").build(),
                                                                                        TreeNode.builder().title("shadow dom").id("30").build(),
                                                                                        TreeNode.builder().title("polymer").id("31").build(),
                                                                                        TreeNode.builder().title("html templates").id("32").build()
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
