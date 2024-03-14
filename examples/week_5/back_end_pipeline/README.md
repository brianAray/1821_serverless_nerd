# Backend Pipeline Guide

1. Create IAM role
	- set service to ec2
	- Attach AWSCOdeDeployFullAccess permission
	- Attach AWSEC2RoleforCodeDeploy
2. Create EC2 Instance
	- Add Additional tag with application name
	- Ubuntu
	- T2 Micro
	- Advanced Details
		- Assign the IAM role you created
3. Connect to EC2 Instance using the web console
	- Install Code Deploy Agent
https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html
	- sudo apt update
	- sudo apt install nodejs
	- sudo apt install npm
	- Do not use NVM as it will not be available to the code deploy agent
	- Include in the security group access to the EC2 web server and the port for you app
4. Create the Code Commit Repo for the express app
5. Create an application
	- Go to CodeDeploy
	- Create an application
		- Compute Platform: EC2/ on-premises
6. Create a Deployment Group
	- Create a service role for the code deploy to read the tags of the EC2 instance
	- Choose the code deploy service
	- Now create the deployment group in the application
	- Choose the service role you created
	- In Place Deployment Type
	- Environment Config is Amazon EC2 Instances
		- Choose the tag you attached to the EC2
		- If you did not add an additional one, use the name tag
	- Disable load balancer
7. Create the pipeline
8. Add the code commit repo to the source stage
9. Add a build stage
	- Code Build
	- Create Code Project
		- We use the code project to run npm install
		- OS: Ubuntu
		- Image: 5.0
		- use buildspec file
10. Add deploy stage
	- Deploy Provider: Code Deploy
	- Assign the application we created
	- Choose the deployment group created for that application
