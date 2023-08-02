/*
	Start by go mod init example/hello 
*/

package main // package is a way to group functions. Consists of all files in the same directory

import "fmt" // Standard library package
import "rsc.io/quote" // To locate and download the latest version of new packages -> go mod tidy

// main function executes bty default when you run the main package
// go run .
// go help -> get all commands
func main() {
    fmt.Println(quote.Go())
}