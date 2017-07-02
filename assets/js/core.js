$( "#songs" ).empty();
$( "#favs" ).empty();

var diffs_7 = ["diff_N7", "diff_H7", "diff_A7"];
var diffs_14 = ["diff_N14", "diff_H14", "diff_A14"];

for (var i in music_data) {
	var entry = music_data[i];

	var this_entry = $("<tr class=\"song\" num_id=" + entry.id + "></tr>").appendTo("#songs_table");

	this_entry.append("<td><a href=\"https://remywiki.com/index.php?go=Go&search=" + entry.name + "\">" + entry.name + "</a></td>");

	var this_fav = $("<td class=\"favs_entry\" num_id=" + entry.id + "></td>").appendTo(this_entry);


	for (var diff_i in diffs_7){
		var each_diff = diffs_7[diff_i];
		if (entry[each_diff] > 0){
			this_fav.append("<input type=\"checkbox\" name=\"" + each_diff + "\">");
		}else{
			this_fav.append("<input type=\"checkbox\" name=\"" + each_diff + "\" disabled>");
		}
	}
	this_fav.append(" ");
	for (var diff_i in diffs_14){
		var each_diff = diffs_14[diff_i];
		if (entry[each_diff] > 0){
			this_fav.append("<input type=\"checkbox\" name=\"" + each_diff + "\">");
		}else{
			this_fav.append("<input type=\"checkbox\" name=\"" + each_diff + "\" disabled>");
		}
	}
}

$( "#export_selected" ).click(function() {
	var sp_favs = [];
	var sp_diff = [];
	var dp_favs = [];
	var dp_diff = [];

	var table = $("#songs_table");
	$('.favs_entry').each(function() {
		for (var diff_i in diffs_7){
			var each_diff = diffs_7[diff_i];
			if($(this).children("input[name='" + each_diff + "']").is(':checked')){
				sp_favs.push($(this).attr("num_id"));
				sp_diff.push(diff_i);
			}
		}
		for (var diff_i in diffs_14){
			var each_diff = diffs_14[diff_i];
			if($(this).children("input[name='" + each_diff + "']").is(':checked')){
				dp_favs.push($(this).attr("num_id"));
				dp_diff.push(diff_i);
			}
		}
	});
	console.log(sp_favs);
	console.log(sp_diff);
	console.log(dp_favs);
	console.log(dp_diff);
});

$( "#import_from" ).click(function() {
	// stuff
});
