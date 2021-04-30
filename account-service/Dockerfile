FROM openjdk:8
# ADD target/account-service-0.0.1-SNAPSHOT.jar account-service-0.0.1-SNAPSHOT.jar
#test
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} accountService.jar
EXPOSE 9003
ENTRYPOINT ["java","-jar","/accountService.jar"]