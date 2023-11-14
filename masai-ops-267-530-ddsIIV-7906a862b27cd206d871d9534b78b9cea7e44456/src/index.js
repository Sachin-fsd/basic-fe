function studentData(fname,lname,age,marks,...hobbies) {
  let obj = {
    fullName: fname+" "+lname,
    age:age,
    hobbies:hobbies,
    getInfo:function (){
      return `${fname} ${lname}'s age is ${age}.`
    },
    getResult:function (){
      let sum = 0;
      marks.forEach((m)=>sum+=m);
      if(sum/marks.length <50 ){
        return "Result: FAIL";
      }else{
        return "Result: PASS"
      }
    }

  }


  return obj
}





export {studentData}