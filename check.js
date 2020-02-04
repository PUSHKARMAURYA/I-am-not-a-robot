

whole();
function whole(){


var a1=document.querySelector(".a1 img");
var a2=document.querySelector(".a2 img");
var a3=document.querySelector(".a3 img");
var a4=document.querySelector(".a4 img");
var a5=document.querySelector(".a5 img");
var a6=document.querySelector(".a6 img");
var a7=document.querySelector(".a7 img");
var a8=document.querySelector(".a8 img");
var a9=document.querySelector(".a9 img");
var p=document.querySelector("p");
var btu=document.querySelector("#disp");
var right="https://cdn.pixabay.com/photo/2014/04/02/10/40/check-304167__340.png";
var wrong="https://cdn.pixabay.com/photo/2014/03/25/16/33/cancel-297373__340.png";
var ua1;
var ua2;
var ua3;
var ua4;
var ua5;
var ua6;
var ua7;
var ua8;
var ua9;
var rty=0;


var sel=Math.floor(Math.random()*3);
var univ;
var count=0;
var chd=0;
switch(sel)
    {
        case 1:
            uni="a";
           count= crane();console.log(count);
            break;

    
            case 2:
            uni="r";
           count= road();console.log(count);
            break;
            
            default:
            uni="a";
           count= crane();console.log(count);
            break;
    
    }

    a1.addEventListener('click',function(){

        if(ua1==uni){
            a1.setAttribute("src",right);rty++;
        }
        else{
            a1.setAttribute("src",wrong);
        }
        
        
        chd++;
        finalcheck();
   
            
        }
    );

    a2.addEventListener('click',function(){
       
        if(ua2==uni){
            a2.setAttribute("src",right);rty++;
        }
        else{
            a2.setAttribute("src",wrong);
        }
           finalcheck();
        
      

    });
    
    a3.addEventListener('click',function(){
        
        if(ua3==uni){
            a3.setAttribute("src",right);rty++;
        }
        else{
            a3.setAttribute("src",wrong);
        }
        
        
         finalcheck();
   

    });
    
    a4.addEventListener('click',function(){
      
        if(ua4==uni){
            a4.setAttribute("src",right);rty++;
        }
        else{
            a4.setAttribute("src",wrong);
        }
        
        
         finalcheck();

    });
    
    a5.addEventListener('click',function(){;
        
        if(ua5==uni){
            a5.setAttribute("src",right);rty++;
        }
        else{
            a5.setAttribute("src",wrong);
        }
        
        
                                           chd++; 
           finalcheck();
    
    });
    
    a6.addEventListener('click',function(){
        
        
        if(ua6==uni){
            a6.setAttribute("src",right);rty++;
        }
        else{
            a6.setAttribute("src",wrong);
        }
        
        
         finalcheck();
   

    });
    a7.addEventListener('click',function(){
        
        if(ua7==uni){
            a7.setAttribute("src",right);rty++;
        }
        else{
            a7.setAttribute("src",wrong);
        }
        
        
        
        
        chd++;
        finalcheck();
                                     });
    
    a8.addEventListener("click",function(){
        
        
         if(ua8==uni){
            a8.setAttribute("src",right);rty++;
        }
        else{
            a8.setAttribute("src",wrong);
        }
        
        chd++; 
          finalcheck();
    

    });
    
    a9.addEventListener("click",function(){
        
        
         if(ua9==uni){
            a9.setAttribute("src",right);rty++;
        }
        else{
            a9.setAttribute("src",wrong);
        }
        
        
        chd++;    finalcheck();
        
   
    });
   


 


function crane(){ var tyu=0;
    
    var r=["https://cdn.pixabay.com/photo/2014/02/06/10/43/road-259815__340.jpg","https://cdn.pixabay.com/photo/2014/08/26/15/15/country-lane-428039__340.jpg","https://cdn.pixabay.com/photo/2014/05/22/21/46/street-351481__340.jpg","https://cdn.pixabay.com/photo/2018/08/17/10/04/traffic-3612474__340.jpg","https://cdn.pixabay.com/photo/2018/06/12/01/04/road-3469810__340.jpg","https://cdn.pixabay.com/photo/2016/08/16/19/09/forest-1598756__340.jpg","https://cdn.pixabay.com/photo/2015/09/21/13/17/road-949832__340.jpg","https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg","https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177__340.jpg"]; 
var a=["https://cdn.pixabay.com/photo/2015/05/15/15/00/building-768815__340.jpg","https://cdn.pixabay.com/photo/2019/11/23/11/25/factory-4646840__340.jpg","https://cdn.pixabay.com/photo/2017/08/12/12/32/crane-2634254__340.jpg","https://cdn.pixabay.com/photo/2018/01/14/15/53/hamburg-3082070__340.jpg","https://cdn.pixabay.com/photo/2016/09/04/08/19/harbour-crane-1643489__340.jpg","https://cdn.pixabay.com/photo/2020/01/15/14/29/europe-channel-4768094__340.jpg","https://cdn.pixabay.com/photo/2016/07/22/11/19/site-1534685__340.jpg","https://cdn.pixabay.com/photo/2018/10/26/21/53/container-cranes-3775454__340.jpg","https://cdn.pixabay.com/photo/2015/02/24/00/24/loading-646934__340.jpg","https://cdn.pixabay.com/photo/2015/02/27/16/05/loading-652296__340.jpg"];
                 p.textContent="CRANES";

    
a1.setAttribute("src",checker(1));
a2.setAttribute("src",checker(2));
a3.setAttribute("src",checker(3));
a4.setAttribute("src",checker(4));

a5.setAttribute("src",checker(5));
a6.setAttribute("src",checker(6));
a7.setAttribute("src",checker(7));
a8.setAttribute("src",checker(8));
a9.setAttribute("src",checker(9));



                 

function checker(sq){
    var gh=Math.ceil(Math.random()*6);
    var t=Math.floor(Math.random()*10);
    if(gh%2==0)
        {  switch(sq){
                case 1:
                ua1 ='a';
                break;
                case 2:
                ua2 ='a';
                break;
                case 3:
                ua3 ='a';
                break;
                case 4:
                ua4 ='a';
                break;
                case 5:
                ua5 ='a';
                break;
                case 6:
                ua6 ='a';
                break;
                case 7:
                ua7 ='a';
                break;
                case 8:
                ua8 ='a';
                break;
                case 9:
                ua9 ='a';
                break;
        }
        
            
            
            
            
            
            tyu++;console.log(tyu);
         return a[t];
      
        }
    else{
        
         switch(sq){
                case 1:
                ua1 ='r';
                break;
                case 2:
                ua2 ='r';
                break;
                case 3:
                ua3 ='r';
                break;
                case 4:
                ua4 ='r';
                break;
                case 5:
                ua5 ='r';
                break;
                case 6:
                ua6 ='r';
                break;
                case 7:
                ua7 ='r';
                break;
                case 8:
                ua8 ='r';
                break;
                case 9:
                ua9 ='r';
                break;
        }
        return r[t];
        
    }}
    return tyu;


}        
                
                
                
                


function road(){
var tyu=0;
 
var a=["https://cdn.pixabay.com/photo/2015/05/15/15/00/building-768815__340.jpg","https://cdn.pixabay.com/photo/2019/11/23/11/25/factory-4646840__340.jpg","https://cdn.pixabay.com/photo/2017/08/12/12/32/crane-2634254__340.jpg","https://cdn.pixabay.com/photo/2018/01/14/15/53/hamburg-3082070__340.jpg","https://cdn.pixabay.com/photo/2016/09/04/08/19/harbour-crane-1643489__340.jpg","https://cdn.pixabay.com/photo/2020/01/15/14/29/europe-channel-4768094__340.jpg","https://cdn.pixabay.com/photo/2016/07/22/11/19/site-1534685__340.jpg","https://cdn.pixabay.com/photo/2018/10/26/21/53/container-cranes-3775454__340.jpg","https://cdn.pixabay.com/photo/2015/02/24/00/24/loading-646934__340.jpg","https://cdn.pixabay.com/photo/2015/02/27/16/05/loading-652296__340.jpg"];
    var r=["https://cdn.pixabay.com/photo/2014/02/06/10/43/road-259815__340.jpg","https://cdn.pixabay.com/photo/2014/08/26/15/15/country-lane-428039__340.jpg","https://cdn.pixabay.com/photo/2014/05/22/21/46/street-351481__340.jpg","https://cdn.pixabay.com/photo/2018/08/17/10/04/traffic-3612474__340.jpg","https://cdn.pixabay.com/photo/2018/06/12/01/04/road-3469810__340.jpg","https://cdn.pixabay.com/photo/2016/08/16/19/09/forest-1598756__340.jpg","https://cdn.pixabay.com/photo/2015/09/21/13/17/road-949832__340.jpg","https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg","https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177__340.jpg"];    
    p.textContent="ROADS";

    
a1.setAttribute("src",checker(1));
a2.setAttribute("src",checker(2));
a3.setAttribute("src",checker(3));
a4.setAttribute("src",checker(4));

a5.setAttribute("src",checker(5));
a6.setAttribute("src",checker(6));
a7.setAttribute("src",checker(7));
a8.setAttribute("src",checker(8));
a9.setAttribute("src",checker(9));
    




function checker(sq){
    var gh=Math.ceil(Math.random()*6);
    var t=Math.floor(Math.random()*10);
    if(gh%2==0)
        { switch(sq){
                case 1:
                ua1 ='r';
                break;
                case 2:
                ua2 ='r';
                break;
                case 3:
                ua3 ='r';
                break;
                case 4:
                ua4 ='r';
                break;
                case 5:
                ua5 ='r';
                break;
                case 6:
                ua6 ='r';
                break;
                case 7:
                ua7 ='r';
                break;
                case 8:
                ua8 ='r';
                break;
                case 9:
                ua9 ='r';
                break;
        }
            
            tyu++;
         console.log(tyu);
            return r[t];
      
        }
    else{
         switch(sq){
                case 1:
                ua1 ='a';
                break;
                case 2:
                ua2 ='a';
                break;
                case 3:
                ua3 ='a';
                break;
                case 4:
                ua4 ='a';
                break;
                case 5:
                ua5 ='a';
                break;
                case 6:
                ua6 ='a';
                break;
                case 7:
                ua7 ='a';
                break;
                case 8:
                ua8 ='a';
                break;
                case 9:
                ua9 ='a';
                break;
        }
        return a[t];
        
    }
}
    
    
    return tyu;
}
function finalcheck(){
    
    if(rty==count )
        {
            btu.classList.add("dispp");
            for(var x=0;x<=700;x++){
            console.log("dv");
        }
    location.reload(true);
        }
    
   if(chd==9 )
        {
            btu.classList.add("dispp");
            for(var x=0;x<=700;x++){
            console.log("fvs");
        }
    location.reload(true);
        }
     
}
}
    