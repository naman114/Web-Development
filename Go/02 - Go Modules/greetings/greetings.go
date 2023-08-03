package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

// Hello returns a greeting for the named person.
// Function name starts with Capital letter so it can be called from a function in a different package
func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}
    // Return a greeting that embeds the name in a message.
    message := fmt.Sprintf(randomFormat(), name)
    return message, nil
}

func randomFormat() string {
	// A slice of message formats
	formats := []string{
		"Hi, %v. Welcome!",
        "Great to see you, %v!",
        "Hail, %v! Well met!",
	}

	return formats[rand.Intn(len(formats))]
}