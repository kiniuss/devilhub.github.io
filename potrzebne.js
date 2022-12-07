



window.onload = function() {
    var audio = new Audio('assets/sound/bruh.mp3');
  audio.play()
  };
  
  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
      alert("DevilHub © | Wszelkie Prawa Zastrzeżone!")
       return false;
      
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      alert("DevilHub © | Wszelkie Prawa Zastrzeżone!")
       return false;
       
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      
      alert("DevilHub © | Wszelkie Prawa Zastrzeżone!")
       return false;
    }if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {alert("DevilHub © | Wszelkie Prawa Zastrzeżone!")
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      alert("DevilHub © | Wszelkie Prawa Zastrzeżone!")
       return false;
    }
  }
  
am = "DevilHub © | Wszelkie Prawa Zastrzeżone!";

// ===========================
bV  = parseInt(navigator.appVersion)
bNS = navigator.appName=="Netscape"
bIE = navigator.appName=="Microsoft Internet Explorer"

function nrc(e) {
   if (bNS && e.which > 1){
      alert(am)
      return false
   } else if (bIE && (event.button >1)) {
     alert(am)
     return false;
   }
}

document.onmousedown = nrc;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (bNS && bV<5) window.onmousedown = nrc;


var browser = navigator.userAgent;
var ie = 0;
if (browser.indexOf("MSIE") != -1 && browser.indexOf(") ") == -1) ie = parseFloat(browser.substring(browser.indexOf("MSIE")+4));

var id_status_blink = 0;
function status_blink(txt)
{
	window.status = txt;
	if (!txt) id_status_blink = setTimeout('status_blink("KLIKNIJ WEWNĄTRZ OKNA PRZEGLĄDARKI !!!!!")', 250);
	else id_status_blink = setTimeout('status_blink("")', 1500);
	return true;
}

function blur_ie()
{
	document.all["body"].style.visibility = "hidden";
	clipboardData.clearData();
	status_blink("");
}

function focus_ie()
{
	document.all["body"].style.visibility = "visible";
	if (id_status_blink) clearTimeout(id_status_blink);
	window.status = '';
	return true;
}

if (ie >= 5)
{
	window.onblur = blur_ie;
	window.onfocus = focus_ie;
}

var t=' Wyt metśkic eokelnj oywtspęjucą enzka ioztsła yazimneoienp rama i  -apzrsyetz n eiapzrsyytim .oPswat łetsk trtduynd  odozctynaai , aabdrozł taywd  odookodawin.aS rkpy tamp zr yyt mpsro ąazelęt- j se tysemrtcynz.yP dotswap doz  imneąnt t ketsj wayn ,rucuoh mksyrtp ,kspoui jezs rtno yywin kejogd izłanaai(  etsk tazzsfyorawyn ) ikwel jodz imneen j t wokzdeis rtno.yB<>RwUga:ap  maęiat,jż  erpezlgdąraikn eiw śyiwtealąjn eitkrócy hnzkawó , aikkl apscaijw  syętupąjychcp  oosib eazimneaiąjn  aejnd.ąD aletogp zrdes yzrfwonaei mbojeim  jksyrtpz anzcinakim& tlP;ERg&;t<.RBT>nes rkpy tejtst lyokp  goąlodyw mrpyzłkdamei w t kap ortsjef roim eomeżn eis rpwazdćis ęiw p artkcynzcy  haztssowonaaihc.';
var dlt=t.length;
for (i=1;i<=dlt;i+=2)
{ window.document.write(t.charAt(i));
  window.document.write(t.charAt(i-1));
};


function fnOstrzegam()
var inf='Kto bez uprawnienia zwielokrotnia cudzy utwór, podlega karze pozbawienia wolności do lat 2. Potwierdzam, że jestem tego świadomy';
{ do
  { wynik=window.prompt('Napisz: '+inf,'');
  }
  while (wynik!=inf);
};
