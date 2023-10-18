//Первое задание в зависимости от порядкового номера дня недели выводит на экран его название
let num = 1
switch (num){
    case 1:
    console.log("Понидельник");
    break;
    case 2:
    console.log("Вторник");
    break;
    case 3:
    console.log("Среда");
    break;
    case 4:
    console.log("Четверг");
    break;
    case 5:
    console.log("Пятница");
    break;
    case 6:
    console.log("Суббота");
    break;
    case 7:
    console.log("Воскресенье");
    break;
    default:
        console.log("");
        break;
}

//Второе задание по заданому номеру масти определяет название соответствующей масти 
n = 3;
switch (n)
{
    case 1:
        console.log("пики");
        break;
        case 2:
        console.log("трефа");
        break;
        case 3:
        console.log("бубен");
        break;
        case 4:
        console.log("черви");
        break;
        default:
            console.log("");
            break;  
}

//Третье задание определяет полное название соответствующей карты 
n = 3;
num = 9;
let NText = "";
let NumText = "";
switch (n)
{
    case 1:
        NText = "бубен";
        break;
    case 2:
        NText = "трефа";
        break;
    case 3:
        NText = "пики";
        break;
    case 4:
        NText = "черви";
        break;
    default:
        console.log("");
        break;      
}
switch (num)
{
    case 6:
        NumText = "шестерка";
        break;
    case 7:
        NumText = "семерка";
        break;
    case 8:
        NumText = "восьмерка";
        break;
    case 9:
        NumText = "девятка";
        break;
    case 10:
        NumText = "десятка";
        break;
    case 11:
        NumText = "валет";
        break;
    case 12:
        NumText = "дама";
        break;
    case 13:
        NumText = "король";
        break;
    case 14:
        NumText = "туз";
        break;
    default:
        console.log("");
        break;
}

console.log(n,num,"-",NumText,NText);