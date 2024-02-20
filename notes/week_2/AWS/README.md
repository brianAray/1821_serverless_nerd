# Amazon Web Service (AWS)

## Cloud Computing

This is a service model that allows users to share and access computing resources like servers, storange, and applications, over the internet on a pay-as-you-go basis instead of owning it and managing it locally.

AWS is the current market lead and own the market majority in terms of services and active users.

## Benefits of AWS

- **Scalability**
    - Resources canbe scaled up or down as needed, so you only pay for what you need
- **Reliability**
    - AWS infrastructure is fault tolerant
- **Global Reach**
    - AWS allows you to setup servers on a global scale, creating infrastructure in different regions

## Vertical vs Horizontal Scaling

- A major advantage of the cloud computing model is the ability to scale quickly based ont he growth in the number of customers using the application
- **Vertical**
    - Adding more power and resources to a single server (e.g. adding more RAM, adding more CPU cores,etc)
- **Horizontal**
    - Adding more servers (1 server to 1000s servers)
- Horizontal scaling is virtually unlimited, while vertical scaling has an upper limit (constrained by the physical limitations to what you can add to a single server)
- Horizontal scaling has challenges compared to virtual scaling in terms of how twe design the infrastructure.
    - With horizontal scaling, because we're making use of multiple servers, we need some way to distribute traffic out to different servers and deploy the application to all of those servers

## AWS Regions and Availability Zones

1. AWS Regions
    - Geographical locations where AWS Data centers are located
    - They are separate geographic areas, listed as "us-east-1" (N.Virginia), "eu-west-1" (Ireland)
    - They are completely isolated from each other
2. Availability Zones
    - Within each AWS Region, there are multiple Availabiliyt Zones
    - Each are essentially data centers or clusters of data centerss
    - They are physically separated and isolated, but are connected with low-latency, high-throughput networking
3. High Availability and Fault Tolerance
    - Availability Zones within a region are designed to provide redundancy and high availability
    - Deploying resources across multiple AZs ensures that if one AZ experiences an issue, your application can continue running in another one

