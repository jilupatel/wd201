const http = require("http");
const fs = require("fs");
fs.readFile("home.html",(err, home) =>{
    console.log(home.toString());
});
fs.readFile("style.css",(err,style) =>{
    console.log(style.toString());
});
fs.readFile("script.js",(err,script) =>{
    console.log(script.toString());
});
fs.readFile("project.html",(err,project) =>{
    console.log(project.toString());
});
fs.readFile("registration.html",(err,registration) =>{
    console.log(registration.toString());
});
fs.readFile("home.html",(err, home) =>{
    if (err){
        throw err;
    }
    http
    .createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/html"});
        response.write(home);
        response.end();
    })
    .listen(3000);
});
fs.readFile("style.css",(err, style) =>{
    if (err){
        throw err;
    }
    http
    .createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/css"});
        response.write(style);
        response.end();
    })
    .listen(3000);
});
fs.readFile("script.js",(err, script) =>{
    if (err){
        throw err;
    }
    http
    .createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/js"});
        response.write(script);
        response.end();
    })
    .listen(3000);
});
fs.readFile("project.html",(err, project) =>{
    if (err){
        throw err;
    }
    http
    .createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/html"});
        response.write(project);
        response.end();
    })
    .listen(3000);
});
fs.readFile("registration.html",(err, registration) =>{
    if (err){
        throw err;
    }
    http
    .createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/html"});
        response.write(registration);
        response.end();
    })
    .listen(3000);
});
const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";

fs.readFile("home.html",(err,home) =>{
    if(err){
        throw err;
    }
    homeContent = home;
});
 
fs.readFile("project.html",(err,project) =>{
    if(err){
        throw err;
    }
    projectContent = project;
});
http
.createServer((request,response) =>{
    let url = request.url;
    response.writeHead(200,{"content-type":"text/html"});
    switch(url){
        case "/project":
            response.write(projectContent);
            response.end();
            break;
            default:
            response.write(homeContent);
            response.end();
            break;
    }
})
.listen(3000);