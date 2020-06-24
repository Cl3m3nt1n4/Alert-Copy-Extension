var disablerFunction = function () {

    window.alert = function alert(msg) { prompt("Press CTRL+C to copy:", msg); };
    
};
var disablerCode = "(" + disablerFunction.toString() + ")();";
var disablerScriptElement = document.createElement('script');
disablerScriptElement.textContent = disablerCode;

document.documentElement.appendChild(disablerScriptElement);
disablerScriptElement.parentNode.removeChild(disablerScriptElement);