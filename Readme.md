# Data Structure & Algorithm

- What is DS?
# Data Structure & Algorithm

- What is DS?
    - Purpose: **To store, organise & perform operations on Data**
    - Humans 👨🏼
        - Thinks in collections: eg collections of items
        - What is collection:
            - Way to store data
            - Has Structure & Format
        - Operations on collection
            - Write, read, update or delete
        - Examples
            - Shopping list
            - Telephone directory
            
    - Computers 💻
        - Use data
        - Store data as collection
            - Has Structure and Format
        - Operations on collections
            - Save, read, update or delete
        - Who creates and perform operations
            - Computer programs
                - Computer program: What is it?
                    - Step by step instruction to solve problem
                    - for machine
                    - Written at implementation time
                    - Once written - Tested
                - Computer programs (are for computer 💻): composed of 2 things
                    - **Data**
                        - Variable: data stored in variable
                        - Data types:
                            - Data categorisation  (number, string, audio, video)
                            - Why categorisation? Easy to perform operations by programs (eg adding number, concat string)
                            - 3 Types of Data Types
                                - **Primitive**: System/Compiler/Programming Language defined data types (eg: string, number)
                                - **Abstract** (**ADT**):
                                    - Provides: a high-level, language-independent view of data + it’s Operations
                                    - Language-independent Blueprint of the Data Structure (eg. stack, queue etc)
                                    - Allow: multiple implementations of that functionality
                                - **User Defined**: Data types created as per need of user (eg: Employee: id, name, designation)
                        - Data Structures
                            - Are concrete implementations of ADT in a specific programming language
                        - Characteristics of Data Structures
                            - **Linear**: Sequential storage in memory (vs Non Linear)
                            - **Static**: Runtime modification not possible (vs Dynamic)
                                
                                
                                | Static | Dynamic |
                                | --- | --- |
                                | Fast Access | Slow Access
                                Slower Insertion and Deletion | Fast Insertion & Deletion
                                
                            - **Homogeneous**: Stores data of same type (vs Heterogeneous)
                        - Classification (Diagram)
                    - **Operations**
                        - Traversing
                        - Searching
                        - Inserting
                        - Deleting
                        - Sorting
                        - Merging
                - Computer programs: needs 2 things to execute - Different operations needs different time & space
                    - **Space** (memory): to store data structure
                    - **Time**: to perform operation
            - Algorithm
                - Algorithm: What is it?
                    - Step by step instruction to solve problem
                    - for human
                    - Written at Design time
                    - Once written - Analysed
                - Algorithm (are for humans 👨🏼):
                    - Why analyse?
                        - To find out: which logic is better (efficient)
                    - Why efficient algorithm?
                        - To minimise the cost
                    - What affects the cost?
                        - **Time**: how much time it takes to run? (Time Complexity)
                        - **Space**: how much memory it uses? (Space Complexity)
                    - What is Rate of growth (for Algorithm)?
                        - If **more input** → takes **more time to run** = Rate of growth (ROG)
                            - (Diagram) `[4,3,2]` → Algo → `[2,3,4]`   `[4,3,5,2]` → Algo → `[2,3,4,5]`
                        - 3 scenarios for ROG,  if more input provided
                            - time Increases
                            - time Stays same
                            - time Increase or Decrease (Varies)
                    - Methods to Analyse
                        - When ROG varies, we perform following analysis (Asymptotic Notation)
                            - for Worst case:  (Big O)
                                - (Diagram of worst case) `[4,3,5,2]` → Algo → `[2,3,4,5]`
                                - Big O notation
                                    - `O(n^2)`
                                        - `(n^2)` : describe time or space complexity. `n` input to the algo.
                                    - Common Big O functions - from Best to Worst
                                        - https://www.bigocheatsheet.com/
                                        
                                    - Good function: function that grows less as input increase
                                    - Bad function: function that grows a lot as input increase
                                - https://www.bigocheatsheet.com/
                            - for Average case: (Big Theta Θ)
                            - for Best case: (Big Omega Ω)
                                
                                (Diagram of best case)  `[2,3,4,5]` → Algo → `[2,3,4,5]`
                                
                        - How to use Big O to analyse algorithm
                        - Pointers?
                    
    - Data Structures
        - Array
            - ADT: **List**
            - Characteristics
                - Storage Manner: **Linear**
                - Data Allocation: **Contiguous**
                - Runtime Modification: **Static**
                - Type of Data Storage: **Homogeneous / Heterogeneous**
            - Operations
                - Access
                - Traverse
                - Insert
                - Delete
                - Sort
                - Search
                - Merge
                - IsEmpty
                - Size
            - Cost of Operations
            - Languages Implementation
                - JavaScript
                    - Traverse
                        
                        [https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Traverse.js](https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Traverse.js)
                        
                    - Insert
                        
                        [https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Insert.js](https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Insert.js)
                        
                    - Delete
                        
                        [https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Delete.js](https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Delete.js)
                        
                    - Sort
                        
                        [https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Sort.js](https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Sort.js)
                        
                    - Search
                        
                        [https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Search.js](https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Search.js)
                        
                    - Merge
                        
                        [https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Merge.js](https://github.com/rohanchandane/DataStructures-Algorithm/blob/main/Array/Merge.js)
                        
            - Examples
                - Search results
                - e-commerce inventory
                - Shopping cart
        - LinkedList
            - ADT: **List**
            - Characteristics
                - Storage Manner : **Linear**
                - Data Allocation: **Non-contiguous**
                - Runtime Modification: **Dynamic**
                - Type of Data Storage: **Homogeneous / Heterogeneous**
            - Operations
                - Traverse: Visit each element in the list sequentially.
                - Search
                - Insert: Element at beginning, end, or arbitrary index
                - Delete
                - IsEmpty
                - Size
            - Cost of Operations
            - Language Implementation
                - JavaScript
            - Examples
                - Implementing a stack or queue
                - Audio / Video playlist on Spotify or Youtube
        - Stacks
            - ADT: Stack
                - LIFO: Insertion and deletion performed from one end (from top)
            - Characteristics: Based on implementation
                - Characteristics of **Arrays**
                    
                    OR 
                    
                - Characteristics of **Linked lists**
            - Operations
                - **Push**: Add element from top (only one element)
                - **Pop**: Remove element from top (only one element)
                - **Top**: returns the element at top of stack
                - **IsEmpty**: returns true if empty
            - Cost of Operations
            - Language Implementation
                - Array based implementation
                - Linked list based implementation
            - Examples
                - Function calls / Recursion
                - Undo / Redo functionality
                - `{ }` Balanced parentheses in compiler execution of code
                - Stack of dinner plates
                - Tower of Hanoi
                - Search results
                - Shopping card
        - Queues
            - ADT: Queue
                - FIFO: Elements are added at the "back" (rear) and removed from the "front.”
            - Characteristics: Based on implementation
                - Characteristics of **Arrays**
                    
                    OR 
                    
                - Characteristics of **Linked lists**
            - Operations
                - **Enqueue:** Add a new element to the back of the queue.
                - **Dequeue:** Remove and return the element at the front of the queue.
                - **IsEmpty:** Check if the queue is empty.
                - **Size:** Get the number of elements in the queue.
                - **Peek:** Return the element at the front of the queue without removing it (optional in some implementations).
            - Cost of Operations
            - Language Implantation
                - Array based implementation
                - Linked list based implementation
            - Examples
                - Simulating a waiting line (customer in queue, printer queue)
        - HashMaps
            - ADT: **Map**
                - key-value pair: Way to store key-value store and effectively retrieve values based on keys
            - Characteristics
                - Characteristics of **HashTable** (HashTable not listed here in this notes)
                    
                    OR 
                    
                - Storage Manner : **Linear**
                - Data Allocation: **Non-contiguous**
                - Runtime Modification: **Dynamic**
                - Type of Data Storage: **Homogeneous / Heterogeneous**
            - Operations
                - Put (or Insert): Add new key-value pair
                - Get: Get the value associated with a key
                - Contains(or Has key): check if key exists
                - Remove: Delete a key value pair
                - IsEmpty: Check if map has no elements
                - Size: Get the total number of elements
            - Cost of Operations
            - Language Implementation
                - **Java:** `HashMap` class
                - **Python:** `dict` (dictionary)
                - **C++:** `unordered_map` (part of the C++ Standard Library)
                - **JavaScript:** `Map` object
            - Examples
                - Storing user information in a key-value format
        - Trees
            - ADT: **Hierarchical Collection**
                - Elements (nodes) with a parent-child relationship
                - Top elements are: ancestors, below them are: descendants
            - Characteristics
                - Storage Manner: **Non-Linear**
                - Data Allocation: **Non-Contiguous**
                - Runtime Modification: **Static / Dynamic**
                - Type of Data Storage: **Homogeneous / Heterogeneous**
            - Operations
                - Traverse: Visit nodes in specific order
                - Search: by value, by key
                - Insert: Add new node, by maintaining Tree structure
                - Delete: Delete a node, by maintaining Tree structure
                - IsEmpty: Check if Tree is empty
                - Size: Total number of nodes
            - Cost of Operations
            - Language Implantations
            - Examples
                - A family tree with parent-child relationships
                - Hierarchical file system
        - Graphs