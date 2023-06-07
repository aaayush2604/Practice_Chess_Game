//There is a main function at the bottom which calls all the required functions

const ChessBoard=document.getElementsByClassName('board');
const BoardSquares=document.querySelectorAll('.board div');
let movecount=0;
const currentplayerdisplay=document.querySelector('.player-name');
currentplayerdisplay.innerHTML="White";
let frompiece=null; 
let topiece=null;
let piececlass=null;
let topiece_idx;
let frompiece_idx;
let to_square;
let from_square; 
let a,b,c,d;

const a8=document.getElementById('a8');
a8.classList.add('brook');
const b8=document.getElementById('b8');
b8.classList.add('bknight');
const c8=document.getElementById('c8');
c8.classList.add('bbishop');
const d8=document.getElementById('d8');
d8.classList.add('bking');
const e8=document.getElementById('e8');
e8.classList.add('bqueen');
const f8=document.getElementById('f8');
f8.classList.add('bbishop');
const g8=document.getElementById('g8');
g8.classList.add('bknight');
const h8=document.getElementById('h8');
h8.classList.add('brook');
const a7=document.getElementById('a7');
a7.classList.add('bpawn');
const b7=document.getElementById('b7');
b7.classList.add('bpawn');
const c7=document.getElementById('c7');
c7.classList.add('bpawn');
const d7=document.getElementById('d7');
d7.classList.add('bpawn');
const e7=document.getElementById('e7');
e7.classList.add('bpawn');
const f7=document.getElementById('f7');
f7.classList.add('bpawn');
const g7=document.getElementById('g7');
g7.classList.add('bpawn');
const h7=document.getElementById('h7');
h7.classList.add('bpawn');
const a1=document.getElementById('a1');
a1.classList.add('wrook');
const b1=document.getElementById('b1');
b1.classList.add('wknight');
const c1=document.getElementById('c1');
c1.classList.add('wbishop');
const d1=document.getElementById('d1');
d1.classList.add('wqueen');
const e1=document.getElementById('e1');
e1.classList.add('wking');
const f1=document.getElementById('f1');
f1.classList.add('wbishop');
const g1=document.getElementById('g1');
g1.classList.add('wknight');
const h1=document.getElementById('h1');
h1.classList.add('wrook');
const a2=document.getElementById('a2');
a2.classList.add('wpawn');
const b2=document.getElementById('b2');
b2.classList.add('wpawn');
const c2=document.getElementById('c2');
c2.classList.add('wpawn');
const d2=document.getElementById('d2');
d2.classList.add('wpawn');
const e2=document.getElementById('e2');
e2.classList.add('wpawn');
const f2=document.getElementById('f2');
f2.classList.add('wpawn');
const g2=document.getElementById('g2');
g2.classList.add('wpawn');
const h2=document.getElementById('h2');
h2.classList.add('wpawn');

let bpieces=['bking','bqueen','bbishop','bknight','bpawn','brook'];
let wpieces=['wking','wqueen','wbishop','wknight','wpawn','wrook'];

for(let j=0;j<BoardSquares.length;j++){
    BoardSquares[j].setAttribute('idx',j+1);
}

// function checkmovedown(x){
//     console.log("call");
//     for(var i=0;i<BoardSquares.length;i++){
//         if(i+1==x){
//             var check_currpiece=BoardSquares[i].classList;
//             console.log(i);
//             if(check_currpiece.length!=0){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function checkmoveup(x){
//     console.log("call");
//     for(var i=63;i>=0;i--){
//         if(i+1==x){
//             var check_currpiece=BoardSquares[i].classList;
//             console.log(i);
//             if(check_currpiece.length!=0){
//                 return false;
//             }
//         }
//     }
// }

