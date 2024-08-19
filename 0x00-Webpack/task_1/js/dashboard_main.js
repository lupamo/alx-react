import $ from "jQuery";
import _ from "lodash";

$(document).ready(function() {
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button>Click here to get started</button>');
	$('body').append("<p id='count'></p>");
	$('button').on('click', debouncedUpdateCounter);
	$('body').append('Copyright - Holberton School');
});
let count = 0;

function updateCounter() {
	count++;
	$('#count').text(`${count} clicks on the button`);
}
const debouncedUpdateCounter = _.debounce(updateCounter, 300);
