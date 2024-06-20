# DevOps
DevOps is a software development approach that emphasizes collaboration and communication between development and operations teams. The goal of DevOps is to increase the speed and quality of software delivery simultaneously. This is accomplished by automating processes where possible, and improving communication and collaboration. We can think of DevOps as a philosophy, similar to how Agile is a philosophy. DevOps is complimentary to Agile. 

DevOps combines a set of practices, tools, and cultural values to help organizations be more Agile. It emphasizes continuous feedback, collaboration, and improvement, and encourages teams to work together to identify and resolve problems as quickly as possible.

Traditionally, there were two separate teams that had very little communication or collaboration with each other

Development Team: responsible for creating software and fixing bugs as they arise
- Writing code
- Testing software
- Ensuring the software meets the requirements

Operations Team: responsible for maintaining and supporting the software
- Deploying the software
- Monitoring and managing the production environment
- Forwarding issues/bugs to the development team

## CI/CD
CI/CD stands for 3 different things
- Continuous Integration
- Continuous Delivery
- Continuous Deployment

Continuous Integration
- A software development pratice that involves frequently merging code changes into a central repository
- The goal is to detect and resolve integration issues as early as possible during development
- Merges should ideally take place every single day, multiple times a day
    - We don't want for problems to snowball due to infrequent merging
- In a CI process, every code change is automatically built, tested, and validated to ensure that it integrates properly with the rest of the code base
    - If the tests or build fail, the development team is notified immediately so that the issue can be resolved
- CI can help ensure that everyone is working with the latest code and all changes are thoroughly tested before proceeding

Continuous Delivery
- A software development practice that automates the process of delivering software updates and features to users (up to the point where manual approval is required before releasing changes to the production environment)
- The goal is to make software delivery faster, more reliable, less manual, while still maintaining control over the release process
- In a CD process, every code change that passes the CI process is packaged for deployment
    - The deployment process is automated, but requires manual approval before it occurs
- CD helps to increase the speed and reliability of software delivery

Continuous Deployment
- An extension to continuous delivery where every code change that passes the CI process is automatically deployed to production without the need for manual approval
- The goal is to make delivery even faster by removing the manual approval step
- Continuous deployment allows teams to release updates and bug fixes as soon as they are ready

## CI/CD Pipelines
A CI/CD Pipeline essentially describes the steps in which code in a repository eventually becomes a package for deployment to production

Steps
1. Version control: Code changes are committed and pushed to a version control system (Git), to keep track of changes and collaborate with other developers
2. Build: Code changes are built into a package
3. Testing: code changes are automatically tested using unit tests + integration tests to validate the functionality and ensure they meet quality standards
4. Deployment to test environment: Code changes are deployed to a test environment for further testing, such as end-to-end testing
5. Deployment to a staging environment: The staging environment tries to replicate the production environment as much as possible. Therefore, this is suitable for performance testing, security testing, etc.
6. Deployment to Production environment: software is ready for the customer to use

## AWS CI/CD Technologies
AWS has 3 different services that help to facilitate the CI/CD process: CodePipeline, CodeBuild, and CodeDeploy

### CodePipeline
- Continuous delivery service that is fully managed by AWS that helps developers to automate the software delivery process
    - Fully managed: the service is operated, maintained, and updated by the provider (AWS) so that users do not need to worry about infrastructure, security patches, upgrades, or general maintainance
    - Jenkins is another CI/CD technology that is open source that requires complete setup by whoever is using it (server management, upgrading Jenkins, maintaining the Jenkins server, etc).
- Allows developers to model, visualize, and automate the steps to release new features (code changes)
- CodePipeline integrates with services such as CodeBuild and CodeDeploy
    - Example (having a deployment pipeline for a React app)
        - When a code change is made in the Github repository, CodePipeline can trigger a build in CodeBuild
            - React app: CodeBuild will build the React project using `npm run build`, run tests in the React project using `npm test`
        - CodePipeline will then take the built version produced by `npm run build` and pass it over to CodeDeploy
        - CodeDeploy takes the build artifact and deploys it to an EC2 instance
- Summary: CodePipeline acts as a coordinator between CodeBuild and CodeDeploy

#### Structure of a pipeline
- Stage: each stage contains 1 or more action groups
    - Action groups: each action group contains 1 or more actions
        - Actions

- Actions within an action group run in parallel (run at the same time)
- Action groups run sequentially one by one

### CodeBuild
- Fully managed build service for compiling source code, running tests, producing packages ready for deployment
- CodeBuild uses a special build specification file known as the **buildspec.yml** file for defining steps used to build the application, run tests, etc.
- When a build is triggered, CodeBuild will execute the steps defined in the **buildspec.yml** file

### buildspec.yml
```yaml
version: 0.2

phases:
    install:
        commands:
         - command1
         - command2
    pre_build:
        commands:
         - command1
         - command2
         - command3
    build:
        commands:
         - command1
    post_build:
        commands:
         - command1
         - command2

artifacts:
    files:
     - file1
     - file2
```
- `version` section specifies the version of the buildspec.yml syntax being used
- `phases` section defines the different phases of the build process
    - install: used to install dependencies required for the build process, such as node.js
    - pre_build: used to prepare the build environment before running the build, such as running npm install to install npm dependencies
    - build: represents commands that should be run during the build, such as npm test and npm run build
    - post_build: represents commands that should be run after the build (for example, pushing a docker image to Amazon ECR)
