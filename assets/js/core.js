$( "#songs" ).empty();
$( "#favs" ).empty();

var diffs_7 = ["diff_N7", "diff_H7", "diff_A7"];
var diffs_14 = ["diff_N14", "diff_H14", "diff_A14"];

for (var i in music_data) {
	var entry = music_data[i];

	var this_entry = $("<tr class=\"song\" num_id=" + entry.id + "></tr>").appendTo("#songs_table");

	this_entry.append("<td><a target=\"_blank\" href=\"https://remywiki.com/index.php?go=Go&search=" + entry.name + "\">" + entry.name + "</a></td>");

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
function uint8_to_hex(d) {
    var s = (+d).toString(16);
    if(s.length < 2) {
        s = '0' + s;
    }
    return s;
}

function uint32_to_hex(d) {
    var s = (+d).toString(16);
    while (s.length < 8) {
        s = '0' + s;
    }
    var split = s.match(/../g);             // split number in groups of two
    split.reverse();                        // reverse the groups
	var s2 = split.join("");                // join the groups back together
    return s2;
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

	var fav_header = 
	'<?xml version="1.0" encoding="UTF-8"?>\n' + 
		'<IIDX23pc_favs>\n\t' + 
    		'<favorite>\n\t\t';

	var fav_footer = 
			'</favorite>\n' + 
		'</IIDX23pc_favs>';

	var fav_contents = "";
	fav_contents += '<sp_mlist __type="bin" __size="80">';
	var insertions = 0;
	for (var each_sp_fav in sp_favs){
		fav_contents += uint32_to_hex(sp_favs[each_sp_fav]);
		++insertions;
	}
	for (var remaining = insertions; remaining < 20; remaining++){
		fav_contents += "00000000";
	}
	fav_contents += '</sp_mlist>\n\t\t';

	fav_contents += '<sp_clist __type="bin" __size="20">';
	var insertions = 0;
	for (var each_sp_fav in sp_diff){
		fav_contents += uint8_to_hex(sp_diff[each_sp_fav]);
		++insertions;
	}
	for (var remaining = insertions; remaining < 20; remaining++){
		fav_contents += "00";
	}
	fav_contents += '</sp_clist>\n\t\t';

	fav_contents += '<dp_mlist __type="bin" __size="80">';
	var insertions = 0;
	for (var each_dp_fav in dp_favs){
		fav_contents += uint32_to_hex(sp_favs[each_dp_fav]);
		++insertions;
	}
	for (var remaining = insertions; remaining < 20; remaining++){
		fav_contents += "00000000";
	}
	fav_contents += '</dp_mlist>\n\t\t';

	fav_contents += '<dp_clist __type="bin" __size="20">';
	var insertions = 0;
	for (var each_dp_fav in dp_diff){
		fav_contents += uint8_to_hex(dp_diff[each_dp_fav]);
		++insertions;
	}
	for (var remaining = insertions; remaining < 20; remaining++){
		fav_contents += "00";
	}
	fav_contents += '</dp_clist>\n\t';

	$("#xml_data").val(fav_header + fav_contents + fav_footer);
});

$( "#import_from" ).click(function() {
	// stuff
});
