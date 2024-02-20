# REST

Representational State Transfer (REST) is an architectural style for building web services. It is based on a set of constraints, such as statelessness and a uniform interface, that aims to create a simple and scalable way of exposing resources and operations over the internet. REST is a popular approach to building web services due to its simplicitiy, and standard practices that are easy to interact with as a client (consuming) and understand.

## Key Characteristics

- **Statelessness**
    - Each request from a client to a server must contain all the information needed to understand and process the request, without relying on any server side state
- **Uniform Interface**
    - The interface between the client and the server  must be uniform and consistent, with a small set of well-defined methods (GET, POST, PUT, and DELETE) that are used to access and manipulate resources
- **Addressability**
    - Resources are identified by a unique identifier (like URI) and can be accessed and manipulated with the standard HTTP methods
- **Resources**
    - a RESTful service exposes resources, which are the building blocks of the service. Resources can be any kind of data, such as a file, an image, a database record, anything the service wants to provide

In practice, RESTful web services are typically built using the HTTP protocol which provides a simple, standard way of exposing resources and operations over the internet. For example, a RESTful service may expose an API that allows clients to accessa nd manipulate customer records in a database by making HTTP requrests to URIs that represent those records.

A RESTful web service must be designed to be easy to consume and understand, this makes it a popular choice for builidng web services, microservices, and web-based applications.

## REST Resources and URL Construction

In REST, a resources is any piece of information or data that can be identified by a URL. For example, in a E-Commerce website, products, orders, and customers might all be considered resources. The URLS for these resources may look something like so:

- https://www.example.com/products/1234
    - This URL might refer to a specific product with an ID of 1234
- https://www.example.com/orders/43234
    - This URL might refer to a specific order with an ID of 43234
- https://www.example.com/customers/123
    - This URL might refer to a specific customer with an ID of 123

The RESTful URLs have a predictable structure, with the resource being represented by the path of the URLs and additional parameters about the resource being represented via query parameters

- https://www.example.com/products?category=hardware&order=descending

The standard methods (GET, POST, PUT, and DELETE) can be used to interact with the resourcea nd perform different operations.

## REST Constraints

REST, is based on a set of architectural constraints. These are to define the uniform interface between the client and the server, to help ensure that the service can be used and consumed by a wide range of clients.

### The Six Main Constraints

- **Client-Server**
    - This is the separation of the user interface concerns from the data storage concerns
    - The client is responsible for interacting with the user interface, while the server is responsible for storing and retrieving data
- **Stateless**
    - The server must n ot maintain any client-specific state between requests
    - Each request should contian all the data necessary toc omplete it, and the server should not use any information from previous requests to process the current one
- **Cacheable**
    - This constraint is focused on minimizing the demand on the client and the server
    - Resources should be able to be caches in order to improve performance and reduce server load
    - Tell the client that the data is cacheable so that subsequent requests are unnecessary unless the resource changes
- **Layered System**
    - The application should be composed of a set of layers, each with a specific responsibility
    - This allows for a more modular and flexible design
- **Code on Demand**
    - This is optional, but states that a server can send code to the client to be executed on the client's machine
    - This can be used to improve the functionality of the client or facilitate offline access to data
- **Uniform Interface**
    - This constraint is probably the most important one and states that the interface between the client and the server should be uniform, simple and easy to use
    - It defines four standard methods (GET, POST, PUT, and DELETE) which client and server must be able to understand and respond to

Following these constraints, a service can be designed to be easy to consume, understand, and maintain. The goal is to have these constraints be clear but implementable based on the developers needs. It allows for scalability and can be extended to support new features and functionality as the API evolves through time.

## Richardson Maturity Model

Leonard Richardson was the creator of this model, after analying hundreds of different web services and designs, he divided them into four categories. These are based on how REST compliant a web service is:

- Level 0
    - The web service does not make use of any URI, HTTP Methods, and HATEOS (HyperMedia As The Engine Of Application State) capabilities
    - The services at 0 maturity level have a single URI and use a single HTTP method (typically POST)
    - This is the most primitive way of building applications
- Level 1
    - The web service makes use of URIs, but does not use the HTTP methods, and HATEOAS
    - The services have many different URIs but typically are still using POST
- Level 2
    - The web service makes use of URIs and HTTP methods, but not HATEOAS
    - In this case the web service typically hosts numerous URIs i.e. addressable resources
    - This is the most popular usecase of REST principles, but designed are expecting peiple to put some effort into mastering their API
    - This generally involves providing some kind of documentation
- Level 3
    - The web service makes use of all 3, URIs, HTTP methods, and HATEOAS
    - This is the most mature level of the Richardson model, and encourages easy discoverability
    - This level makes it easy for the responses to be self descriptive using HATEOAS
    - The service leads customers through a trail of resources, causing teh application state to transition as a result