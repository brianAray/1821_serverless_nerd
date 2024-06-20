# DynamoDB Question Bank

## Level 1: Basic

1. What is DynamoDB, and how is it used in web development?
    <details>
    <summary>Answer</summary>
    DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance. It is used in web development to store and retrieve data for web applications.
    </details><br>

2. What are the key features of DynamoDB?
    <details>
    <summary>Answer</summary>
    The key features of DynamoDB include fast and predictable performance, automatic scaling, seamless data replication across multiple data centers, and built-in security features.
    </details><br>

3. What is a primary key in DynamoDB, and what are the two types of primary keys?
    <details>
    <summary>Answer</summary>
    A primary key is a unique identifier for each item in a DynamoDB table. The two types of primary keys are partition keys, which are used to distribute data across partitions, and composite keys, which consist of a partition key and a sort key.
    </details><br>

4. What is the difference between a strongly consistent read and an eventually consistent read in DynamoDB?
    <details>
    <summary>Answer</summary>
    A strongly consistent read returns the most up-to-date data, while an eventually consistent read may return stale data that has not yet been fully propagated across all DynamoDB replicas.
    </details><br>

5. What are the advantages of using DynamoDB over traditional relational databases?
    <details>
    <summary>Answer</summary>
    DynamoDB offers automatic scaling, low latency, and high throughput at any scale, without the need for complex indexing or sharding strategies. It is also fully managed, meaning that AWS handles the maintenance and administration of the database.
    </details><br>

6. What are the basic steps for creating a table in DynamoDB?
    <details>
    <summary>Answer</summary>
    The basic steps for creating a table in DynamoDB are to define the table's primary key, specify the table's read and write capacity, and create any local or global secondary indexes. Once the table is created, you can begin adding and querying items.
    </details><br>

7. What is a partition key in DynamoDB, and how is it used?
    <details>
    <summary>Answer</summary>
    A partition key is the primary key for a DynamoDB table and is used to partition data across multiple servers. When you query or update a table, DynamoDB uses the partition key to determine which server the data is stored on, enabling fast and efficient data access.
    </details><br>

## Level 2: Intermediate

1. How do you perform a query operation in DynamoDB?
    <details>
    <summary>Answer</summary>
    To perform a query operation in DynamoDB, you need to provide a partition key value and a condition that specifies the sort key value. This will return all items in the table that match the provided partition key and condition.
    </details><br>

2. What is a scan operation in DynamoDB, and when is it useful?
    <details>
    <summary>Answer</summary>
    A scan operation in DynamoDB reads every item in a table and returns all items that match the provided condition. It can be useful for searching for items that do not have a partition key or sort key value that matches a specific value.
    </details><br>

3. What is the difference between a partition key and a sort key in a composite primary key, and how are they used in query operations?
    <details>
    <summary>Answer</summary>
    A scan operation in DynamoDB reads every item in a table and returns all items that match the provided condition. It can be useful for searching for items that do not have a partition key or sort key value that matches a specific value.
    </details><br>

4. What is the difference between a local and global secondary index in DynamoDB, and when would you use each one?
    <details>
    <summary>Answer</summary>
    A local secondary index (LSI) is an index that has the same partition key as the base table but a different sort key. It can only be created when the table is created, and it is limited to a single partition. A global secondary index (GSI) is an index that has a different partition key and sort key than the base table. It can span multiple partitions, and it can be created at any time. LSIs are useful for optimizing queries within a single partition, while GSIs are useful for optimizing queries across multiple partitions.
    </details><br>

5. What is a DynamoDB transaction, and how can it be used to ensure data consistency across multiple tables or items?
    <details>
    <summary>Answer</summary>
A DynamoDB transaction is a way to atomically write or delete up to 25 items in one or more tables. Transactions ensure that either all or none of the items are written or deleted, maintaining data consistency across multiple items or tables. Transactions can be used to implement complex business logic that involves multiple data operations that must succeed or fail together.
    </details><br>