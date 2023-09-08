$("document").ready(function () {
	document.addEventListener("keydown", (e) => {
		if (e.ctrlKey && e.key.toLowerCase() == "b") {
			e.preventDefault();
			alert("Best CNN clone ever🚀");
		}
	});
	window.onscroll = () => {
		$("#Hdiv")
			.css("margin-top", scrollY + 70 + "px")
			.css("z-index", "100");
		if (scrollY >= 296 - 70) {
			$("#Hdiv").css("z-index", "-100");
		}
	};

	if(window.innerWidth <= 1000){
		$("footer article:nth-child(3) form button").html(`<i class="bi bi-search" style="font-size: 1.2rem;"></i>`)
	}

	const navDivFirstChild = $("nav div:first-child")
	if (window.innerWidth <= 1207) {
		navDivFirstChild.children().last().css("display", "block")
		navDivFirstChild.children().last().prev().css("display", "none")
	}
	if(window.innerWidth <= 1111){
		navDivFirstChild.children().last().prev().prev().css("display", "none")
	}
	if(window.innerWidth <= 1047){
		navDivFirstChild.children().last().prev().prev().prev().css("display", "none")
	}
	if(window.innerWidth <= 1000){
			navDivFirstChild.children().last().css("display", "none")
		}
	window.onresize = (e) => {
		if (e.target.screen.width <= 1207) {
			navDivFirstChild.children().last().css("display", "block")
			navDivFirstChild.children().last().prev().css("display", "none")
		}
		if(e.target.screen.width <= 1111){
			navDivFirstChild.children().last().prev().prev().css("display", "none")
		}
		if(e.target.screen.width <= 1047){
			navDivFirstChild.children().last().prev().prev().prev().css("display", "none")
		}
		if(e.target.screen.width <= 1000){
			navDivFirstChild.children().last().css("display", "none")
		}
	};
});
