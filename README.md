# Employee Managment System

## Building

### Building with docker-compose

Simplest way to preview application is to use docker-compose:

```bash
docker-compose up
```

Web client should be running on localhost:3000 for preview

### Building manualy

#### Backend

Java project was developed with Java 17. Ensure that compatible version exists in the system

1. Go inside server directory
2. Use command ```mvnw package``` (```mvnw.cmd package``` on Windows)
3. Lauch server with ```java -jar target/server-0.0.1-SNAPSHOT.jar```

#### Frontend

1. Go inside client directory
2. Use command ```yarn install```
3. Launch with ```yarn dev```
4. Web client should be running on localhost:3000 for preview

## Input file

Valid csv file has to have a header with name, email, phone fields as first line of the file. Example how such file should look like is provided in employee.csv file (generated using fake_data.py script)
