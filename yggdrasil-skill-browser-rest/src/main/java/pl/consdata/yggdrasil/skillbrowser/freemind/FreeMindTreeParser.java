package pl.consdata.yggdrasil.skillbrowser.freemind;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.consdata.yggdrasil.skillbrowser.tree.Tree;
import pl.consdata.yggdrasil.skillbrowser.tree.TreeParser;

import java.io.File;
import java.io.IOException;

@Service
@AllArgsConstructor
public class FreeMindTreeParser implements TreeParser {

    private final FreeMindToTreeMapper mapper;

    @Override
    public Tree tree(final String path) {
        try {
            final XmlMapper xmlMapper = new XmlMapper();
            xmlMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            final FreeMindMap tree = xmlMapper.readValue(new File(path), FreeMindMap.class);
            return mapper.asTree(tree);
        } catch (final IOException exception) {
            throw new RuntimeException("Can't parse freemind tree file", exception);
        }
    }

    @Override
    public boolean isApplicable(String path) {
        return path.endsWith("mm");
    }

}
