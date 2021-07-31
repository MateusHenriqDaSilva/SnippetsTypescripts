const fs = require("fs");
const server = require("https").createServer(
    {
        key: fs.readFileSync("minhas_coisas.pem"),
        cert: fs.readFileSync("minhas_coisas.pem")
    }, (inRequest, inResponse) => {
        inResponse.writeHead(200);
        inResponse.end("Estou protegido pela TLS!");
    }).listen(443)