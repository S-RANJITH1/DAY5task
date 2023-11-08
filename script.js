// Question 1:

   // by using for loop


 let data=[
    {
      "name": "ranjithkumar",
      "age": 26,
      "place":"neyveli"
    },
    {
      "name":"varadhan",
      "age": "26",
      "place":"thitakudi"
    },
    {
      "name":"vinith",
      "age": "27",
      "place":"dharmapuri"
    }
  ] 
  for (let i=0;i<data.length;i++){
    console.log((data[i].name),(data[i].age),(data[i].place))
}


  // by using for in loop

  let data1=[
    {
        "name": "ranjithkumar",
        "age": 26,
        "place":"neyveli"
      },
      {
        "name":"varadhan",
        "age": "26",
        "place":"thitakudi"
      },
      {
        "name":"vinith",
        "age": "27",
        "place":"dharmapuri"
      }
  ] 

      for (let index in data1) {
      const item = data1;
     console.log(data1[index].name,(data1[index].age),(data1[index].place));
} 

     // by using for of loop

  let data2=[
    {
        "name": "ranjithkumar",
        "age": 26,
        "place":"neyveli"
      },
      {
        "name":"varadhan",
        "age": "26",
        "place":"thitakudi"
      },
      {
        "name":"vinith",
        "age": "27",
        "place":"dharmapuri"
      }
 ]
     for (let val of data2) {

      console.log((val.name),(val.age),(val.place));
  }


  // Question 2:

   // my own resume data in JSON format

   const resume=
    {
     "name": "Ranjithkumar",
       "email": "ranjithppk2@gmail.com",
       "phone": "9361602652",
       "address": "112, North Street, Neyveli, Cuddalore dt, Tamilnadu- 607805"
     }
 
     "education";[
       {
         "college":"Government college of engg",
         "school": "Dhanalakshmi Srinivasan high sec school",
         "degree":"BE-Computer Science and Engineering"
         
     }
 
     ],
 
 {
     "languages": ["English","tamil"],
 }
 {
     skills=["teamwork","communication","problemsolving" ]
 }

 console.log(resume)
   




