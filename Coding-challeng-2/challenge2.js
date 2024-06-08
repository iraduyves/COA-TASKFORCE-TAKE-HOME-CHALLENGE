function transformString(str) {
    const n = str.length;
    let transformed = '';

    if (n % 3 === 0 && n % 5 === 0) {
        transformed = str.split(' ').reverse().join(' ');
        transformed = transformed.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    else if (n % 3 === 0) {
        transformed = str.split('').reverse().join('');
    } else if (n % 5 === 0) {
        transformed = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        transformed = str;
    }

    return transformed
}

//test bench
console.log(transformString("Hello World"));
console.log(transformString("Abc"));
console.log(transformString("CSignalode"));
console.log(transformString("JavaScript"));
console.log(transformString("Python"));

