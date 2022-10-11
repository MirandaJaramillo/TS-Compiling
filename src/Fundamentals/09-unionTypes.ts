(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'helloooo';
  console.log(userId);

  function greeting(myText: string | number ){
    if (typeof myText === 'string') return `the input is a string  ${myText.toLowerCase()}`;
    return `the input is a number  ${myText}`;
  }

  console.log(greeting('Good morning!'))
  console.log(greeting(1212))
})()
