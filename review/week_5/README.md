# Week 5 Review
Topics: EC2, S3, DevOps, CodePipeline, CodeBuild, CodeDeploy, Docker, SonarCloud, Technical Debt

* EC2
    - A cloud-based **compute service**
    - A service for creating virtual machines
    - Important Components
        - Amazon Machine Images (AMIs)
        - Elastic Block Store (EBS)
        - Security Groups (SGs)
        - SSH (Secure Shell)
    - Use cases
        - Web Application Hosting
        - Big Data Processing
        - High-performance Computing
        - Dev/Test Environments
        - Media Processing
        - Machine Learning
    - AMIs
        - Pre-configured virtual machine image used to launch an EC2 instance
        - Contains the OS and any additional software and configurations
        - Can use Amazon's pre-built AMIs or create custom AMIs
            - Custom AMIs: we can create an AMI based off of an EC2 instance that we already have
            - You can initially start off with a pre-built AMI, upload your application to the EC2 instance, add additional configurations, and then turn all of that into an image
            - This would allow us to easily spin up new EC2 instances based off of the custom AMI that contain our application
            - Simplifies the process of autoscaling
                - Spin up additional EC2 instances without worrying about manual installation or configuration
    - EBS
        - Block-level storage
        - Intended for use by EC2 instances
        - They are essentially hard drives that can be created and attached to an EC2 instance
        - EBS volumes allow for us to store data permanently that will remain even when we terminate our instance
            - This depends on whether the EBS volume is the root volume (aka the volume that contains the OS) or if it's an additional volume that you attached later to the EC2 instance
            - By default, the root volume will be deleted when you terminate your EC2 instance
        - Can choose between SSDs and HDDs
    - Security Groups
        - Security groups act as a firewall for networking in EC2 instances
        - An EC2 instance can have 1 or more security groups
        - Can specify inbound rules and outbound rules within a security group
        - Outbound rules
            - By default, allows ALL outbound traffic
        - Inbound rules
            - Source IP address: IP address of where incoming traffic is originating from
            - Ports: What port(s) the incoming traffic is allowed to connect to
        - One of the most common reasons for not being able to connect to an EC2 instance is because of improper security group configuration
    - SSH
        - Secure Shell
        - Used to securely connect to a remote computer over the internet
        - SSH protocol uses port 22 (security group needs to have inbound rules configured for port 22)
        - Allows for us to connect to an EC2 instance and run commands
        - Can also use SSH to transfer files to the EC2 instance
        - When we create a key pair, we download a .pem file that is the private key used for authentication
            - Used to encrypt connection
            - Used to initially authenticate with the server
        - Connecting to EC2 instance
            - `ssh -i <path to .pem file> ec2-user@<ip address of ec2 instance / dns hostname>`
            - We can now run commands within the EC2 instance
        - File Transfer
            - `scp -i <path to .pem file> <local file path> ec2-user@<ip address of ec2 instance / dns hostname>:<remote file path>`
            - `scp -i ./my-backend-server-key.pem ./myzipfile.zip ec2-user@34.333.222.111:/home/ec2-user`
* S3
    - Object-based storage service
    - Each object is treated as a "key-value" pair
    - An object can be up to 5TB (1TB = 1000GB) in size
    - Objects are stored in a bucket
        - No storage limit for a bucket
    - Ideal for storing large amounts of unstructured data
        - Images
        - Videos
        - Backups
        - Archives
        - Text files
    - Use Cases
        - **Static Website Hosting**
        - Content Delivery
        - Data Backup and Archiving
        - Big Data Analytics
        - Software Distribution (distributing software files such as installation packages and updates)
    - S3 Buckets
        - Name must be globally unique
        - Controlling access to an S3 bucket
            - IAM Policy
            - Bucket Policy
                - If we want to make a bucket have public read access, then we can do so through a bucket policy
                - This is ideal for static web hosting
    - Static Web Hosting
        - Make our bucket have public read access (set a bucket policy that grants getObject to everybody)
        - Enable the static web hosting feature in the bucket properties
            - Specify the index document (index.html) and error document (in the case of a React app, also index.html)
    - AWS SDK integration w/ S3
        - aws-sdk is an API that allows for us to interact with various AWS services in an application
        - In the case of S3
            - Upload files to an S3 bucket from the application
            - Download files from an S3 bucket to the application
            - List files that exist in the S3 bucket from the application
