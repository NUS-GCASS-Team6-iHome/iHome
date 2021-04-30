FROM openjdk:8
# ADD target/PaymentService-0.0.1-SNAPSHOT.jar PaymentService-0.0.1-SNAPSHOTT.jar
#test
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} paymentService.jar
EXPOSE 9001
ENTRYPOINT ["java","-jar","/paymentService.jar"]