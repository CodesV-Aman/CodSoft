
    const display=document.getElementById("display");
    function appendValue(value) {
        display.value+=value;
        
    }

    function clearDisp(){
        display.value=""
    }

    function Calculate(){
        display.value=eval(display.value)
    }
