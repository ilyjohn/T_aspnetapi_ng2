function sayHello() {

    const compiler = document.getElementById('compiler').nodeValue;
    const framework = document.getElementById('framework').nodeValue;


    return `Hello from ${compiler} and ${framework}`;
}