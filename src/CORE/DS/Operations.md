# Operations 

Some mathmatical or logical operations performed on data to proccess or organize.
## Accessing/ Traversal
Accessing record excatly once so that certain items in the record may be processed.
```
SET K=LowerBound
WHILE k <= UpperBound
    Apply Process ID[K]
    K++;
```
::: warning Time complexity
**n is number of operatin performed!** <br>
Worst Case: O(n) <br>
Best case: O(1)
:::
## Searching
Finding the location of a given key value, or finding the location of all records which satisfy one or more conditions.
- **Linear Search:**
Searching for the key value by traversing all  elements in the data structure.
``` cpp
SET K= LowerBound
SET KEY
WHILE k <= UpperBound
    IF( ID[k] == KEY )
        Apply Proccess ID[K]
    K++;
```
::: warning Time complexity
**n is number of operatin performed!** <br>
Worst Case: O(n) <br>
Best case: O(1)
:::
- **Binary Search:**
Searching for the key value by comparing key value with the middle in sorted data structure.
``` cpp
SET K= LowerBound
WHILE (LowerBound <= UpperBound)
    mid = floor(UpperBound+LowerBound /2)
    if ( ID[mid] == key )
        Apply Proccess ID[mid]
    else if ( ID[mid] < key)
        LowerBound = mid +1
    else 
        UpperBound = mid -1
```
::: warning Time complexity
**n is number of operatin performed!** <br>
Worst Case: O(log2(n)) <br>
Best case: O(1)
:::
## Insertion
Adding new record to the data structure.
``` cpp
INSERT (LA, N, K, ITEM)
SET J=N
WHILE J >= K
    LA[J+1] = LA[J]
    j--
SET LA[k] = ITEM
N= N+1
```
::: warning Time complexity
**n is number of operatin performed!** <br>
Worst Case: O(n) <br>
Best case: O(1)
:::
## Deletion
Deleting a record from the data structure.

- Deleting from the last:
``` cpp
SET N=8
N= 8-1 // Deleting from last 
```
::: warning Time complexity
**n is number of operatin performed!** <br>
Best case: O(1)
:::
- Deleting from key value:
``` cpp
DELETE(LA,SIZE,KEY,ITEM)
    ITEM= LA[KEY]
SET J=KEY
while (J <= SIZE-1)
    LA[j]=LA[J+1]
    j=j-1
SET SIZE = SIZE-1
```
::: warning Time complexity
**n is number of operatin performed!** <br>
Worst Case: O(n) <br>
Best case: O(1)
:::
## Sorting

## Marging
Marging two data structure into one data structure.
``` cpp
MARGE(LA1,SIZE1,LA2,SIZE2, LA3)
SET i = 0
while( i <= SIZE1 ) 
    LA3[i] = LA1[i]
    i = i + 1

while(i <= SIZE1 + SIZE2 )
    LA3[i] = LA2[SIZE1-i]
    i = i + 1


```
::: warning Time complexity
**n is number of operatin performed!** <br>
Worst Case: O(n) <br>
Best case: O(1)
:::