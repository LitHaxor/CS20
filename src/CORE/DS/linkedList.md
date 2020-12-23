# Linked List

## Memory Allocation

Linked list is a dynamic data structure. It's size is not fixed and the stored memroy is not contigous.

when a new node insert into linked list, node will be linked to the list.

|Address |Node[x11AA] | Node[x55AB] | Node[x3ACV] | Node[xYX01] |
|----|------|---------|--------|-------|--------|
|INFO/ DATA| 5   | 15    |   20 | 30 | 
|link/next| x55AB | x3ACV | xYC01   | NULL |

## Linked List Representation

Linked list can be created using class(OOP) or struct. 

*A node has the data/info and a self pointer that points to the next node.*


``` cpp
#include<iostream>
using namespace std;

class Node{
public: 
    int data; // this is data/info variable
    Node *next; // this is self pointer that points to next node
};
// or using struct
struct Node {
    int data;
    Node *next;
};
```

## Array vs Linked List

Array and linked list both are linear data structure. Array and linked list has some major difference.
| Array                   | Linked List |
|-------------------------|-------------|
| Array stored in contigous location. | Linked list stored in non contigous location. |
| Array is a static  data structure. | Linked list is a dynamic data structure. |
| Array size is fixed at compile time | Linekd list size is flexiable at run-time. |
| Insertion/deletion cost n number of element  **O(n)** operation. | Insertion/deletion cost *constant* or **O(1)** amount of opertaion. |
| Accessing cost **O(1)** or constant amount of operation. | Accessing element cost **O(n)** or number of elements operation. |


## Linked List Traversal
