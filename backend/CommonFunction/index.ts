import { Buffer } from "node:buffer";


export async function hashFunction(message: string): Promise<string> {
  const encodedMsg = new TextEncoder().encode(message);
  const msgDigest = await crypto.subtle.digest(
    {
      name: "SHA-256",
    },
    encodedMsg
  );
  const base64String = Buffer.from(msgDigest).toString("base64");
  return base64String;
}
