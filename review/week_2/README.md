# Week 2 Review

* AWS
    - Amazon Web Services is a cloud computing platform owned by Amazon
        - Market leader
        - Small startups to large enterprises all make use of AWS
    - Cloud Computing: service model where customers can access and use shared computing resources, such as servers, storage, and applications, over the internet
        - Pay-as-you-go model
        - Benefits of cloud computing
            1. Scalability
            2. Reliability
            3. Cost-effectiveness
            4. Global reach
            5. Flexibility
            6. Security
    - AWS Infrastructure
        - AWS Region: geographic region consisting of multiple data centers, all connected together to form an isolated unit
        - Most resources are scoped to a specific region
            - Ex. a DynamoDB table that is created will exist in one region
        - Availability Zones: Physically separate locations within a region that have their own power, cooling, etc.
            - Availability zones enable high-availability and fault tolerance
            - If one AZ goes down, the remaining AZs can take over
    - Vertical v. Horizontal scaling
        - Vertical scaling: adding more power and resources to a single server (ex. adding more RAM, adding more CPU cores, etc.)
        - Horizontal Scaling: Adding more servers (ex. scaling from 1 server to 1000 servers)
        - Horizontal scaling is virtually unlimited, while vertical scaling has an upper limit (constrained by physical limitations to what you can add to a single server)
            - Has additional challenges however in how to distribute traffic between different servers
    - IAM
        - Identity and access management
        - Allows us to manage users, groups, and roles and the permissions that they have
            - Permission: Access that a user, group, or role has to AWS resources in an AWS account
        - IAM User: a person or application that interacts with AWS using credentials (username + password, OR access keys)
            - Permissions applied to a user with only apply to that user
        - IAM Group: a collection of IAM users. A user can belong to multiple groups as well
            - Permissions applied to a group will apply to all users in that group
        - IAM Role: roles can be assumed by an AWS service
            - Allows for AWS services to access other AWS services
            - Examples of services that might utilize a role
                - EC2 instances
                - Lambda functions
* DynamoDB
    - An AWS service that provides a highly scalable key-value based NoSQL database
    - SQL v. NoSQL
        - SQL (Structured Query Language): A traditional type of database based on tables with rows and columns, where tables are related through foreign keys
        - NoSQL: Refers to a variety of databases that are non-relational, such as document, key-value, and graph databases
    - DynamoDB table structure
        - A table is a collection of items
        - Each item contains key-value pairs (attributes)
        - A primary key is defined for the table that uniquely identifies each item in the table
            - Composed of
                - Partition key: identifies which partition within the table an item belongs to
                - Sort key (optional): used to perform queries on ranges of data with the same partition key value
            - If both a partition key and sort key are used, the combination of the two keys must be unique
    - Secondary Indices
        - An index is a data structure that contains a subset of attributes from the table that enables us to efficiently query data from a table using a different set of keys
            - When we create a table, we can think of the primary key as being part of the "primary index"
        - We can also create "secondary indices"
        - Two types of secondary indices
            - Local secondary index
                - Shares the same partition key as the table's primary key, but a different sort key
                - You can only create a local secondary index at the time in which you are creating the table
                    - If you have already created a table, then you cannot add an LSI later
                - Used if you want multiple sort keys
            - Global secondary index
                - A GSI can be created at any time
                    - During creation of the table
                    - After the table was already created
                - Uses a different partition key and sort key (optional) than the table
                - Should use GSIs when we want to query data efficiently, while using a different partition key than the table's partition key
    - DynamoDB Operations
        - put, update, get, delete (single items)
            - put: create an item or fully replace an item with an existing primary key
                - If item already exists with given primary key, it will essentially delete the old item and replace it with a new item
            - update: update some attributes for an item with an existing primary key
                - If item with primary key doesn't exist, then it will actually create a new item with the "updated attributes"
            - get: retrieve an item with a given primary key
                - if item doesn't exist, it will return a blank object (not an error)
            - delete: delete an item with a given primary key
                - if item doesn't exist, it simply won't really do anything (no error)
        - query and scan
            - Query: used to efficiently query collections of data from either the table or an index (efficient)
            - Scan: accesses every item in the table (inefficient)
            - Both query and scan can make use of filter expressions, but filter expressions filter the data after the data has already been accessed. Filtering has no impact on efficiency
                - Using filter with query is for further refining the results (retrieval based on table's partition key or index's partition key is efficient)
                - Using filter with scan will filter after retrieving ALL items (still inefficient)
    - Connecting to DynamoDB using aws-sdk
        - Set 3 environment variables
            - `AWS_ACCESS_KEY_ID`
            - `AWS_SECRET_ACCESS_KEY`
            - `AWS_DEFAULT_REGION`
        - The access key can be obtained from an IAM user
            - The aws-sdk will use that IAM user
            - IAM user must have sufficient permissions added to interact with DynamoDB
