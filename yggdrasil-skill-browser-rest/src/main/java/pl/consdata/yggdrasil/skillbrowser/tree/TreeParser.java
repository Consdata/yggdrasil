package pl.consdata.yggdrasil.skillbrowser.tree;

public interface TreeParser {

    Tree tree(String path);

    boolean isApplicable(String path);

}
