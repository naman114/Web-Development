package main

import (
    "fmt"
	"log"

    "example.com/greetings"
)

func main() {
	log.SetPrefix("greetings: ") // prefix for the log msg
	log.SetFlags(0) // disables printing time, source file and line number
	// Without above line: greetings: 2023/08/03 15:06:18 empty name
	// With above line: greetings: empty name

    // Get a greeting message and print it.
    message, err := greetings.Hello("Naman")
	if err != nil {
		log.Fatal(err) // prints the error and stops the program
	}

    fmt.Println(message)
}