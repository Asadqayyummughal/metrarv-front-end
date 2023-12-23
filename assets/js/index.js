// function menuController(event){
//     console.log('event called');
//    let navList=document.querySelector('.nav_col_2')
//    console.log('check navlist',navList);
//    if(navList.style.display=="none"){
//     console.log('controllled entered...');
//     navList.style.display="block"
//    }
   


// }

$(".box").on("click", function()
{
    $(".nav-list").slideToggle(400);
});