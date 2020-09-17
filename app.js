"use strict"

function createCardTable(){
    $.ajax({
        url: `http://localhost:3000/api/movies`,
        dataType: "json",
        type: "get",
        success: function(data, textStatus, jQxhr){

            for(let i = 0; i < data.length; i++){
                $("#cardTable").append(`<div class = "container">
                                            <div class = "card>
                                                <tr>
                                                    <td>${data[i].title}</td>
                                                </tr>
                                                <tr>
                                                    <td>${data[i].director}</td>
                                                </tr>
                                                <tr>
                                                    <td>${data[i].genre}</td>
                                                </tr>
                                            </div>
                                            <div class = "internalCard>
                                            </div>
                                        </div>   `)
            }
        },
        error: function(jQxhr, testStatus, errorThrown){
            console.log(errorThrown);
        }
    });
}

createCardTable();