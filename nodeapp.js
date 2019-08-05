//hello();

/* function hello(){
    console.log("Hello World!");
} */

//Starting server

var exp = require('express'); //server

const appServer = exp();       //creating an instance of a server

appServer.get("/",(req,res)=>{
    res.sendFile(__dirname+"/src/views/home.html"); //specify directory
})

appServer.get("/emp",(req,res)=>{
    res.sendFile(__dirname+"/src/views/employee.html");
})


appServer.get("/prd",(req,res)=>{
    res.sendFile(__dirname+"/src/views/product.html");
})


/* appServer.get("/",(req,res)=>{      //GET method
    res.send("Welcome to node server");
});

appServer.get("/books",(req,res)=>{    //specifying path
    res.send("Welcome to books");
})
 */

/* appServer.get("/books/:bid",(req,res)=>{    //get parameter value
    res.send("Book id: " + req.params.bid);
}) */

/* appServer.get("/books/poems",(req,res)=>{    //specifying subcategory
    res.send("<html><head></head><body><h1>Poems</h1></body></html>");
    //res.send("Malayalam Poems")  //=>cannot set headers after they're sent
})

appServer.get("/",(req,res)=>{
    res.send("Welcome to xyz company");
})

appServer.get("/emp",(req,res)=>{
    res.send("Employee Details");
})

appServer.get("/prd",(req,res)=>{
    res.send("Product Details");
})

appServer.get("/ab?cd",(req,res)=>{         //will accept abcd, acd
    res.send("Hi");
})

appServer.get("/ab+cd",(req,res)=>{         //will accept abcd, abbcd, abbbcd ...
    res.send("Hi");
})

appServer.get("/ab*cd",(req,res)=>{         //start with ab and end with cd 
    res.send("Hi");
})

appServer.get("/ab(cd)?e",(req,res)=>{         //will accept abe, abcde
    res.send("Hi");
})

appServer.get(/a/,(req,res)=>{         //will accept anything with "a" in it
    res.send("Hi");
}) */

/* appServer.get(/.*fly$/,(req,res)=>{         //will accept anything that ends with fly
    res.send("fly");
}) */

//appServer.get(/.*fly.*/,(req,res)=>{         
//    res.send("fly anywhere");
//})

appServer.listen(4200,()=>{        //server should listen; mention port number
    console.log("Listening");
}); 

















//var hello = hello();

/* var he = ()=>{
    console.log("Hi");
}

he(); */

/* var fs = require('./greetings');  //export functions from another module
fs.say();
fs.say1();
console.log(fs.languages);
 */
