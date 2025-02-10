let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let result = document.querySelector("h2")
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const checkwinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showresult(pos1);
                disableBoxes();
            }
        }
    }
}
const showresult = (pos1) => {
    // console.log(`winner is ${pos1}`);
    boxes.forEach((box) => {
        box.style.visibility = "hidden";
    })
    result.style.display = "block";
    result.innerText = `winner is ${pos1}`

}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.style.visibility = "visible";
        box.innerText = ""
    }
    result.style.display = "none";
    result.innerText = ``
};
const resetgame = () => {
    enableBoxes();
    turn0 = true
}
resetbtn.addEventListener("click", resetgame);