const getJsonData = () =>{
    $.getJSON( "team.json", (data)=>{
        $.each(data, ( key, val )=> {
            $(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`).appendTo("#team");
        });  
    });
}
const makeAjaxRequest = () =>{
    $.ajax({
        url: "team.json",
        beforeSend: ()=> {
            $("<p>Loadinggg...</p>").appendTo("#team");
        }
    }).done((data)=> {
                $("#team").empty();
                $.each(data, ( key, val )=> {
                    $(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`).appendTo("#team");
                });
        }).fail(()=>{
            $("#team").empty();
            $("<p>Data not retrieved!</p>").appendTo("#team");
        })
}
$(document).ready(function(){
    makeAjaxRequest();
    //getJsonData();
});
