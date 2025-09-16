console.log('Hola')
/*
const http = require('http');
http.createServer((req,res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
   // res.writeHead(201, { &#39;Content-Type&#39;: &#39;application/json&#39;}) // recurso no encontrado
    res.setHeader('Content-Disposition', 'attachment;filename = lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'})
   
    res.write('id,nombre\n');
    res.write('1,Fernando\n');
    res.write('2,Mariza\n');
    res.write('3,Gladys\n');
    res.end();
})
.listen(3000); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchando el puerto: ', 3000);*/

const http = require('http');
http.createServer((req,res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
   // res.writeHead(201, { &#39;Content-Type&#39;: &#39;application/json&#39;}) // recurso no encontrado
   // res.setHeader(&#39;Content-Disposition&#39;, &#39;attachment;filename = lista.csv&#39;);

   // res.writeHead(200, { &#39;Content-Type&#39;: &#39;application/csv&#39;})
   
   // res.write(&#39;id,nombre\n&#39;);
    //res.write(&#39;1,Fernando\n&#39;);
   // res.write(&#39;2,Mariza\n&#39;);
   // res.write(&#39;3,Gladys\n&#39;);
   res.write('Hola Mundo');
    res.end();
})
.listen(3000); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchabdo el puesto: ', 3000);