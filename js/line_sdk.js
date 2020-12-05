// Using a Promise object
liff
  .init({
    liffId: "U1c91fc0a9d512d319fdae7d2f2d9be64" // use own liffId
  })
  .then(() => {
    // Start to use liff's api
    liff.openWindow({
        url:'https://dicoding.com',
        external:true
      });
  })
  
  .catch((err: LiffError) => {
    // Error happens during initialization
    console.log(err.code, err.message);
  });