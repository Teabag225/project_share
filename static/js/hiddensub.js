let toggle = button => {
    let element = document.getElementById("mydiv");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
       button.innerText = "Hide div";
    } else {
       element.setAttribute("hidden", "hidden");
       button.innerText = "Show div";
    }
  }