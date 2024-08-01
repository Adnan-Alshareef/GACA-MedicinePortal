function handleClick(props) {
    if (props === "all") {
        let section = document.getElementById(`data_wrapper`).children;
        let btns = document.getElementById(`radio_btn_wrapper`).children;
        const alert = document.getElementsByClassName("noresults");
        var array = Array.prototype.slice.call(section);
        var arrayBtns = Array.prototype.slice.call(btns);
        let btn = document.getElementById('all');
        array.forEach((element) => {
            element.classList.remove('d-none')
            arrayBtns.forEach((element) => {
                element.classList.remove("opp-btn-active");
            });
            btn.classList.add('opp-btn-active')
        });
    } else {
        let section = document.getElementById(`data_wrapper`).children;
        let btns = document.getElementById(`radio_btn_wrapper`).children;
        var array = Array.prototype.slice.call(section);
        var arrayBtns = Array.prototype.slice.call(btns);
        let btn = document.getElementById(props);
        array.forEach((element) => {
            str = element.id.replace("_wrapper", "");
            if (str != props) {
                console.log(str)
                element.classList.add("d-none");
                arrayBtns.forEach((element) => {
                    element.classList.remove("opp-btn-active");
                });
                btn.classList.add("opp-btn-active");
            } else {
                element.classList.remove("d-none");
            }
        });
    }
}

$("#input_search").bind("keyup", function() {
    var input = $(this).val();
    const cards = document.getElementsByClassName("data-card");
    const alert = document.getElementsByClassName("noresults");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");

        if (title.innerText.toUpperCase().includes(input.toUpperCase())) {
            if ((title.innerText.toUpperCase().includes($("#airport").val().toUpperCase())) || $("#airport").val() == "All") {
                cards[i].classList.remove("d-none")
            }
        } else {
            cards[i].classList.add("d-none")
        }
    }

      var wrapper = document.getElementsByClassName("category_wrapper");
    for (let index = 0; index < wrapper.length; index++) {
        let cards  = wrapper[index].querySelectorAll('.data-card')
        let hiddenCards = wrapper[index].querySelectorAll('.data-card.d-none')
        if(cards.length == hiddenCards.length){
            wrapper[index].querySelector('.noresults').classList.remove("d-none")
        }else{
            wrapper[index].querySelector('.noresults').classList.add("d-none")
        }
    }
});

$("#airport").bind("change", function() {
    var input = $(this).val();
    const cards = document.getElementsByClassName("data-card");
    const alert = document.getElementsByClassName("noresults");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");

        if (title.innerText.toUpperCase().includes(input.toUpperCase()) || input == "All") {
            if ((title.innerText.toUpperCase().includes($("#input_search").val().toUpperCase())) || $("#input_search").val() == '') {
                cards[i].classList.remove("d-none")
            }
        } else {
            cards[i].classList.add("d-none")
        }
    }
    

    var wrapper = document.getElementsByClassName("category_wrapper");
    for (let index = 0; index < wrapper.length; index++) {
        let cards  = wrapper[index].querySelectorAll('.data-card')
        let hiddenCards = wrapper[index].querySelectorAll('.data-card.d-none')
        if(cards.length == hiddenCards.length){
            wrapper[index].querySelector('.noresults').classList.remove("d-none")
        }else{
            wrapper[index].querySelector('.noresults').classList.add("d-none")
        }
        console.log(cards)
    }
  
});
