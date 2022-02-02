// let main = document.querySelector(".main");
// let ul = main.children[1];
// console.log(ul);


// let li = document.getElementById("list")
// let ul = li.parentNode
// console.log(ul);

let input = document.getElementById("num-input")
let list = document.getElementById("list")
let icon = document.createElement("i")
icon.className = "far fa-times-circle icon"


input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        list.innerHTML = ""
        for (let i = 1; i <= this.value; i++) {
            let icon = document.createElement("i")
            icon.className = "far fa-times-circle icon"
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerText = i
            li.append(icon)
            list.append(li);

            icon.onclick = function () {
                li.remove();
            }
        }
        input.value = "";
    }

})

