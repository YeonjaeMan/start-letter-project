# jdk17 image Start
FROM openjdk:17-jdk

# 작업 디렉토리
WORKDIR /app

# 인자 정리 - Jar
ARG JAR_FILE=build/libs/*.jar

# jar 파일 복사
COPY ${JAR_FILE} app.jar

# 어플리케이션 실행
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
