# Optick

[Sol](https://kayandrewj.github.io/Optick/Sol/index.html) (live demo powered by Optick)

Optick is a lightweight DOM querying and manipulation library. It is designed to abstract away the process of vanilla JavaScript DOM manipulation. The purpose of Optick is to eliminate boilerplate and stay within reach of developers who are just beginning to venture into DOM manipulation.

## Major Features

## Easy DOM Element Selection

Making Optick semantic and easy to use firstly depends on user-created, meaningful DOM element class names. Selectors in Optick are identical to selectors in CSS, allowing novice developers who have written some CSS to adapt easily. If good naming conventions are used, Optick has the ability to read like spoken English:

For button, add class "submit":
  `_4("button").addClass("submit")`

For paragraph "greeting", append "Hello World!":
  `_4("p.greeting").append("Hello World!")`


Optick methods return a collection of DOM nodes, organized into an array:

  `_4("p").find(".body-text") //=>
    DOMNodeCollection { nodes: [<p class="body-text">Lorem Ipsum<p>]}`

## Methods

## *Find*

### find
`_4.(".selector").find`

Returns an array of DOM elements that match the given query.

### children
`_4.(".selector").children`

Returns an array of DOM elements that are children of the first match found for the given selector.

### parent
`_4.(".selector").parent`

Returns a single DOM element that is a parent of the first match found for the given selector.

## *innerHTML*

### append
`_4(".selector").append("content")`

If given a string, will concat the string with the existing inner HTML content at all matches found for the given selector.

If given a string that can be parsed as an HTML element (such as an `<li>` being appended to a `<ul>`) will nest an HTML element as a child of all matches found for the given selector

### empty
`_4(".selector").empty`

Removes any inner HTML content it finds in the found elements for the given selector.


## *outerHTML*

### attr
`_4(".selector").attr("attribute", "property")`

Takes two arguments, an attribute (e.g., class, style, id) and a property. Assigns the property to the attribute.

### addClass
`_4(".selector").addClass("className")`

Works similarly to `.attr` but will only assign a class. Will not assign duplicate classes.

### removeClass
`_4(".selector").removeClass("className")`

The inverse of addClass.

### toggleClass
`_4(".selector").toggleClass("className")`

If className is active, removes className from class list; if className does not exist, adds className to class list.


## Event Handling

Event handling in Optick behaves predictably and can be written semantically. The event methods are capable of handling any type of DOM event, and can execute a callback in any form.

### on
`(".selector").on("click", callback)`

Takes two arguments: a DOM action and a callback function to execute when the action is fired.

### off
`(".selector").off("click", callback)`

Takes two arguments: a DOM action and a callback function to execute when the action started but is no longer being fired.

### Ajax
Optick contains an Ajax method similar in syntax to jQuery. Ajax calls return a single promise that is undefined by default. Users may opt to string on other Ajax calls, but may not string on more than one other type of method as a promise.
