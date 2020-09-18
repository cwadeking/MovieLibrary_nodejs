"use strict"

function createCardTable(){
    $.ajax({
        url: `http://localhost:3000/api/movies`,
        dataType: "json",
        type: "get",
        success: function(data, textStatus, jQxhr){
            for(let i = 0; i < data.length; i++){
                let side = "right";
                    
                if(i % 2 == 0 || i == 0){
                    side = "left";
                }
                    $(`.col-${side}`).append(`
                                        
                                            <div class="flip-card">
                                                <div class="flip-card-inner">
                                                    <div class="flip-card-front">
                                                        <img src="${data[i].image}" alt="Avatar" style="width:300px;height:300px;">
                                                    </div>
                                                    <div class="flip-card-back">
                                                        <h1>${data[i].title}</h1>
                                                        <p>${data[i].director}</p> 
                                                        <p>${data[i].genre}</p>
                                                    </div>
                                                </div>
                                             </div>
                                       
                                        ` )
            }
        },
        error: function(jQxhr, testStatus, errorThrown){
            console.log(errorThrown);
        }
    });
}

createCardTable();