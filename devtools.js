var x = new XMLHttpRequest();
x.open('GET', 'Custom.css');
x.onload = function() {
    chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();

cmContainer = document.querySelector( "div.CodeMirror.cm-s-default.source-code.fill" );
if( cmContainer )
{
    cmContainer.className = cmContainer.className.replace( "cm-s-default", "cm-s-themed" );
}
