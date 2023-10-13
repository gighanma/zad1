// Поверяет число отрицательное или положительное
let n = 333
if(n<0)
{
    console.log("число отрицательное");
}
else console.log("число положительное");

//Длинна этой строки 
a = "sdh";
console.log(a.length, "Длинна строки", a);

//Последний символ строки
console.log(a[a.length -1]);

//Проверяет число четное оно или нет 
t = 6
if(t%2==0)
{
    console.log("Число четное");
}
else console.log("Число нечетное");

//Проверяет что первые буквы этих слов совпадвют
const q = "dkjfghdfjkgh"
const s ="dskfh"
if (q[0] == s[0])
{
    console.log("Первые буквы слов совпадают");
}
else console.log("Первые буквы слов не совпадают");

//Выводит сумму первой и последней цифры этого числа
sum = 333
sum1 = String(sum);
sum1 = sum1[0];
sum1 = Number(sum1);
console.log(sum1 + sum%10, "Сумма первой и последней цифры этого числа ")

//Выводит сумму цифр в этом числе 
n = 333;
let k = 0;
for (let i of String(n))
{
    k += Number(i);
}
console.log(k, "Сумма цифр в этом числе");





