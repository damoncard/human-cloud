$(document).ready(function() {
	$('select').change(function(){
		var pos = $('#position').val()
		var pro = $('#province').val()
		var gen = $('#gender').val()

		$.ajax({
			type: 'POST',
			url: '/fnc/filter/main.php',
			data: {'position': pos, 'province': pro, 'gender': gen},
			dataType: "json",
			success: function (data) {
				$('#filter-table tr').slice(1).empty()
				for (var i = 0; i < data.length; i++) { 
					$('#filter-table  > tbody:last-child').append(`		
					<tr>
						<td>` + data[i]['m_FirstName'] + `</td>
						<td>` + data[i]['position'] + `</td>
						<td>` + data[i]['company'] + `</td>
						<td><button class="button button2">Blue</button></td>
					</tr>`)
				}
			}
		})
	})
})