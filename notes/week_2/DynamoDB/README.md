# DynamoDB

## SQL vs NoSQL

SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems, each with their own charactersitics and use cases.

### NoSQL Database

1. **Data Structure**
    - NoSQL databases are non-relational and schema-less
    - Data is stored in varioius formats, including key-value, document, column-family, and graph

2. **Schema Flexibility**
    - NoSQL databases offer flexibility in what fields you can add or remove without exisiting data being affected
    - This is very beneficial to application with evolving data requirements

3. **CAP Theorem**
    - NoSQL databases have CAP (Consistency, Availibility, Partition Tolerance) theorem
    - They prioritize either consistency (strong consistency) or availability during network partitions

## DynamoDB Table Structure

- Data in DDB is stored as items contained in tables
- A table is logical collection of items
- Items have attributes
    - identifiers for each value that an item consists of
- When creating a table, a **primary key** is required, and is defined as:
    - **Partition Key (required)**
        - The partition key or also known as "hash key" is used for identifying what partition an item belongs to when y ou run the partition key through the hashing algorithm
        - THe partition key is used to distribute data across multiple partitions, which allows for horizontal scaling of the table
    - **Sort Key (optional)**
        - The sort key, or also known as the "range key" is combined with the partiion key to create a unique identifier for each item in the table
        - The sort key is used to efficiently perform queries on ranges of data that have different sort keys but the same partition key
    - Example: Notes Table
        - Primary Key
            - user_id (partition key)
            - time_created (sort key)
                - If we want to efficiently query for notes created by user_id 1 created between 1 minute to 1 day agao, we can use the combination of both keys
            - There can only be one item with user_id 1 and time_created "1234124124"

## Secondary Indexes: Global and Local

In DDB, secondary indexes provide a flexible querying option beyond the primary key. There are two types of them: Global Secondary Indexes (GSI) and Local Secondary Indexes (LSI).

- **Global Secondary Index**
    - Independence from the Table
        - They are independent of the tables primary key
        - You can create multiple GSIIs on a single table, each with its own key schema
    - Non-Unique Attributes
        - A GSI allows you to query non-unique attributes in the table, which means that multiple items in the table can have the same indexed attribute value
    - Different Partition and Sort Keys
        - They have their own partition key and sort key (if specified)
        - They do not need to match the primary key of the base table

    - Example:
        - Base table Key
            - Customer ID (Partition)
            - Order Date (Sort)
        - GSI
            - Order ID (Partition)
            - Order Status (Sort)
    
    - Scalability
        - They can be provisioned with their own read and write capacity
        - They can be used to offload specific queries from the primary table
    - Use Cases
        - GSIs are suitable for scenarios where you need to query data in various ways, perform lookup based on attributes not in the primary key
    
- **Local Secondary Indexes**
    - Dependant on the Table
        - LSIs are dependant on the base table's primary key
        - They share the same partition key as the table but have a different sort key
    - Querying Attributes on the Base Table
        - LSIs allow you to query attributes that are already in the table
        - You cannot perform queries not supported by the primary key
    - Same Parition Key, Different Sort Key
        - Unlike GSIs, the partition key must match the partition key of the base table
    - Example
        - Base Key
            - Customer ID
            - Order Date
        - LSI
            - Customer ID
            - Order Status

## Scalar Functions

- Scalar functions in the context of a NoSQL database refer to functions that operate on individual data items
- These functions are applied to single values and do not involve aggregations or complex operations across multiple documents
- Scalar functions are commonly used for data manipulation and transformation
- Examples
    - String Functions
        - Concatenation
        - Substring
        - Upper/Lower conversion
        - Length
    - Numeric Functions
        - Arithmetic Operations
        - Rounding
        - Absolute Value
        - Min or Max
    - Conditional Functions
        - IF/ELSE
            - Conditional logic for data transformation
        - CASE
            - Perform different actions based on conditions

## DynamoDB Operations
- put, update, get, delete (single items)
    - put: create an item or fully replace an item with an existing primary key
        - If item already exists with given primary key, it will essentially delete the old item and replace it with a new item
    - update: update some attributes for an item with an existing primary key
        - If item with primary key doesn't exist, then it will actually create a new item with the "updated attributes"
    - get: retrieve an item with a given primary key
        - if item doesn't exist, it will return a blank object (not an error)
    delete: delete an item with a given primary key
        - if item doesn't exist, it simply won't really do anything (no error)
    - query and scan (retrieving groups of items)
        - query: return all values with a given partition key
            - We can either query the partition key of the table itself (part of the primary key) OR we can query the partition key of an index (such as global secondary index)
            - Important point: query allows for efficient access of data in O(1) time complexity
            - We can utilize filter expressions as well if we want to further refine results
        - scan: access every single item in the given table or index
            - Inefficient! Time complexity is O(n)
            - Can use filter expressions to filter data
            - Somebody really inexperienced might use scan and then filter for everything
            - However, this is a very NAIVE approach because of the inefficiencies mentioned
            - We should think about creating global indices for anything that we want to efficiently query over

## Query v. Scan grocery_items
    - ex. grocery_items table
        - grocery_item_id (partition key)
        - name
        - quantity
        - price
        - category
    - Naive approach to querying for all items in a given category (ex. meat)
        - Scan the table and filter based on category equal to "meat"
        - O(n)
    - Smart approach
        - Use query on a global secondary index that has category as the partition key
        - ex. Query category-index on category (partition key) equal to "meat"
        - O(1)