* SDLC
    - Describes structured processes to help teams create high-quality software in shortest possible amount of time
    - Phases
        1. Planning phase: Gather requirements for software from customers and other stakeholders
        2. Design phase: Designing the system
        3. Implementation phase: writing/building the software
        4. Testing phase: testing the application to ensure that the software meets the requirements and that bugs are fixed
        5. Deployment phase: deploying the application to production environment servers in which the application is available to the customer
        6. Maintenance phase: The software is operated and monitored to ensure that it is up and functional
    - Waterfall
        - An approach to software development where each phase must be completed before moving to the next, and once the team progresses to another phase, then there's no going back
        - The main benefit is that it follows a clear and well-defined process
        - The main drawback is that it is a very inflexible approach that is typically not suitable for modern software development
    - Agile
        - Emphasizes an iterative approach to software development where the process of building the software is repeated many times, with each iteration building upon the previous
        - The main benefit is it enables flexibility and adaptation to changing requirements
        - The main drawback is that agile requires strong communication and collaboration between team members, where everyone takes a proactive approach, since there is less of a clear and well-defined proccess compared to waterfall
    - Scrum
        - Agile framework for managing and completing complex projects
        - Principles
            - Transparency
            - Inspection
            - Adaptation
        - Revolves around the idea of a **sprint**
            - A sprint is a single iteration
            - Lasts 2-4 weeks
        - Each sprint has the following 4 ceremonies
            - Sprint Planning: team sets goals and plans for the new sprint
            - Daily Scrum: short meeting held everyday in the morning to discuss progress and plan for the day
                - What was accomplished the previous day?
                - What will be done today?
                - Are there any blockers?
                -   A blocker is something that prevents a team member from moving forward
                -   A blocker should be specific
            - Sprint Review: team demos what they have built for the customer or other stakeholders
            - Sprint Retrospective: where the team reflects on what went well and what could be improved
        - Tasks/requirements are defined around the idea of **user stories**
            - A user story is a description of a feature from the perspective of a user interacting with the product
        - Story Pointing
            - Technique utilized for estimating the complexity of a given task or feature
            - Team members discuss the estimated relative complexity of a user story, and assign a point value to that user story
            - Point values are assigned typically using the fibonacci sequence (1, 2, 3, 5, 8, 13, 21, etc.), where a higher value indicates a higher level of complexity/difficulty
* Express
    - A web framework for Node.js that enables the rapid development of HTTP based APIs
    - Consists of an API for defining routes and an embedded web server
    - Setup
        - Import express `const express = require('express')`
        - Create object representing web server `const app = express()`
        - Have the web server listen on a particular port `app.listen(PORT, () => {})`
    - Routes (Endpoints)
        - `.get(path, (req, res) => {})`: Used to create a GET endpoint for a given URL
        - `.post(path, (req, res) => {})`: Used to create a POST endpoint for a given URL
        - `.patch(path, (req, res) => {})`: Used to create a PATCH endpoint for a given URL
        - `.put(path, (req, res) => {})`: Used to create a PUT endpoint for a given URL
        - `.delete(path, (req, res) => {})`: Used to create a DELETE endpoint for a given URL
    - Middleware
        - Middleware are essentially special functions that sit between the request coming into the server and the final route
        - We can make use of existing middleware or create our own custom middleware
            - bodyParser.json() is an example of existing middleware that we can use for parsing JSON from the body of an HTTP request or convert a JS object into JSON for the HTTP Response
            - Custom middleware: `(req, res, next) => {}`
                - `calling next()` passes the request from the current middleware function to the next
        - `app.use(<middleware>)`
            - Order is important, as it determines the order in which the request is passed from one midddleware to the next
    - Routers
        - Routers allow for us to separate routes into different JS files for better organization
        - `const express = require('express')`: import express
        - `const router = express.Router()`: create the Router
        - `router.get(path, (req, res) => {})`: map routes to the Router
        - `module.exports = router;`: export the Router
