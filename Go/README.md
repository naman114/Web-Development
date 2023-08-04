[How To add VSCode Autocomplete for Golang](https://medium.com/backend-habit/setting-golang-plugin-on-vscode-for-autocomplete-and-auto-import-30bf5c58138a)

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

## Random Function

> Go slice is like C++ vector
>
> `formats := []string{}` - empty brackets tells Go that the size of this array can be dynamically changed

## Loop, Map and Backward Compatibility

    // For loop
    for idx, val := range mySlice {

    }
    // Create map
    myMap := make(map[string]string)

> If you have published a package and users are using the functions you defined, it is not a good idea to modify their input args because that will break their code.

## Testing

> Test function names have the form TestName, where Name says something about the specific test.
>
> Test functions take a pointer to the testing package's testing.T type as a parameter to report and log
>
> `go test` command looks for `_test.go` files having function names start with Test. `go test -v` prints verbose output for all tests. Don't use `-v` if you have a lot of tests and want to see only the failing tests

## Compile and Install The Application

> `go build` creates an executable

> `./createdExecutableName` will invoke it on Linux/Mac

> Add the Go install directory to your system's shell path:
>
> `go list -f '{{.Target}}'`
>
> `export PATH=$PATH:/path/to/your/install/directory`
>
> `go install`
>
> You can now invoke the main package from any directory
