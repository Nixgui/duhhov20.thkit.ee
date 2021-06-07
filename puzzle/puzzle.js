let pictures = "blank.jpg"
end = false;
let tic = 0;
let idStr = document.id;
//Смена картинки
function changeImage(pilt)
{
	pilt.src=pictures;
	if(vyiduKontroll(tic) === 4)
	{
		end = true;
	}
	if(end === true)
	{
		alert("Win!")
	}


	if(pictures === "blank.jpg")
	{
		pictures = "p" + failName();
	}

}

//смена картинки которую ты выбрал
function imageChange(pilt)
{
	pictures=pilt.src;
	document.getElementById("changed").src=pictures;
	if(end)
	{
		pildid=document.images;
		for(let i=0; i<pildid.length;i++)
		{
			pildid[i].src="blank.jpg"
		}
		end=false;
	}

}

//Получает номер картинки
function failName(nr)
{
	let name = document.getElementById("pilt" + nr).src;
	name=name.split("/").pop();
	return name;
}

function kontrollSisu(a,b,c,d,failinimilopp)
{
	return failName(a) === failinimilopp && failName(b) === failinimilopp && failName(c) === failinimilopp && failName(d) === failinimilopp;
}

//Проверка выйграл ли.
/*function vyiduKontroll(tic) {
	if (kontrollSisu(1, 2, 3, 4, pictures) && kontrollSisu(5, 6, 7, 8, pictures) && kontrollSisu(9, 10, 11, 12, pictures) && kontrollSisu(13, 14, 15, 16, pictures)) {
		tic = tic + 1;
		return tic;
	}
}*/

function vyiduKontroll(tic){
	if(failName(1)==="p1.jpg" && failName(2)==="p2.jpg"){
		tic = tic+1;
	}
	return tic;
}