const person = {
    first: 'John',
    last: 'Doe',
  };
  
  const { first, last } = person;
  const { first: f, last: l } = person;
  
  console.log(first, last);
  console.log(f, l);