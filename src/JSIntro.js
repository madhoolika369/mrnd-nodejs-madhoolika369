
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var i;
	var sum = 0;
	for(i = 0; i < arrayOfNums.length; i++)
	{
		sum = sum + arrayOfNums[i];
	}
	return sum;
}


// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var temp = [];
	var i, j, count, flag = 0, sum =0;
	temp[0] = arrayOfNums[0];
	count =1;
	sum = temp[0];
	for(i = 1; i < arrayOfNums.length; i++)
	{
		flag = 0;
		for(j = 0; j < count; j++)
		{
			if(arrayOfNums[i] == temp[j])
			{
				flag = 1;
				break;
			}
		}
		if(flag == 0)
		{
			temp[count++] = arrayOfNums[i];
			sum = sum + arrayOfNums[i];
		}
	}
	return sum;
}

exports.ReverseString = function(str){
	return str.split("").reverse().join("");
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	return arrayOfStrings.reverse();

}