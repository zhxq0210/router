const fs = require("fs")

function router_render(url,res,type){
    if(type == "text"){
        res.writeHead(200,{"Content_Type":"text/html"});
        let fileText = fs.readFileSync(url,"utf8")
        res.write(fileText)
        res.end()
    }else if(type == "picture"){
        res.writeHead(200,{"Content_Type":"image/png"});
        let fileText = fs.readFileSync(url,"binary")
        res.write(fileText)
        res.end()
    }
}

module.exports = router_render;