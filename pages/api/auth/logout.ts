import { NextApiResponse } from "next";
export default async function logout(response: NextApiResponse) {
  response.setHeader("Set-Cookie", [
    `access=next-auth.session-token; Max-Age=0; path=/`,
    `refresh=next-auth.session-token; Max-Age=0; path=/`,
  ]);
  const url = "https://ttmessenger.netlify.app/";
  response.redirect(url!);
}
