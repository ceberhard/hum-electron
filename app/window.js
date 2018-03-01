
$(() => {
	
	$('#testbutton').click(function() {
		taskurl = config.task_api;
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
	
	$('#addtask').click(function() {
		taskurl = config.task_api;
		var tasktitle = $('#tasktitle').val();
		var taskdesc = $('#taskdesc').val();
		var xdata = { title: tasktitle, description: taskdesc };
		var sdata = JSON.stringify(xdata);
		
		$.ajax({
			url: taskurl,
			type: 'put',
			data: sdata,
			headers: {
				"content-type": "application/json"
			},
			success: function(result) {
				alert(result);
			}
		});
	});
});

