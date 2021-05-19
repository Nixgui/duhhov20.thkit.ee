function tervitus(){
    //username
    let username=document.getElementById("nimi").value;
    //answer
    let answer=document.getElementById("answer");

    //radio buttons
    let admin=document.getElementById("admin");
    let moderator=document.getElementById("moderaator");
    let user=document.getElementById("user");

    //Images
    let image=document.getElementById("emptyIMG");

    //user roll
    let userRoll=null;

    //check radio buttons
    if(admin.checked)
    {
        userRoll=admin.value;
        image.src="../img/rolled/admin.png";
    }
    else if(moderator.checked)
    {
        userRoll=moderator.value;
        image.src="../img/rolled/moderator.png";
    }
    else if(user.checked)
    {
        userRoll=user.value;
        image.src="../img/rolled/user.png";
    }
    else
    {
        userRoll="";
        image.src="../img/rolled/emty.png";
    }

    //checkbox agree
    let agree=document.getElementById("agree");

    //textArea
    let comment=document.getElementById("textarea_comment").value;
    if(comment !=="")
    {
        comment="<br>"+"Sinu sõnum on: "+comment;
    }
    //show Answer
    if(agree.checked)
    {
        answer.innerHTML = "Tere hommikust, " + userRoll + " " + username + comment;

    }
    else
    {
        alert("Palun nõustu tingimustega!");
    }
}
function eemaldaValik(){
    document.getElementById("nimi").value = "";
    document.getElementById("textarea_comment").value = "";
    document.getElementById("answer").innerHTML="";
    admin=document.getElementById("admin");
    moderator=document.getElementById("moderaator");
    user=document.getElementById("user");
    let elem=document.getElementsByName("roll");
    for(let i=0;i<elem.length;i++)
    {
        elem[i].checked=false;
    }
    let agree=document.getElementById("agree");
    agree.checked=false;
    let image=document.getElementById("emptyIMG");
    image.src="../img/rolled/emty.png";

}

