// aws sdk
// uuid
// file-type

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

import { v4 as uuidv4 } from "uuid";
import { fileTypeFromBuffer } from "file-type";

const s3client = new S3Client({ region: "us-east-1" });

const client = new DynamoDBClient({ region: "us-east-1" });

const documentClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const bodyObject = JSON.parse(event.body);

  const { caption, base64String } = bodyObject;

  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(base64Data, "base64");

  const { ext } = await fileTypeFromBuffer(imageBuffer);

  const postId = uuidv4();

  try {
    let dbResponse = await postPost({ postId, caption, ext });

    const s3BucketPutCommand = new PutObjectCommand({
      Bucket: process.env.POSTS_BUCKET_NAME,
      Key: `${postId}.${ext}`,
      Body: imageBuffer,
    });

    const s3Response = await s3client.send(s3BucketPutCommand);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Successfully posted image",
        dbResponse,
        s3Response,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};

async function postPost(post) {
  const command = new PutCommand({
    TableName: process.env.POSTS_TABLE_NAME,
    Item: {
      post_id: post.postId,
      caption: post.caption,
      extension: post.ext,
    },
  });
  try {
    const data = await documentClient.send(command);
    return data;
  } catch (error) {
    throw error;
  }
}
