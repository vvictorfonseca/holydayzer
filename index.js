import express from "express"

const app = express()

app.listen(4500, () => {
    console.log("Aplicação viva")
})

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" },
];

app.get("/holidays", (request, response) => {
    response.send(holidays);
})

app.get("/is-today-holiday", (request, response) => {
    const date = new Date()
    const today = date.toLocaleDateString("en-US");

    const todayHoliday = holidays.filter((holiday) => {
        return holiday.date === today;
    });

    if (todayHoliday.length === 0) {
        response.send(`Hoje não é feriado`)
    } else {
        response.send(`Hoje é feriado de ${todayHoliday[0].name}`)
    }
});