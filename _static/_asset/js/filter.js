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
				<div class="col-md-4">
					<div class="flip-container wow fadeInRight delay-02s" ontouchstart="this.classList.toggle('hover');">
						<div class="flipper">
							<div class="front">
								<div class="thumbnail"><br>
									<img src="_asset/img/profile.png" alt="" class="img-responsive">
									<div class="caption">
										<h5 style="font-weight: bold;">NAME: 
											<h5 id="m_name" style="font-weight: bold;">` + data[i]['m_FirstName'] + " " + data[i]['m_LastName'] + `</h5>
										</h5>
										<h5 style="font-weight: bold;">POSITION: 
											<h5 id="m_pos" style="font-weight: bold;">` + data[i]['position'] + `</h5>
										</h5>
										<h5 style="font-weight: bold;">COMPANY: 
											<h5 id="m_com" style="font-weight: bold;">` + data[i]['company'] + `</h5>
										</h5>
									</div>
								</div>
							</div>
							<div class="back ">
								<div class="thumbnail"><br>
									<img src="_asset/img/profile.png" alt="" class="img-responsive">
									<div class="caption">
										<h5 style="font-weight: bold;">GENDER: 
											<h5 id="m_gen" style="font-weight: bold;">` + data[i]['gender'] + `</h5>
										</h5>
										<h5 style="font-weight: bold;">PROVINCE: 
											<h5 id="m_pro" style="font-weight: bold;">` + data[i]['province'] + `</h5>
										</h5>
										<h5 style="font-weight: bold;">EMAIL: 
											<h5 id="m_email" style="font-weight: bold;">` + data[i]['email'] + `</h5>
										</h5>										
									</div>
								</div>					
							</div>
						</div>
					</div>
				</div>`)
			}
		}
	})

	var filter = function() {
		var pos = $('#position').val()
		var pro = $('#province').val()
		var gen = $('input[name=gender]:checked').val()
		var com = $('#company').val().toLowerCase()
		$('#profile > div').each(function() {
			if (pos != 'none') {
				if (pos != $(this).find('#m_pos').text()) {
					$(this).hide()
					return true
				}	
			}

			if (pro != 'none') {
				if (pro != $(this).find('#m_pro').text()) {
					$(this).hide()
					return true
				}	
			}

			if (gen != 'none') {
				if (gen != $(this).find('#m_gen').text()) {
					$(this).hide()
					return true
				}	
			}

			if (com != '') {
				var temp = $(this).find('#m_com').text().toLowerCase()
				if (temp.indexOf(com) != 0) {
					$(this).hide()
					return true
				}	
			}
			$(this).show()
		})
	}

	$('select').change(filter)
	$('input[name=gender]:radio').change(filter)
	$('#company').keyup(filter)
})