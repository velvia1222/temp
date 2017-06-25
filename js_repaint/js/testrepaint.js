$('#execute').click(function() {
	var cnt = 0;
	var processmsg = $('#processmsg');
	var finishmsg = $('#finishmsg');
	processmsg.text("");
	finishmsg.text("");

	setTimeout(function exec() {
		if (cnt >= 33) {
			finishmsg.text("完了！");
			return;
		}

		sleep(200);
		cnt++;
		if (cnt % 10 === 0) {
			processmsg.text((cnt) + "件！");
		}
		setTimeout(exec);
	});
});

function sleep(milsec) {
	var d1 = new Date();
	while (true) {
	  var d2 = new Date();
	  if (d2 - d1 > milsec) {
		break;
	  }
	}
}
