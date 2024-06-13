
const keys = document.querySelectorAll("button");
const screen = document.getElementById("screen").firstElementChild;

keys.forEach(key => {
    key.addEventListener("click", () => {
        try {
            if (key.id === "delete")
                screen.value = screen.value.slice(0, -1);
            else if (key.id === "clear")
                screen.value = "";
            else if (key.id === "total") {
                screen.value = eval(screen.value);
            }
            else
                AppendEquation(key.value);
        } catch (error) {
            screen.value = "Error";
        }
    })
});


function AppendEquation(expression) {
    screen.value += expression;
}

let value = "prabin";
let newValue = value.slice(0, -1);
console.log(newValue);
