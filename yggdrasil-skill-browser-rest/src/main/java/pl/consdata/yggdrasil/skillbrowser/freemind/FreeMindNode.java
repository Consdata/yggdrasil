package pl.consdata.yggdrasil.skillbrowser.freemind;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import java.util.List;

public class FreeMindNode {

    @JacksonXmlProperty(localName = "ID")
    public String id;
    @JacksonXmlProperty(localName = "TEXT")
    public String text;
    @JacksonXmlProperty(localName = "node")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<FreeMindNode> nodes;

}
