FROM openjdk:11-jre-slim
WORKDIR usr/src
EXPOSE 8090
ENV MYSQL_URL jdbc:mysql://mysql:3306/userdb
ENV MYSQL_USERNAME root
ENV MYSQL_PASSWORD password
COPY ./target/UserService-0.0.1-SNAPSHOT.jar /usr/src/UserService-0.0.1-SNAPSHOT.jar
RUN chgrp -R 0 /usr
RUN chmod -R g=u /usr
USER 1001
ENTRYPOINT ["java","-jar","UserService-0.0.1-SNAPSHOT.jar"]
