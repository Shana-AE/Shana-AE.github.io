console.log('test');
fetch('https://shanaae.asuscomm.com:8888/test')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
