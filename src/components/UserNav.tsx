import { useStytch, useStytchSession, useStytchUser } from "@stytch/nextjs";
import Link from "next/link";

export function UserNav() {
  const stytch = useStytch();
  const { user, isInitialized, fromCache } = useStytchUser();
  const { isInitialized: isSessionInitialized, session } = useStytchSession();
  console.log("session: ", session);
  console.log("isSessionInitialized: ", isSessionInitialized);
  console.log("fromCache: ", fromCache);
  console.log("isInitialized: ", isInitialized);
  console.log("user: ", user);

  return (
    <div>
      {isInitialized ? (
        user ? (
          <div>
            Signed in as {user.name.first_name} {user.name.last_name} (
            {user.emails[0].email}) |{" "}
            <button className="primary" onClick={() => stytch.session.revoke()}>
              Sign out
            </button>
            <div>
              {" "}
              <Link href="/profile" className="">
                Profile
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link href="/login" className="">
              Login/Signup
            </Link>
          </div>
        )
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