* DevOps
    - DevOps = Development + Operations
    - Emphasizes collaboration + communication between the development + operations teams
    - Goal: increase the speed and quality of software delivery
        - Improved communication + collaboration
        - Automating processes where possible
            - CI/CD Pipelines!
    - DevOps is essentially a philosophy that is complimentary to Agile
    - Development Team
        - Write code
        - Test software
        - Ensure software meets requirements
        - Develop bug fixes as necessary
    - Operations Team
        - Maintain deployments
        - Deploy the software
        - Monitor and manage the production environment
        - Forward issues/bugs to the development team
    - CI/CD (3 different things)
        - Continuous Integration
            - A practice where code changes are frequently committed, pushed to, and merged in the repository
            - The goal of CI is to detect and resolve integration issues as early as possible
                - Ex. merge conflicts: two developers made independent changes to the same lines of code, such that Git would not be able to automatically merge
                - Ex. failing unit tests: need to ensure that the code passes the unit tests
            - In a CI process, code changes should be automatically built and unit tests executed
                - If the build and unit tests fail, notify developers so that issue can be resolved
            - Merges should take place every single day, multiple times a day
            - Ensures that everyone has the most up to date codebase
        - Continuous Delivery
            - A software development practice that automates the process of delivering software updates and features to users
                - Manual approval is required
            - "Deploy at a push of a button"
            - Goal: make delivery of software faster and more reliable
                - More mistakes can be made if delivery is manual v. automatic
            - In a CD process, every code change that passes the CI process (aka the automatic build + running of unit tests, etc.) can then be packaged for deployment
            - Deployment is automatic, but requires manual approval
        - Continuous Deployment
            - Extension to continuous delivery, where instead of requiring manual approval in order to deploy, everything can be completely automated
            - Goal is to make delivery even faster by removing manual approval step
            - Allows teams to immediately release updates and bug fixes as soon as ready
    - Environments
        - Dev environment
            - Backend + Frontend + database
            - Sandbox
            - Not really that important, it's just a place for developers to play around within
        - Test environment
            - Backend + Frontend + database
            - Really important
            - This is where the QA team will execute automated end-to-end tests
            - They will also potentially perform manual end-to-end testing
        - Pre-prod/staging environment
            - Backend + Frontend + database
            - Mimics the infrastructure of the production environment
            - Security testing
            - Performance testing
        - Prod environment
            - Backend + Frontend + database
* CI/CD Pipelines
    - A series of stages with various actions performed in each stage that are automated
    - A pipeline describes what should happen for an application to go from code in a repository to an application deployed to production
        - Example Pipeline describing CI + Continuous Delivery (not continuous deployment)
            - (Code Repository) -> (Build the application, run unit tests, package the application) -> (Deploy to Test environment) -> (Run automated E2E tests) -> (Wait for manual approval from QA Team) -> (Deploy to Pre-prod/staging) -> (Run Security Tests + Performance Tests, etc.) -> (Wait for manual approval) -> (Deploy to Production)
        - Steps
            1. Version control: Code changes are committed and pushed to a version control system, and merges are performed frequently into the main branch
            2. CI portion of pipeline is triggered. The building, running of unit tests, and packaging of the application is performed
            3. Deployment to test environment: Testing by QA team is performed. Automated E2E tests and manual E2E tests are executed. QA team then manually approves the application to be deployed to staging/pre-prod
            4. Deployment to staging environment: staging environment replicates the infrastructure of production. Security testing + performance testing may be performed here, along with "smoke tests".
            5. Deployment to Production: application is deployed to a production environment and ready for the customer to use
