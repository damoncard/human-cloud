<?php
	if (!empty($_POST)) {
		$json_decode = file_get_contents('test.json');
		$str = json_decode($json_decode, true);
		$len = count($str);

		for ($x = 0 ; $x < $len; $x++) {
			if ($_POST['position'] != 'none') {
				if ($str[$x]['position'] != $_POST['position']) {
					unset($str[$x]);
					continue;
				}
			}

			if ($_POST['province'] != 'none') {
				if ($str[$x]['province'] != $_POST['province']) {
					unset($str[$x]);
					continue;
				}
			}

			if ($_POST['gender'] != 'none') {
				if ($str[$x]['gender'] != $_POST['gender']) {
					unset($str[$x]);
					continue;
				}
			}
		}

		$str = array_values($str);
		$json_encode = json_encode($str);
		echo $json_encode;
	}
?>