function disableselect(e){return!1}function reEnable(){return!0}document.onselectstart=new Function("return false"),window.sidebar&&(document.onmousedown=disableselect,document.onclick=reEnable),document.onkeypress=function(e){return 123!=(e=e||window.event).keyCode&&(17!=e.keyCode&&(85!=e.keyCode&&void 0))},document.onmousedown=function(e){return 123!=(e=e||window.event).keyCode&&(17!=e.keyCode&&(85!=e.keyCode&&void 0))},document.onkeydown=function(e){return 123!=(e=e||window.event).keyCode&&(17!=e.keyCode&&(85!=e.keyCode&&void 0))};