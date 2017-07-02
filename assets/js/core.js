$( "#songs" ).empty();
$( "#favs" ).empty();

for (var i in music_data) {
	var entry = music_data[i];

	var this_entry = $("<tr class=\"song\" num_id=" + entry.id + "></tr>").appendTo("#songs_table");

	this_entry.append("<td>" + entry.name + "</td>");

	var this_fav = $("<td class=\"favs_entry\" num_id=" + entry.id + "></td>").appendTo(this_entry);

	var diffs_7 = ["diff_N7", "diff_H7", "diff_A7"];
	var diffs_14 = ["diff_N14", "diff_H14", "diff_A14"];

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
