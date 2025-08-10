var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-motiv-assignment",
  "level": "1",
  "url": "sec-motiv-assignment.html",
  "type": "Section",
  "number": "1.1",
  "title": "Assignment of objects",
  "body": " Assignment of objects  Different programming languages behave differently while assigning objects to variables, as you will see below.    Consider the following \"(almost) identical\" programs, one written in C++, one in Java, and one in Python. These programs have two variables to which objects are assigned.      What is printed by the C++ program (lines 15, 16)      s1 ID = 101 s2 ID = 101      s2 ID = 101 s2 ID = 202      s1 ID = 202 s2 ID = 101      s1 ID = 202 s2 ID = 202      Separate memory is allocated for the objects referred to by variables s1 and s2, each with its own memory locations for the sID member variable. Therefore, updating s2.sID does not impact s1's sID.      Run\/Edit       What is printed by the Java program (lines 14, 15)      s1 ID = 101 s2 ID = 101      s1 ID = 101 s2 ID = 202      s1 ID = 202 s2 ID = 101      s1 ID = 202 s2 ID = 202      Just like C++, separate memory is allocated for variables s1 and s2. However, unlike C++, the variables s1 and s2 store references to the Student object, and in this case they store references to the same Student object. Therefore updating s2.sID updates the same object that s1 references.      Run\/Edit       What is printed by the Python program (lines 10, 11)      s1 ID = 101 s2 ID = 101      s1 ID = 101 s2 ID = 202      s1 ID = 202 s2 ID = 101      s1 ID = 202 s2 ID = 202      Just like in Java, variables s1 and s2 store references to the same same Student object. Therefore updating s2.sID updates the same object that s1 references.      Run\/Edit     "
},
{
  "id": "sec-motiv-assignment-3-2-1",
  "level": "2",
  "url": "sec-motiv-assignment.html#sec-motiv-assignment-3-2-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  What is printed by the C++ program (lines 15, 16)      s1 ID = 101 s2 ID = 101      s2 ID = 101 s2 ID = 202      s1 ID = 202 s2 ID = 101      s1 ID = 202 s2 ID = 202      Separate memory is allocated for the objects referred to by variables s1 and s2, each with its own memory locations for the sID member variable. Therefore, updating s2.sID does not impact s1's sID.   "
},
{
  "id": "sec-motiv-assignment-3-3-1",
  "level": "2",
  "url": "sec-motiv-assignment.html#sec-motiv-assignment-3-3-1",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  What is printed by the Java program (lines 14, 15)      s1 ID = 101 s2 ID = 101      s1 ID = 101 s2 ID = 202      s1 ID = 202 s2 ID = 101      s1 ID = 202 s2 ID = 202      Just like C++, separate memory is allocated for variables s1 and s2. However, unlike C++, the variables s1 and s2 store references to the Student object, and in this case they store references to the same Student object. Therefore updating s2.sID updates the same object that s1 references.   "
},
{
  "id": "sec-motiv-assignment-3-4-1",
  "level": "2",
  "url": "sec-motiv-assignment.html#sec-motiv-assignment-3-4-1",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  What is printed by the Python program (lines 10, 11)      s1 ID = 101 s2 ID = 101      s1 ID = 101 s2 ID = 202      s1 ID = 202 s2 ID = 101      s1 ID = 202 s2 ID = 202      Just like in Java, variables s1 and s2 store references to the same same Student object. Therefore updating s2.sID updates the same object that s1 references.   "
},
{
  "id": "sec-motiv-parameters",
  "level": "1",
  "url": "sec-motiv-parameters.html",
  "type": "Section",
  "number": "1.2",
  "title": "Passing objects as parameters",
  "body": " Passing objects as parameters  Different programming languages behave differently while passing objects as parameters to functions, as you will see below.    Consider the following \"(almost) identical\" programs, one written in C++, one in Java, and one in Python. These programs pass an object as parameter to a function. When the object is modified inside the function, does it affect the original object when you return from the function.      What is printed by the C++ program (line 19)      s1 ID = 101      s2 ID = 202      Separate memory is allocated for the objects referred to by variable s1 in the main function, and by the variable s in the modifyStudent function, each with its own memory locations for the sID member variable. Therefore, updating s.sID in modifyStudent function does not impact s1's sID.      Run\/Edit       What is printed by the Java program (line 18)      s1 ID = 101      s2 ID = 202      While separate memory is allocated for the variable s1 in the main method and for the variable s in the modifyStudent method, these store references to the same Student object. Therefore updating s.sID in the modifyStudent method updates the same object referenced by variable s1 in the main method.      Run\/Edit       What is printed by the Python program (line 12)      s1 ID = 101      s2 ID = 202      Python behaves just like Java. Both the variable s1 in the main and the variable s in the modifyStudent method refere to the same Student object. Therefore updating s.sID in the modifyStudent method updates the same object referenced by variable s1 in the main.      Run\/Edit     "
},
{
  "id": "sec-motiv-parameters-3-2-1",
  "level": "2",
  "url": "sec-motiv-parameters.html#sec-motiv-parameters-3-2-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  What is printed by the C++ program (line 19)      s1 ID = 101      s2 ID = 202      Separate memory is allocated for the objects referred to by variable s1 in the main function, and by the variable s in the modifyStudent function, each with its own memory locations for the sID member variable. Therefore, updating s.sID in modifyStudent function does not impact s1's sID.   "
},
{
  "id": "sec-motiv-parameters-3-3-1",
  "level": "2",
  "url": "sec-motiv-parameters.html#sec-motiv-parameters-3-3-1",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  What is printed by the Java program (line 18)      s1 ID = 101      s2 ID = 202      While separate memory is allocated for the variable s1 in the main method and for the variable s in the modifyStudent method, these store references to the same Student object. Therefore updating s.sID in the modifyStudent method updates the same object referenced by variable s1 in the main method.   "
},
{
  "id": "sec-motiv-parameters-3-4-1",
  "level": "2",
  "url": "sec-motiv-parameters.html#sec-motiv-parameters-3-4-1",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  What is printed by the Python program (line 12)      s1 ID = 101      s2 ID = 202      Python behaves just like Java. Both the variable s1 in the main and the variable s in the modifyStudent method refere to the same Student object. Therefore updating s.sID in the modifyStudent method updates the same object referenced by variable s1 in the main.   "
},
{
  "id": "sec-motiv-variableAddress",
  "level": "1",
  "url": "sec-motiv-variableAddress.html",
  "type": "Section",
  "number": "1.3",
  "title": "Addresses of variables",
  "body": " Addresses of variables  Python exhibits a distinct behavior when variables are assigned to primitive values like integers, and then reassigned.    Consider the following \"(almost) identical\" programs, one written in C++, and one in Python. First, the same integer value is assigned to two variables. One of the variables is then reassigned to a new value. Observe how the addresses or identies associated with the variables behave in each language. Java will behave like C++; however, we do not illustrate Java as Java does not provide a way of accessing memory addresses of primitive types (like integers).      What is printed by the C++ program (lines 10, 16)      same same      same different      different same      different different      In C++, separate memory is allocated for v1 and v2 when they are declared. Each variable holds its own copy of the value. When we access or update a variable, we are interacting directly with the value stored in its own memory location. Once declared, the address of each variable remains the same, even after reassignment.      Run\/Edit       What is printed by the Python program (lines 6, 12)      same same      same different      different same      different different      This behavior could differ based on python implementation, though what we see is common. When we start, both v1 and v2 are assigned the same integer (1000), and they both refer to the same address where the integer 1000 is stored. When v2 is reassigned to 2000, v2 now references a different address where the integer 2000 is stored, while v1 continues to refer to the same location as before. Edit the program and play around and see what happens when v1 is also reassigned, when an integer is passed as a function parameter, etc. These behaviors exhibited by most Python implementations are different from what is typically seen in C++ and Java.      Run\/Edit     "
},
{
  "id": "sec-motiv-variableAddress-3-2-1",
  "level": "2",
  "url": "sec-motiv-variableAddress.html#sec-motiv-variableAddress-3-2-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  What is printed by the C++ program (lines 10, 16)      same same      same different      different same      different different      In C++, separate memory is allocated for v1 and v2 when they are declared. Each variable holds its own copy of the value. When we access or update a variable, we are interacting directly with the value stored in its own memory location. Once declared, the address of each variable remains the same, even after reassignment.   "
},
{
  "id": "sec-motiv-variableAddress-3-3-1",
  "level": "2",
  "url": "sec-motiv-variableAddress.html#sec-motiv-variableAddress-3-3-1",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  What is printed by the Python program (lines 6, 12)      same same      same different      different same      different different      This behavior could differ based on python implementation, though what we see is common. When we start, both v1 and v2 are assigned the same integer (1000), and they both refer to the same address where the integer 1000 is stored. When v2 is reassigned to 2000, v2 now references a different address where the integer 2000 is stored, while v1 continues to refer to the same location as before. Edit the program and play around and see what happens when v1 is also reassigned, when an integer is passed as a function parameter, etc. These behaviors exhibited by most Python implementations are different from what is typically seen in C++ and Java.   "
},
{
  "id": "sec-motiv-array",
  "level": "1",
  "url": "sec-motiv-array.html",
  "type": "Section",
  "number": "1.4",
  "title": "Accessing Array Indexes",
  "body": " Accessing Array Indexes  In programming, we often deal with collections of objects which are structured using different data structures such as arrays, linked lists, and so on. Furthermore, you are often expected to write \"efficient\" code. For instance, you might be expected to write code that runs fast. You need to understand how memory is allocated for different data structures, and the performance of different operations on data structures.  Let us examine arrays, and see how memory access of different array indexes perform similarly across different programming languages.    Consider the following \"(almost) identical\" programs, one written in C++, one in Java, and one in Python. All these programs allocate an array of size 10,000. How will the time to access later\/higher indexes in the array compare to the time to access earlier\/lower indexes in the array?  Our program does the following. After initializing an array of size 10,000, we access early indexes (for our purpose, we consider the first 10% of indexes, i.e., indexes between 0 and 1000, as early indexes) a total of 100,000 times. Each access, we set the early index element to a random integer. We then access late indexes (for our purpose, we consider the 10% of indexes between 8000 and 9000 as late indexes) a total of 100,000 times, each time setting the late index element to a random integer. We then report two times: the total time for accessing the 100,000 early indexes (which we denote as TE ); and the total time for accessing the 100,000 late indexes (which we denote as TH ).      What is the relationship between the times ( TE and TH ) reported by lines 30, 31?      TE ≪ TH (significantly smaller)      TE ≫ TH (significantly greater)      TE ≈ TH (approximately the same)      The way memory is allocated for an array, and the way a particular array index element is accessed is such that accessing any index takes the same amount of time.      Run\/Edit       What is the relationship between the times ( TE and TH ) reported by lines 28, 29?      TE ≪ TH (significantly smaller)      TE ≫ TH (significantly greater)      TE ≈ TH (approximately the same)      The way memory is allocated for an array, and the way a particular array index element is accessed in Java is similar to that in C++. In other words, accessing any index takes the same amount of time.      Run\/Edit       What is the relationship between the times ( TE and TH ) reported by lines 22, 23?      TE ≪ TH (significantly smaller)      TE ≫ TH (significantly greater)      TE ≈ TH (approximately the same)      The way memory is allocated for an array, and the way a particular array index element is accessed in Python is similar to that in C++ and Java. In other words, accessing any index takes the same amount of time.      Run\/Edit     "
},
{
  "id": "sec-motiv-array-4-2-1",
  "level": "2",
  "url": "sec-motiv-array.html#sec-motiv-array-4-2-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  What is the relationship between the times ( TE and TH ) reported by lines 30, 31?      TE ≪ TH (significantly smaller)      TE ≫ TH (significantly greater)      TE ≈ TH (approximately the same)      The way memory is allocated for an array, and the way a particular array index element is accessed is such that accessing any index takes the same amount of time.   "
},
{
  "id": "sec-motiv-array-4-3-1",
  "level": "2",
  "url": "sec-motiv-array.html#sec-motiv-array-4-3-1",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  What is the relationship between the times ( TE and TH ) reported by lines 28, 29?      TE ≪ TH (significantly smaller)      TE ≫ TH (significantly greater)      TE ≈ TH (approximately the same)      The way memory is allocated for an array, and the way a particular array index element is accessed in Java is similar to that in C++. In other words, accessing any index takes the same amount of time.   "
},
{
  "id": "sec-motiv-array-4-4-1",
  "level": "2",
  "url": "sec-motiv-array.html#sec-motiv-array-4-4-1",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  What is the relationship between the times ( TE and TH ) reported by lines 22, 23?      TE ≪ TH (significantly smaller)      TE ≫ TH (significantly greater)      TE ≈ TH (approximately the same)      The way memory is allocated for an array, and the way a particular array index element is accessed in Python is similar to that in C++ and Java. In other words, accessing any index takes the same amount of time.   "
},
{
  "id": "sec-cpp-int-variables",
  "level": "1",
  "url": "sec-cpp-int-variables.html",
  "type": "Section",
  "number": "2.1",
  "title": "",
  "body": " "
},
{
  "id": "sec-cpp-class-variables",
  "level": "1",
  "url": "sec-cpp-class-variables.html",
  "type": "Section",
  "number": "2.2",
  "title": "",
  "body": " "
},
{
  "id": "sec-cpp-ptr-variables",
  "level": "1",
  "url": "sec-cpp-ptr-variables.html",
  "type": "Section",
  "number": "2.3",
  "title": "",
  "body": " "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
