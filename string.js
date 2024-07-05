const client = require("./client");

async function init() {
  await client.set("msg:1", "Hey from node.js");
  //to set expiry: await client.expire("msg:1",10)
  const res = await client.get("msg:1");
  console.log("Result: ", res);
}

init();
