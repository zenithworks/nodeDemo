const myInterval = setInterval(
    () => console.log("Zenithworks"), 2000
);

setTimeout(() => clearInterval(myInterval), 110000);