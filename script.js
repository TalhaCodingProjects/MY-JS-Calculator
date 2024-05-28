document.addEventListener("DOMContentLoaded", function() {
    // لوڈر کو 3 سیکنڈ کے بعد ہٹائیں
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000);
});

let input = document.getElementById('inputBox')
        let buttons = document.querySelectorAll('button')
        let string = ""
        let arr = Array.from(buttons);
        arr.forEach(button => {
            button.addEventListener('click', (e) =>{
                if(e.target.innerHTML == '='){
                    string = eval(string);
                    input.value = string;
                }

                else if(e.target.innerHTML == "AC"){
                    string = "";
                    input.value = string;
                }

                else if(e.target.innerHTML == "Del"){
                    string = string.substring(0, string.length-1)
                    input.value = string;
                }

                else{
                    string += e.target.innerHTML;
                    input.value = string;
                }
            })
        })
