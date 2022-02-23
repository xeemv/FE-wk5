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

let p = $('#test');
// takes a string that is a css selector
// a lot less code than getElementById
let div = $('.my-class');
let ul = $('ul');
console.log(p);
console.log(div);
console.log(ul);

// stopped at 3:35 minutes for the night