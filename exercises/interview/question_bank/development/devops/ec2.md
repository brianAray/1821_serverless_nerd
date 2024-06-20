# AWS EC2 Question Bank

## Level 1: Basic

<ol>
<li>What is Amazon EC2?</li>
<li>What are the benefits of using Amazon EC2?</li>
<li>What is an instance in Amazon EC2?</li>
<li>What is an Amazon Machine Image (AMI)?</li>
<li>What is an EC2 security group?</li>
<li>What is an EC2 key pair?</li>
<li>How can you launch an EC2 instance?</li>
<li>What is an EC2 instance type?</li>
<li>What is the difference between On-Demand and Reserved instances?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides scalable computing capacity in the cloud.</li>
<li>Amazon EC2 provides benefits such as scalability, flexibility, and cost-effectiveness, by allowing you to launch instances on-demand, choose the instance types and configurations, and pay only for the resources you use.</li>
<li>An instance in Amazon EC2 is a virtual server that runs on the Amazon Web Services (AWS) infrastructure, and provides a computing environment for your applications and workloads.</li>
<li>An Amazon Machine Image (AMI) is a pre-configured virtual machine image that contains the operating system, applications, and data, and can be used to launch new instances or replace existing ones.</li>
<li>An EC2 security group is a virtual firewall that controls the traffic to and from an EC2 instance, and allows you to define the inbound and outbound rules based on the protocol, port, and source.</li>
<li>An EC2 key pair is a security credential that allows you to connect securely to an EC2 instance using SSH or RDP protocols. A key pair consists of a public key that is stored on the instance, and a private key that is kept securely on your local computer.</li>
<li>You can launch an EC2 instance using the AWS Management Console, the AWS Command Line Interface (CLI), or the AWS SDKs. To launch an EC2 instance, you need to choose the AMI, the instance type, the network settings, the security group, and the storage options.</li>
<li>An EC2 instance type is a specification of the computing resources and capabilities of an EC2 instance, such as the CPU, memory, storage, and networking. Amazon EC2 offers a wide range of instance types to suit different workloads and use cases.</li>
<li>On-Demand instances allow you to pay for the compute capacity by the hour, with no long-term commitment or upfront payment. Reserved instances allow you to reserve the compute capacity for a one or three year term, and receive a significant discount compared to On-Demand instances.</li>
</ol>
</details>

## Level 2: Intermediate

<ol>
<li>What is an Auto Scaling group in Amazon EC2, and how can you use it?</li>
<li>How can you use AWS CloudFormation to deploy and manage Amazon EC2 instances?</li>
<li>What are Amazon Elastic Block Store (EBS) volumes, and how can you use them?</li>
<li>How can you monitor and troubleshoot Amazon EC2 instances, and what are some best practices?</li>
</ol>

<details>
<summary>Answers</summary>
<ol>
<li>An Auto Scaling group in Amazon EC2 is a group of EC2 instances that are launched and terminated dynamically based on the demand and availability, and are managed by AWS Auto Scaling . Auto Scaling group provides automatic scaling, availability, and cost optimization, by allowing you to define the scaling policies, the health checks, and the instance templates. You can use Auto Scaling group to scale up or down based on the CPU, memory, or custom metrics, and to spread the instances across multiple Availability Zones for high availability.</li>
<li>AWS CloudFormation is a service that allows you to describe and provision your AWS infrastructure as code, using templates that define the resources, dependencies, and parameters. You can use CloudFormation to create and manage Amazon EC2 instances, along with other AWS resources, and to deploy and update them in a consistent and repeatable way. CloudFormation provides features such as change sets, rollback, and stack drift detection, and can also integrate with other AWS services, such as AWS Lambda or AWS Config.</li>
<li>Amazon Elastic Block Store (EBS) volumes are a type of storage that can be attached to an Amazon EC2 instance as a virtual hard drive, and provide persistent and low-latency block-level storage. EBS volumes can be used for applications that require data persistence and durability, such as databases, file systems, or logs. EBS volumes come in different types and sizes, such as General Purpose SSD, Provisioned IOPS SSD, or Magnetic, and can be customized with features such as encryption, snapshots, or multi-attach.</li>
<li>To monitor and troubleshoot Amazon EC2 instances, you can use tools such as Amazon CloudWatch, AWS Systems Manager, or third-party monitoring tools. CloudWatch provides metrics, logs, and alarms for EC2 instances, and can be used to track the CPU, memory, disk, and network usage, and to set alerts based on thresholds or anomalies. Systems Manager provides remote access, patching, and automation for EC2 instances, and can be used to perform maintenance tasks, troubleshoot issues, and manage the instances at scale. Some best practices for monitoring and troubleshooting Amazon EC2 instances include monitoring the system and application logs, using monitoring agents or integrations, setting up backups and recovery, and automating the monitoring and remediation tasks.</li>
</ol>
</details>

## Level 3: Advanced

<ol>
<li>How can you use Amazon EC2 with other AWS services, such as AWS Lambda?</li>
</ol>

<details>
<summary>Answer</summary>
<ol>
<li>Amazon EC2 can be used with other AWS services to build and run complex and distributed applications, such as serverless, containerized, or hybrid architectures. For example, you can use AWS Lambda to run event-driven functions in response to the EC2 events or logs, and to automate the EC2 management tasks.</li>
</ol>
</details>