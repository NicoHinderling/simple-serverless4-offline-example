import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const helloHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4.0! Your function executed successfully!",
    }),
  };
};
