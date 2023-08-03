## Hello World

1. `go mod init example/hello` to start a Go project.

> package is a way to group functions. Consists of all files in the same directory

> "fmt" is a standard library package

2. `go mod tidy` to locate and download the latest version of new packages

3. `go run .` to run the main package

> main function executes by default when you run the main package

4. `go help` lists all commmands

> Go code is grouped into packages and packages are grouped into modules

## Go Modules

> A function whose name starts with a capital letter can be called by a function not in the same package. This is known in Go as an exported name.

> := operator is a shortcut for declaring and initializing a variable in one line (Go uses the value on the right to determine the variable's type)

5. `go mod edit -replace example.com/greetings=../greetings` replaces example.com/greetings with ../greetings for locating the dependency. go.mod file shows a replace directive after you do this

> Running `go mod tidy` after this adds a pseudo-version number instead of a semantic version number like v1.1.0 (which the module doesn't have yet).
>
> It looks like `require example.com/greetings v0.00-00010101000000-000000000000`
>
> With a published module, it would've looked like:
> `require example.com/greetings v1.1.0`

## Return and Handle Errors

> Go functions can return multiple values

> errors is a Go standard library for error handling
