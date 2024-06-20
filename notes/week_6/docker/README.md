# What is Docker?
Docker is an open-source platform that allows developers to build, ship, and run applications in containers. Containers are lightweight, portable, and self-contained environments that can run on any machine with Docker installed. The typical use case is to simplify the process of deploying applications by providing a consistent environment for development, testing, and production. The software is used by many companies, including Microsoft, IBM, Netflix, Spotify, and Uber

# Containerization
Containerization is a software deployment process that involves bundling an application's code with all the files and libraries it needs to run on any infrastructure. Traditionally, to run any application on your computer, you had to install the version that matched your machine's operating system. For example, you needed to install the Windows version of a software package on a Windows machine. However, with containerization, you can create a single software package, or container, that runs on all types of devices and operating systems. Developers use containerization to build and deploy modern applications because of the following advantages:

- **Portability**: Containerization allows developers to deploy applications in multiple environments without rewriting the program code. They build an application once and deploy it on multiple operating systems. For example, they run the same containers on Linux and Windows operating systems
- **Scalability**: Containers are lightweight software components that run efficiently. For example, a virtual machine can launch a containerized application faster because it doesn't need to boot an operating system. Therefore, software developers can easily add multiple containers for different applications on a single machine. The container cluster uses computing resources from the same shared operating system, but one container doesn't interfere with the operation of other containers 
- **Fault tolerance**: Software development teams use containers to build fault-tolerant applications. They use multiple containers to run microservices on the cloud. Because containerized microservices operate in isolated user spaces, a single faulty container doesn't affect the other containers. This increases the resilience and availability of the application
- **Agility**: Containerized applications run in isolated computing environments. Software developers can troubleshoot and change the application code without interfering with the operating system, hardware, or other application services. They can shorten software release cycles and work on updates quickly with the container model

# Container vs VM
| **Feature** | **Virtual Machine** | **Container** |
|-------------|---------------------|-----------------|
| **Isolation** | Provides complete isolation from the host operating system and other VMs. | Typically provides lightweight isolation from the host and other containers, but doesn't provide as strong a security boundary as a VM. |
| **Operating system** | Runs a complete operating system including the kernel, thus requiring more system resources. | Runs the user mode portion of an operating system, and can be tailored to contain just the needed services for your app, using fewer system resources. |
| **Operating system updates and upgrades** | Download and install operating system updates on each VM. Installing a new operating system version requires upgrading or often just creating an entirely new VM. | Containers share the host operating system kernel, so updating or upgrading the kernel updates all containers that use it. |

VMs are going to be more useful when you need to isolate your environment and you need to be able to control the underlying software. Containers are going to be more useful when you don't need to manage the underlying software

# Docker Architecture
Docker uses a client-server architecture. The Docker client communicates with the Docker daemon, which performs the heavy lifting of building, running, and distributing Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The architecture of Docker consists of four major components: **Docker Client**, **Docker Registry**, **Docker Host**, and **Docker Objects** 

- Docker client is responsible for sending commands to the Docker daemon and receiving responses. 
- Docker registry is a repository that stores Docker images, which are used to create containers. 
- Docker host is the machine that runs the Docker daemon and containers. 
- Docker objects are the fundamental entities that make up the architecture of Docker
    - images
    - containers
    - services
    - networks
    - volumes

When you run a container using Docker, it creates a read-write layer on top of an existing image. This layer is called a container layer or container filesystem. The container layer is where all changes made to the container are stored

# Docker Daemon
The Docker daemon is a background process that runs on the host operating system and manages Docker objects such as images, containers, networks, and volumes. It listens for Docker API requests and manages Docker objects accordingly.

When the Docker client sends a request to the daemon, the daemon performs the requested action, such as pulling an image from a registry or starting a container. The daemon also manages the lifecycle of Docker objects. For example, when a container is stopped or deleted, the daemon removes it from the system. The lifecyle includes:
- created
- running
- paused
- stopped
- killed

# Docker Image
A Docker image is a read-only template that contains a set of instructions for creating a container that can run on the Docker platform. It provides a convenient way to package up applications and preconfigured server environments, which you can use for your own private use or share publicly with other users. 

Docker images are created using a Dockerfile, which is a text file that contains instructions for building the image. The Dockerfile specifies the base image to use, the commands to run, and the files to include in the image.

# Docker Registry
An image registry is a repository that stores and manages Docker images. It provides a central location for storing and sharing Docker images with other users. Docker Hub is the default public registry for Docker images, which contains thousands of images created by other users. You can also create your own private registry to store your own images.

There are several open-source and commercial image registries available, such as Harbor, GitLab Container Registry, and Docker Trusted Registry. These registries provide additional features such as access control, security scanning, and replication.

To use a private registry, you need to authenticate with the registry using your Docker credentials. You can then push your local images to the registry using the docker push command and pull images from the registry using the docker pull command.

# Docker Container
Docker containers are a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. They are created via their image: a lightweight, standalone, executable package of software that includes everything needed to run an application. This includes code, runtime, system tools, system libraries, and settings. Container images become containers at runtime. They isolate software from its environment and ensure that it works uniformly despite differences between development and staging

Docker containers are available for both Linux and Windows-based applications, and containerized software will always run the same, regardless of the infrastructure. They share the machine¿s OS system kernel and therefore do not require an OS per application, and applications are typically more secure in containers due to their isolation from other apps and environments.

# Docker: Volume
Docker volumes are a special kind of directory that is managed by Docker and can be used to persist data generated by and used by Docker containers, and are managed by Docker itself. Volumes have several advantages over bind mounts: for example, volumes are easier to back up or migrate than bind mounts, can be more safely shared among multiple containers, and can be managed using Docker CLI commands or the Docker API. In addition, volume drivers let you store volumes on remote hosts or cloud providers, encrypt the contents of volumes, or add other functionality.

To make a volume you can use the docker CLI

```cli
docker volume create my_volume
```

Once you have your volume you can mount it to a container

```cli
docker run --mount source=my_volume,target=/data image_name
```

Now any data inside the "data" directory of the container made from "image_name" will be mounted in your volume called "my_volume"

# Best practices
**Keep your images small**: Small images are faster to pull over the network and faster to load into memory when starting containers or services. You can start with an appropriate base image, use multistage builds, and consolidate multiple commands into a single RUN line to keep image size small.

**Use volumes to store application data**: Avoid storing application data in your container¿s writable layer using storage drivers. This increases the size of your container and is less efficient from an I/O perspective than using volumes or bind mounts.

**Tag your images with useful tags**: When building images, always tag them with tags which codify version information, intended destination (prod or test, for instance), stability, or other information that is useful when deploying the application in different environments.
