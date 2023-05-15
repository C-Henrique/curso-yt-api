import { server } from "./server/Server";

server.listen(3333, ()=>{
    return console.log
    (`
    Api Okay!
    link: "http://localhost:3333"
    `
    )
})