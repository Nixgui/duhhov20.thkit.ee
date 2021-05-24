let images = "blank.jpg";
let end = false;

//Смена картинки
function changeImage(pilt)
{
	if(end)
	{
		pildid=document.images;
		for(let i=0; i<pildid.length;i++)
		{
			pildid[i].src="blank.jpg"
		}
		end=false
	}
	pilt.src=images;

	if(images === "blank.jpg")
	{
		images = "p" + failName();
	}
	if(control())
	{
		alert("You Win!")
		end = true;
	}
	else
	{
		end = false;
	}

}

//смена картинки которую ты выбрал
function imageChange(pilt)
{
	images=pilt.src;
	document.getElementById("changed").src=images;

}

//Получает номер картинки
function failName(nr)
{
	let name = document.getElementById("pilt" + nr).src;
	name=name.split("/").pop();
	return name;
}

//обрезка ид
function idNameControl(nr)
{
	let name = document.getElementById("p" + nr).id;
	name = name.split("/").pop();
	return name;
}

//Пробник проверки
function control()
{
	if(failName() === idNameControl())
	{
		return true;
	}
}
