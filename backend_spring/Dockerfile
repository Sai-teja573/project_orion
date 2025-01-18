FROM maven:3.8.5-openjdk-17-slim

WORKDIR /app
COPY . .

EXPOSE 8080

RUN mvn clean install

CMD mvn spring-boot:run