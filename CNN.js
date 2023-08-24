
$("document").ready(function(){
    document.addEventListener("keydown", (e) => {
        if(e.ctrlKey && e.key.toLowerCase() == "b"){
            e.preventDefault()
            alert("Best CNN clone ever🚀")
        }
    })
    window.onscroll = () => {
        $("#Hdiv").css("margin-top", scrollY+70 + "px").css("z-index", "100")
        if(scrollY >= 296-70){
            $("#Hdiv").css("z-index", "-100")
        }
    }
    window.onresize = (e) => {
        console.log(e.target.screen.width);
        // if (e.target.screen.width){

        // }
        // while (e.target.screen.width) {
        //     $("nav").children().first().last().prev().css("display", "none")
        // }
    }
})
