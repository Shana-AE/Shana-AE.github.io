console.log('test');
fetch('http://shanaae.asuscomm.com:8088/test')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
