var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-findMin",
  "level": "1",
  "url": "sec-findMin.html",
  "type": "Section",
  "number": "1.1",
  "title": "Finding Minimum Element in an Array",
  "body": " Finding Minimum Element in an Array  Consider an array of numbers, . We need to find the smallest among .  The above is probably one of the first programs you might have written when learning collections (or) arrays. The computational way of thinking about this problem is: how to we find the smallest among numbers when we see the numbers one at a time. We typically do this by examining each number one at a time and keeping track of the smallest among the numbers seen so far (using a \"scratch\" variable). Let us now write pseudo-code for this function.   Try yourself: Find Min findMin  We are going to write an algorithm for the findMin problem. Consider an array of numbers, . We need to find the smallest among .  For this, we will write a function, say findMin defined as follows: findMin(A): Input: A[1...n] of n numbers Returns: A number, A[i] such that A[i] <= A[j], for all 1 <= j <= n Drag the blocks to form the body of your function.   initialize currMin = A[1].    Loop over i values from 0 to n.    Loop over i values from 2 to n.    Loop over i values from 1 to n-1.     return A[1].   For each value of i in the iteration, set currMin = A[i] if A[i] < currMin  return currMin  return A[n]   Using our pseudo-code notations, we write the above algorithm as follows. findMin(A): Input: A[1...n] of n numbers Output: A number, A[i] such that A[i] <= A[j], for all 1 <= j <= n 1. currMin = A[1] 2. for i = 2 to n 3. if A[i] < currMin 4. currMin = A[i] 5. return currMin   Let us implement the algorithm above in your favorite programming language    import random def populateArr(n, st, end): # populate an arr of n integers randomly chosen from the range [st, end] # the n integers will be in indexes 1 .. n. It will set A[0] = -1 # preferably use this to populate an array with n non-negative integers. In other words: # we know end <= st # We should ideally have st >= 0 A = [random.randint(st, end) for _ in range(n)] # Insert the number -1 at the 0th index (as we ignore the 0th index) A.insert(0, -1) return A  def findMin(A): # TODO - initialize currMin to be A[1] # TODO - Loop for values of i from 2 to n # TODO - update currMin as needed # TODO - return currMin return 1 # Use the function. Initialize the array n = 100 # size of the array. default set to 100. update as desired # range of values. default set to [1, 100000]. update as desired st = 1 end = 100000  A = populateArr(n, st, end) print(findMin(A))    "
},
{
  "id": "findMin-pseudoCodeParsons",
  "level": "2",
  "url": "sec-findMin.html#findMin-pseudoCodeParsons",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Try yourself: Find Min.",
  "body": "Try yourself: Find Min findMin  We are going to write an algorithm for the findMin problem. Consider an array of numbers, . We need to find the smallest among .  For this, we will write a function, say findMin defined as follows: findMin(A): Input: A[1...n] of n numbers Returns: A number, A[i] such that A[i] <= A[j], for all 1 <= j <= n Drag the blocks to form the body of your function.   initialize currMin = A[1].    Loop over i values from 0 to n.    Loop over i values from 2 to n.    Loop over i values from 1 to n-1.     return A[1].   For each value of i in the iteration, set currMin = A[i] if A[i] < currMin  return currMin  return A[n]  "
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
