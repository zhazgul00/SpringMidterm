let button = document.querySelector("button");
button.onclick = function () {
    let name = prompt("Enter your name:");
    if (name != null) {
        document.querySelector("h1").innerHTML = "Welcome " + name + '!';
    }
}
let imgjs = document.querySelector('img');
imgjs.onclick = () => {
    if (document.querySelector('img').getAttribute('src') === 'https://i.pinimg.com/564x/fe/24/f2/fe24f2f47ce7272cb1fd21d7e45599b8.jpg') {
        document.querySelector('img').setAttribute('src', 'https://i.pinimg.com/564x/c1/03/4b/c1034b427924b0c6e29150c5affc9bec.jpg' );
    } else {
        document.querySelector('img').setAttribute('src', 'https://i.pinimg.com/564x/fe/24/f2/fe24f2f47ce7272cb1fd21d7e45599b8.jpg');
    }
}