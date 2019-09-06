package pl.consdata.yggdrasil.skillbrowser.tree;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
class TreeService {

    public TreeService(
        final List<TreeParser> parsers,
        @Value("${tree.path:}") final String treePath) {
        this.parsers = parsers;
        this.treePath = treePath;
    }

    private static final String ROOT_TREE = "root";
    private final List<TreeParser> parsers;
    private final String treePath;
    private LoadingCache<String, Tree> cache;

    @PostConstruct
    private void buildCache() {
        cache = CacheBuilder.newBuilder()
            .expireAfterWrite(60, TimeUnit.SECONDS)
            .build(new CacheLoader<String, Tree>() {
                @Override
                public Tree load(final String key) {
                    return parsers
                        .stream()
                        .filter(parser -> parser.isApplicable(treePath))
                        .findFirst()
                        .map(parser -> parser.tree(treePath))
                        .orElseThrow(() -> new IllegalStateException(String.format("Missing parser for map file: %s", treePath)));
                }
            });
    }

    public Tree tree() {
        return cache.getUnchecked(ROOT_TREE);
    }

}
