const newform=document.querySelector('.form');
const newBtn=document.querySelector('.btn');
const newParagraph=document.querySelector('.demo');
const newinput=document.querySelector('.number');
const limit=document.querySelector('.demo1');
let d=0;
let m=0;

    newform.addEventListener('submit', (evt)=> {
        evt.preventDefault();
        d++;
        const number=Number(newinput.value);
        if(d<=10) { 
            if(d==1) {
                let x=(Math.random()*100).toFixed(0);
                console.log(x);
                m=x;
            }
         if(number<m && d<10) newParagraph.textContent= ' Siz kiritgan sondan katta';
         else if(number>m && d<10) newParagraph.textContent=' Siz kiritgan sondan kichkina';
         else if(number==m) { 
            newParagraph.textContent=' Topdingiz';
            d=11;
        }
         else { newParagraph.textContent=' yutqazdingiz';
    }
        }
        if(d<10) {
            limit.textContent='limit'+' '+d;
        }
        else {
           limit.textContent='limit tugadi';
        }
        newinput.value=null;
    })
  

 
