// import { get_encoding } from "tiktoken";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ });

const OPENAI_AIP_KEY =  process.env.OPENAI_AIP_KEY
// const encoding =  get_encoding('cl100k_base')
// const token = encoding.encode('Hello AI    world')
// console.log(token);



const openai = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: OPENAI_AIP_KEY,
});

const stream = await openai.chat.completions.create({
  model: "openai/gpt-oss-20b:fireworks-ai", // <- 20B model
  messages: [{ role: "system", content: "write mea pharagraph about Ethiopia" }],
  stream: true,
});
// console.log(response.usage);
// console.log(response.choices);
// console.log(response.choices[0].message);

// console.log(response.choices[0].message.content);
// let res = "";
for await (const event of stream) {

    if (event.choices[0].delta.content){
        process.stdout.write(event.choices[0].delta.content);
    }
    //   res = res + event.choices[0].delta.content;
//   console.log();

//   console.log(res);
}
