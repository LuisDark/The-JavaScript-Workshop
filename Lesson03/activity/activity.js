// Declare and initialize the todo list array

// The todo list element

// The randomize button element.

// Add event listener function for the randomize button element.

/**
 * Shuffles array elements
 * @param {array} sourceArray - Array to be shuffled.
 * @return {array} - New array with shuffled items 
*/
function getNewShuffledArray(sourceArray){
	// Make a copy of the sourceArray
	var newArray = [].concat(sourceArray);
	// The index for making a swap starting with last
	let swapIndex = newArray.length;
	// The index to make a swap with swapIndex 
	let swapWithIndex;
	// Copy of the swapIndex value being swapped
	let swapIndexValue;
	// Loop while swapIndex is not 0
	while (0 !== swapIndex) {
		// Pick an index to swap with current index from 0 to current swapIndex
		swapWithIndex = Math.floor(Math.random() * swapIndex);
		// Reduce swapIndex by 1
		swapIndex -= 1;
		// Make copy of the swapIndex value.
		swapIndexValue = newArray[swapIndex];
		// Replace swapIndex value with swapWithIndex value.
		newArray[swapIndex] = newArray[swapWithIndex];
		// Replace swapWithIndex value with temporaryValue value.
		newArray[swapWithIndex] = swapIndexValue;
	}
	return newArray;
}