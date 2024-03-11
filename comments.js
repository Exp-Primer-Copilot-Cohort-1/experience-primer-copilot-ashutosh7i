// Create web server
var server = http.createServer(function (req, res) {
    console.log("Request: " + req.url);
    var path = url.parse(req.url).pathname;
    if (path == "/") {
      // Serve index.html
      fs.readFile("index.html", function (err, data) {
        if (err) {
          res.writeHead(500);
          res.end("Error loading index.html");
        } else {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(data);
        }
      });
    } else {
      // Serve files
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end("Page not found");
        } else {
          res.writeHead(200);
          res.end(data);
        }
      });
    }
  });
  server.listen(8000);
  console.log("Server running on http://localhost:8000/");
