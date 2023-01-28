const darkModeBtn = document.getElementById("dark-mode-btn");
let isDark = false; 

darkModeBtn.addEventListener("click", ()=>
{
    let darkElements = document.getElementsByClassName("dark-mode-element");
    let length = darkElements.length;
    for (let i = 0; i < length; i++)
    {
        darkElements[i].classList.toggle("dark-mode");
    }

    if (isDark===true)
    {
        isDark = false;
        darkModeBtn.innerHTML = "<iconify-icon icon=\"material-symbols:dark-mode\" style=\"color: gray;\" width=\"40\"></iconify-icon>";
    }
    else
    {
        isDark = true;
        darkModeBtn.innerHTML = "<iconify-icon icon=\"material-symbols:light-mode\" style=\"color: white;\" width=\"40\"></iconify-icon>";
    }

    // 
});