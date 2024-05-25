// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;

    default:
        console.log("default case match");
        break;
}


//if there is no break statement then it will print all the cases after that match except ( if there is not break ) default
// break stops the control flow 