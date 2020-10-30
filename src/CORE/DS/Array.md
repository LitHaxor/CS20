# Array
Array is collection of item stored at contiguous memory locations. Array store multiple items of same type togeather in computer memory.
![](https://media.geeksforgeeks.org/wp-content/uploads/array-2.png)

## Array memory

Array stores items in a contiguous manner. Let's declare an array of size 5. Let's understand it memory.

type name[SIZE];<br>
int Arr[5];

|index|Arr[0]| Arr[1] | Arr[2] | Arr[3] | Arr[4] |
|----|------|---------|--------|-------|--------|
|Value| 5   | 15    |   20 | 30 | 50 |
|memory| x200| x204 | x208 | x212 | x216 |

 Memory Size: 
This array took 16 bytes of memory!
::: tip How to find memory location of specific memory?
<br>

 LOCATION(Arr[KEY]) = BaseAddress(Arr) + WordLength x (KEY-LowerBound)

 **Example:** <br>
 LOCATION(Arr[3]) = 200 + sizeOf(int) x (3-0) <br>
                  = 200 + 4 x3 <br>
**LOCATION of array index 3 = 212**
:::

::: details What is the memory location of index 1?
<br>
 LOCATION(Arr[KEY]) = BaseAddress(Arr) + WordLength x (KEY-LowerBound)


  LOCATION(Arr[3]) = 200 + sizeOf(int) x (1-0) <br>
                  = 200 + 4 x1 <br>
**LOCATION of array index 1 = 204**
:::

## Array Insertion
Inserting an element into array.