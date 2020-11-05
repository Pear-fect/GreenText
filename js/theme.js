function setTheme(text, back) {
    document.documentElement.className = ""
    if(text !== "") {
        localStorage.setItem('text', text)
        document.documentElement.className += text
    } else {
        document.documentElement.className += localStorage.getItem('text')
    }
    if(back !== "") {
        localStorage.setItem('back', back)
        document.documentElement.className += " " + back
    } else {
        document.documentElement.className += " " + localStorage.getItem('back')
    }
}

function toggleTheme() { 
    setTheme(localStorage.getItem('text'), localStorage.getItem('back')) 
}

(function () { setTheme(localStorage.getItem('text'), localStorage.getItem('back')) })();