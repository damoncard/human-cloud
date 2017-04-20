$(document).ready(function() {
	$.ajax({
		type: 'POST',
		url: '/fnc/filter/main.php',
		data: {'position': 'none', 'province': 'none', 'gender': 'none', 'company': 'none'},
		dataType: "json",
		success: function (data) {
			$('#profile').empty()
			for (var i = 0; i < data.length; i++) { 
				$('#profile').append(`
				<div class="col-md-4 wow fadeInRight delay-02s">
					<div class="block" id="card"> 
						<div class="thumbnail front"><br>
							<img src="_asset/img/img1.png" alt="" class="img-responsive">
							<div class="caption">
								<h5 style="font-weight: bold;">NAME: 
									<h6>` + data[i]['m_FirstName']  + `</h6>
								</h5>
								<h5 style="font-weight: bold;">POSITION:
									<h6>` +  data[i]['position']  + `</h6>
								</h5>
								<h5 style="font-weight: bold;">COMPANY:
									<h6>` +  data[i]['company']  + `</h6>
								</h5>
							</div>
						</div>
						<div class="thumbnail back"><br>
							<img src="_asset/img/img1.png" alt="" class="img-responsive">
						</div>
					</div>
				</div>`)
			}
		}
	})

	// $(function($) {
	// 	$("#card").flip()
	// });

	$('select').change(function(){
		var key = $(this).val()
		if ($(this).attr('id') == 'position') {
			$('#profile > div').each(function(){
	 			var str = $(this).find('h6:nth-child(4)').text()
	 			var sub = key
	 			if (str != sub){
	 				$(this).hide()
	 			} else {
	 				$(this).show()
	 			}
	 		})
		} else {
			/*$('#profile > div').each(function(){
	 			var str = $(this).find('h6:nth-child(4)').text()
	 			var sub = key
	 			if (str != sub){
	 				$(this).hide()
	 			} else {
	 				$(this).show()
	 			}
	 		})*/	
		}
	})

	$('#company').keyup(function() {
 		$('#profile > div').each(function(){
 			var str = $(this).find('h6:last-child').text().toLowerCase()
 			var sub = $('#company').val().toLowerCase()
 			if (str.indexOf(sub)){
 				$(this).hide()
 			} else {
 				$(this).show()
 			}
 		})
 	})
})