
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
    const navDivFirstChild = document.querySelectorAll("nav div:first-child")
    window.onresize = (e) => {
        console.log(e.target.screen.width);
        if (e.target.screen.width <= 1153){
            navDivFirstChild.forEach(child => {
                child.lastElementChild.style.display = "block"
                child.lastElementChild.previousElementSibling.style.display = "none"
            })
        }
    }
})
