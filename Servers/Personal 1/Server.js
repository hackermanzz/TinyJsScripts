const fs = require('fs'); //read and write files
const http = require('http');
const path = require('path')
const hostname = 'localhost';
const port = 3000;
const defaultFile = './webpages'



const server = http.createServer((req , res) =>{
    console.log('Request for page ' + req.url + ' using ' + req.method + ' method')
    if (req.method == 'GET') 
    {
        if( req.url == '/' )
        {
            console.log('Proceed')
            fileUrl = '/proceed.html';
            var filepath = defaultFile+fileUrl;
        }
        fs.exists(filepath, (exists) =>{
            if(!exists)
            {
                fileUrl ='/error.html';
                filepath = defaultFile+fileUrl
            }else
            {
                res.statusCode = 200;
                res.setHeader('Content-Type' , 'text/html');
            }
        fs.createReadStream(filepath).pipe(res);
        });
    }else
    {
        fileUrl = '/error.html';
        filePath = path.resolve(defaultFile + fileUrl)
    }
})


server.listen(port,hostname, () =>{
    console.log(`Server started and accessible via http://${hostname}:${port}/`)

})