function killingmypiece(){
    var piecetype1,piecetype2;
    for(let i=0;i<6;i++){
        if(bpieces[i]==frompiece.classList[0]){
            piecetype1='black';
        }
        if(bpieces[i]==topiece.classList[0]){
            piecetype2='black';
        }
        if(wpieces[i]==frompiece.classList[0]){
            piecetype1='white';
        }
        if(wpieces[i]==topiece.classList[0]){
            piecetype2='white'
        }
    }
    if((piecetype1==piecetype2)){
        return true;
    }else{
        return false;
    }
}

function getverticalrange(c){
    var a=1;
    var b=8;
    while(b<=64){
        if(c>=a && c<=b){
            return [a,b];
        }
        a+=8;
        b+=8;
    }
} 

for(let i=0;i<BoardSquares.length;i++){
    BoardSquares[i].addEventListener('click',movepiece);
}

function checkpieceexists(){
    if(topiece.classList.length==2){
        topiece.classList.remove(topiece.classList[0]);
    }
}

function canpawnmove(){
    if(piececlass=="bpawn"){
        if(topiece_idx-frompiece_idx==8){
            return true;
        }else{
            return false;
        }
    }else if(piececlass=="wpawn"){
        if(frompiece_idx-topiece_idx==8){
            return true;
        }else{
            return false;
        }
    }
}

function canrookmove(){
    var ver_range=getverticalrange(frompiece_idx);
    if(piececlass=="brook"){
        if(frompiece_idx<topiece_idx){
            console.log("down")
            a=topiece_idx;
            b=frompiece_idx;
            while(b<64){
                b+=8;
                if(b==a){
                    return true;
                }
            }
        }else if(frompiece_idx>topiece_idx){
            console.log("up");
            a=topiece_idx;
            b=frompiece_idx;
            while(b>=0){
                b-=8;
                if(b==a){
                    return true;
                }
            }
        }
        if(topiece_idx>=ver_range[0] && topiece_idx<=ver_range[1]){
            return true;
        }
        return false;
    }else if(piececlass=="wrook"){
        if(frompiece_idx<topiece_idx){
            console.log("down")
            a=topiece_idx;
            b=frompiece_idx;
            while(b<=64){
                b+=8;
                if(b==a){
                    return true;
                }
            }
        }else if(frompiece_idx>topiece_idx){
            console.log("up");
            a=topiece_idx;
            b=frompiece_idx;
            while(b>=0){
                b-=8;
                if(b==a){
                    return true;
                }
            }
        }
        if(topiece_idx>=ver_range[0] && topiece_idx<=ver_range[1]){
            return true;
        }
        return false;
    }
}

function canbishopmove(){
    if(piececlass=="wbishop"){
        if(topiece_idx<frompiece_idx){
            console.log('up');
            a=topiece_idx;
            b=frompiece_idx;
            while(b>0){
                if(a==b){
                    return true;
                }
                b-=9;
            }
            c=topiece_idx;
            d=frompiece_idx;
            while(d>0){
                if(c==d){
                    return true;
                }
                d-=7;
            }
        }
        if(topiece_idx>frompiece_idx){
            console.log('down');
            a=topiece_idx;
            b=frompiece_idx;
            while(b<=64){
                if(a==b){
                    return true;
                }
                b+=9;
            }
            c=topiece_idx;
            d=frompiece_idx;
            while(d<=64){
                if(c==d){
                    return true;
                }
                d+=7;
            }
        }
    }
    if(piececlass=="bbishop"){
        if(topiece_idx<frompiece_idx){
            console.log('up');
            a=topiece_idx;
            b=frompiece_idx;
            while(b>0){
                if(a==b){
                    return true;
                }
                b-=9;
            }
            c=topiece_idx;
            d=frompiece_idx;
            while(d>0){
                if(c==d){
                    return true;
                }
                d-=7;
            }
        }
        if(topiece_idx>frompiece_idx){
            console.log('down');
            a=topiece_idx;
            b=frompiece_idx;
            while(b<=64){
                if(a==b){
                    return true;
                }
                b+=9;
            }
            c=topiece_idx;
            d=frompiece_idx;
            while(d<=64){
                if(c==d){
                    return true;
                }
                d+=7;
            }
        }
    }
}

