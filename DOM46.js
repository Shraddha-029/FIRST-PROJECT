let arr=[{
    image:'https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'SHRADDHA ',
    age:20,
    profession:"INTERIOR DESIGNER",
    followers:'600+',
},{
    image:'https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'DON',
    age:69,
    profession:"ELECTRICIAN",
    followers:'800+',
},{
    image:'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'MEENAKSHI',
    age:50,
    profession:"FASHION DESIGNER",
    followers:'600+',
},{
    image:'https://images.unsplash.com/photo-1553457055-88e354f1257c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'AKSHAT',
    age:55,
    profession:"PAPU PLUMBER",
    followers:'400+',
},{
    image:'https://images.unsplash.com/photo-1542105907-bbbb542a5f79?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'AMIT',
    age:80,
    profession:"STOCKBROKER",
    followers:'400+',
},{
    image:'https://plus.unsplash.com/premium_photo-1687989650423-49cf039fe80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username:'ABHISHEK',
    age:65,
    profession:"SOFTWARE ENGINEER",
    followers:'400+',
}]


let  color=['linear-gradient(to bottom,#faa4b1,#f9d5e5)','linear-gradient(to bottom,#2d2c2c,#e0e2e4)','linear-gradient(to bottom,#f7786b,#f5f5dc)',
    'linear-gradient(to bottom,#034f84,#daebe8)', 'linear-gradient(to bottom,#80ced6,#cfe0e8)',
    'linear-gradient(to bottom,#e0846a,#f9d5e5)'
 ]

 var main= document.querySelector('#main')

 function hero(){
    let sum='';
arr.forEach(function(elem,index){
    let gradient= color[index % color.length];
    sum=sum+`<div class="card"
        style="background-image:${gradient};padding:10px;margin:10px;boarder-radius:10px ;
        box-shadow:0 4px 8px rgba(0,0,0,0.5); ">
        
        <img src=${elem.image} alt="style="width:80px;hight:80px;boarder-radius:50%;margin-top:20px">
        <div class="badge1">FOLLOWERS:${elem.followers}</div>
        
        <h1>${elem.username}</h1>
        <h2>AGE:${elem.age} </h2>
        <h3> ${elem.profession}</h3>
         <button id=${index}>FOLLOW</button>
        
    </div>`
})


main.innerHTML=sum
 }
 hero()
main.addEventListener('click',function(dets){
    
    var btn = dets.target;
    var card=btn.closest('.card');
    //find the parent card div 
    if (btn.tagName === 'BUTTON') {
        if (btn.innerText === "FOLLOW") {
            btn.innerText = "FOLLOWING";
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
            //add glow
            card.style.boxShadow="0 0 15px 5px #38f5b6 ";

        } else {
            btn.innerText = "FOLLOW";
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
            //remove glow
            card.style.boxShadow="0 2px 6px rgba(0,0,0,0.5) ";

        }
    }
});
