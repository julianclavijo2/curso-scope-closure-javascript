  function greeting() {
    let username = 'Oscar';

    function displayUserName(params) {
        return `Hello ${username}`;
    }

    return displayUserName;
  }

  const g = greeting();
  console.log(g);
  console.log(g());