- `artifacts` section defines the files or directories that should be included as the output of the build process (usually as an input to CodeDeploy for the deployment process)

#### Deployment of a static Website (HTML, CSS, JS) to an S3 bucket
- We will utilize CodePipeline + CodeBuild
- We are not using CodeDeploy because CodeDeploy is for deploying to compute services such as EC2, Fargate, or Lambda

- Process (automated!!!!!)
    - CodePipeline will pull the code from a Github repository
    - CodePipeline will then pass the code over to CodeBuild
    - CodeBuild will simply copy the files to an S3 bucket

1. Create a CodePipeline pipeline
2. Create a CodeBuild project
- buildspec.yml file
```yaml
version: 0.2

phases:
    build:
        commands:
         - aws s3 cp . s3://bucketname/ --recursive
```

IAM permissions
- The CodeBuild project will have an IAM role associated with it
- We can attach the following IAM policy to this IAM role to allow our CodeBuild project to actually copy files into the S3 bucket
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::bucketname/*"
            ]
        }
    ]
}
```

3. Include the CodeBuild project as part of the pipeline's steps

### CodeDeploy
- Fully managed deployment service that automates deployments to **compute services**, such as EC2, Fargate, Lambda, and on-premises servers
- Integrates with CodePipeline to provide an end-to-end solution for continuous delivery
    - Can be orchestrated with CodeBuild using CodePipeline
        - source code -> build (CodeBuild) -> running tests (CodeBuild) -> deployment (CodeDeploy) -> EC2 instance

CodeDeploy on EC2
- Each EC2 instance that CodeDeploy deploys to must have the CodeDeploy Agent installed. CodeDeploy Agent is responsible for communicating with CodeDeploy and executing deployment scripts
- We also need an IAM role that is attached to the EC2 instance with proper permissions as necessary. For example, if the input artifact from CodeBuild is stored on an S3 bucket, then we need to have permissions attached to the IAM Role to read from the bucket
- A special file called **appspec.yml** is utilized to specify the location to copy files that will be deployed to the EC2 instance, as well as execute scripts on the EC2 instance as necessary for completing deployment

```yaml
version: 0.0
os: linux
files:
 - source: /
   destination: /usr/share/nginx/html/
hooks:
    ApplicationStop:
     - location: scripts/stop_nginx.sh
       timeout: 300
       runas: root
    ApplicationStart:
     - location: scripts/start_nginx.sh
       timeout: 300
       runas: root
```
- `files` section specifes that all files in the source directory should be copied to the /usr/share/nginx/html/ directory on the EC2 instance
- `hooks` section specifies a series of scripts that should be executed during the deployment process
    - There are a lot of different hooks, but some of the most commonly used ones are listed below
        - ApplicationStop: used to stop the application that was deployed in a previous execution of the pipeline
        - BeforeInstall: used to perform any pre-installation tasks
        - AfterInstall: used to perform any necessary post-installation tasks
        - ApplicationStart: used to start/configure the application
        - ValidateService: used to validate whether the application is running. If validation fails, then the deployment is rolled back automatically

# Recap of Demos
- Set up 2 pipelines that use
1. CodePipeline + CodeBuild (S3 deployment)
    - CodePipeline pulls the static website files (and the buildspec.yml)
    - CodeBuild then executes the buildspec.yml file
        - The buildspec.yml file contains instructions to
            1. Delete all files in the S3 bucket
            2. Copy the updated files to the S3 bucket
2. CodePipeline + CodeDeploy
    - Not using CodeBuild, since there's no "build" to perform
    - All we want to do is deploy the app to an EC2 instance
    - Pre-requisite: EC2 instance with Nginx installed
        - IAM role with permissions to get objects and list objects in the CodePipeline S3 bucket (which stores our pipeline artifacts) must be attached to EC2 instance
        - CodeDeploy Agent must be installed on the EC2 instance
            - CodeDeploy needs to communicate with the CodeDeploy Agent on the EC2 instance so that the agent can execute the appspec.yml hooks, which execute the shell scripts that will stop and start the nginx server when files are moved to the `/usr/share/nginx/html/` folder
            - During the install phase, the CodeDeploy agent will move files into `/usr/share/nginx/html/`

# Frontend Deployment
- React app deployment possibilities
1. EC2 deployment (Nginx)
    - CodePipeline + CodeBuild + CodeDeploy
        - CodeBuild will run `npm test` to run unit tests in the React app
        - CodeBuild will then run `npm run build` to minify the React app into just an index.html file, .css files, and .js files
        - CodeDeploy is then used to communicate to the CodeDeploy agent running on the EC2 instance that will perform the actual deployment
            - The EC2 instance needs to have an IAM role attached with permissions to the CodePipeline S3 bucket that contains the pipeline artifacts (the application code, appspec.yml, .sh scripts)
2. S3 deployment
    - CodePipeline + CodeBuild
        - CodeBuild will run `npm test` to run unit tests in the React app
        - CodeBuild will then run `npm run build` to minify the React app into just an index.html file, .css files, and .js files
        - CodeBuild uses the AWS CLI commands for copying to S3 bucket
        - We need an IAM role for CodeBuild that gives CodeBuild the permissions for adding, listing, and deleting files from the S3 bucket being used for static web hosting
        
