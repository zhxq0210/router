const http = require("http")
const url = require("url")
const fs = require("fs")
const router_sender = require("./modules/router")

var server = http.createServer((req,res)=>{
    if(req.url !== "./favicon.ico"){
        const {pathname,query} = url.parse(req.url)
        if(pathname == "/"){
            router_sender("./views/index.html",res)
        }
        if(pathname == "/list"){
            router_sender("./views/list.html",res)
        }
        if(/(png|jpg|gif|jpeg)$/.test(pathname)){
            router_sender("./views/picture"+pathname,res,"picture")
        }
    }
})

server.listen(7000,()=>{
    console.log("服务器开启成功")
})

server.on("error",(e)=>{
    console.log(e.message)
})