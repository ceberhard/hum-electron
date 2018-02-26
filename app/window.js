
$(() => {
	
	$('#testbutton').click(function() {
		taskurl = "http://localhost:5000/api/task";
		$.getJSON(taskurl, function(data) {
			var t = $('<table></table>').addClass('table table-bordered');
			var row;
			t.append($('<tr>').html("<th>Title</th><th>Description</th>"));
			$.each(data, function(i){
				row = $('<tr>');
				row.append($('<td></td>').text(data[i].title));
				row.append($('<td></td>').text(data[i].description));
				t.append(row);
			});
			$('#tasktable').append(t);
		});
	});
});

