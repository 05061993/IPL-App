$(document).ready(function() {




/*  $(document).on('click', 'button', function(e) {
      console.log("clicking on player image button....");
      e.preventDefault();
      var index = $(this).attr("id");
      //  var index = $(this).attr("id");
      // console.log("id::",index);
      //  console.log(pageRef);
      // 	var clicked = $(this.id);
      // console.log("id::",clicked());
      //  data.forEach(function (item) {
      //    if(that.data('index') == item.id)
      from1(index);
  });
*/

    // $(document).on('click', 'img.align', function(e) {
    //     console.log("clicking on player image....");
    //     e.preventDefault();
    //   //  var index = $(this).attr("id");
    //     // console.log("id::",index);
    //     //  console.log(pageRef);
    //     // 	var clicked = $(this.id);
    //     // console.log("id::",clicked());
    //     //  data.forEach(function (item) {
    //     //    if(that.data('index') == item.id){
    //     from1();
    // });




    // $('a.team').on('click', function(e) {
    //     e.preventDefault();
    //     var pageRef = $(this).attr('href');
    //     $('.content').html("<h1>Admin Reading " + pageRef.replace("#") + " </h1>");
    // });
    //
    //
    // //   function callPage(){
    // // var fref = firebase.database().ref();
    // fref.on("value", funhtmlction(data) {
    //          $('.content').html("<h1>Firebase Reading</h1>");
    // console.log("firebase data",data.val());
    // });

    function from1(index) {

      console.log("calling from1..");

      var fref = firebase.database().ref();
      fref.on("value", function(data) {
          //  console.log(data);
          //  $("ul").replaceWith("<ul></ul>");
          $.each(data.val()[index].team_players, function(i, f) {
              console.log(i);
              console.log(f);
              $("p").append('<h1>' + f.player_name + '</h1>');




            });

        });
    }



    //
    // function from1() {
    //
    //    $("#include").load("players_info.html");
    //  }

});
/* // Using the core $.ajax() method
    $.getJSON("user.json",function(value) {
	console.log("JSON reading");
          console.log('the page was loaded', value);
//          $('.content').html(response);
  //        console.log('the page was NOT loaded', error);
    });*/
//console.log("JSON reading end....");
