# AWS CodeBuild Question Bank

## Level 1: Basic

<ol>
<li>What is AWS CodeBuild?</li>
<li>What are the benefits of using AWS CodeBuild?</li>
<li>What are the supported source types for AWS CodeBuild?</li>
<li>What is a buildspec.yml file in AWS CodeBuild?</li>
<li>How can you trigger a build in AWS CodeBuild?</li>
<li>What are the types of artifacts that can be produced in AWS CodeBuild?</li>
<li>What is a build project in AWS CodeBuild?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces software packages that are ready to deploy.</li>
<li>AWS CodeBuild provides a scalable, flexible, and secure way to build and test applications, without the need for infrastructure management or maintenance.</li>
<li>AWS CodeBuild supports a variety of source types, including CodeCommit, GitHub, Bitbucket, and Amazon S3.</li>
<li>A buildspec.yml file in AWS CodeBuild is a configuration file that defines the build commands, environment variables, and artifacts for a build project. It is stored in the root of the source code repository.</li>
<li>Builds in AWS CodeBuild can be triggered manually, by a webhook, or as part of a pipeline in AWS CodePipeline.</li>
<li>AWS CodeBuild can produce artifacts in various formats, such as JAR, ZIP, RPM, and Docker images, depending on the application type and build settings.</li>
<li>A build project in AWS CodeBuild is a set of build settings, source code, and artifacts that are used to produce a software package. It includes information about the build environment, build commands, and artifacts location.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What is the difference between AWS CodeBuild and AWS CodePipeline?</li>
<li>How can you configure a custom build environment in AWS CodeBuild?</li>
<li>How do you integrate AWS CodeBuild with AWS CodeCommit?</li>
<li>What is the purpose of the AWS CodeBuild local agent, and how can it be used?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS CodeBuild is a build service that compiles and tests source code, while AWS CodePipeline is an orchestration service that automates the delivery of code changes through a pipeline. AWS CodePipeline can trigger builds in AWS CodeBuild, and can also coordinate other deployment and testing services.</li>
<li>To configure a custom build environment in AWS CodeBuild, you can create a Docker image that includes the required tools and dependencies, and provide it to AWS CodeBuild as a custom build image. You can also customize the buildspec.yml file to install additional packages or to run specific build commands.</li>
<li>To integrate AWS CodeBuild with AWS CodeCommit, you can create a build project in AWS CodeBuild that is triggered by changes in a CodeCommit repository, and provide the necessary authentication and access permissions. You can also use AWS CodePipeline to create a more complex pipeline that includes multiple build and deployment stages.</li>
<li>The AWS CodeBuild local agent is a command-line tool that allows you to run builds locally, using the same Docker images and build specifications as in AWS CodeBuild. It can be used for local development, debugging, or testing, and can reduce the feedback cycle and the cost of experimentation.</li>
</ol>
</details>

## Level 3: Advanced

<ol>
<li>How can you use AWS CodeBuild with AWS Lambda?</li>
<li>How can you create a custom Docker image for AWS CodeBuild, and what are some best practices for image management?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>To use AWS CodeBuild with AWS Lambda, you can create a build project that compiles the Lambda code, packages it as a ZIP file, and uploads it to Amazon S3 or a Lambda function. You can also use AWS CodePipeline to create a pipeline that includes both the build and deployment stages, and provides continuous integration and delivery for Lambda functions.</li>
<li>To create a custom Docker image for AWS CodeBuild, you can use a Dockerfile that includes the required tools and dependencies, and build the image using the Docker CLI or a build service like Docker Hub or Amazon ECR. Some best practices for image management include using version tags, minimizing the image size, and securing the image with authentication and access policies.</li>
</ol>
</details>