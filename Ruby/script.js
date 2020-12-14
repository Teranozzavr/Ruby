// 1. Написать простой шифр моноподстановки:
// Взять все четные биты строки и сконкатенировать их со всеми нечётными n раз. В
// результате вернуть строку.
// Пример:
// ("Abcdefghij", 1) -> "bdfhjacegi"
// ("Abcdefghij", 2) -> "bdfhjacegi" -> "dhaeibfjcg"
// Написать два метода/функции:
// - encrypt(text, n)
// - decrypt(encrypted_text, n)
// Для обоих методов:
// Если входящая строка пустая или NULL, вернуть значение входящей строки
// Если n <= 0, вернуть исходное значение входной строки

function encrypt(text, n) {
    if (!text || n <= 0) {
        return text;
    }
    const even = text.split('').filter((item, i) => i % 2 === 0).join('');
    const odd = text.split('').filter((item, i) => i % 2 !== 0).join('');
    const res = (odd + even).toLowerCase();
    return (n - 1) ? encrypt(res, n - 1) : res;
}

function decrypt(text, n) {
    if (!text || n <= 0) {
        return text;
    }
    const even = text.slice(0, text.length / 2).split('');
    const odd = text.slice(text.length / 2).split('');
    const res = odd.map((item, i) => item + even[i]).join('');
    return (n - 1) ? decrypt(res, n - 1) : res;
}
console.log("[encrypt] Abcdefghij => bdfhjacegi", encrypt('Abcdefghij', 1) === 'bdfhjacegi');
console.log("[encrypt] Abcdefghij => bdfhjacegi => dhaeibfjcg", encrypt('Abcdefghij', 2) === 'dhaeibfjcg');
console.log("[decrypt] bdfhjacegi => abcdefghij", decrypt('bdfhjacegi', 1) === 'abcdefghij');
console.log("[decrypt] dhaeibfjcg => bdfhjacegi => abcdefghij", decrypt('dhaeibfjcg', 2) === 'abcdefghij');

// 2. Написать метод/функцию, которая принимает на вход текст (учитывать
//     пунктуацию и специальные символы), и возвращает массив из 3х наиболее часто
//     встречаемых слов в тексте в порядке убывания.
//     - Словом является строка букв (A to Z), опционально содержащая один или более
//     апострофов (')
//     - Совпадения не должны быть чувствительны к регистру и слова в возвращаемом
//     массиве необходимо привести к нижнему регистру
//     - Если текст содержит меньше трёх уникальных слов, вернуть пустой массив.

function encrypt(text1) {

    let text = text1;

    let temp1 = "";
    let x = true;
    let re = /  /gi;
    let re1 = /!/gi;
    let re2 = /,/gi;
    let re3 = /"/gi;
    let re4 = /'/gi;
    let re5 = /{/gi;
    let re6 = /}/gi;
    let re7 = /=/gi;
    let re8 = /]/gi;
    let re9 = /%/gi;

    for (let a = 0; a < text.length; a++) {

        if (text.charAt(a) == ".") {
            x = true;
        }
        if (text.charAt(a) == ",") {
            x = true;
        }
        if (text.charAt(a) == " ") {
            x = true;
        }
        if (text.charAt(a) == "?") {
            x = true;
        }

        while (x) {
            x = false;
            temp1 = text.replace('.', ' ');
            text = temp1;
            temp1 = text.replace(',', ' ');
            text = temp1;
            temp1 = text.replace('?', ' ');
            text = temp1;
            temp1 = text.replace(re, ' ');
            text = temp1;
            temp1 = text.replace(re1, ' ');
            text = temp1;
            temp1 = text.replace(re2, ' ');
            text = temp1;
            temp1 = text.replace(re3, ' ');
            text = temp1;
            temp1 = text.replace(re4, ' ');
            text = temp1;
            temp1 = text.replace(re5, ' ');
            text = temp1;
        }


    }

    let text2 = text.toLowerCase();

    let txt1 = text2.split(' ');
    let txt2 = text2.split(' ');


    let z = 0;
    let max = [];

    for (let i = 0; i < txt1.length; i++) {

        for (let j = 0; j < txt2.length; j++) {

            if (txt1[i] == txt2[j]) {
                z++;
            }
        }
        max.push(z);
        z = 0;
    }

    let y = 0;
    let y2 = 0;
    let y3 = 0;
    let q = 0;

    for (let a = 0; a < max.length; a++) {
        if (max[a] > y) {
            y = a;
        }
    }

    q = max[y];

    for (let a = 0; a < max.length; a++) {
        if (max[a] == q) {
            max[a] = 0;
        }
    }

    for (let a = 0; a < max.length; a++) {
        if (max[a] > y2) {
            y2 = a;
        }

    }

    q = max[y2];

    for (let a = 0; a < max.length; a++) {
        if (max[a] == q) {
            max[a] = 0;
        }
    }

    for (let a = 0; a < max.length; a++) {
        if (max[a] > y3) {
            y3 = a;
        }

    }

    let m = [];

    m.push(txt1[y]);
    m.push(txt1[y2]);
    m.push(txt1[y3]);

    return m;

}

console.log(encrypt("aa aaa aaa a aaa aa"));