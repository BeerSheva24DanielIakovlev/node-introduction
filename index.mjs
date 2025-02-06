import stream from "./file-stream.mjs";
import writebleStream from "./file-writeble-stream.mjs";

(async () => {
    for await(const res of stream) {
        console.log(res.toString());
    }
});

writebleStream.write("Hello\n ");
writebleStream.write("World !!!");
writebleStream.end();