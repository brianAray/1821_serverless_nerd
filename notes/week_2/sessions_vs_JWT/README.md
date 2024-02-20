# HTTP Sessions v. JSON Web Tokens (JWTs)

## HTTP Session
HTTP Sessions are a way for a server to keep track of a user's interactions over multiple requests. A session is typically created on the server when a user first logs in, and is associated with a unique session ID that is sent to the user as a cookie. The user then sends this session ID back to the server with each subsequent request, which allows the server to retrieve the user's session information and continue the session.

1. The user logs in
2. The server creates a session object with a unique session ID
3. The server sends the session ID inside of a cookie back to the user
4. When the user sends any subsequent requests, they send the cookie inside the request
4. The server receives the cookie with the session ID and continues the user's session by retrieving the session object that the server stores itself

The drawback with HTTP sessions is that the server itself must keep track of all of the session objects. The only thing that the user keeps track of is the cookie, which only contains the session ID. Information, such as the username of the user and their role, would be kept track of in the session object on the server. **The fact that the server keeps track of all the session objects** means that horizontal scaling (adding additional servers to take on more load and distributing traffic evenly across those servers is not really possible because each server will have different session objects).

Solution: Instead of the server keeping track of the information, have the client keep track of the information instead

## JSON Web Tokens (JWTs)
JWTs allow for the client (aka user) to keep track about information instead without worrying about the client "forging" the information. 

A JWT is a compact means of representing "claims" to be transferred between two parties (client and server). JWTs are most commonly used to authentication and authorize users in web applications and APIs.

A JWT contains a header, payload, and signature. The header and payload are Base64Url encoded JSON objects. The header typically contains information about the type of token and the signing algorithm used to secure the token. The payload contains the claims, which is essentially information about the user, such as username and role, and additional metadata. The signature section is very important as it is used to verify that the sender of the JWT is who they say they are and did not forge any part of the header or payload.

When a user logs in successfully, a JWT will be created and signed by the server and all of the header and paylaod information will be included into the JWT. On all subsequent requests, the user can send the JWT, usually as part of the HTTP Request's Authorization header, or they could also send the JWT in the body of the request or as a query parameter.

Because JWTs contain all of the information and are stored by the client, the server does not need to keep track of anything at all. All it needs to do is to verify that the user is sending a valid JWT back to the server when they send their requests. JWTs are therefore useful in situations where we make use of horizontal scaling (cloud computing) / distributed architectures, etc.

# Summary
JWTs are considered to be better than HTTP sessions for horizontal scaling because they are fully stateless. This means that the server does not need to maintain any session data, which is all stored on the client side instead. This allows multiple servers to handle requests without having to share any sort of session data, making it easy to scale horizontally.

With HTTP sessions, the server must store session data and share it among all servers. This can become a bottleneck as the number of servers increases and the amount of session data grows. Session data can also become inconsistent across servers if they are not properly synchronized.