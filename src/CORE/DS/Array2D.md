# Array 2D
2D or Two- dimentional array can be described as "Arrays of Array".
It is also known as matrix. Like Matrix it row and column, also like table. We can store data like table/matrix using 2-D array.

## Structure of 2D Array
|index |      0    |    1      |        2  |
|------|-----------|-----------|-----------|
| 0    |arr[0][0]  |arr[0][1]  | arr[0][2] |
| 1    |arr[1][0]  |arr[1][1]  | arr[1][2] |
| 2    |arr[2][0]  |arr[2][1]  | arr[2][2] |

- Table demonstrates, a 2D array
- It has a size of 3x3
- It has 3 column and 3 row
- We can access perticular array by giving column and row index **arr[COL][ROW]**

## Initalization of 2D Array
We can assign values of an 2D-Array by delclaring size and initiating. If there are not enough elements present in the array or any braces then garbadge/zero value will be filled by compiler.

- **Single Braces:**  We can declare 2d array directly without using internal braces. But it Reduce readablity of the code.

``` cpp
int arr[3][3] = {1,2,3,4,5,6,7,8,9}; // 3x3 total 9 elements
```
- **Multiple Braces:** To use multiple braces we have to put comma(,) after every internal braces finished.

``` cpp
int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}}; // here {1,2,3} are column in  the 0th row
```
- **Mutilple Line:** Increase readablity of rows and column of 2D array.
``` cpp
int arr[3][3] = {{1,2,3}, // first row and column {1,2,3}
                 {4,5,6}, // second row and column {4,5,6}
                 {7,8,9}}; // third row 
```

- **User input:** Taking user input using a function.
``` cpp
void arrayInput(int arr[][N], int COL, int ROW )
{
    for(int i=0; i < ROW ; i++) // after filling  1st row's all columns then it will fill 2nd row's all colums
        for(int j=0; j < COL ; j++) // column will be filled at first
            std :: cin >> arr[i][j] ; // in will take jth column input of i th row
}
```

## Accessing 2D Array
We can use nested for loops to access every columns and rows in the 2D Array.
``` cpp
#include<iostream>
using namespace std;

#define COL 3 //defining column
#define ROW 3 // defining row
//function for accessing 2 d array
void printArray(int arr[][COL], int col, int row)
{
    for(int i=0; i < ROW; i++){
        for(int j=0; j < COL; j++)
            cout << arr[i][j] << " " ; // 0th row all colums will be printed first
        cout << endl;
    }
}

int main()
{
  int arr[ROW][COL] = {{1,2,3},
                 {4,5,6},
                 {7,8,9}};
    printArray(arr, COL, ROW); // passing array by ref
}
```
**Output:**
```
1 2 3
4 5 6
7 8 9
```

## Memory 2D Array

Two dimentional array can be obtained with a simple 1D array. <br>
::: tip
**int arr[3][3]** is equivanet to <br> 3x3= 9 size 1D array **int arr[9]**
:::
- **Recalling 1D Array memory location:**

|index|Arr[0]| Arr[1] | Arr[2] | Arr[3] | Arr[4] |
|----|------|---------|--------|-------|--------|
|memory| x200| x204 | x208 | x212 | x216 |

- **Column Major Array memory allocation:**<br>

Suppose, we have declared a 3x3 array **int arr[3][3]**

|index |      0    |    1      |        2  |
|------|-----------|-----------|-----------|
| 0    |arr[0][0]  |arr[0][1]  | arr[0][2] |
| 1    |arr[1][0]  |arr[1][1]  | arr[1][2] |
| 2    |arr[2][0]  |arr[2][1]  | arr[2][2] |

**Memory allocation:**

|index |      0    |    1      |        2  |
|------|-----------|-----------|-----------|
| 0    |x100  |x104  |x108 |
| 1    |x112]  |x116  | x120 |
| 2    |x124 |x128  | x132 |

::: tip Memory Size:
Memory will be stored in sequential manner in the memory.

- There are 3 columns and 3 rows. Elements will be 3x3, 9 elements. Each element takes 4 bytes of memory location.
So, <mark>2D array size</mark> will be **( 9 x 4)  = 36 Bytes.**
:::

::: tip Accessing 2D array in 1D manner: <br>


**2D Array:**
**arr**[Row][Column]

**arr** [1][2]
**1D Array:**
   **arr** [ ( Total_Column ) *( row_index ) + (column_index) ]

   **arr**[(3)*(1) + (2)]

   **arr**[5] is equivalent to **arr**[1][2]
:::

## Memory access
To access each memory location and it's element, we have to index the row and column or  Memory stores in sequential just index of memory location.

![](https://i2.wp.com/www.guideforschool.com/wp-content/uploads/2013/11/two-dimensional-array-memory-address-calculation.jpg?resize=505%2C334)

- we can use & operator to access memory location.
- &arr[2] returns memoryof 3rd element in 2D array arr[0][2].
- If the element is more than a byte, then it will return starting byte of elements memory location.
- &arr[5] gives the memroy location of &arr[1][2].
- the name of array will always refer to the the starting location of the array. arr = &arr[0] or &arr[0][0]

Address of an element of any array say **“A[ I ][ J ]”** is calculated in two forms as given:

(1) Row Major System 

(2) Column Major System


![](https://i2.wp.com/www.guideforschool.com/wp-content/uploads/2013/11/row-major-column-major-memory-address-calculation.jpg?resize=618%2C311)

## Row Major System

The address of a location in Row Major system calculated using this formula:

**Address of arr[ I ][ J ] = Base Adress  + sizeOf(array) [ Total_Column x ( I - Row Size)+( J - Column Size)]**


::: tip Find the memory location of arr[2][3] of 4x4 array, base address x200
here,

Row Size = 4, column size = 4, total Column =4,

Base address = 200

so,

**Address of arr[2][3]** = 200 + 4 x [ 4 x (  4  - 2) + (4 - 3)]

= 200 + 4 x [ 4 x 2 + 1]

= 200 + 36 = 236
:::


## Column Major System

The address of a location in column Major system calculated using this formula:

**Address of arr[ I ][ J ] = Base Adress  + sizeOf(array) [ ( I - Row Size)+ Total_Column x ( J - Column Size)]**


::: tip Find the memory location column wise  arr[2][3] from a 4x4 array, base address x200 
here,

Row Size = 4, column size = 4, total Column =4,

Base address = 200

so,

**Address of arr[2][3]** = 200 + 4 x [  ( 4  - 2) + 4 x (4 - 3)]

= 200 + 4 x [  2 + 4 x 1]

= 200 + 24 = 224
:::