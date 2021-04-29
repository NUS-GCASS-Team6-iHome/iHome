FROM openjdk:8
# ADD target/booking-service-0.0.1-SNAPSHOT.jar booking-service-0.0.1-SNAPSHOT.jar
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} bookService.jar
EXPOSE 8085
ENTRYPOINT ["java","-jar","/bookService.jar"]