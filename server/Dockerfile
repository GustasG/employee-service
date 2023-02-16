# Build steps
FROM maven:3.8.7-eclipse-temurin-17-alpine AS build
WORKDIR /build

COPY . .

RUN mvn package -Dmaven.test.skip

# Runtime steps
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

EXPOSE 8080

COPY --from=build /build/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]