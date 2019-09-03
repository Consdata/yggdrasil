package pl.consdata.yggdrasil.skillbrowser;

import com.google.gson.Gson;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.json.GsonJsonParser;
import pl.consdata.yggdrasil.skillbrowser.mindmup.MindMupMap;

import java.io.InputStream;
import java.io.InputStreamReader;

@SpringBootApplication
public class YggdrasilSkillBrowserApplication {

    public static void main(String[] args) {
        SpringApplication.run(YggdrasilSkillBrowserApplication.class, args);
    }

}
