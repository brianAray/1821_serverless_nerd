# Docker Question Bank

## Level 1: Basic

<ol>
<li>What is Docker?</li>
<li>What are the benefits of using Docker?</li>
<li>What is a container in Docker?</li>
<li>What is the difference between a container and a virtual machine?</li>
<li>What are Docker images?</li>
<li>What is Docker Hub?</li>
<li>What is the Dockerfile files?</li>
<li>What is a Docker registry?</li>
<li>What is the command to run a Docker container?</li>
<li>How can you delete a Docker container?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>Docker is a containerization platform that allows you to package, deploy, and run applications in a portable and scalable way.</li>
<li>Docker provides benefits such as isolation, consistency, and efficiency, by allowing you to run applications in lightweight and secure containers, with a single source of truth for the application and its dependencies.</li>
<li>A container in Docker is a lightweight and standalone executable package that contains all the necessary software components and dependencies to run a specific application or service. Containers provide isolation and resource control, and can be easily created, deployed, and managed.</li>
<li>A container runs directly on the host operating system, while a virtual machine runs on a hypervisor that emulates the host environment. Containers are lighter and faster than virtual machines, and use less resources and overhead.</li>
<li>Docker images are the blueprints for Docker containers, and contain the application code, the runtime environment, and the configuration settings. Docker images can be created manually or automatically, and can be stored in a registry for sharing and reuse.</li>
<li>Docker Hub is a public repository for Docker images, where developers can find, store, and share images with others. Docker Hub also provides features such as automated builds, versioning, and security scanning.</li>
<li>Dockerfile files are configuration files that define the steps and components required to build and run a Docker container. Dockerfile specifies the application environment, dependencies, and commands.</li>
<li>A Docker registry is a storage and distribution system for Docker images, which can be public or private, and can be self-hosted or cloud-based. Docker registries allow developers to securely store, manage, and share Docker images, and provide features such as access control, audit logging, and scanning.</li>
<li>The command to run a Docker container is "docker run", followed by the image name, and any additional options or parameters. For example, "docker run -p 8080:80 nginx" runs a container from the Nginx image, and maps the port 8080 on the host to the port 80 in the container.</li>
<li>You can delete a Docker container using the "docker rm" command, followed by the container ID or name. For example, "docker rm mycontainer" deletes the container with the name "mycontainer".</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What is a Docker network, and how can you create and manage it?</li>
<li>How can you use Docker secrets to manage sensitive data in containers?</li>
<li>What are the health checks in Docker, and how can you use them?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>A Docker network is a virtual network that allows communication and data sharing between containers, without the need for port mapping or exposing the container ports to the host. Docker networks can be created using the "docker network" command, and can be customized with settings such as subnet, driver, and name resolution. Docker networks provide isolation and security, and can also improve the performance and scalability of containerized applications.</li>
<li>Docker secrets are a way to manage and protect sensitive data, such as passwords, keys, or certificates, in a containerized environment. Docker secrets are encrypted and stored securely in the Docker swarm, and can be accessed by the authorized services or containers. Docker secrets can be created using the "docker secret" command, and can be used in the container settings or environment variables.</li>
<li>Health checks in Docker are a way to monitor and ensure the health and availability of a container or a service. Health checks can be defined in the container settings or in the Docker Compose file, and can use various types of checks, such as TCP, HTTP, or custom scripts. Docker health checks can improve the reliability and availability of containerized applications, and can also provide automated recovery or scaling based on the health status.</li>
</ol>
</details>

## Level 3: Advanced

<ol>
<li>How can you use Docker to implement serverless?</li>
</ol>

<details>
<summary>Answer</summary>
<ol>
<li>To use Docker to implement serverless and event-driven architectures, you can use tools such as AWS Lambda, Azure Functions, or Google Cloud Functions, to run your code as lightweight and isolated Docker containers, and to scale and orchestrate them based on the incoming events or requests. You can also use serverless frameworks, such as Serverless or OpenFaaS, to simplify the deployment and management of the serverless functions, and to provide features such as auto-scaling, logging, and tracing. Some benefits of using Docker for serverless include improved performance, resource utilization, and consistency, and reduced operational and development overhead.</li>
</ol>
</details>