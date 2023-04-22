import { generate } from "https://deno.land/std@0.178.0/uuid/v1.ts";
import { Cookie } from "https://deno.land/std@0.178.0/http/mod.ts";

const uuid = generate().toString();

export const secCookie: Cookie = {
  name: "visitorID",
  value: uuid,
  httpOnly: true,
  // secure: true,
  // domain: "creativesources.deno.dev",
  expires: new Date(2024, 0, 1),
  sameSite: "Strict",
};
