package pl.consdata.yggdrasil.skillbrowser.version;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersionController {

    @GetMapping
    public String versionGet() {
        return "yggdrasil";
    }

}
