import { dango } from "https://deno.land/x/dangodb@v1.0.2/mod.ts";
import { load } from "https://deno.land/std@0.201.0/dotenv/mod.ts";

const env = await load();
const uri = env["MONGO_DB_CONNECTION_URI"];

const connectToMongo = async () => {
  try {
    await dango.connect(uri);
  } catch (e) {
    console.log(e.message);
  }
};

export default connectToMongo;
