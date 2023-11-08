function handleButton(id) {
    let buttonClick = document.getElementById(`button-${id}`);
    buttonClick.style.backgroundColor = "#fb7714";
    buttonClick.style.color = "white"

    for(let i=1; i<6; i++){
        if(i != id){
            let button = document.getElementById(`button-${i}`)
            button.style.backgroundColor = "#262f38";
            button.style.color = "#88909c"
        }
    }
}
