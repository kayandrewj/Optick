# Optick

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
    [DOMNodeCollection { nodes: [<p class="body-text">Lorem Ipsum<p>]}]`

## Find Methods

* find
* children
* parent

## innerHTML Content Manipulation

* append
* empty

## outerHTML Content Manipulation

* attr
* addClass
* removeClass
* toggleClass
* remove

## Event Handling

Event handling in Optick behaves predictably and can be written semantically. The event methods are capable of handling any type of DOM event, and can execute a callback in any form.

* on
* off
* Ajax

## Ajax

Optick contains an Ajax method similar in syntax to jQuery. Ajax calls return a single promise that is undefined by default. Users may opt to string on other Ajax calls, but may not string on more than one other type of method as a promise.
