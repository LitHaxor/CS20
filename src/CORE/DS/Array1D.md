# Array
Array is collection of item stored at contiguous memory locations. Array store multiple items of same type togeather in computer memory.
![](https://media.geeksforgeeks.org/wp-content/uploads/array-2.png)


## Array initialization
Like any simple variable, an array can be initalized while it is being declared.
``` cpp
int arr[] = {10,20,30,4,0}; //size not given
int arr[5] = {0,1,2,3,4}; // size is given
```

### partial initialization

In partial initialization all components doesn't need to be initialized.

``` cpp
int list [10] = { 0 } ;
int list [10] = { 3, 4 ,5 };
```

## Array Memory

Array stores items in a contiguous manner. A one-dimentional array is an array in which the components are arranged in a list form.

The general form for declaring a one-dimensional array is:

<mark>**type**</mark> name[SIZE];<br>
<mark>**int**</mark> arr[5]; // declaring array that stores 5 integer

The statement <mark>int mark[5</mark> declares an array num of five components.

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


## Array Access
General form of accessing an array component is:

arrayName[index];

Index is a non-negetive integer and it specifies the position of the component in the array.


**Some of the basic operation performed on a one-dimensional array:** initialization, input data, outputing data stored in an array.

**1. Initiating arr[n]:**

``` cpp
for(int i=0; i < n-1; i++) // n= number of element
     arr[i] = 0;
```
**2. Reading data into an array:**
``` cpp
void input_Array(int arr[], int size)
{
    for(int i=0; i < size -1 ; i++) // index start from i=0 
        cin >> arr[i]; // accessing value from [i] th index from array
}
```

**3. Print an Array:**

``` cpp
void print_Array(int arr[], int size)
{
    for(int i=0; i < size -1 ; i++) // index start from i=0 
        cout << > arr[i] << " "; // accessing value from [i] th index from array
}
```
**4. sum of an array:**
``` cpp
int sum_Array(int arr[], int size)
{
    int sum =0;
    for( int i=0; i <  size -1; i++ )
        sum += arr[i]; // sum = sum + arr[i]
    return sum;
}
```
**5. Largest element in the array:**
``` cpp
int largest_array_Index(int arr[], int size)
{
    int max = 0;
    for(int i = 0; i < size -1 ; i++)
        if( arr[max] < arr[i] ) // if max value is smaller then i element
            max = i; // then max will the i element
    return max; // maxvalue would be arr[max]
}
```

**6. Copy an array:**

``` cpp
int copy_Array ( int copy[] , int size, int paste[], int n , int elemen )
```

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
int BinarySearch(int arr[], int key, int low, int high)
{
    while(start<end)
    {
        if(high < low) // high value/size value cannot be smaller than low value
            return -1; // return -1 denotes not found
        int mid = low + (high-low) /2; // Finding the middle index 
        if( arr[mid] < key) // if key is bigger than mid value 
            low = mid +1; // then we can drop smaller values
        if( arr[mid] > key) // if key is smaller than mid value
            high = mid -1; // then we can drop bigger values 
        if( arr[mid] == key) //if found 
            return i; // return index
    }
    
}
```
::: warning Time complexity

Time complexity of the following program is <br>
**Best case:** O(1) // found from the middle index<br>
**Worst case:** O(log2(n)) 
:::