//Основная функция
function vormFunc(){

    //Для 1-го вопроса (Радио кнопки)
    let polozitelno=document.getElementById("polozitelno");
    let otricatelno=document.getElementById("otricatelno");
    let neitralno=document.getElementById("neitralno");

    let otvet = null;

    if(polozitelno.checked)
    {
        otvet= polozitelno.value;
    }
    else if(otricatelno.checked)
    {
        otvet=otricatelno.value;
    }
    else if(neitralno.checked)
    {
        otvet=neitralno.value;
    }
    else
    {
        alert("Заполни все поля пожалуйста!")
        otvet="";
    }

    //2-ой вопрос
    let v1=document.getElementById("v1");
    let v2=document.getElementById("v2");
    let v3=document.getElementById("v3");

    let OS = null;

    if (v1.checked)
    {
        OS="Linux";
    }
    else if(v2.checked)
    {
        OS="Windows";
    }
    else if(v3.checked)
    {
        OS="MacOS";
    }
    else
    {
        alert("Заполни все поля пожалуйста!")
        OS="";
    }

    //3-й вопрос
    let set=document.getElementById("sett").value;
    if (set !=="")
    {
        alert("Заполни все поля пожалуйста!")
        set="<br>"+"Ваш ответ на 3 вопрос был: " + "<br>" +set;
    }

    //4-й вопрос
    let vpnNo=document.getElementById("vpnno")
    let vpnYes = document.getElementById("vpnyes")
    let vpnNoText=null;

    if(vpnNo.checked)
    {
        vpnNoText="VPN (виртуальная частная сеть) — это самый простой и эффективный способ защитить свой интернет-трафик и скрыть свои личные данные при работе в Интернете.";
    }
    else if(vpnYes.checked)
    {
        vpnNoText="Да"
    }
    else
    {
        alert("Заполни все поля пожалуйста!")
    }

    //5-й вопрос
    let opt1=document.getElementById("1").selected;
    let opt2=document.getElementById("2").selected;
    let opt3=document.getElementById("3").selected;
    let opt4=document.getElementById("4").selected;

    let text = null;

    if(opt1 === true)
    {
        text = "NOD32 антивирусный пакет, выпускаемый словацкой фирмой ESET.";
    }
    else if(opt2 === true)
    {
        text = "Microsoft Defender (данное название используется начиная с Windows 10 сборки 2004 (Windows 10 May 2020 Update)[1], ранее использовалось название Защитник Windows (англ. Windows Defender), а также, на этапе тестовых версий — Microsoft Defender, который в свою очередь был создан на основе программы Microsoft AntiSpyware[2]) — программный продукт компании Microsoft, созданный для того, чтобы удалять, помещать в карантин или предотвращать появление spyware-модулей в операционных системах Microsoft Windows.";
    }
    else if(opt3 === true)
    {
        text = "Avast Antivirus — семейство антивирусных программ, разработанных компанией Avast для операционных систем Windows, Mac OS, Android и iOS.";
    }
    else if(opt4 === true)
    {
        text = "Антивирус Grizzly - это мощный помощник в борьбе со всеми видами компьютерных вирусов! Grizzly защищает от троянов, блокировщиков экрана, программ шпионов и рекламных тизерных программ, шифровальщиков и других распространенных и не столь известных типов вирусов.";
    }
    else
    {
        alert("Заполни все поля пожалуйста!")
    }

    //6-й Вопрос
    let linux = document.getElementById("linux");
    let windows = document.getElementById("windows");
    let mac = document.getElementById("macos");

    let bb=null;

    if(linux.checked)
    {
        bb="Мне не о чем с тобой разговаривать";
    }
    else if(windows.checked)
    {
        bb="Windows не самая безопасная ОС, но её можно обезопасить с помощью VPN или Proxy";
    }
    else if (mac.checked)
    {
        bb="Сама по себе достаточно безопасноя ОС";
    }
    else
    {
        alert("Заполни все поля пожалуйста!")
    }

    //7-й Вопрос
    let yes=document.getElementById("yes");
    let no=document.getElementById("no");
    let dtk=document.getElementById("dontknow");

    let thirdParty = null;

    if(yes.checked)
    {
        thirdParty= "Это неверный ответ. Ни в коем случае нельзя передавать пароль третьим лицам"
    }
    else if (no.checked)
    {
        thirdParty="Это правильный ответ";
    }
    else if (dtk.checked)
    {
        thirdParty="Нельзя передавать пароль третьим лицам";
    }
    else
    {
        alert("Заполни все поля пожалуйста!")
    }

    //8-й вопрос
    let name = document.getElementById("name").value;

    //9-й вопрос (Дата и время)
    let date = new Date();

    //10-й вопрос(ввести Эмаил)
    let email = document.getElementById("e-mail").value;

    //11-вопрос(Номер телефона)
    let tel = document.getElementById("tel").value;

    //12-й вопрос(цвет выдаёь в HEX формате)
    let color = document.getElementById("color").value;

    //13-й вопрос
    let dver = document.getElementById("dver").value;

    let answer=document.getElementById("answer")
    document.getElementById("answer").style.color = color;
    document.getElementById("answer").style.width="350px";

    answer.innerHTML="<br>"+"Ваш ответ на 1 вопрос был: " +"<br>" + otvet + "<br>"+"Ваш ответ на 2 вопрос был: " + "<br>" + OS + set +"<br>"+"Ваш ответ на 4 вопрос был: " + "<br>" + vpnNoText + "<br>"+"Ваш ответ на 5 вопрос был: " + "<br>" + text + "<br>"+"Ваш ответ на 6 вопрос был: " + "<br>" + bb + "<br>"+"Ваш ответ на 7 вопрос был: " + "<br>" + thirdParty + "<br>"+"Ваш ответ на 8 вопрос был: " + "<br>" + name + "<br>"+"Ваш ответ на 9 вопрос был: " + "<br>" + date + "<br>"+"Ваш ответ на 10 вопрос был: " + "<br>" + email + "<br>"+"Ваш ответ на 11 вопрос был: " + "<br>" + tel + "<br>"+"Ваш ответ на 12 вопрос был: " + "<br>" + color + " P.S. Теперь весь текст будет в выбранном цвете"+ "<br>"+"Ваш ответ на 13 вопрос был: " + "<br>" + dver;

}
//Очистка текста
/*function clear(){
    document.getElementById("sett").value = "";
    document.getElementById("name").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("color").value = "";
    document.getElementById("dver").value = "";

    let elem=document.getElementsByName("cyber");
    for(let i=0;i<elem.length;i++)
    {
        elem[i].checked=false;
    }
    let test=document.getElementsByName("test");

    for(let i=0;i<test.length;i++)
    {
        test[i].checked=false;
    }

    let vpn=document.getElementsByName("vpn");
    for(let i=0;i<vpn.length;i++)
    {
        vpn[i].checked=false;
    }

    let antivirus=document.getElementsByName("antivirus");
    for(let i=0;i<antivirus.length;i++)
    {
        antivirus[i].selected=false;
    }

    let os=document.getElementsByName("os");
    for(let i=0;i<os.length;i++)
    {
        os[i].checked=false;
    }

    let pass=document.getElementsByName("pass");
    for(let i=0;i<pass.length;i++)
    {
        pass[i].checked=false;
    }

    document.getElementById("answer").innerHTML="";

}
*/