function canknightmove(){
    a=topiece_idx;
    b=frompiece_idx;
    if(((b+15)==a)||((b+17)==a)||((b-15)==a)||((b-17)==a)||((b+10)==a)||((b+6)==a)||((b-10)==a)||((b-6)==a)){
        return true;
    }
}

function cankingmove(){
    a=topiece_idx;
    b=frompiece_idx;
    if((b+1)==a || (b-1)==a || (b-8)==a || (b+8)==a || (b-7)==a || (b-9)==a || (b+7)==a || (b+9)==a){
        return true;
    }
}

function canqueenmove(){
    a=topiece_idx;
    b=frompiece_idx;
    var ver_range=getverticalrange(frompiece_idx);
    if((b+1)==a || (b-1)==a || (b-8)==a || (b+8)==a || (b-7)==a || (b-9)==a || (b+7)==a || (b+9)==a){
        return true;
    }
    if(topiece_idx<frompiece_idx){
        console.log('up');
        a=topiece_idx;
        b=frompiece_idx;
        while(b>0){
            if(a==b){
                return true;
            }
            b-=9;
        }
        c=topiece_idx;
        d=frompiece_idx;
        while(d>0){
            if(c==d){
                return true;
            }
            d-=7;
        }
    }
    if(topiece_idx>frompiece_idx){
        console.log('down');
        a=topiece_idx;
        b=frompiece_idx;
        while(b<=64){
            if(a==b){
                return true;
            }
            b+=9;
        }
        c=topiece_idx;
        d=frompiece_idx;
        while(d<=64){
            if(c==d){
                return true;
            }
            d+=7;
        }
    }
    if(frompiece_idx<topiece_idx){
        console.log("down")
        a=topiece_idx;
        b=frompiece_idx;
        while(b<64){
            if(b==a){
                return true;
            }
            b+=8;
        }
    }else if(frompiece_idx>topiece_idx){
        console.log("up");
        a=topiece_idx;
        b=frompiece_idx;
        while(b>=0){
            if(b==a){
                return true;
            }
            b-=8;
        }
    }
    if(topiece_idx>=ver_range[0] && topiece_idx<=ver_range[1]){
        return true;
    }
}


function canmove(piececlass){
    if(killingmypiece()){
        return false;
    }
    if(piececlass=="bpawn" || piececlass=="wpawn"){
        return canpawnmove()
    }
    if(piececlass=="brook" || piececlass=="wrook"){
        return canrookmove();
    }
    if(piececlass=="bknight" || piececlass=="wknight"){
        return canknightmove();
    }
    if(piececlass=="bbishop" || piececlass=="wbishop"){
        return canbishopmove();
    }
    if(piececlass=="bking" || piececlass=="wking"){
        return cankingmove();
    }
    if(piececlass=="bqueen" || piececlass=="wqueen"){
        return canqueenmove();
    }
}

function movepiece(e){ 
    movecount++;
    if(movecount===1){
        frompiece=document.getElementById(e.target.id);
        frompiece.classList.add('current');
        piececlass=e.target.classList[0];
        // console.log(piececlass);
    }
    if(movecount===2){
        topiece=document.getElementById(e.target.id);
        frompiece.classList.remove('current');
    }
    if(movecount===2){
        movecount=0;
        topiece_idx=parseInt(topiece.getAttribute('idx'));
        frompiece_idx=parseInt(frompiece.getAttribute('idx'));
        if(canmove(piececlass)){
            frompiece.classList.remove(piececlass);
            topiece.classList.add(piececlass);
        }
        checkpieceexists();
        // console.log(topiece.classList);
        if(currentplayerdisplay.innerHTML==="White"){
            currentplayerdisplay.innerHTML="Black";
        }else{
            currentplayerdisplay.innerHTML="White";
        }
    }
}


