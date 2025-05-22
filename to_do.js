let btn=document.querySelector(".btn");
let list=document.querySelector(".unorder");
let del=document.querySelector(".order");
let input=document.querySelector("input");


btn.addEventListener("click",()=>{
    if(input.value==''){
        alert("please enter some task");
    }
    else{
        // alert(input.value);
        let a=document.createElement("li");
        // a.innerText=input.value;
        // list.appendChild(a);

        let prithvi=input.value;

        a.innerHTML= '&nbsp; <input type="checkbox">'+'&nbsp;&nbsp;' +prithvi +' &nbsp; &nbsp; <button class="delbtn">delete</button>';
        list.appendChild(a);
       

        //let delbtn=a.querySelector(".delbtn");
        


        let delbtns=document.querySelectorAll(".delbtn");
        console.log(delbtns);

        //Or 
        //let delbtn1=a.querySelector(".delbtn");
        
       

        delbtns.forEach((delbtn) => {
            delbtn.addEventListener('click',()=>{
                console.log(delbtn);
                list.removeChild(delbtn.parentNode);

            })

            
        });
        
        // delbtn[0].addEventListener('click',()=>{
        //     alert("removing the task");
        //     //a.remove();
        //    // list.removeChild(delbtn.parentNode);// this only selects the first child.
        //     //to remove every child we will have to apply a loop.
        //     // for(let i=0;i<a.length;i++){
        //     //     alert("removing the task");
        //     //     console.log(a[i]);
        //     //     a[i].parentElement.removeChild(delbtn.parentNode);

        //     // }
        //     // let whole=document.querySelector(".whole");
        //     // a.removeChild(whole);
        // })  
    }

    
})