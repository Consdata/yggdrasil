package pl.consdata.yggdrasil.skillbrowser.tree;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import pl.consdata.yggdrasil.skillbrowser.mindmup.MindMupMap;

import java.io.FileReader;
import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class TreeParser {

    Tree getParsedTree() {
        MindMupMap map;
        try {
            Gson gson = new Gson();
            FileReader fileReader = new FileReader(filePath);
            map = gson.fromJson(fileReader, MindMupMap.class);
        } catch (IOException e) {
            log.error("Could not read file with path = {}", filePath);
            return null;
        }
        return mindMupToTreeConverter.mindMupToTree(map);
    }


    @Value("${mindmup.filepath}")
    private String filePath;

    private final MindMupToTreeConverter mindMupToTreeConverter;
}
