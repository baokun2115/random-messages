const data = [1,3,8,5,19]
const compareNum = (a,b) => a-b
const sortArr = (arr) => {
    return arr.sort(compareNum)
}


function prletMissingElements(arr, N)
{

	// Initialize diff
	let diff = arr[0] - 0;

	for(let i = 0; i < N; i++)
	{

		// Check if diff and arr[i]-i
		// both are equal or not
		if (arr[i] - i != diff)
		{

			// Loop for consecutive
			// missing elements
			while (diff < arr[i] - i)
			{
			    console.log((i+diff) + " ")
				
				diff++;
			}
		}
	}
}

// Driver Code

	// Given array arr[]
	let arr = [ 6, 7, 10, 11, 13 ];
	
	let N = arr.length;
	
	// Function call
	prletMissingElements(arr,13);

