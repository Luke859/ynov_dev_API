import http from 'http'

const server = http.createServer((request, res) => {
    if(request.url === '/api/products' && request.method === 'GET') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify({
            id: 1,
            name: "Samsung",
            color:'blue'
        }))
    } else {
        res.writeHead(404, {'Content-type': 'application/json'})
        res.end(JSON.stringify({
            msg: "Error route not found, go to api/products",
        }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))