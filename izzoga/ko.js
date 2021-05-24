let kellekord = "Krest.png";
let lopp=false;

//Основная функция
//проверка и окончание игры, если кто то выйграл
function hiireVajutus(pilt)
{
	if(lopp)
	{
		pildid=document.images;
		for(let i=0; i<pildid.length;i++)
		{
			pildid[i].src="Back.png";
		}
		lopp=false;
	}
	pilt.src=kellekord;

	if (vyiduKontroll())
	{
		alert("Sa võtsid!");
		lopp=true;
	}
	if (kellekord==="Krest.png")
	{
		kellekord="Nol.png"
	}
	else
	{
		kellekord="Krest.png"
	}
}
function pildiValik(pilt)
{
	kellekord=pilt.src;
	document.getElementById("pilt13").src=kellekord;
}

//split("/") - делает массив из пути к файлу
//pop() - Отделает последнее значение или имя файла
function failinimi(nr)
{
	let nimi=document.getElementById("pilt" + nr).src;
	nimi=nimi.split("/").pop();
	return nimi;
}

//a,b,c - номера картинок, failinimilopp - номер необходимой картинки
function kontrollSisu(a,b,c,failinimilopp)
{
	return failinimi(a) === failinimilopp && failinimi(b) === failinimilopp && failinimi(c) === failinimilopp;
}

//Проверка выйграл ли.
function vyiduKontroll() {
	if (kontrollSisu(1, 2, 3, kellekord) && kontrollSisu(4, 5, 6, kellekord) && kontrollSisu(7, 8, 9, kellekord)) {
		return true;
	}
}


