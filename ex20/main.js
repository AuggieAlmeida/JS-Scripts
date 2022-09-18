var data = new Date()

var day = data.getDay()
var mon = actualMonth(data.getMonth())
var year = parseInt(data.getFullYear())

function todayDate(date) {
    document.getElementById(date).innerHTML = "Hoje é: " + day + " de " + mon + " de " + year
}

function actualMonth(index) {
    let month = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    return month[index]
}

