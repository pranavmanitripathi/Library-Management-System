<h1 align="center">
    <br>
    Library Management System
    <br>
</h1>

<p align="center">
    <a href="https://spring.io/projects/spring-boot/">
    <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="Spring Boot">
    </a>
    <a href="https://angular.io/">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
    alt="Angular">
    </a>
    <a href="https://www.mysql.com/">
     <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
    </a>
    <a href="https://hibernate.org/">
     <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white" alt="Hibernate">
    </a>
    <a href="https://maven.apache.org/">
     <img src="https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Maven">
    </a>
    <a href="https://getbootstrap.com/">
     <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
    </a>
</p>


## Overview 
A full stack application using Spring Boot, Angular and MySQL. 
* This is a Library Management System with an Admin and a User side for the application. 
* Admin can perform CRUD with books/users. 
* User can borrow and return a book. 

<br>

# Application Properties
```
server.port = yourPreferredPortNumber
spring.datasource.url = jdbc:mysql://localhost:3306/yourSchemaName
spring.datasource.username = yourUsername
spring.datasource.password = yourPassword
```

# Development
* Frontend
```
npm install
```
* Backend
```
mvn install
```

# Build
* Frontend
```
ng serve
```

* Backend
```
mvn spring-boot:run
```
