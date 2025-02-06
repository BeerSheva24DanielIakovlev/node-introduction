import stream from "./sender-data.mjs";
const res = '';
stream.on('data', chunk => console.log(chunk));
stream.on('end', () => console.log("no more data"));

