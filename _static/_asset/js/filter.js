$(document).ready(function() {
	$('select').change(function(){
		var key = $(this).val()
		var t = this.id

		$.ajax({
			type: 'POST',
			url: '/fnc/filter/main.php',
			data: {'type': t, 'value': key},
			success: function (data) {
				alert(data)
			}
		})
	})	
})

/*
use for token to login
	login.MinionDB.tokenTable.userId
	login.MinionDB.tokenTable.tkPass
	login.MinionDB.tokenTable.pkId
	login.MinionDB.userTable.eId
	login.MinionDB.emailTable.email
user for browse minion 
	browse.MinionDB.minionTable.mFirstName
	browse.MinionDB.minionTable.mMidleName
	browse.MinionDB.minionTable.mLastName
	browse.MinionDB.minionTable.userId
	browse.MinionDB.userTable.enName
	browse.MinionDB.minionTable.pId
	browse.MinionDB.possessionTable.possession
	
*/