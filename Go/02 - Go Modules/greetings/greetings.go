package greetings

import (
	"errors"
	"fmt"
)

// Hello returns a greeting for the named person.
// Function name starts with Capital letter so it can be called from a function in a different package
func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}
    // Return a greeting that embeds the name in a message.
    message := fmt.Sprintf("Hi, %v. Welcome!", name)
    return message, nil
}