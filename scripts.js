// In your HTML, include a ‘generate’ button, that when clicked, will generate a new div container in the index.html. The new div should include some text that reads “Line #” and then a number specific to the number of times the generate button has been clicked. In addition to the text, you will need to include two buttons within the new div. One button will be entitled “Change Color” and the other button will entitled “Remove”.
$(document).ready(function(){
	var $clickCount = 0;
	var $newDiv, $colorBtn, $removeBtn;

	$('#generate').on('click', function(){
		$colorBtn = $('<button>');
		$removeBtn = $('<button>');
		$clickCount += 1;
		$newDiv = $('<div id="newDiv">');
		$newDiv.appendTo('body');
		$newDiv.attr('class', 'colorOff');

		$colorBtn.text('Change Color');
		$removeBtn.text('Remove');
		$colorBtn.addClass('color');
		$removeBtn.attr('class', 'delete');
	
		$newDiv.text('Line #' + $clickCount).append($colorBtn, $removeBtn);
	});


// The Change Color button should change the background color of the div container relative to the Change Color button that was clicked. For the purpose of this challenge, you can add extra functionality that when clicked again, it can change the color back to the original, BUT THIS IS NOT REQUIRED. Focus on core functionality first. Do extra stuff later if you have time.

	$(document).on('click', '.color', function(){
		// $(this).parent().attr('class', 'colorOn');
		$(this).parent().toggleClass('colorOn', 'colorOff');
	});

// The Remove Button should remove the parent Div container of the button that was clicked, removing the entire div, which contains the text, and the two additional buttons (the Change Color and Remove buttons).

	$(document).on('click', '.delete', function(){
		$(this).parent().remove();
	});

})
