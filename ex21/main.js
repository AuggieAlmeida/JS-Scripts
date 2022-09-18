function fahrToCels(fahrenheit, result) {
    f = document.getElementById(fahrenheit).value
    let c = parseFloat((f - 32) / 1.8)
    document.getElementById(result).innerHTML = c + "°C"
}

function verify(fahrenheit) {
    if (confirm("Confira o valor inserido")) {
        if (isNaN(fahrenheit.value)) {
            alert("Por favor, insira um número!")
            fahrenheit.focus()
            return false
        } else {
            return true
        }
    }
    return false
}