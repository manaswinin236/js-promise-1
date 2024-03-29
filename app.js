let arr = [];

function getData() {
  const getMessage = document.getElementById('message');

  // Progression 1: Create a promise call which fetches data
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res.data);

      const result = res.data;

      // Progression 2: Display the fetched data in the form of list
      result.forEach((user) => {
        const getPlayer = document.createElement('div');
        getPlayer.setAttribute('id', 'player');
        getPlayer.setAttribute('class', 'player');

        const name = document.createElement('div');
        const email = document.createElement('div');
        const phone = document.createElement('div');
        const website = document.createElement('div');
        const company = document.createElement('div');
        const city = document.createElement('div');
        const zipcode = document.createElement('div');

        name.innerText = user.name;
        email.innerText = user.email;
        phone.innerText = user.phone;
        website.innerText = user.website;
        company.innerText = user.company.name;
        city.innerText = user.address.city;
        zipcode.innerText = user.address.zipcode;

        getPlayer.append(name);
        getPlayer.append(email);
        getPlayer.append(phone);
        getPlayer.append(website);
        getPlayer.append(company);
        getPlayer.append(city);
        getPlayer.append(zipcode);

        arr.push(getPlayer);
      });

      arr.forEach((ele) => {
        getMessage.append(ele);
      });

      console.log(getBody);
    })
    //Progression 3: When the promise call is rejected then throw an error
    .catch((error) => {
      console.log('Promise rejected.');
      console.log(error.message);
    });
}