import loadStytchBackendAPI from "@/utils/loadStytch";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

const SESSION_COOKIE = "stytch_cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;
  let sessionToken;
  try {
    const stytchClient = loadStytchBackendAPI();
    const resp = await stytchClient.oauth.authenticate(token, {
      session_duration_minutes: 60,
      session_management_type: "stytch",
    });
    sessionToken = resp.session.stytch_session.session_token;
  } catch (error) {
    console.log(error);
    const errorString = JSON.stringify(error);
    return res.status(400).json({ errorString });
  }

  setCookie(SESSION_COOKIE, sessionToken, {
    req,
    res,
    maxAge: 60 * 60 * 24,
    secure: true,
  });

  return res.redirect("/");
}
