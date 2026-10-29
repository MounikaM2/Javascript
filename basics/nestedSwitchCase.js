let env = "qa";
let role = "buyer";
switch (env.toLowerCase().trim()) {
    case "dev":
        console.log("testing in dev environment");
        break;
    case "qa":
        console.log("testing in qa environment");
        switch(role.toLowerCase().trim()) {
            case "buyer":
                console.log("logged in with buyer role");
                break;
                case "seller":
                    console.log("logged in with seller role");
                    break;
                    case "distributor":
                        console.log("loggedin with distributor role");
                        break;
                        default:
                            console.log("there is no such role defined to login");
                            break;

        }
        break;
    case "staging":
        console.log("testing in staging environment");
        break;
    case "uat":
        console.log("testing in uat environment");
        break;
    case "prod":
        console.log("tetsing in prod environment");
        break;
        default:
            console.log("this environment is supported");
            break;

}