* AWS CI/CD Technologies
    - CodePipeline
        - Fully managed pipeline service that allows developers to model, visualize, and define automated steps in the software delivery process
        - Integrates with services such as CodeBuild and CodeDeploy
        - Structure
            - Stages: a stage consists of 1 or more action groups
                - Stages are executed sequentially one after after
            - Action Groups: consists of 1 or more actions
                - Action groups are executed sequentially one after another
            - Actions: automated activities
                - Actions within an Action Group will be executed at the same time (in parallel)
    - CodeBuild
        - Fully managed build service for automatically compiling/transpiling an application, running unit tests, and packing the application
        - If we really think about what CodeBuild does,
            1. Spins up a temporary EC2 instance that our source code is downloaded to
            2. Commands defined in `buildspec.yml` file are executed
            3. Build artifacts are packaged and passed to the next action that will use it
        - buildspec.yml
            - Contains all of the information that CodeBuild requires for executing the build action (compile, run unit tests, create package)
            - Usually at least 3 different sections
                - `version`: specifies the syntax version of the buildspec.yml
                    - Currently 0.2
                - `phases`: defines the different phases of the build process, and the commands that should be executed within each phase
                    - install: this phase is used to install dependencies for the build process or to configure runtimes such as node.js that will be utilized in subsequent phases
                    - pre_build: used to prepare the build environment before running the build, such as running `npm install` to install dependencies
                    - build: represents commands to actually build the application (ex. building a docker image)
                    - post_build: represents commands that should be run after the build (ex. pushing docker image to Amazon ECR)
                - `artifacts`: defines the files or directories that should be included as output (input into the next action that uses the files, such as CodeDeploy)
    - CodeDeploy
        - Fully managed deployment service that automates deployments to **compute services**
            - Compute services: EC2, Fargate, Lambda
        - How does CodeDeploy work with EC2?
            1. Initiate communication with the EC2 instance by communicating with the CodeDeploy Agent installed on the EC2 instance
            2. CodeDeploy will then instruct the EC2 instances to execute the shell scripts that are defined in the appspec.yml file for each phase that is being "hooked" into
            3. Once CodeDeploy reaches the "install" phase, it will copy all input artifacts into the specified location on the EC2 instances
            4. It will then finish executing the shell scripts that "hook" into any of the phases coming after "install"
        - appspec.yml
            - Describes the scripts that should be executed by the EC2 instance during the deployment action
                - Install phase: describe the files that should get copied over to the EC2 instance
            - Sections
                - `version`: defines the syntax version for appspec.yml
                    - Currently 0.0
                - `files`: specify the `source` and `destination`, which essentially represents what files from the input artifact should be copied over (source) and where on the EC2 instance the files should end up (destination)
                - `hooks`
                    - Specify which CodeDeploy phases we would like to "hook" into with our shell secripts
                    - The shell script defined for a particular phase will be executed once the specified phase occurs
                    - Phases
                        - There are A LOT of phases
                        - Focus on the main phases
                            - ApplicationStop: used to stop a previously running version of the application
                            - BeforeInstall: used to perform any pre-installation tasks
                            - Install (CANNOT HOOK INTO THIS PHASE): where files are copied into the EC2 instance
                            - AfterInstall: used to perform any post-installation tasks
                            - ApplicationStart: used to start/configure the application
                            - ValidateService: shell scripts could be hooked into this phase to validate whether an application is running or not. If the script used to validate returns a non-zero exit status code, this indicates failure, and so the deployment will be rolled back automatically to the previous deployment
