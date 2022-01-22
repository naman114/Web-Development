# importing from the same module from which we created the simple directory listing server
from http.server import HTTPServer, SimpleHTTPRequestHandler

# The base class is the one that was rendering the directory listing page
class MyServer(SimpleHTTPRequestHandler):
    pass

address = "127.0.0.1" #localhost
port = 8000
server_address = (address, port)

# The following HTTP server instance listens at the given IP and port and invokes the class given
httpd = HTTPServer(server_address, MyServer)
# Serve till we stop the program
httpd.serve_forever()

# Keep in mind that this will work the same as the simple http server since we have not added any new functionality to our derived class