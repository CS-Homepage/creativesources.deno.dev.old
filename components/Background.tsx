import { h, Fragment } from "../deps.ts";
import Matrix from "./Matrix.tsx"

export function Background() {
  console.log("Background started...");
      
  return (
    <div id="bg"><Matrix /></div>
  );
}