- Make sure to study the various buildspec.yml and appspec.yml files for the different projects that we made
    - [dockerfile-backend-example](https://github.com/230109training/dockerfile-backend-example)
        - Permissions
            - CodeBuild project needs access to AWS ECR to login and push images to an ECR repository
                - IAM Role w/ the appropriate permissions
            - EC2 needs access to login to AWS ECR and pull docker image
                - IAM Role w/ the appropriate permissions
    - [backend-codepipeline-demo](https://github.com/230109training/backend-codepipeline-demo)
        - No permissions necessary to be configured
    - [react-codepipeline-demo](https://github.com/230109training/react-codepipeline-demo)
        - The CodeBuild action for deploying to S3 needs to have permissions to S3 to list files, remove files, and copy files
            - IAM Role with the appropriate permissions
    - [demo-simple-website-for-codepipeline](https://github.com/230109training/demo-simple-website-for-codepipeline)
        - The CodeBuild action for deploying to S3 needs to have permissions to S3 to list files, remove files, and copy files
            - IAM Role with the appropriate permissions
* IAM
    - Very important to understand
    - As a rule: give only as much permissions as is necessary to accomplish a task
        - Don't allow everything
    - IAM Users, Groups, Roles
        - IAM Users: access AWS from the AWS console (website), AWS CLI (command-line interface), SDK (application)
            - Permissions can be attached to individual users
        - IAM Group: a collection of users
            - All permissions attached to a group are inherited by the users in that group
            - A user can belong to multiple groups
        - IAM Roles: what AWS services can assume
            - Examples
                - CodeBuild project can assume an IAM role
                - EC2 instance can assume an IAM role
                - A Lambda can assume an IAM role
                    - registration lambda
                        - Adds a new user item to a table
                    - Needs access to DynamoDB
                    - So, we create an IAM role with DynamoDB permissions and attach the IAM role to the lambda function
                - etc.
            - Permissions can be attached to an IAM role
* Docker
    - Open source platform for containerization of applications
    - Containerization: running an application in an isolated environment that is portable
        - Docker works by using the underlying OS's kernel to create isolated containers
    - Docker helps to provide a consistent environment for an application to run in
        - Without Docker, we would need to deal with potential conflicts between dependencies that the application requires to run
            - Ex. An application requires Node.js 14 specifically in order to run
            - But our computer has Node.js 16
                - Would need to uninstall Node.js 16 and install Node.js 14
                - But let's say we want to run another application alongside this application and it requires Node.js 16 -> PROBLEM
        - With Docker, we can run both applications in their respective container
            - One image was built using a base image, `node:14`
            - The other image was built using a base image, `node:16`
    - Containers are isolated, with their own filesystem and networking
        - Docker volumes are a mechanism for mapping the filesystem on the Host OS to the filesystem inside of a container
        - `-p` flag when creating a container is the mechanism for mapping ports on the Host OS to the ports inside of a container
    - Docker v. Virtual Machines
        - A virtual machine is an entire "computer" running on another computer
            - A physical computer can run many virtual computers
            - Each virtual machine (VM) has its own OS and allocated resources
            - Each VM having its own OS and needing to run all of the processes that support OS operations in the background can take up a lot of resources
                - RAM
                - Hard drive space
                - CPU
            - OS is a lot of bloat, but the advantage of a VM is that each application deployed to each VM will have an isolated environment
            - How do we get the same benefit but without having an entire OS each time? Containers!
        - Docker containers are an isolated environment with its own filesystem and networking
            - They are very lightweight, since they do not need their own OS
            - Instead, a container utilizes features provided by the host OS's kernel to allocate an isolated "space" on the machine
            - Containers can be easily created, modified, and deleted. VMs on the other hand can be more difficult to modify and manage
    - Docker Architecture
        - Docker CLI: command-line interface that allows us to interact with the Docker Daemon by typing commands
        - Docker Daemon: core component of Docker that is responsible for building, running, and managing Docker containers. This is what interacts with the Host OS's Kernel and other Docker components, such as Docker Registries
        - Docker Registries: Store images remotely accessible from the internet as repositories. We can utilize both the idea of public and private repositories whenever we store images or pull images. To access private repositories, you would need to log into the account who those private repositories belong to
            - DockerHub (Docker is configured to pull from DockerHub by default)
            - AWS ECR (Elastic Container Registry)
    - How to Use Docker
        1. We need an image
            - Image: blueprint that contains the necessary files and libraries to run an application
            - Two options
                1. Pull an existing image from a registry
                2. Create a custom image by building the image based on commands in a Dockerfile
        2. Create container(s) from the image
            - A container can be created from an image
            - We can create as many containers as we want based off of a single image
            - Each container is separated into its own isolated environment
        3. Container execution
            - Containers, once created can be started
            - Running containers can also be stopped
    - Docker Commands
        - `docker ps`: Used to list containers that are currently running
            - `-a` allows us to view all containers
        - `docker images`: Used to list immages that are locally available on the host
        - `docker build`: Used to build a Docker image from a Dockerfile
            - `docker build -t <full image name> .`
                - `.` indicates the directory in which the Dockerfile exists
        - `docker login`: Used to log into an account on the Docker registry
        - `docker push`: Used to push an image to a Docker registry
        - `docker pull`: Used to pull an image from a Docker registry
        - `docker create`: Used to create a container from an image, without starting the container
            - `-p`: Used to map a port on the host to a port in the container
        - `docker start`: Used to start a container that is not currently running (stopped)
        - `docker stop`: Used to stop a container that currently running
        - `docker run`: Essentially is a combination of `docker create` and `docker start`
            - `-p`: Used to map a port on the host to a port in the container
            - `-d`: Create and start container in "detached" mode. This means run the container in the background, without attaching the terminal to the output of the container
        - `docker rm`: Used to remove a stopped container
        - `docker rmi`: Used to remove an image
        - `docker inspect`: Used to view detailed info about a container or image
        - `docker logs`: Used to view logs generated by a container
    - Dockerfile
        - Contains instructions for building a Docker image
        - Contains a series of commands and arguments
        - Each command specifies a step in the build process
    - Dockerfile Commands/Keywords
        - `FROM`: Specifies the base image to use as a starting point for the build
            - Ex. Nginx image (static website files) or Node image (Node app) or OpenJDK image (Java app)
        - `WORKDIR`: Sets the working directory for the subsequent instructions in the Dockerfile
        - `COPY`: Copy files or directories from the host system into the Docker image
        - `RUN`: Executes a command. For example, we might want to install dependencies using `npm install`, etc.
        - `EXPOSE`: Doesn't really do anything, but it's there to provide documentation to other developers reading the Dockerfile that the port being used in the container is the `EXPOSE <port>`
        - `CMD`: Specifies the default command that gets executed when the container is started. It can be overridden through command-line arguments as we're starting the container
        - `ENTRYPOINT`: Specifies the command when the container starts. It CANNOT be overridden
    - Building image from Dockerfile
        - `docker build -t <image name> .`
    - Creating and running container
        - `docker run -d -p 4000:8080 <image name>`
    - Image Naming Convention
        - `<account identifier>/<image name>:version`
        - The naming of an image is important as it
            - Helps to identify different versions of an image
            - Identifies which Docker registry to push an image to
        - Examples
            - `bach-tran/my-demo-image:latest`
                - `docker push bach-tran/my-demo-image:latest`
                    - Push my-demo-image:latest to DockerHub for the bach-tran account
            - `168116352293.dkr.ecr.us-east-1.amazonaws.com/my-node-backend:latest`
                - `docker push 168116352293.dkr.ecr.us-east-1.amazonaws.com/my-node-backend:latest`
                    - Push my-node-backend:latest to the AWS ECR repository for the AWS Account w/ ID 168116352293
    - AWS ECR
        - Elastic Container Registry
        - Secure and scalable service where we can store as many Docker images as we would like
        - Both public and private repositories are possible 
* Technical Debt
    - Refers to the cost of maintaining and fixing a codebase due to shortcuts, compromises, or quick fixes that were made during development
    - Technical debt accumulates, or "snowballs" over time as the codebase grows, making it more difficult and time-consuming to add new features or make changes to the code
    - Can arise from a variety of causes, including
        1. Lack of code documentation: when code is not properly documented, it becomes difficult for developers to understand how the codebase works, which makes it harder to work on new features or make changes
        2. Poor code quality: poorly written code or hard to understand code can be difficult to maintain and can lead to bugs and other issues
        3. Shortcuts in Development: Not following best practices, such as test driven development, can lead to technical debt
        4. Quick fixes: Making quick fixes to resolve problems in the short term without addressing the root cause can lead to technical debt
    - Managing technical debt
        - Implementing best practices throughout
            - Regular code reviews
            - Continuous Integration
        - Tools like SonarCloud
            - Static code analysis
            - Identify "code smells" to be fixed
        - Incrementally develop and test as you go
* SonarCloud
    - Cloud-based code quality platform with automated code analysis for software projects
    - A service provided by a company called SonarSource
    - Useful for "static code analysis"
        - Static code analysis: where the code is analyzed without running the code
        - Dynamic code analysis: where the code is analyzed by running the code
            - Generating unit test code coverage reports
            - In order to know how many lines of code are "covered" by the unit tests that we have, we need to actually execute the unit tests, which will then inevitably execute the code being tested, which will provide the code coverage metrics
    - SonarCloud helps to track and manage technical debt, identify potential bugs, vulnerabilities, and security issues
    - Supports many languages, such as Java, C#, JavaScript, Python, etc.
