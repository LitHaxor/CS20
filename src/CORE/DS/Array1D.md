# Array
Array is collection of item stored at contiguous memory locations. Array store multiple items of same type togeather in computer memory.
![](https://media.geeksforgeeks.org/wp-content/uploads/array-2.png)

## Array Memory

Array stores items in a contiguous manner. Let's declare an array of size 5. Let's understand it's memory locations.

<mark>**type**</mark> name[SIZE];<br>
<mark>**int**</mark> arr[5]; // declaring array that stores 5 integer
::: tip
**this Array has 5 element but, here indexing starts from 0 and ends in size -1 or 4.**
:::


|index|Arr[0]| Arr[1] | Arr[2] | Arr[3] | Arr[4] |
|----|------|---------|--------|-------|--------|
|Value| 5   | 15    |   20 | 30 | 50 |
|memory| x200| x204 | x208 | x212 | x216 |

**Memory Size:** 
This array took <mark>16 bytes</mark> of memory!
::: tip How to find memory location of specific memory?
<br>
Suppose you want to find memory location for array index 3. 
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
## Array Traverse
Tranversing an array size of n.
``` cpp
void traverse(int arr[], int size)
{
    for(int i=0; i < size -1 ; i++) // index start from i=0 
        cout << arr[i]; // accessing value from [i] th index from array
}
```
::: warning Time complexity

Time complexity of following program is <br>
**Best case:** O(1) // array size 1 <br>
**Worst case:** O(N) 
:::
## Array Insertion
Inserting an element into array.
``` cpp
void insert(int arr[], int size, int k, int item)
{
    int i=size; // set i to size
    size += 1; // incremenet size +1
    while( i >= k) // lopping to creating space for arr[k]
    {
        arr[i+1] = arr[i]; // array is k, we have to shift ahead 1 space for arr[k]
        i--;
    }
    arr[k] = item; // setting arr[k]
}
```

::: warning Time complexity

Time complexity of following program is <br>
**Best case:** O(1) // inserting from the last <br>
**Worst case:** O(N) 
:::

## Array Deletion
deleting <mark>element</mark> from the array.

``` cpp
int Delete(int arr[], int size, int key){
    for(int i=0; i < n ; i++) // search for key in array
        if( arr [i] == key) // if found
            break; // break or increase i+1
    if(i < n) // if we found then i th element will be removed !
    {
        n--; // reducing size
        for( int j=i; j <n ; j++) // shifting element
            arr[j] = arr[j+1]; // shifting j element to j+1 
    }
    return n;
}
```
::: warning Time complexity

Time complexity of following program is <br>
**Best case:** O(1) // deleting from the last <br>
**Worst case:** O(N) 
:::
## Array Searching
- **Linear Search:** indexing  all element in the array to find key value
``` cpp
int LinearSearch(int arr[],int key, int size)
{
    for(int i=0; i< size-1 ; i++) // traverse 0 to n-1
        if (arr[i] == key) // check if array matches the key
            return i;  // returning the index value where key value found
}
```
::: warning Time complexity

Time complexity of following program is <br>
**Best case:** O(1) // found from the fast index<br>
**Worst case:** O(N) 
:::
- **Binary Search:** if array is sorted then, we can get index value by comparing key value with the middle value.
``` cpp
int BinarySearch(int arr[], int key,int start, int end)
{

}
```