function lego_body()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.lineWidth = "1";
		ctx.fillStyle = "red";
		ctx.moveTo(150,130);
		ctx.lineTo(250,130);
		ctx.lineTo(267,239);
		ctx.lineTo(134,239);
		ctx.lineTo(150,130);
		ctx.fill();
		ctx.stroke();
	}
};

function lego_head()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(179,22);
		ctx.lineWidth = "1";
		ctx.lineTo(182,21);
		ctx.lineTo(190,20);
		ctx.lineTo(198,21);
		ctx.lineTo(203,21);
		ctx.lineTo(209,20);
		ctx.lineTo(223,23);
		ctx.lineTo(223,37);
		ctx.lineTo(243,45);
		ctx.lineTo(246,48);
		ctx.lineTo(246,104);
		ctx.lineTo(243,112);
		ctx.lineTo(239,115);
		ctx.lineTo(228,119);
		ctx.lineTo(228,130);
		ctx.lineTo(173,130);
		ctx.lineTo(173,119);
		ctx.lineTo(165,116);
		ctx.lineTo(157,113);
		ctx.lineTo(154,107);
		ctx.lineTo(154,55);
		ctx.lineTo(155,49);
		ctx.lineTo(157,45);
		ctx.lineTo(157,44);
		ctx.lineTo(178,37);
		ctx.lineTo(179,22);
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.stroke();
	}
};

function left_hand()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(149,139);
		ctx.lineWidth = "1";
		ctx.fillStyle = "red";
		ctx.lineTo(147,137);
		ctx.lineTo(140,137);
		ctx.lineTo(135,137);
		ctx.lineTo(131,142);
		ctx.lineTo(126,151);
		ctx.lineTo(115,172);
		ctx.lineTo(111,182);
		ctx.lineTo(108,200);
		ctx.lineTo(108,217);
		ctx.lineTo(136,217);
		ctx.lineTo(149,139);
		ctx.fill();
		ctx.stroke();
		left_hand_hook();
		left_hand_shadow();
	}
};

function left_hand_hook()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(110,217);
		ctx.lineWidth = "1";
		ctx.fillStyle = "yellow";
		ctx.lineTo(110,224);
		ctx.lineTo(105,225);
		ctx.lineTo(101,228);
		ctx.lineTo(96,232);
		ctx.lineTo(93,239);
		ctx.lineTo(93,247);
		ctx.lineTo(96,256);
		ctx.lineTo(106,266);
		ctx.lineTo(106,256);
		ctx.lineTo(102,249);
		ctx.lineTo(101,238);
		ctx.lineTo(107,232);
		ctx.lineTo(119,232);
		ctx.lineTo(126,242);
		ctx.lineTo(126,246);
		ctx.lineTo(119,257);
		ctx.lineTo(122,265);
		ctx.lineTo(127,265);
		ctx.lineTo(136,254);
		ctx.lineTo(136,244);
		ctx.lineTo(132,234);
		ctx.lineTo(128,229);
		ctx.lineTo(132,217);
		ctx.fill();
		ctx.stroke();
	}
};

function right_hand()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(251,139);
		ctx.lineWidth = "1";
		ctx.fillStyle = "red";
		ctx.lineTo(254,137);
		ctx.lineTo(263,137);
		ctx.lineTo(269,142);
		ctx.lineTo(289,181);
		ctx.lineTo(294,204);
		ctx.lineTo(294,217);
		ctx.lineTo(264,217);
		ctx.lineTo(251,139);
		ctx.fill();
		ctx.stroke();
		right_hand_hook();
		right_hand_shadow();

	}
};

function right_hand_hook()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(290,217);
		ctx.lineWidth = "1";
		ctx.fillStyle = "yellow";
		ctx.lineTo(291,224);
		ctx.lineTo(298,226);
		ctx.lineTo(306,234);
		ctx.lineTo(308,243);
		ctx.lineTo(307,251);
		ctx.lineTo(298,263);
		ctx.lineTo(294,266);
		ctx.lineTo(294,255);
		ctx.lineTo(297,251);
		ctx.lineTo(300,244);
		ctx.lineTo(300,239);
		ctx.lineTo(294,233);
		ctx.lineTo(287,231);
		ctx.lineTo(281,234);
		ctx.lineTo(275,243);
		ctx.lineTo(275,247);
		ctx.lineTo(281,256);
		ctx.lineTo(280,267);
		ctx.lineTo(266,257);
		ctx.lineTo(266,240);
		ctx.lineTo(268,240);
		ctx.lineTo(269,235);
		ctx.lineTo(272,230);
		ctx.lineTo(269,217);
		ctx.fill();
		ctx.stroke();
	}
};

function left_leg()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(136,240);
		ctx.lineWidth = "1";
		ctx.fillStyle = "blue";
		ctx.lineTo(136,315);
		ctx.lineTo(137,315);
		ctx.lineTo(137,357);
		ctx.lineTo(136,357);
		ctx.lineTo(136,384);
		ctx.lineTo(198,384);
		ctx.lineTo(198,314);
		ctx.lineTo(193,314);
		ctx.lineTo(193,257);
		ctx.lineTo(136,257);
		ctx.fill();
		ctx.stroke();
	}

};

function right_leg()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(265,239);
		ctx.lineWidth = "1";
		ctx.fillStyle = "blue";
		ctx.lineTo(265,315);
		ctx.lineTo(264,315);
		ctx.lineTo(264,357);
		ctx.lineTo(265,357);
		ctx.lineTo(265,384);
		ctx.lineTo(202,384);
		ctx.lineTo(202,314);
		ctx.lineTo(207,314);
		ctx.lineTo(207,257);
		ctx.lineTo(265,257);
		ctx.fill();
		ctx.stroke();
	}
};

function left_hand_shadow()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(103,250);
		ctx.lineWidth = "1";
		ctx.fillStyle = "yellow";
		ctx.lineTo(109,241);
		ctx.lineTo(117,239);
		ctx.lineTo(125,242);
		ctx.lineTo(119,232);
		ctx.lineTo(106,232);
		ctx.lineTo(101,238);
		ctx.lineTo(101,248);
		ctx.lineTo(103,250);

		ctx.fill();
		ctx.stroke();
	}
};

function right_hand_shadow()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(277,240);
		ctx.lineWidth = "1";
		ctx.fillStyle = "yellow";
		ctx.lineTo(283,233);
		ctx.lineTo(288,231);
		ctx.lineTo(294,233);
		ctx.lineTo(300,239);
		ctx.lineTo(300,245);
		ctx.lineTo(297,250);
		ctx.lineTo(292,242);
		ctx.lineTo(287,239);
		ctx.lineTo(281,239);
		ctx.lineTo(277,240);
		ctx.fill();
		ctx.stroke();
	}
};

function belt()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(136,240);
		ctx.lineWidth = "1";
		ctx.fillStyle = "blue";
		ctx.lineTo(265,239);
		ctx.lineTo(265,257);
		ctx.lineTo(207,257);
		ctx.lineTo(207,314);
		ctx.lineTo(193,314);
		ctx.lineTo(193,257);
		ctx.lineTo(136,257);
		ctx.lineTo(136,240);
		ctx.fill();
		ctx.stroke();
	}
};

function clear_all()
{
	let canvas = document.getElementById("plate");
	if(canvas.getContext)
	{
		let ctx = canvas.getContext("2d");
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.restore();
	}
};