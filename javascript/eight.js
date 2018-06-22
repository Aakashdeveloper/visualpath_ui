document.getElementsByTagName('h2')
HTMLCollection(4) [h2, h2, h2, h2]
document.getElementsByTagName('h2')[0]
<h2>​AAKASH​</h2>​
document.getElementsByTagName('h2')[0].innerHTML
"AAKASH"
document.getElementsByTagName('h2')[0].innerHTML="John"
"John"
document.getElementsByClassName('scroll')
HTMLCollection(11) [a.active.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0]
<a class=​"active scroll" href=​"#home" data-hover=​"Home">​…​</a>​
document.getElementsByClassName('scroll')[0].innerHTNL
undefined
document.getElementsByClassName('scroll')[0].innerHTML
"Home"
document.getElementsByClassName('scroll')[0].innerHTML="aakash"
"aakash"
document.getElementsByClassName('scroll')[0].style.color="green"
"green"

var first = document.getElementsByClassName('slider-mai')
first.getElementsByClassName('abc')