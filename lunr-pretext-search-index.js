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
