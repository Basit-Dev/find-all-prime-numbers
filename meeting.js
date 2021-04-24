/*Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.*/

function meeting(s) {
    let res = s.toUpperCase().split(';')
    let index;
    let slice ='';
    let array = []
    let final;
    for (let i = 0; i < res.length; i++) {
        index = res[i].indexOf(':') // index 6
        array.push(res[i].slice(index+1) + ", " + res[i].slice(0,index))
    }
    final = array.sort();
    for (let i = 0; i < final.length; i++) {
        slice += "(" + final[i] +')'
    }
  return slice;
}

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);

  