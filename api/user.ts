import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default (req: VercelRequest, response: VercelResponse): void => {
  fetch("https://dummyjson.com/products")
    .then((results) => results.json())
    .then((data) => response.json(data));
};
