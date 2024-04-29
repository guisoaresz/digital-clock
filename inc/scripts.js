const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const cdate = document.getElementById('date');

const relogio = setInterval(function time(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const dayNames = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];

    let vDate = date.getUTCDate() + "/" + month[date.getUTCMonth()] + "/" + date.getFullYear() + ", " + dayNames[date.getDay() - 1];

    if(hrs <= 9) hrs = '0' + hrs;
    if(min <= 9) min = '0' + min;
    if(sec <= 9) sec = '0' + sec;

    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = sec;
    cdate.textContent = vDate;
})