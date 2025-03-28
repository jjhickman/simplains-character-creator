FROM eclipse-temurin:21-jdk-alpine AS build_stage

RUN apk update && apk add findutils

COPY ./character-creator /character-creator
WORKDIR /character-creator/
RUN ./gradlew clean bootJar

FROM eclipse-temurin:21-jre-ubi9-minimal
WORKDIR /character-creator
COPY --from=build_stage /character-creator/build/libs/simplains-character-creator.jar .
CMD ["java","-jar","/character-creator/simplains-character-creator.jar"]