import { NextApiResponse } from "next";
export default async function logout(response: NextApiResponse) {
  const url = "https://ttmessenger.netlify.app/";
  response.redirect(url!);
}
