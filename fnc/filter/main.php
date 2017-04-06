<?php
	if (isset($_POST['type'])) {
		$json_decode = file_get_contents('test.json');
		$str = json_decode($json_decode, true);
		$len = count($str);

		for ($x = 0 ; $x < $len; $x++) {
			if ($str[$x][$_POST['type']] != $_POST['value']) {
				unset($str[$x]);
			}
		}

		$json_encode = json_encode($str);
		echo $json_encode;
	}
?>