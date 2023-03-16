const dropList = document.querySelectorAll(".dropdown ul"),
fromCurrency = document.querySelector(".from ul"),
toCurrency = document.querySelector(".to ul"),
getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "BRL" ? "selected" : "";
        let liTag = `<li value="${currency_code}" ${selected}>${currency_code}</li>`;
        dropList[i].insertAdjacentHTML("beforeend", liTag);
    }
    
}

