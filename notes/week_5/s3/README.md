# S3 (Simple Storage Service)
S3 is an object-based storage service that provides a simple key-value interface to store and retrieve data. S3 stores data within buckets, and each object can be up to 5TB in size. S3 is designed for high durability and scalability, making it ideal to store large amounts of unstructured data, such as images, videos, backups, and archives.

## Use Cases
1. Content Delivery: S3 is used to store and service large amounts of media content, such as images, videos, and other files, over the internet
2. Data Backup and Archiving: S3 is used to store backup and archive data, such as server backups, database backups, and data archives, to ensure data availability and disaster recovery
3. Big Data Analytics: S3 is used to store big data for processing and analysis using various big data analytics tools, such as Amazon EMR, Amazon RedShift, and Amazon Athena
4. Software Distribution: S3 is used to store and distribute software files, such as installation packages and software updates for fast and reliable software delivery
5. Static Website Hosting: S3 can be used to host static websites, which consist of HTML, CSS, and JS, and other files that don't require server-sided processing
    - We can host a built React App on S3
    - Alternatively, we could host a built React App on an nginx server running in an EC2 instance

## S3 Buckets
To utilize S3, we would first create an S3 bucket. A bucket is a location in which our files can be stored. A bucket must have a globally unique name, meaning that nobody else utilizing AWS has ever created a bucket with the same name.

### S3 Bucket Policies
S3 bucket policies are important for controlling access to S3 buckets and the objects contained within them.
- Bucket policies define who can access the S3 bucket and what actions they can perform, such as list objects, read objects, write objects
- Bucket policies are set at the bucket level and provide a flexible way to manage access to the bucket and its objects
- Bucket policies utilize Amazon Resource Names (ARNs) to identify the AWS resource that should be granted or denied access (EC2 instance, IAM Role, etc.)

Bucket policies v. IAM policies
- Bucket policies are specified on the bucket to grant access or deny access to itself
    - Bucket w/ bucket policy that grants access to specific EC2 instance
    - Bucket w/ bucket policy that grants access to specific IAM Role
- But, IAM policies can be used to grant access to the bucket or all buckets by attaching permissions to an IAM user, group, or role
    - EC2 instance running Node.js app that uses aws-sdk to connect to S3 bucket
        - IAM Role that has S3 permissions
        - Attach IAM role to EC2 instance
    - Lambda function that connects to S3 using aws-sdk
        - IAM Role that has S3 permissions
        - Attach IAM role to the lambda

## Static Web Hosting on S3
1. Create an S3 bucket: the bucket must have a globally unique name
2. Upload your website files (HTML, CSS, JS)
3. Configure the bucket for static website hosting: specify the index document (default index.html) and error document
4. Set the bucket policy: You will need to set a bucket policy to allow public read access to the files in the bucket

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

## S3 integration with AWS SDK
Amazon S3 can be easily integrated into Node.js applications using the aws-sdk for JS in Node.js. The aws-sdk provides a comprehensive set of APIs for interacting with AWS services, including S3

E-Commerce Project: When displaying products, it would be a good idea to utilize S3 for storing product images
- We should definitely be familiarized with utilizing the AWS SDK for a variety of services such as DynamoDB as well as S3, since that is what CollgeBoard prioritizes

Some things you can do with the aws-sdk:
1. Upload files to an S3 bucket
2. Download files from an S3 bucket
3. List files that exist in an S3 bucket
