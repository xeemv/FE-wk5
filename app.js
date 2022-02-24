console.log($('body'));


// Interacting with elements using JQuery - video
/*
 * 	• Jquery follows the same rules as the selectors
		○ Id = #
		○ Class = .
		○ Tag names = the text that follows a tag itself
	• Jquery use a function w/ the name of a $ sign to shorten code considerably
		○ In order to select an element
			- We only need a $() like any other function to invoke and pass the selector as a string 
 * 
 */


// how jquery grabs elements:
let p = $('#test');
// takes a string that is a css selector
// will grab the <p> element w/ id name of "test" = hello world
let div = $('.my-class');
// grabs the div element
let ul = $('ul');
// grabs the ul element

console.log(p);
console.log(div);
console.log(ul);

/* ways that jquery interacts w/ the elements:
 * Jquery doesnt return an element the same way using document.getElementById
 	* returns the element wrapped inside a jquery object that has additional built in methods for us to use
 	* will make it easier to interact w/ the dom
 		* some methods:
		 - allows to us to get/set the text html values & attributes of existing elements
		 - other methods enable us to add, remove, hide, and show elements 
*/

/*========================*/
	/* new section*/
/*========================*/
/* a different method: works in 2 ways
	- see note from line 51
	- if code looks like this ===> p.text('');
		- nothing prints to the browser at all
	- other way is line 52
*/
console.log(p.text());
// p = jquery element object that is returned
// text() = method on this object
// if no text inside (pass no arguments) = returns nothing in the browser
p.text('New Text')
// this will change the browser <p> element to display "New Text"
// 'New Text' = string argument


/*========================*/
	/* new section*/
/*========================*/
// Grab a reference to the input we created:
// $('input').val('New Value'); ===> commented out due to line 73 block of notes
/* grabbing the input element
 * set the value of the input: 
 	* value to be written as .val
 	* insert string = "New Value"
	 	- the value was programmatically added to the input field on the browser
*/


/*========================*/
	/* new section*/
/*========================*/
$('input').attr('placeholder', 'Placeholder Text');
// add and change attributes on elements
/* let's add a placeholder to the input field
 * grab element by html tag name = input
 * .attr = method to change an attribute
 	- take 2 parameters:
	 	-  1st parameter = (what the attribute is) placeholder
		 	- write it like we would if we were writing it in html
		- 2nd parameter = value, which in this case is "Placeholder Text"
*/


/*========================*/
	/* new section*/
/*========================*/
// add an element to the dom
/* there are 4 methods:
	* append = add context to an existing element at the end of the elements current context or content
	* prepend = add context to an existing element at the beginning of the elements current context or content
	* before = Insert content, specified by the parameter, immediately before each element in the set of matched elements
	* after = Insert content, specified by the parameter, immediately after each element in the set of matched elements.
*/


div.prepend('<p>prepended paragraph</p>');
// can type out html as a string
// ('<p>prepended paragraph</p>'); == will add a <p> element called "prepended paragraph"
	// display it to the browser above the div
div.append('<p>appended paragraph</p>');
// ('<p>prepended paragraph</p>'); == will add a <p> element called "appended paragraph"
	// display it to the browser below the div
div.before('<p>paragraph that was added before the div</p>');
// ('<p>paragraph that was added before the div</p>'); == will add a <p> element called "paragraph that was added before the div"
	// display it to the browser above the div and the prepended paragraph
div.after('<p>paragraph that was added after the div</p>');
// ('<p>paragraph that was added after the div</p>'); == will add a <p> element called "paragraph that was added after the div"
	// display it to the browser below the div and the appended paragraph


/*========================*/
	/* new section*/
/*========================*/
// methods to remove and empty elements
/* 2 ways:
 * remove method = deletes the element & all of its children from the dom
 * empty method = removes all the children of the selected element from the dom
 */

div.empty();
// the div still exist
// but it emptied the <p> inside of the div
ul.remove();
// remove the unordered list element altogether



/*========================*/
	/* new section*/
/*========================*/
/* method to hide an element from being displayed but not remove it from the dom altogether
 * hide = Hide the matched elements.
 * show = Display the matched elements.
 */

$('input').hide();
// this will hide the input element
setTimeout(() => $('input').show(), 2000);
// this will set the timer to display(make appear) the input element after 2000 milliseconds