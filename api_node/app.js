const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bienvenido a la API Node.js de Daniel Llorens');
    } 
    else if (req.url === '/estado') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const estado = {
            servicio: 'api_node',
            hostname: os.hostname(),
            uptime_segundos: process.uptime(),
            fecha: new Date().toISOString()
        };

        res.end(JSON.stringify(estado));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});