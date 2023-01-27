import { BagelRequest, BagelResponse } from "@kakengloh/bagel";
import cors from "cors";

export const setHeaders = async (request: BagelRequest,response: BagelResponse, next: any) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // hacky cors integration
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Content-Type', 'application/json');
  next()
};

export const customCors = async (request: BagelRequest, response: BagelResponse, next: any) => {
  const res = {
    statusCode: 200,
    setHeader: response.setHeader,
    end: response.done,
  };
  cors()(request, res, next);
};
