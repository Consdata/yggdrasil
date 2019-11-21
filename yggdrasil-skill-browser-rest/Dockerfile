FROM adoptopenjdk/openjdk8-openj9:slim

WORKDIR /app
COPY target/yggdrasil-skill-browser-rest-*jar app.jar

ENV JAVA_OPTS="-Xmx256m -Xss512k -XX:+UseSerialGC"
EXPOSE 8080

CMD java $JAVA_OPTS -jar app.jar --server.port 8080
