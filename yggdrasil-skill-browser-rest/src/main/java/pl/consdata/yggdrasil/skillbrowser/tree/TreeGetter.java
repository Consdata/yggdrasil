package pl.consdata.yggdrasil.skillbrowser.tree;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class TreeGetter {

    public TreeGetter(TreeParser treeParser) {
        CacheLoader<String, Tree> loader;

        loader = new CacheLoader<String, Tree>() {
            @Override
            public Tree load(String key) {
                return treeParser.getParsedTree();
            }
        };

        this.cache = CacheBuilder
                .newBuilder()
                .expireAfterWrite(CACHE_TIMEOUT_SECS, TimeUnit.SECONDS)
                .build(loader);
    }

    Tree getTree() {
        return cache.getUnchecked(CACHE_KEY);
    }

    private LoadingCache<String, Tree> cache;

    private final static String CACHE_KEY = "TREE";

    private final static Integer CACHE_TIMEOUT_SECS = 60;
}
