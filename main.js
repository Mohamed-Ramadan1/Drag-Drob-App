let addBtn = document.querySelector(".add-btn"),
    textInput = document.querySelector("#inp"),
    boxs = document.querySelectorAll(".box"),
    boxNumber=document.querySelector("#inp2");

let drag = null;

addBtn.onclick = () => {
    if (textInput.value !== "") {
        let text = textInput.value;
        boxs[boxNumber.value-1].innerHTML += `<p class="item" draggable="true">${text}</p>`;
        textInput.value = "";
        boxNumber.value = "";
    }

    dragItem();
};


function dragItem() {
    let items = document.querySelectorAll(".item");
    
    items.forEach((item) => {
        item.addEventListener("dragstart", () => {
            drag = item;
            item.style.opacity = ".5";
        });


        item.addEventListener("dragend", () => {
            drag = null;
            item.style.opacity = "1";

        });

        boxs.forEach(box => {
            box.addEventListener("dragover", function (e) {
                e.preventDefault();
                this.style.background = "#090"
                this.style.color = "#fff"
            });
            box.addEventListener("dragleave", function () {
                this.style.background = "#fff"
                this.style.color = "#000"
            });

            box.addEventListener("drop", function () {
                this.append(drag);
                this.style.background = "#fff"
                this.style.color = "#000"
            });
        });
    });
}

//refresht the page on click
document.querySelector("#refresh").onclick = function () {
    location.reload();
}