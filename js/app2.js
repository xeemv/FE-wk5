/*========================*/
/* new section ----- AJAX */
/*========================*/
/*
* ajax = asynchronous JavaScript and XML 
    - works to send a HTTP request and only update a section of the dom when we get back the response
    - allows to send a request and get back data behind the scenes asynchronously w/o reloading the page


* ways to use ajax w/ jquery
	- use built in methods (both methods are very similar)
		- get = Retrieve one of the elements matched by the jQuery object.
		- post = Send data to the server using a HTTP POST request.
			- also has an extra parameter that enables us to send a payload to the server
			- typically used to update info on the server in a modern web dev environment

* use mock demo server
	- returns mock data to us to test sending our request
*/


$.get('https://reqres.in/api/users/2', (data) => console.log(data));
/* 
* takes 2 parameters:
	- 1st = url
		- https://reqres.in/api/users/2 = mock API that allows us to just send over test requests
		- perfect for practicing ajax
	- 2nd = method or function that we are going to invoke once the response is returned
		- will take an argument or parameter = (data)
* (data) = data responded from the http request
	- respond to that data
	- log out the data
*/

$.post('https://reqres.in/api/users/2', {
	name: 'Tommy',
	job: "Front End Software Developer"
}, (data) => console.log(data));
/* try to create a new user
 * will have a middle argument this time = payload
 * create a new object using {name:, job:}
 * data = parameter name
 

 * this will result in a new object being displayed after the $.get line of code
	- object will include:
		- name, job, ID that was submitted w/ it, and date created
 */