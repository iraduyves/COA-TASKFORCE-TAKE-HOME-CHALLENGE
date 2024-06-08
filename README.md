# COA-TASKFORCE-TAKE-HOME-CHALLENGE

## Setup Instructions

1. Clone or download the repository to your local machine.
2. Open the project in your preferred code editor.
3. For the coding challenges:
   - Open a terminal or command prompt.
   - Navigate to the `Coding-challeng-1` folder by running `cd Coding-challeng-1`.
   - Run the challenge by executing `node challenge1.js`.
   - Similarly, navigate to the `Coding-challeng-2` folder by running `cd ../Coding-challeng-2`.
   - Run the challenge by executing `node challenge2.js`.
4. For the responsive gallery exercises (Gallery-01 and Gallery-03), open the respective `gallery.html` file in a web browser to view the gallery.

## Approach and Explanations

### Coding-challenge-1

The `findContinuousSubarray` function takes an array `arr` and a target sum `target` as input. It aims to determine whether there exists a contiguous subarray in `arr` that sums up to `target`.

The function uses a sliding window approach to efficiently find the subarray. It initializes a `sum` variable to keep track of the current subarray sum, and a `start` variable to mark the start of the current subarray. It then iterates through the array with a `for` loop, adding each element to the `sum`. If the `sum` becomes greater than the `target`, it subtracts elements from the start of the subarray until the `sum` is less than or equal to the `target`. If the `sum` equals the `target`, the function returns `true` indicating that a subarray with the desired sum exists.

### Coding-challenge-2

The `transformString` function takes a string `str` as input and applies transformations based on the length of the string.

If the length of the string is divisible by both 3 and 5, the function reverses the order of words in the string, and then converts each character to its ASCII code and concatenates the codes with spaces.

If the length of the string is divisible by 3, the function reverses the order of characters in the string.

If the length of the string is divisible by 5, the function converts each character to its ASCII code and concatenates the codes with spaces.

If the length of the string is not divisible by 3 or 5, the function returns the original string.

### Gallery-01

The Gallery-01 exercise demonstrates a responsive image gallery using CSS Grid. Each image card has a caption overlay that appears when hovering over the card. The gallery is styled using CSS, and the HTML structure consists of a container div with individual card divs for each image.

### Gallery-03

The Gallery-03 exercise is a simpler version of the responsive image gallery. It displays the images in a grid layout without any captions or overlays. The gallery is styled using CSS, and the HTML structure is similar to Gallery-01, with a container div and individual card divs for each image.