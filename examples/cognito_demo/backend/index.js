const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;
const poolData = {
    UserPoolId: 'us-east-2_dz7GpkWlT',
    ClientId: '2df3ar3fssegprr23ecl37lqv0'
}

AWS.config.update({region: 'us-east-2'});

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Register

app.post('/user', (req, res) => {
    const {username, password, email} = req.body;

    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: 'email',
            Value: email
        })
    ];

    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err){
            return res.status(400).send(err.message || JSON.stringify(err));
        }

        res.send({message: "user registered successfully", user: result.user});
    });
});

// Confirm
app.post('/confirm', (req, res) => {
    const {username, confirmationCode} = req.body;

    const userData = {
        Username: username,
        Pool: userPool
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
        if (err){
            return res.status(400).send(err.message || JSON.stringify(err));
        }

        res.send({message: "confirmation successful", result});
    })
});


// Login
app.post("/login", (req, res) => {
    const {username, password} = req.body;

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        {
            Username: username,
            Password: password
        }
    );

    const userData = {
        Username: username,
        Pool: userPool
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
            res.send({message: "Login Successful", session});
        },
        onFailure: (err) => {
            res.status(400).send(err.message || JSON.stringify(err));
        },
    });
});

// Protected

const region = 'us-east-2';
const userPoolId = 'us-east-2_dz7GpkWlT';

const client = jwksClient({
    jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`
})

function getKey(header, callback){
    client.getSigningKey(header.kid, (err, key) => {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey)
    })
}

app.get('/protected', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token){
        return res.status(401).send({message: "no token provided"});
    }

    jwt.verify(token, getKey, { algorithms: ['RS256']}, (err, decoded) => {
        if (err){
            return res.status(401).send({message: "Invalid Token"});
        }
        res.send({message: "You have accessed protected data!", decoded});
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
