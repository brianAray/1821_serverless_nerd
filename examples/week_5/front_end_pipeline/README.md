# Frontend Pipeline Steps

## S3 Zip

1. Create a source bucket for your Zip file
	- Enable ACL
		- Bucket Owner preferred
	- Enable bucket versioning
	- Enable public access settings
2. Upload a zip of the contents of your build folder
	- Do not zip the build folder, otherwise the build folder will be included in the zip and the structure will not work for deployment
3. Create a production bucket for static website hosting
	- Enable ACL
4. Create the pipeline
	- Create a new service role
	- Leave everything default
5. Add the source bucket at the source stage
	- The bucket key should match the zip file including its extension
		- `my-website.zip`
6. Skip the build stage
7. Add the production bucket as the deploy stage location
	- Choose to extract the files before deployment
	- Do not include a deployment path
	- In additional configuration, set canned ACL to be Public-Read-Write


## CodeCommit Pipeline

1. Create a code commit repository
	- Create git credentials for your IAM user and when you first push your code to the repo you will need to identify yourself
2. Clone the repo locally, then add in your front end project
3. Push the repo
4. Create a static website host in S3
5. Create a pipeline
	- Create a service role
6. Add a source stage referencing the code commit repo you created and the branch that you wish to observe for triggering the pipeline
7. Add a build stage
	- Build provider is AWS CodeBuild
	- Create a project
		- Environment managed image
		- Ubuntu
		- Standard runtime
		- Image standard:5.0
		- Always use the latest image for this runtime version
		- Create a new service role
		- Use a buildspec file
			- Do not provide a name, it will default to the root location and the name "buildspec.yml"
8. Add the static website bucket as your deploy stage location
	- Include ACL in additional configuration
	- Extract file before deploy
9. Finish the pipeline, the first build will fail if you did not provide a buildspec.yml
10. Create the buildspec.yml
	- Save this in your code commit repo in the root directory

```yml
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: 14
    commands:
      - npm install -g create-react-app
  pre_build:
    commands:
      - npm install
  build:
    commands:
      - npm run build
artifacts:
  base-directory: build/
  files:
    - "**/*"
```

