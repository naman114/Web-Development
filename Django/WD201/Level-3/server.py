# importing from the same module from which we created the simple directory listing server
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import date, datetime

# The base class is the one that was rendering the directory listing page
class MyServer(SimpleHTTPRequestHandler):
    def do_GET(self):
        # The following line says that we'll be sending text/html type data

        if self.path == "/hello":
            self.send_response(200)
            self.send_header("content-type", "text/html")
            content = f"<h1>Hello! {datetime.now()} </h1>"
        else:
            self.send_response(404)
            self.send_header("content-type", "text/html")
            content = "<h1>Error</h1>"

        # This function is called when all the metadata (data that is not rendered) is sent
        self.end_headers()
        self.wfile.write(content.encode())


address = "127.0.0.1"  # localhost
port = 8000
server_address = (address, port)

# The following HTTP server instance listens at the given IP and port and invokes the class given
httpd = HTTPServer(server_address, MyServer)
# Serve till we stop the program
httpd.serve_forever()
