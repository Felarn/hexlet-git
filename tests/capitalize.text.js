import capitalize from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
    throw new Error('capitalize работает неверно: "hello" !== "Hello"');
}

if (capitalize('') !== '') {
    throw new Error('capitalize работает неверно: "" !== "" ');
}

console.log('тесты успешны');
