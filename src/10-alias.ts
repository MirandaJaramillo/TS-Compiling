(() => {
  //this is Alias Type
  type UserID = string | number;
  let userId: UserID;

  userId = 1212;
  userId = 'helloooo';
  console.log(userId);

  // Literal types

  //Instead of this
  // let shirtSize : string;
  // shirtSize = 'M';
  // shirtSize = 'L';
  // shirtSize = 'XXL';

  // We wite this, to provent errors
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize : Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  // shirtSize = 'XXL';



  function greeting(userId: UserID, size: Sizes){
    if (typeof userId === 'string' && typeof size === 'string') return `the input is a string -> ${userId.toLowerCase()} , size here! -> ${size.toLowerCase()}  `;
    return 'something is not quite right :('
  }


  console.log(greeting('Good morning!', 'S'))
  console.log(greeting(1212, 'XL'))


})()
