"use strict";

function createCardTable() {
  $.ajax({
    url: `http://localhost:3000/api/movies`,
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jQxhr) {
      $(`.col-right`).html("");
      $(`.col-left`).html("");
      for (let i = 0; i < data.length; i++) {
        let side = "right";

        if (i % 2 == 0 || i == 0) {
          side = "left";
        }
        $(`.col-${side}`).append(`

                                            <div class="flip-card">
                                                <div class="flip-card-inner">
                                                    <div class="flip-card-front">
                                                        <img src="${data[i].image}" alt="Avatar" style="width:100%;height:100%;">
                                                    </div>
                                                    <div class="flip-card-back">
                                                        <h1>${data[i].title}</h1>
                                                        <p id = "director">${data[i].director}</p> 
                                                        <p id = "genre">${data[i].genre}</p>
                                                    </div>
                                                </div>
                                             </div>
                                       
                                        `);
      }
    },
    error: function (jQxhr, testStatus, errorThrown) {
      console.log(errorThrown);
    },
  });
}

createCardTable();

$("#form1").submit(post());

function post() {
    let newTitle = $("#Title").val();
    let newDirector = $("#Director").val();
    let newGenre = $("#Genre").val();
  let postData = {
    title: newTitle,
    director: newDirector,
    genre: newGenre
  };

  hideInput();
  $.ajax({
    url: `http://localhost:3000/api/movies`,
    dataType: "json",
    type: "post",
    data: postData,
    success: function (data) {},
  });
}

function showInput() {
  $("#columns").css("hidden");
  $("#userInput").css("container-fluid");
}

function hideInput() {
  $("#columns").css("container-fluid");
  $("#userInput").css("hidden");
}

$("#form1").submit(put());

function update() {
  $.ajax({
    url: `http://localhost:3000/api/movies/`,
    dataType: "json",
    type: "put",
    data: "data",
    success: function (data) {},
  });
}
