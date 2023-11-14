## Submission Instructions [Please note]

## Maximum Marks - 70

- The Submission should not contain spaces, for example /js-101 folder/eval will not work

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Function return to be of type object- 1 mark.
 ✅ The returned object should have a fullName - 1mark.
 ✅ The returned object should have age - 1 mark.
 ✅ The returned object should have hobbies - 1 mark.
 ✅ The returned object should have a getInfo - 1 mark.
 ✅ The returned object should have a getResult -1 mark.
 ✅ The returned object should have a getInfo to be of type function - 2 marks.
 ✅ The returned object should have a getResult to be of type function - 2 marks.
 ✅ The returned object should give correct output on calling getInfo - 9 marks.
 ✅ The returned object should give correct output on calling getResult - 10 marks.
 ✅ The returned object should give correct output of getInfo with new data - 20 marks.
 ✅ The returned object should give correct output of getResult with new data - 20 marks.

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.
- Run **npm run watch** for the test cases(Watch mode).
- Run **npm run build** to Build



## Problem Description

The function `studentData() {}` should return an object.

### Parameters of studentData:
firstName: takes in a string value
lastName: takes in a string value
age: takes in a number value
marksArray: takes in an array of marks
After `marksArray` all the arguments passed to the students data will be considered as the students hobbies.

Example function invocation: 
```
studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
```

In the above invocation, [50,60,70] is the students marks and 
the studnets hobbies are Singing, Coding & Meditating.

#### The object must have the following three properties: 

`fullName`: in the example invocation above, the fullName's value should be 'Vivek Agarwal'
`age`: age is equal to the third argument of age
`hobbies`: it is a array of hobbies. in the above invocation it would be ['Singing', 'Coding', 'Meditating']

#### The object must have the following two methods:

`getInfo`: In the invocation example above, it method would return the string value "Vivek Agarwal's age is 38."

`getResult`: 
If the average marks of the student is less than 50, it is expeted to return 'Result: FAIL'
If the average marks of the student is more than or equal to 50, it is expected to return 'Result: PASS'
in the invocation example above, it would return 'Result: PASS'


## Boilerplate

- Do not change the given folder structure
- You can code under the src folder in a filename index.js.
- you can find the testcases in src under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time