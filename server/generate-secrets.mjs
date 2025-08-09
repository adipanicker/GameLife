import crypto from "crypto";

console.log("SESSION_SECRET=", crypto.randomBytes(32).toString("hex"));
console.log("JWT_SECRET=", crypto.randomBytes(32).toString("hex"));
