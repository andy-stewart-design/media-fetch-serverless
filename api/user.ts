import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Figma data:", error);
    res.status(500).json({ error: "Failed to fetch Figma data" });
  }
};
