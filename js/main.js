var currentStyle = "#my-grid";
document.getElementById("reset-btn").addEventListener('click', () => {
    tiles = document.querySelectorAll('.elem > img');
    for(var i = 0; i < tiles.length; i++){
        tiles[i].src = 'img/blank.png';
        //tiles[i].style.outline = 'solid 1px #000000';        
    }
    tiles = document.querySelectorAll('.hexLink > img');
    for(var i = 0; i < tiles.length; i++){
        tiles[i].src = 'img/blank.png';
        //tiles[i].style.outline = 'solid 1px #000000';        
    }
});
document.getElementById('save-btn').addEventListener('click', saveImage);
tiles = document.querySelectorAll('.elem > img');
for(var i = 0; i < tiles.length; i++){
    tiles[i].addEventListener("click", reset);
    tiles[i].addEventListener("dragstart", dragStart2);
    tiles[i].addEventListener("dragend", reset);
    tiles[i].addEventListener("drop", drop);
    tiles[i].addEventListener("dragover", allowDrop);
    
}
hexs = document.querySelectorAll('.hexLink > img');
for(var i = 0; i < hexs.length; i++){
    hexs[i].addEventListener("click", reset);
    hexs[i].addEventListener("dragstart", dragStart2);
    hexs[i].addEventListener("dragend", reset);
    hexs[i].addEventListener("drop", drop);
    hexs[i].addEventListener("dragover", allowDrop);
    
}
tuiles = document.querySelectorAll('.tuile > img');
for(var i = 0; i < tuiles.length; i++){
    tuiles[i].addEventListener("dragstart", dragStart);    
}
function saveImage(){
    var hexIns =  document.querySelectorAll('.hexIn');
    for(var i = 0; i < hexIns.length; i++){
        hexIns[i].style.visibility = 'visible';    
    }
    var hexs =  document.querySelectorAll('.hex');
    for(var i = 0; i < hexs.length; i++){
        hexs[i].style.visibility = 'visible';    
    }
    html2canvas(
        document.querySelector(currentStyle),
        {
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight
        }
        ).then(canvas => {
        image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = "my-image.png";
        link.href = image;
        link.click();
        for(var i = 0; i < hexIns.length; i++){
            hexIns[i].style.visibility = 'hidden';    
        }
        for(var i = 0; i < hexs.length; i++){
            hexs[i].style.visibility = 'hidden';    
        }
    });
}
function dragStart(event) {
    event.dataTransfer.setData("img", event.target.src);
}

function dragStart2(event) {
    var src = event.target.src
    if(src.includes('blank.png')){

    }else{
        event.dataTransfer.setData("img", event.target.src);
    }
}

function reset(event){
    event.target.src = 'img/blank.png';
    //event.target.style.outline = 'solid 1px #000000';
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("img");
    if(data){
        event.target.src = data;
        //event.target.style.outline = 'none';
    }
}

function allowDrop(event) {
    event.preventDefault();
}
function activate_square(){
    document.getElementById('square-btn').classList.add("active");
    document.getElementById('exagone-btn-c').classList.remove("active");
    document.getElementById('my-grid').style.display = "flex";
    document.getElementById('hexgrid-container').style.display = "none";
    currentStyle = "#my-grid";
}
function activate_exagone(){
    document.getElementById('square-btn').classList.remove("active");
    document.getElementById('exagone-btn-c').classList.add("active");
    document.getElementById('hexgrid-container').style.display = "block";
    document.getElementById('my-grid').style.display = "none";
    currentStyle = "#hexgrid-container";
    //currentStyle = "#hexGrid";
}