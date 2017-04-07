$(document).ready(function() {
	$('select').change(function(){
		var key = $(this).val()
		var t = this.id

		$.ajax({
			type: 'POST',
			url: '/fnc/filter/main.php',
			data: {'type': t, 'value': key},
			success: function (data) {
				$('#filer-table > tbody:last-child')
				.append(`	<td>data[0][m_FirstName]</td>
						<td>data[0][position]</td>
						<td>data[0][company]</td>
						<td><button class="button button2">Blue</button></td>`)
				return false
			}
		})
	})	
})