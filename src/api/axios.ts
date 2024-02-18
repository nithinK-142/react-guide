import axios from "axios";

const URL = "https://api-branch.vercel.app/react-guide";
export async function getBranches() {
  try {
    const response = await axios.get<string[]>(URL);
    return response.data;
  } catch (error) {
    throw new Error("failed to fetch!!");
  }
}
