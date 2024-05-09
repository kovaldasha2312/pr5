function task1(){
    let name =prompt('What is your name?', '');
    let profession = prompt('What is your profession?','');
    let phone = prompt('Your phone number?','');
    document.write('<table>');
    for (let i = 0; i<12;i++){
        document.write('<tr>');
        for (let i = 0; i<3;i++) {
            document.write('<td>');
            document.write('<TABLE width="200" border="1" align="CENTER">');
            document.write('<TR><TD align="CENTER">');
            document.write(' <TABLE width="100%" border="0">');
            document.write(' <TR>');
            document.write(' <TD align="CENTER" valign="CENTER">');
            document.write(' <IMG src="Losha.jpg" alt="Image" style="max-width:100%; height:auto;">');
            document.write(' </TD>');
            document.write(' <TD align="CENTER">');
            document.write(' <B>'+name+'</B><BR>');
            document.write(' <I>'+profession+'</I><BR>');
            document.write(' <FONT color="blue">'+phone+'</FONT>');
            document.write(' </TD>');
            document.write(' </TR>');
            document.write(' </TABLE>');
            document.write('</TD></TR>');
            document.write('</TABLE>');
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}



// Завдання 2
function autor1(){
    alert('Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна» .');
}
function autor2(){
    alert('Мова — це глибина тисячоліть.');
}
function autor3(){
    alert('Той, хто в біді кидає свій народ, стає його ворогом.');
}
function autor4(){
    alert('Де немає свободи, там немає і вітчизни.');
}
function autor5(){
    alert('В своїй хаті своя й правда, І сила, і воля.');
}

// Завдання 3
function task3(){
    document.querySelector(".E").innerHTML = Math.E;
    document.querySelector(".PI").innerHTML = Math.PI;
    document.querySelector(".LOG10E").innerHTML = Math.LOG10E;
    document.querySelector(".LOG2E").innerHTML = Math.LOG2E;
    document.querySelector(".LN10").innerHTML = Math.LN10;
    document.querySelector(".LN2").innerHTML = Math.LN2;
    document.querySelector(".SQRT2").innerHTML = Math.SQRT2;
    document.querySelector(".SQRT1_2").innerHTML = Math.SQRT1_2;
    
    document.querySelector(".task1").innerHTML = Math.atan(1);
    document.querySelector(".task2").innerHTML = Math.E**2;
    document.querySelector(".task3").innerHTML = Math.log(Math.E**2);
    document.querySelector(".task4").innerHTML = Math.log10(100);
    document.querySelector(".task5").innerHTML = Math.log2(8);
    
    document.querySelector(".random").innerHTML = Math.random()*1;
    
    function changeWindow(window_) {
        window.location.href = window_;
    }
}