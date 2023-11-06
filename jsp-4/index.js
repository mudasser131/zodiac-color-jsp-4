const zodiac = document.getElementById("zodiac");

const changeBackground = () => {
    const body = document.body;
switch(zodiac.value){
case "Aries":
    body.style.backgroundColor = "#fc0303";
    break;
        case "Taurus":
          body.style.backgroundColor = "#008000";
                    break;
                case "Gemini":
                    body.style.backgroundColor = "#ffd700";
                    break;
                case "Cancer":
                    body.style.backgroundColor = "#7a80b2";
                    break;
                case "Leo":
                    body.style.backgroundColor = "#ffaa00";
                    break;
                case "Virgo":
                    body.style.backgroundColor = "#77dd77";
                    break;
                case "Libra":
                    body.style.backgroundColor = "#a394b0";
                    break;
                case "Scorpio":
                    body.style.backgroundColor = "#942192";
                    break;
                case "Sagittarius":
                    body.style.backgroundColor = "#ffa500";
                    break;
                case "Capricorn":
                    body.style.backgroundColor = "#a6a6a6";
                    break;
                case "Aquarius":
                    body.style.backgroundColor = "#00ffff";
                    break;
                case "Pisces":
                    body.style.backgroundColor = "#66cdaa";
                    break;
                default:
                    body.style.backgroundColor = "white";

}
};