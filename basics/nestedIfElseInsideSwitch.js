let month= "january";
let year=2025;
switch(month.toLowerCase().trim()) {
    case "january":
        console.log("This month January has 31 days");
        if(year%2==0){
            console.log("This is a even year");
        } else {
            console.log("This is a odd year");
        }
        break;
        case "february":
            console.log("this month february has 28 days");
            break;
            case "march":
            break;
            case "april":
                break;
                default:
                    console.log("This month is not supported");
}