* REST
    - A standard based around resources and the operations that can be performed on those resources
    - Operations
        - POST: create a resource
        - GET: retrieve a resource
        - PUT: fully replace a resource
        - PATCH: partially replace a resource
        - DELETE: delete a resource
    - A resource is something that "exists" on the server (or the database the server connects to)
        - For example, in an e-commerce website, products, orders, and customers might all be considered resources. The URLs for these resources may look something like this:
            - "https://www.example.com/products/1234" - This URL might refer to a specific product with an ID of 1234
            - "https://www.example.com/orders/54321" - This URL might refer to a specific order with an ID of 54321
            - "https://www.example.com/customers/123" - Referring to a customer with an ID of 123
    - REST URL naming conventions
        - We can identify a single resource using
            - ex. `/customers/{customerId}`
        - We can identify a collection of resources using
            - ex. `/customers`
        - We can identify sub-collections using
            - ex. `/customers/{customerId}/bankaccounts` (all bank accounts belonging to customer)
        - We can also identify single resources within a sub-collection
            - ex. `/customers/{customerId}/bankaccounts/{bankAccountId}`
        - Best practices
            1. Use nouns to represent resources
            2. Use hyphens (-) to improve readability
            3. Do not use underscores (_)
            4. Use lowercase letters
            5. Don't use verbs (Don't do `/add-user`)
            6. Use query to filter collections (`ex. /reimbursements?status=pending`)
    - REST Contraints
        - Client-Server: This is the separation of the user interface concerns from the data storage concerns. The client is responsible for interacting with the user interface, while the server is responsible for storing and retrieving data.
        - Stateless: The server must not maintain any client-specific state between requests. Each request should contiain all the information necessary to complete it, and the server should not use any information from previous requests to process the current one.
        - Cacheable: This constraint is focused on minimizing the demand on the client and the server. Resoruces should be able to be , in order to improve performance and reduce server load. 
        - Layered System: The application should be composed of a set of layers, each with a specific responsibility. This allows for a more modular and flexible design.
        - Code on Demand: This is optional, but states that a server can send code to the client to be executed on the client's machine. This can be used to improve the functionalty of the client or to enable offline access to data.
        - Uniform Interface: This constraint is probably the most important one and states that the interface between the client and the server should be uniform, simple and easy to use. It defines four standard methods (GET, POST, PUT, and DELETE) which client and server must be able to understand and respond to.
    - Richardson Maturity Model
        - Level Zero: The web service does not make use of any URI, HTTP Methods, and HATEOAS (HyperMedia As The Engine Of Application State) capabilites. The services at zero maturity level have a single URI and use a single HTTP method (typically POST). This is the most primitive way of building applications.
        - Level One: The web service makes use of URIs, but does not use the HTTP methods, and HATEOAS. The services have many different URIs but are typically still using POST.
        - Level Two: The web service makes use of URIs and HTTP Methods, but not HATEOAS. In this case the web service typically hosts numerous URIs i.e. addressable resources. This is the most popular usecase of REST principles, but designers are expecting people to put some effort into mastering the APIs - generally by reading the supplied documentation
        - Level Three: The web service makes use of all three, URIs, HTTP, and HATEOAS. This is the most mature level of Richardson's model, and encourages easy discoverability. This level makes it easy for the responses to be self-descriptive using HATEOAS. The service leads the consumers through a trail of resources, causing the application state to transition as a result.
* Git Advanced
    - Branch: an alternative "timeline" of commits
        - Switching between branches allows us to switch between different states of a project
        - Normally, branches are used when developing new features for an application
        - Those feature branches are then eventually merged into the main branch
            - The main branch represents the "current version" of the application that has incremental features merged into it over time
    - Commands
        - `git branch <branch name>` to create a branch
            - New branches should be created while in the main branch, so that the new branch starts branching off from the current state of the main branch
        - `git checkout <branch name>` to switch branches
        - `git merge <branch name>` can be used to merge the `"<branch name>"` branch into the branch we are currently in
            - However, this should not be done unless merge conflicts need to be resolved
            - Instead, pushing the feature branch to Github directly and then creating a pull request is the best practice so that other developers can review the code
    - Pull Request
        - Not a Git feature
        - Pull requests are a feature developed by Git repository hosting websites such as Github.
        - Allows for merging to occur on Github after other developers review changes that a developer(s) made
