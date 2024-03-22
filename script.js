var addbtn=document.getElementById("add-btn")
var overlay=document.querySelector(".overlay1")
var popupbox=document.querySelector(".popup-box")

addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn=document.getElementById("cancel")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"

})
//selecting container , add book, book-title,book-author,book-year,book-desc
var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookyear=document.getElementById("book-year")
var bookdescription=document.getElementById("book-desc")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <h5>${bookyear.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletefun(event)" id="deletepop">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

function deletefun(event) {
    event.target.parentElement.remove()
}

