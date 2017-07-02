$( "#songs" ).empty();
$( "#favs" ).empty();

for each(var entry in music_data) {
	$( "#songs" ).append("<div class=\"song\" num_id=" + entry.id + ">" + entry.name + "</div>");
	if (entry.diff_N7 > 0){
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_N7\">");
	}else{
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_N7\" disabled>");
	}
	if (entry.diff_H7 > 0){
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_H7\">");
	}else{
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_H7\" disabled>");
	}
	if (entry.diff_A7 > 0){
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_A7\">");
	}else{
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_A7\" disabled>");
	}
	if (entry.diff_N14 > 0){
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_N14\">");
	}else{
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_N14\" disabled>");
	}
	if (entry.diff_H14 > 0){
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_H14\">");
	}else{
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_H14\" disabled>");
	}
	if (entry.diff_A14 > 0){
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_A14\">");
	}else{
		$( "#favs" ).append("<input type=\"checkbox\" name=\"diff_A14\" disabled>");
	}
	$( "#favs" ).append("<br/>");
}
