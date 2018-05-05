function init(){
    
    var button = document.querySelector(".nav-bar-menu-button");
    button.addEventListener("click", showSlidingPanel, false);

    init2();
}

function showSlidingPanel()
{
    var  slideBar = document.querySelector(".slide-nav-bar")
    slideBar = slideBar == null ? document.querySelector(".slide-nav-bar-active"): slideBar;
    var className = slideBar.className;
    if(className == "slide-nav-bar")
    {
        slideBar.className = "slide-nav-bar-active";
    }
    else
    {
        slideBar.className = "slide-nav-bar";
    }
}