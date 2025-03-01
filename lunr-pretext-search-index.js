var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-findMin",
  "level": "1",
  "url": "sec-findMin.html",
  "type": "Section",
  "number": "1.1",
  "title": "Finding Minimum Element in an Array",
  "body": " Finding Minimum Element in an Array  Consider an array of numbers.  "
},
{
  "id": "sec-analysisTools",
  "level": "1",
  "url": "sec-analysisTools.html",
  "type": "Section",
  "number": "1.2",
  "title": "Tools for Analyzing Algorithms",
  "body": " Tools for Analyzing Algorithms  We have laid out that we need to analyze the running time of an algorithm on a single processor computer. But how do we go about it? Let us look at the tools that we have developed over the years to enable such analysis of algorithms.  So, how to express the running time of an algorithm for a particular input instance of a problem? We typically represent this as a function of the input size. And for the input size, we use the number of bits used to represent the input. For instance, if the input is an array of numbers and each number is represented using 8 bits, the input size is , and we represent the running time of an algorithm in terms of this input size. Note that we actually represent the running time in terms of in this case.  Tool 1: Bounds. We said we want to represent the running time, but how do we represent the running time? Is it milliseconds? then a faster processor might run a less \"optimal\" algorithm quicker than a slower processor running a more \"optimal\" algorithm. Our focus is on comparing the algorithms, and not comparing the individual processor quirks. For this, we use bounds -- , , , , and . These bounds us provide us the ability to ignore the individual processor quirks and compare the \"optimality\" of algorithms.  Tool 2: Asymptotic Analysis.  How long does it take for an algorithm to complete when the input size is a small number, say 5 (for instance array of 5 numbers). Unless your algorithm has an infinite loop, the algorithm will take some small number of steps. Using our bounds, all \"reasonable\" algorithms take time for small input sizes. To perform meaningful analysis of algorithms, we perform asymptotic analysis - which basically means, we compare how two algorithms perform when the input size is large.  Consider the problem of searching if a given key is present in an array . Consider a simple algorithm where we start from index 1 and loop through all indexes, each time checking if the element at that index is the key that we are searching for. If we find the key , we can immediately return \"success\". If we loop through the whole loop and do not find the key , we return \"failure\".  What do we note in the above algorithm? First off, we analyze when the input size is large. How much time does it take? We might get lucky and find that , in which case we return in time. We might get unlucky, and never find , or find that the last element is ( ). How do we characterize these different running times depending on \"our luck\"?  For this, we perform the best case, and worst case analysis. The best case for an algorithm considers the input for which the algorithm will run the fastest. The running time in the best case is called the best case running time for that algorithm. Similarly, the worst case for an algorithm considers the input for which the algorithm will run the slowest. The running time in the worst case is called the worst case running time for that algorithm.  "
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
