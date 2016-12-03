$(document).ready(function() {




    $(document).on('click', 'a.product-photo', function(e) {
        console.log("calling onclick method....");
        e.preventDefault();
        var index = $(this).attr("id");

        from(index);
    });



    function from(index) {

        console.log("calling...");

        var fref = firebase.database().ref();
        fref.on("value", function(data) {
            //  console.log(data);
            $("ul").replaceWith("<ul></ul>");
            $.each(data.val()[index].team_players, function(i, f) {

                $("ul").append('<li style="display:inline-block;repeat:no-repeat;"><div>\
        <a href="" "class="btn btn-info btn-lg" data-toggle="modal" data-target="#' + i + '"" ><img  src="' + f.player_img_url + ' "  class="img-thumbnail"  alt="Cinque Terre" width="200" height="200"/><br></a>' +
                    '<h6 style="color:black;"><strong>' + f.player_name + '</strong></h6>' +
                    '</div></li>');

                $("div.playerModal").append('<div class="modal fade" id="' + i + '" role="dialog">\
                    <div class="modal-dialog">\
                  <!-- Modal content--><div class="modal-content">\
                  <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal">&times;</button>\
                            <h4 class="modal-title">Player details</h4>\                          </div>\
                          <div lass="modal-body">\
                       <span style="color:purple">Player-Name--> <strong>' + f.player_name + '<br></strong>\</span>\
                          <span style="color:purple">Player-battingstyle-->  <strong>' + f.player_batting_style + '<br></strong>\
                                <span style="color:purple">Player-bowlingstyle-->  <strong>' + f.player_bowling_style + '<br></strong>\
                                  <span style="color:purple">Player-Dateofbirthday-->  <strong>' + f.player_dob + '<br></strong>\
                          </div>\
                          <div class="modal-footer">\
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                          </div>\
                        </div>\
                      </div>\
                    </div>');



            });
            $(".header").append('<div class="navigate"><strong><a style="color:black" href="http://localhost/IPL-APP/index.html">BACK</a></strong></div>');
        });
    }





});
