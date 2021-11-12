
export const imgUrl = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
export const apiKey = "774ee5b2a6f6c9d6a15b180ab19a93d4";
export const params = {
    api_key:apiKey,
    language:'en-US',
}

export const convertToHour = (minutes) => {
    const hour = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return <span> {hour < 10 ? `0${hour}` : hour} : {mins < 10 ? `0${mins}` : mins} hour(s) </span>
}

export function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}