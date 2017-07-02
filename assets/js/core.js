$( "#songs" ).empty();
$( "#favs" ).empty();

for (var entry in music_data) {
	$( "#songs" ).append("<div class=\"song\" num_id=" + entry.id + ">" + entry.name + "</div>");
	var this_fav = $( "#favs" ).append("<div class=\"favs_entry\" num_id=" + entry.id + "></div>");

	var diffs = ["diff_N7", "diff_H7", "diff_A7", "diff_N14", "diff_H14", "diff_A14"];

	for (var each_diff in diffs){
		if (entry[each_diff] > 0){
			this_fav.append("<input type=\"checkbox\" name=\"" + each_diff + "\">");
		}else{
			this_fav.append("<input type=\"checkbox\" name=\"" + each_diff + "\" disabled>");
		}
	}
}
