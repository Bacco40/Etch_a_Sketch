function start(numberOfSquare){
    size= (420-(numberOfSquare*2))/numberOfSquare;
    for(let n=0;n<numberOfSquare;n++){
        for(let i=0;i<numberOfSquare;i++){
            let id=n+"-"+i;
            table[id]= document.createElement('div');
            table[id].style.width = size + "px";
            table[id].style.height = size + "px";
            table[id].style.border='1px solid rgb(206, 146, 56)';
            table[id].className +="divs";
            container.appendChild(table[id]);
        }
    }
    size1=size+2;
    let divs=document.querySelectorAll('.divs');
    return(divs);
}

let size=0;
let size1=0;
const table=[];
const container=document.querySelector('.container');
let divs=start(16);

function hover(divs){
divs.forEach((divs)=>{
    divs.addEventListener('mouseover',()=>{
        divs.style.width = size1 + "px";
        divs.style.height = size1 + "px";
        divs.style.border="";
        divs.style.backgroundColor = "black";
    })
});
}

hover(divs);
const clear=document.querySelector('#clear');

clear.addEventListener('click',()=>{ 
        let newSize = prompt ("insert the new grid size",16);
        divs.forEach((divs)=>{
            divs.remove();
        })
        divs=start(newSize);
        hover(divs);
});