# String
**String is a object that represents array of charecters(char[]).**

The standard string class provides support for such objects with an interface similar to array of char[], that is a standard container of bytes.

## String Declaration
- Using char[] array we can declare an string or array or char[].
``` cpp
char ch[] = "String";
char ch[10] = "String"; //size fixed to 10 byte/char
char str[] = {'s','t','r','i','n','g'};
char str[10] = {'s','t','r','i','n','g'};
```
- Using String class :

we have to use **string** header file

``` cpp
#include<iostream>
#include<string>
// your code
```

to declare string

``` cpp
int main(){
    string str = "Hello world";
    return 0;
}
```

## String Structure

String is a  array of charactor.  

char ch[] = "Hello" is the thing as string ch = "Hello" has same structure.

String class holds the array of charactor in the object.

**string** str = "Hello";

| index |  str[0]  | str[1] | str[2] | str[3] | str[4] | 
|-------|:--------:|:--------:|:--------:|:--------:|:--------:|
| Value |  "H"       | "e"  | "l" | "l"  | "o" |
| memory| x200 | x201 | x202 | x203 | x204|

- **&str** returns the first index of memory.
- 
