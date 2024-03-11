# EC2 (Elastic Compute Cloud)
Amazon EC2 is a cloud-based computing service offered by Amazon Web Services that enables users to rent virtual machines to host their applications. EC2 provides scalable computing capacity in the cloud, allowing users to quickly launch and manage virtual machines (instances) with a variety of operating systems and configurations.

Some key components to understand when using EC2 include the following:
1. Amazon Machine Images (AMIs): OS + pre-installed software
2. Elastic Block Store (EBS): storage system for EC2 instances
3. Security Groups (SGs): firewall for network connections to the EC2 instance
4. SSH (Secure Shell): a protocol for securely connecting directly with the EC2 instance

When launching an EC2 instance, you would select an AMI, specify the instance type, and configure any additional settings, such as security groups and storage space, and use SSH to connect to the instance

## Use Cases
1. **Web Application hosting**: EC2 provides scalability and global reach for web applications and other internet-facing services
2. Big Data Processing: EC2 can be used to process large amounts of data in parallel
3. High-Performance Computing: EC2 provides high-performance instances that can be used for scientific computing, financial modeling, and other intensive workloads
4. Dev/Test environments: EC2 is suitable for creating development and test environments, making it easier to develop and test an application
5. Media Processing: EC2 provides instances with GPU capabilities, which is suitable for video transcoding, image processing, and other workloads
6. Machine Learning: EC2 provides instances that are suitable for machine learning purposes

## Amazon Machine Images
An AMI is a pre-configured virtual machine image used to launch an EC2 instance
- An AMI includes the operating system and any additional software and configurations
- AMIs provides a convenient way to launch instances with a specific configuration
- AMIs can either be pre-built by AWS or created by the user to include specific software
- Creating custom AMIs allows you to save time and effort instead of setting up and configuring instances from scratch
    - Ex. creating an AMI that has Node.js installed and the employee reimbursement backend

## Elastic Block Store (EBS)
Amazon EBS is a block-level storage service provided by AWS for use with EC2 instances. EBS provides persistent storage volumes for EC2 instances, which allows you to store data even when you terminate your instance (think of EBS volumes as hard-drives that can be attached or removed from an instance).

EBS provides several benefits, including
- Data persistence
- Scalability: EBS volumes can resized as needed
- Performance: There are different options, such as General Purpose SSDs and HDDs, and more specialized ones for greater IO capacity
- Snapshots: EBS snapshots can be used to backup and recover data

## Security Groups (SGs)
Security Groups are used to control inbound and outbound traffic to EC2 instances. Security groups act as a firewall for your EC2 instances, allowing you to specify which incoming traffic is allowed and which is not allowed. 
- Each EC2 instance can be associated with one or more security groups
- Each security group contains a set of rules that dictate the traffic that is allowed
- A rule allows you to specify
    - Inbound rules
        - Source IP Address: IP address of where the incoming traffic is originating from
        - Ports: What port the incoming traffic is allowed to connect to
    - We can also specify outbound rules, but we're not going to be focused on this, and just allow all outbound traffic

## SSH (Secure Shell)
Secure Shell (SSH) is a protocol that is used to securely connect to a remote computer over the internet. SSH allows us to connect to an EC2 instance and run commands in the terminal or to transfer files. When connecting to an EC2 instance over SSH, we can use an SSH client to log-in to the instance and access the instance's terminal

When connecting to an EC2 instance using SSH, a .pem file containing a key is used for authentication. The .pem key is a private key that is generated when you launch an EC2 instance. It is used to encrypt the connection between the SSH client and the server, and is also used to initially authenticate the client wtih the server.

Here's a high-level overview of how this is done:
1. The user generates a .pem file when launching the EC2 instance
2. The user downloads a .pem file to their local machine
3. The user then uses their SSH client to connect with the instance, specifying the .pem file as the method for authentication
4. Once the authentication is successful, the user can execute commands on the EC2 instance or transfer files securely over the encrypted connection

### File Transfer
The command you would use to upload a file to an EC2 instance is `scp` (secure copy). This allows us to securely copy files between our local machine and an EC2 instance.

The basic syntax for the scp command is `scp -i <pem_file> local_file_path username@instance-ip-address:remote_destination_file_path`

An example: `scp -i my-backend-server-key.pem ./employee-reimbursement-system.zip ec2-user@34.239.207.196:/home/ec2-user`
