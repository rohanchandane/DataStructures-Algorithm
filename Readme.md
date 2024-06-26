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
                            - 2 Types
                                - **Primitive**: System/Compiler/Programming Language defined data types (eg: string, number)
                                - **User Defined**: Data types created as per need of user (eg: Employee: id, name, designation)
                        - **ADT**: Abstract Data Type
                            - Data + their Operations
                        - Characteristics of Data Types
                            - **Linear**: Sequential storage in memory (vs Non Linear)
                            - **Static**: Runtime modification not possible (vs Dynamic)
                            - **Homogeneous**: Stores data of same type (vs Non Homogeneous)
                        - Classification (Diagram)
                    - **Operations**
                        - Traversing
                        - Searching
                        - Inserting
                        - Deleting
                        - Sorting
                        - Merging
                - Computer programs: needs 2 things to execute: Different operations needs different time & space
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
                        - More input → More time to run = Rate of growth (ROG)
                        - 3 scenarios for ROG,
                            - time Increases
                            - time Stays same
                            - time Increase or Decrease (Varies)
                    - Methods to Analyse
                        - When ROG varies, we perform following analysis
                            - for Worst case:  (Big O)
                                - Big O notation
                                    - `O(n^2)`
                                        - `(n^2)` : describe time or space complexity. `n` input to the algo.
                                    - Common Big O functions - from Best to Worst
                                        - https://www.bigocheatsheet.com/
                                    - Good function: function that grows less as input increase
                                    - Bad function: function that grows a lot as input increase
                               
                            - for Average case: (Big Theta Θ)
                            - for Best case: (Big Omega Ω)
                    
    - Data Structures
        - Array
            - Storage: Linear
            - Memory allocation: Static
            - Type: Homogeneous / Heterogeneous
            - Purpose
            - Operations
                - Traverse
                - Insert
                - Delete
                - Sort
                - Search
                - Merge
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
                        
        - LinkedList
        - HashMaps
        - Stacks
        - Queues
        - Trees
        - Graphs
