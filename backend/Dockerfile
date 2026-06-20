FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw || true
RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","target/agrigenius-1.0.0.jar"]