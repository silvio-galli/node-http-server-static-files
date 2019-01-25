// Navbar Menu
// <-- insert navbar menu as first child of body
let navbarLinks = ["Home", "About", "Contact", "Wrong link"] 
let ul = document.createElement('ul')
for (let i = 0; i < navbarLinks.length; i++) {
  let li = document.createElement('li')
  let a = document.createElement('a')
  a.setAttribute('href', navbarLinks[i] === "Home" ? '/' : `/${navbarLinks[i].toLowerCase()}/`)
  a.setAttribute('title', `Go to ${navbarLinks[i]}`)
  a.append(document.createTextNode(navbarLinks[i]))
  li.append(a)
  ul.append(li)
}

let body = document.getElementsByTagName('body')[0]
let first = body.firstChild
let navbar = document.createElement('nav')
navbar.append(ul)
body.insertBefore(navbar, first)

// -->