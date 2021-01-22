var popupButton = document.querySelector(".popup_button");
var popupBg = document.querySelector(".bg_popup");
var modalClose = document.querySelector(".popup_close");

popupButton.addEventListener('click', function(){
	popupBg.classList.remove("popup_closed");
	popupBg.classList.add("popup_active");
});

modalClose.addEventListener('click', function(){
	popupBg.classList.remove("popup_active");
	popupBg.classList.add("popup_closed");
});