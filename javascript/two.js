var a = "i am doing javascript"
undefined
a.length
21
a.toUpperCase()
"I AM DOING JAVASCRIPT"
a.toLowerCase()
"i am doing javascript"
a[0]
"i"
a[20]
"t"
a[21]
undefined
a.charAt(0).toUpperCase()
"I"
a.slice(1)
" am doing javascript"
a.slice(4)
" doing javascript"
a.charAt(0).toUpperCase()+ a.slice(1)
"I am doing javascript"
a.replace("javascript","react")
"i am doing react"
a.replace("javascript","react,angular")
"i am doing react,angular"
var a = "    i am working with react  "
undefined
a.length
29
a.trim()
"i am working with react"
var b = a.trim()
undefined
b
"i am working with react"
b.length
23
a
"    i am working with react  "

a.trim().toUpperCase().replace('react','javascript')
"I AM WORKING WITH REACT"
a.trim().replace('react','javascript').toUpperCase()
"I AM WORKING WITH JAVASCRIPT"


var name="aakash"
undefined
var tech ="javascript"
undefined
var out =name+" is doing "+tech
undefined
out
"aakash is doing javascript"
name.concat(tech)
"aakashjavascript"
name.blink()
"<blink>aakash</blink>"
var a = "i am doing javascript"
undefined
a.split(" ")
(4) ["i", "am", "doing", "javascript"]
var a = "visualpath"
undefined
a.split("")
(10) ["v", "i", "s", "u", "a", "l", "p", "a", "t", "h"]
var a= "https://www.youtube.com/watch?v=gSQXq2_j-mw"
undefined
a.split("/")
(4) ["https:", "", "www.youtube.com", "watch?v=gSQXq2_j-mw"]