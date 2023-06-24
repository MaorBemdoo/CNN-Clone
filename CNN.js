
$("document").ready(function(){
    window.onscroll = () => {
        $("#Hdiv").css("margin-top", scrollY+70 + "px").css("z-index", "100")
        if(scrollY >= 296-70){
            $("#Hdiv").css("z-index", "-100")
        }
    }
})


