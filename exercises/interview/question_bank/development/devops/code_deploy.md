# AWS CodeDeploy Question Bank

## Level 1: Basic

<ol>
<li>What is AWS CodeDeploy?</li>
<li>What are the benefits of using AWS CodeDeploy?</li>
<li>What is a deployment group in AWS CodeDeploy?</li>
<li>How can you trigger a deployment in AWS CodeDeploy?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS CodeDeploy is a fully managed deployment service that automates the application deployments to Amazon EC2 instances, on-premises instances, and AWS Lambda functions.</li>
<li>AWS CodeDeploy provides a consistent, repeatable, and scalable way to deploy software changes, without the need for manual intervention or downtime. It also provides features such as blue/green deployments, deployment health monitoring, and rollback capabilities.</li>
<li>A deployment group in AWS CodeDeploy is a collection of instances or Lambda functions that are targeted for deployment. It includes information about the deployment type, the deployment settings, and the deployment configuration.</li>
<li>Deployments in AWS CodeDeploy can be triggered manually, by a webhook, or as part of a pipeline in AWS CodePipeline.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What is the difference between AWS CodeDeploy and AWS CodePipeline?</li>
<li>What is a deployment configuration template in AWS CodeDeploy, and how can it be used?</li>
<li>What is a deployment package in AWS CodeDeploy, and how can it be created?</li>
<li>What is the purpose of the appspec.yml file in AWS CodeDeploy?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>AWS CodeDeploy is a deployment service that automates the deployment of applications, while AWS CodePipeline is an orchestration service that automates the delivery of code changes through a pipeline. AWS CodePipeline can trigger deployments in AWS CodeDeploy, and can also coordinate other testing and release services.</li>
<li>A deployment configuration template in AWS CodeDeploy is a reusable set of deployment configuration settings that can be applied to multiple deployment groups or applications. It can simplify the deployment configuration management and reduce the risk of configuration errors.</li>
<li>A deployment package in AWS CodeDeploy is a collection of files and artifacts that are included in the deployment. It can include source code, binaries, scripts, or configuration files, depending on the application type and deployment settings. A deployment package can be created using a build tool, a package manager, or a manual process, and can be uploaded to AWS CodeDeploy as part of the application revision.</li>
<li>The appspec.yml file in AWS CodeDeploy is a YAML file that defines the deployment lifecycle events and hooks for an application deployment. It includes information about the files to be copied or moved, the scripts to be executed, and the permissions and users to be used. The appspec.yml file is stored in the application source code repository, and is used by AWS CodeDeploy to perform the deployment actions.</li>
</ol>
</details>

## Level 3: Advanced

<ol>
<li>How can you use AWS CodeDeploy with AWS Lambda?</li>
<li>How can you customize the deployment behavior in AWS CodeDeploy, and what are some best practices for deployment automation?</li>
<li>How can you monitor and troubleshoot AWS CodeDeploy deployments, and what are some common deployment issues to look for?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>To use AWS CodeDeploy with AWS Lambda, you can create a deployment group that targets the Lambda function, and specify the deployment configuration, settings, and revision. AWS CodeDeploy will create a new version of the Lambda function, deploy the revision, and update the traffic routing between the new and the old versions. You can also use AWS CodePipeline to create a pipeline that includes both the build and deployment stages, and provides continuous integration and delivery for Lambda functions.</li>
<li>To customize the deployment behavior in AWS CodeDeploy, you can use deployment configuration settings such as the deployment type, the deployment strategy, the traffic routing, and the rollback conditions. You can also use custom scripts or hooks in the appspec.yml file to perform additional actions, such as database migrations, environment setup, or testing. Some best practices for deployment automation include using version control, testing the deployment on a staging environment, and creating a rollback plan.</li>
<li>To monitor and troubleshoot AWS CodeDeploy deployments, you can use the AWS CodeDeploy logs and metrics, which provide information about the deployment status, errors, and events. You can also use the deployment groups and instances views in the AWS CodeDeploy console, which allow you to view the deployment progress, the traffic routing, and the health of the instances. Some common deployment issues to look for include failed scripts or hooks, incorrect permissions or IAM roles, and incompatible or missing dependencies.</li>
</ol>
</details>