// document.querySelectorAll(".animal")[2].innerHTML="dog";
// const anumals = document.getElementById("animals");

// amimals.innerHTML += "<li class = 'animal'>Cat</li>";

// document.querySelectorAll(".box")[0].classList.add("purple");

// document.querySelectorAll(".box")[0].classList.remove("purple");

// document.querySelectorAll(".box")[0].classList.toggle("yellow");
// document.querySelectorAll(".box")[0].classList.toggle("yellow");

// var num = 0;

// document.getElementById("plus").addEventListener("click", function() {
//     num++;
//     document.getElementById("num").innerHTML = num;
// })
// document.getElementById("minus").addEventListener("click", function() {
//     num--;
//     document.getElementById("num").innerHTML = num;
// })

// document.querySelector(".bar").addEventListener("click", function() {
//     document.querySelector(".bar").innerHTML = "눌렀어!"
//     document.querySelector(".newBar").classList.toggle("show");
// })

// document.querySelectorAll('.list')[0].addEventListener("click")

// document.querySelector('.tab-button')[0].addEventListner("click", function() {
//     document.querySelectorAll('.tab-button')[0].classList.remove("here");
//     document.querySelectorAll('.tab-button')[1].classList.remove("here");
//     document.querySelectorAll('.tab-button')[2].classList.remove("here");
//     document.querySelectorAll('.tab-content')[0].classList.remove("show");
//     document.querySelectorAll('.tab-content')[1].classList.remove("show");
//     document.querySelectorAll('.tab-content')[2].classList.remove("show");
//     document.querySelectorAll('.tab-button')[0].classList.add("here");
//     document.querySelectorAll('.tab-content')[0].classList.add("show");
// })

document.querySelectorAll('.list')[0].addEventListener("click", function(e) {
    tabBtn(e.target.dataset.id);
});

function tabBtn(a) {
    document
        .querySelctorAll('.tab-button')[a].addEventListener("click", function() {
            for (
                let i = 0; i < document.querySelctorAll(".tab-button").length; i++
            ) {
                document.querySelectorAll(".tab-button")[i].classList.remove("here");
                document.querySelectorAll(".tab-button")[i].classList.remove("show");
            }

            document.querySelectorAll(".tab-button")[a].classList.add("here");
            document.querySelctorAll(".tab-content")[a].classList.add("show");
        });
}