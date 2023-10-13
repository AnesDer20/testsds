const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    try{
        if(req.url === '/'){
            res.end('bienvenu à votre page !')
        }
        if(req.url === '/about'){
            res.end('abouttttt !')
        }
        throw Exeption("path not found")
    }
    catch(e){
        res.end(e)
    }
        
    
    
    
    
    
})

server.listen(5000)