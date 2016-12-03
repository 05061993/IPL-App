// // $(function(){
//   // var teams=[];
//
// function readFirebase(callback){
// 	var ref=firebase.database().ref("team_info");
// 	ref.on("value", function(data) {
//    console.log("firebase");
// 	teams=data.val();
// 	callback(teams);
// });
// }
// // It recieves one parameter - the data we took from products.json.
//  readFirebase(function(data){
// console.console.log(data[0]);
// $(window).trigger('hashchange');
// console.log(teams);
// console.log("After Firebase");
// 		var list = $('.all-teams .teams-list');
//
// 		var theTemplateScript = $("#teams-template").html();
// 		//Compile the template​
// 		var theTemplate = Handlebars.compile (theTemplateScript);
// 		list.append (theTemplate(data));
//
//
// 		// Each products has a data-index attribute.
// 		// On click change the url hash to open up a preview for this product only.
// 		// Remember: every hashchange triggers the render function.
// 		// list.find('li').on('click', function (e) {
// 		// 	e.preventDefault();
//     //
// 		// 	var productIndex = $(this).data('index');
//     //
// 		// 	window.location.hash = 'teams/' + teamsIndex;
// 		// });
//   	});
// });
