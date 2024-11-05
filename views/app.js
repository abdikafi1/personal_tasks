const http = require('http');
const taskRoutes = require('../routes/taskRouts');
const hostname = 'localhost'; 
const port = 9000;

const server = http.createServer((req, res)=>{
    if(req.url.startsWith('/tasks')){
        taskRoutes(req,res)
    }
    else{
        res.writeHead(404, 'Not Found', {'Content-type': 'application'})
        res.end(JSON.stringify({
            message: 'Page Not Found'
        }))
    }
})

server.listen(port, hostname, () => {
    console.log(`server is running on port ${PORT}`) 
})


