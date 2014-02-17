SapUI5 for Maven
===========
SAP UI5 for Maven, or UI5MVN for short, is a template project designed to quickly get you up and running with SAP UI5 on SAP Netweaver Cloud.

##The project
UI5MVN consists of a simple sample application that reads data from the SAP Gateway Demo System with the help of OData and presents it using SAPUI5. The project is meant to be used as a starting point for Hana Netweaver Cloud development, and the focus has been to streamline the development process with the help of best of bred open source tools.
* Source Versioning is with GitHUB
* Maven is used as dependency and build tool
* The project is editor agnostic, but it has been tested using Eclipse

##Prerequisites:
* Java 6 or later - get it from http://www.oracle.com/technetwork/java/javase/downloads/index.html
* Maven - get it from http://maven.apache.org/
* SAP Hana Cloud Platform SDK - get it from https://tools.hana.ondemand.com/#cloud
* Hana Cloud Platform trial account - get it from https://account.hanatrial.ondemand.com/
* Hana Cloud Maven Plugin - get it at https://github.com/SAP/cloud-maven-plugin
* SAP Gateway Demo System user - apply at http://scn.sap.com/docs/DOC-31221

##Installation
1. Clone the  project from the git repository to a directory of your choice. 
2. Rename or copy the following files:
  * `pom.xml.local` to `pom.xml`
  * `nwcloud.properties` to `nwcloud.properties.local`
  * `src/main/destinations/Gateway.local` to `src/main/destinations/Gateway`
3. Edit the property `<nw.cloud.sdk.path>` in `pom.xml` to point to your local SAP Hana Cloud Platform SDK 
4. Edit the following properties in `nwcloud.properties`
  * `sdk.disdk.dir` to point to your local SAP Hana Cloud Platform SDK 
  * `account` - your Hana Cloud Platform account
  * `user` - your Hana Cloud Platform user
  * `password` - Your Hana Cloud Platform password
5. Edit your username and password in `src/main/destinations/Gateway`
5. Build and install using maven 
  ```mvn clean install```
6. Deploy to your local Hana Cloud Server ```mvn nwcloud:deploy-local```
7. Start your local Hana Cloud Server ```mvn nwcloud:start-local```
8. Browse to the start page ```http://localhost:8080/SapUI5-for-Maven/```
