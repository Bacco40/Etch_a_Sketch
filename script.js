function start(numberOfSquare){
    size= 420/numberOfSquare;
    for(let n=0;n<numberOfSquare;n++){
        for(let i=0;i<numberOfSquare;i++){
            let id=n+"-"+i;
            table[id]= document.createElement('div');
            table[id].style.width = size + "px";
            table[id].style.height = size + "px";
            table[id].className +="divs";
            container.appendChild(table[id]);
        }
    }
    let divs=document.querySelectorAll('.divs');
    return(divs);
}

let size=0;
let size1=0;
let Select="0";
const table=[];
const colors=["orange","blue","yellow","red","green","darkviolet","coral","pink","brown","lime"];
const container=document.querySelector('.container');
let divs=start(16);

function hover(divs){
    Select="0";
    divs.forEach((divs)=>{
        divs.addEventListener('mouseover',()=>{
            divs.style.width = size + "px";
            divs.style.height = size + "px";
            divs.style.backgroundColor = "black";
        })
    });
}

function multicolor(divs){
    divs.forEach((divs)=>{
        divs.addEventListener('mouseover',()=>{
            divs.style.width = size + "px";
            divs.style.height = size + "px";
            divs.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
        })
    })
}

hover(divs);
const clear=document.querySelector('#clear');
const black=document.querySelector('#black');
const rainbow=document.querySelector('#rainbow');

clear.addEventListener('click',()=>{ 
        let newSize = prompt ("insert the new grid size",16);
        if(isNaN(newSize) || newSize>100 || newSize < 1){
            alert("Please put a numeric value between 1 and 100 !")
        }
        else{
            divs.forEach((divs)=>{
                divs.remove();
            })
            divs=start(newSize);
            if(Select=="0"){
                hover(divs);
            }else{
                multicolor(divs);
            }
        }
});

black.addEventListener('click',()=>{ hover(divs)});

rainbow.addEventListener('click',()=>{
    Select="1";
    multicolor(divs);
});
