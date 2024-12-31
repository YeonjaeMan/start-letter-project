# Docker file

# jdk17 image Start
FROM openjdk:22-jdk
# 인자 정리 - Jar
ARG JAR_FILE=build/libs/*.jar
# jar File Copy
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-Dspring.profiles.active.active=docker", "-jar", "app.jar"]