FROM openjdk:8
# ADD target/rating-service-0.0.1-SNAPSHOT.jar rating-service-0.0.1-SNAPSHOT.jar
#test
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} ratingService.jar
EXPOSE 9002
ENTRYPOINT ["java","-jar","/ratingService.jar"]