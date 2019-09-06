package pl.consdata.yggdrasil.skillbrowser.mindmup;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.consdata.yggdrasil.skillbrowser.tree.Tree;
import pl.consdata.yggdrasil.skillbrowser.tree.TreeParser;

import java.io.FileNotFoundException;
import java.io.FileReader;

@Service
@RequiredArgsConstructor
class MindMupTreeParser implements TreeParser {

    private final MindMupToTreeMapper mapper;

    @Override
    public Tree tree(final String path) {
        try {
            final MindMupMap map = new Gson().fromJson(new FileReader(path), MindMupMap.class);
            return mapper.asTree(map);
        } catch (final FileNotFoundException e) {
            throw new IllegalArgumentException(String.format("MindMup file does not exist [file=%s]", path));
        }
    }

    @Override
    public boolean isApplicable(String path) {
        return path.endsWith("mup");
    }

}
