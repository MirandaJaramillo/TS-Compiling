(() => {
//array of numbers
  const calcTotal = (prices:number[]):string => {
    let total = 0;
    prices.forEach((item)=> {
      total += item
    });
    return total.toString();
  }

  const prinTotal = (prices:number[]):void => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}`);
  }
  // const array = [1,2,3,4,600];
  // console.log(typeof calcTotal([1,2,3,4,600]));

prinTotal([1,2,3,4,600])
  })()
