//Assignment:- 2

$(document).ready(function() {
    $('#prospect, #convert, #retain').on('click', function(e) {
    let xhr=new XMLHttpRequest();
    if(e.target.id==="prospect")  {
        xhr.open('GET','prospect.html',true)
    }else if (e.target.id==="convert"){
        xhr.open('GET','convert.html',true)

    }else{
        xhr.open('GET','retain.html',true)
    }
        xhr.onload = function(){
            if(this.status===200)   {
                let element=document.getElementById("content")
                element.innerHTML=xhr.responseText
            }
        }
        $("#content").slideDown()
        xhr.send()
    })
})