
$("document").ready(function(){
    window.onscroll = () => {
        $("#Hdiv").css("margin-top", scrollY + "px").css("z-index", "100")
        if(scrollY >= 296){
            $("#Hdiv").css("z-index", "-100")
        }
    }
})


