# Manual Deployment

## Technologies

### Backend
- EC2
- NodeJS
- NVM

## Frontend
- S3
- React


## Backend Deployment

1. Create an EC2 instance
2. Connect to the instance and install NodeJS using NVM
    - NodeJS v18 LTS is safe
3. Setup the security groups
    - Create an inbound rule for Custom TCP on the PORT of your backend application
4. Setup IAM roles for communicating with DynamoDB and S3
    - For simplicity you can allow full access to both
    - Make sure to assign the IAM role to the EC2 instance
5. Configure the AWS Credentials for the EC2 instance
    - Use the .profile and export commands
    - Make sure the spelling is correct and there is no unecessary whitespace
6. Upload the backend app into the EC2 instance
    - Use either SCP or git (with the app in a git repository)
7. Verify that the app runs
    - Use Postman to run some simple tests


## Frontend Deployment

1. Create an S3 Bucket
    - Allow public access
2. Set the S3 bucket in its properties to be a static website
3. Set the bucket permission by providing a custom bucket policy

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGet",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::bucketname/*"
        }
    ]
}
```

4. Build your react app using `npm run build`
5. Upload the contents of the build folder to your S3 bucket
6. Go to the URL provided in the static website properties
7. Verify that your website is able to connect to your backend