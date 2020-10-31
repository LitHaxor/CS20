# Data Storage

## Variable
Variable is a storage location and an associated symbolic name which store data.
- Variable is a referance of the stored value.
- A Variable must be unique.
- A Variable may change in run time of program.
- Variable can be reassigned to a new value.
- Compilers replace the variable name with actual memory location.

## Memory Allocation
When we declare variable, compiler assign some memory locations from the operating system.

Suppose we've declared a variable **int x**, which takes 4 adjecent memory location from the OS. so, we can say **int x** is taking 4 bytes of memory.

- We can store value to the allocated memory.
- Computer access memory by memory address.

|Variable Declare   | Memory  Location    |
|-------------|-------------|

|Type |Name | Start| END    |  Size |
|-----|-----|------|--------|-------|
| double| y | xJ420  | xJ408  | 8 byte|
| char |ch  | xO100  | xO101  | 1 byte|
| int| x    | xP424  | xJ428  | 4 byte|

C++ coding implementation of variable:
- **int x** delcare variable
- **int*ptr** delcare pointer
- **&x** represents memory
- **ptr** represents memory
- ***ptr** dereference value
