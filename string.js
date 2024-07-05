const client = require("./client");

async function init() {
  await client.set("msg:1", "Hey from node.js");
  const res = await client.get("msg:1");
  console.log("Result: ", res);
}

init();
