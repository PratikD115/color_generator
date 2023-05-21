
function randomColorGen() {
    const letter = '0123456789abcdef';
    let colorcode = "#";

    for (let i = 0; i < 6; i++) {
        let digit = Math.floor(Math.random() * 16);
        colorcode += letter[digit];
    }
    console.log(colorcode);
    document.getElementById("main").style.backgroundColor = colorcode;
    document.getElementById("colorcode").innerHTML = colorcode;
    navigator.clipboard.writeText(colorcode)
}



document.getElementById('btn').addEventListener("click", randomColorGen);

randomColorGen();