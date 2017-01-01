function off()
{
	document.getElementById("new").innerHTML='' ;
	document.getElementById("goback").innerHTML='' ;
	document.getElementById("dramaintro").innerHTML='';
	document.getElementById("dramabutton").innerHTML='';
	document.getElementById("frame").innerHTML = '';
}function create1()
{
	document.getElementById("new").innerHTML= '<img src="./photo/wakeup.jpg" id="newwindows" />' ;
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《麻醉風暴》<br><span id="English">Wake Up</span></p><p id="introtext">2015年台灣偶像劇。由黃健瑋、吳慷仁、許瑋甯、黃仲崑領銜主演。</p>'
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=wk1() >第一集</a><a href="#" id="partbutton" onclick=wk2() >第二集</a><a href="#" id="partbutton" onclick=wk3() >第三集</a><a href="#" id="partbutton" onclick=wk4() >第四集</a><a href="#" id="partbutton" onclick=wk5() >第五集</a><a href="#" id="partbutton" onclick=wk6() >第六集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/oZnBYUyDp6Y" frameborder="0" allowfullscreen></iframe>';
}

function create2()
{
	document.getElementById("new").innerHTML= '<img src="./photo/bz.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《半澤直樹》<br><span id="English">Hanzawa Naoki</span></p><p id="introtext">本劇描寫於泡沫時期入行的銀行員半澤直樹，與銀行內外的「敵人」戰鬥的故事。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=bz1() >第一集</a><a href="#" id="partbutton" onclick=bz2() >第二集</a><a href="#" id="partbutton" onclick=bz3() >第三集</a><a href="#" id="partbutton" onclick=bz4() >第四集</a><a href="#" id="partbutton" onclick=bz5() >第五集</a><a href="#" id="partbutton" onclick=bz6() >第六集</a><a href="#" id="partbutton" onclick=bz7() >第七集</a><a href="#" id="partbutton" onclick=bz8() >第八集</a><a href="#" id="partbutton" onclick=bz9() >第九集</a><a href="#" id="partbutton" onclick=bz10() >第十集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/uDz4UZYun7I" frameborder="0" allowfullscreen></iframe>';
	
}
function create3()
{
	document.getElementById("new").innerHTML= '<img src="./photo/bc.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《必娶女人》<br><span id="English">Marry Me, or Not?</span></p><p id="introtext">2015年東森電視自製戲劇系列的第二部作品。由邱澤、柯佳嬿、曾之喬、張懷秋領銜主演。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=bc1() >第一集</a><a href="#" id="partbutton" onclick=bc2() >第二集</a><a href="#" id="partbutton" onclick=bc3() >第三集</a><a href="#" id="partbutton" onclick=bc4() >第四集</a><a href="#" id="partbutton" onclick=bc5() >第五集</a><a href="#" id="partbutton" onclick=bc6() >第六集</a><a href="#" id="partbutton" onclick=bc7() >第七集</a><a href="#" id="partbutton" onclick=bc8() >第八集</a><a href="#" id="partbutton" onclick=bc9() >第九集</a><a href="#" id="partbutton" onclick=bc10() >第十集</a><a href="#" id="partbutton" onclick=bc11() >第11集</a><a href="#" id="partbutton" onclick=bc12() >第12集</a><a href="#" id="partbutton" onclick=bc13() >第13集</a><a href="#" id="partbutton" onclick=bc14() >第14集</a><a href="#" id="partbutton" onclick=bc15() >第15集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/NRaoWKt6gLw" frameborder="0" allowfullscreen></iframe>';
	
}
function create4()
{
	document.getElementById("new").innerHTML= '<img src="./photo/itwy.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《我可能不會愛你》<br><span id="English">In Time with You</span></p><p id="introtext">2011年八大電視台自製的台灣偶像劇，由徐譽庭編劇、瞿友寧執導，林依晨、陳柏霖主演。本劇於2011年4月14日正式開拍，4月17日舉行開機儀式，9月8日正式殺青，民視無線台及八大綜合台於2011年9月18日及9月24日首播。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=itwy1() >第一集</a><a href="#" id="partbutton" onclick=itwy2() >第二集</a><a href="#" id="partbutton" onclick=itwy3() >第三集</a><a href="#" id="partbutton" onclick=itwy4() >第四集</a><a href="#" id="partbutton" onclick=itwy5() >第五集</a><a href="#" id="partbutton" onclick=itwy6() >第六集</a><a href="#" id="partbutton" onclick=itwy7() >第七集</a><a href="#" id="partbutton" onclick=itwy8() >第八集</a><a href="#" id="partbutton" onclick=itwy9() >第九集</a><a href="#" id="partbutton" onclick=itwy10() >第十集</a><a href="#" id="partbutton" onclick=itwy11() >第11集</a><a href="#" id="partbutton" onclick=itwy12() >第12集</a><a href="#" id="partbutton" onclick=itwy13() >第13集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/hDFQvvzs5Xg" frameborder="0" allowfullscreen></iframe>';

}
function create5()
{
	document.getElementById("new").innerHTML= '<img src="./photo/love17.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《我和我的十七歲》<br><span id="English">Love @ Seventeen</span></p><p id="introtext">2016年東森電視自製戲劇系列第四部作品。由李國毅、謝欣穎、王家梁、周曉涵、鄭茵聲領銜主演。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=love1() >第一集</a><a href="#" id="partbutton" onclick=love2() >第二集</a><a href="#" id="partbutton" onclick=love3() >第三集</a><a href="#" id="partbutton" onclick=love4() >第四集</a><a href="#" id="partbutton" onclick=love5() >第五集</a><a href="#" id="partbutton" onclick=love6() >第六集</a><a href="#" id="partbutton" onclick=love7() >第七集</a><a href="#" id="partbutton" onclick=love8() >第八集</a><a href="#" id="partbutton" onclick=love9() >第九集</a><a href="#" id="partbutton" onclick=love10() >第十集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/YFso_M969J8" frameborder="0" allowfullscreen></iframe>';
	
}
function create6()
{
	document.getElementById("new").innerHTML= '<img src="./photo/Sakamoto.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《在下坂本，有何貴幹？》<br><span id="English">Havent You Heard? Im Sakamoto</span></p><p id="introtext">縣立學文高中1年2組，那裡有位剛一入學就得到全校注目的男子，他的名字是「坂本」。 得到注目的原因，是因為他行動當中的華麗，他所有的舉動都瀟灑華麗且酷到爆表。這是一部以度過完美無缺學園生活的阪本為中心的人情搞笑漫畫。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=sakamoto1() >第一集</a><a href="#" id="partbutton" onclick=sakamoto2() >第二集</a><a href="#" id="partbutton" onclick=sakamoto3() >第三集</a><a href="#" id="partbutton" onclick=sakamoto4() >第四集</a><a href="#" id="partbutton" onclick=sakamoto5() >第五集</a><a href="#" id="partbutton" onclick=sakamoto6() >第六集</a><a href="#" id="partbutton" onclick=sakamoto7() >第七集</a><a href="#" id="partbutton" onclick=sakamoto8() >第八集</a><a href="#" id="partbutton" onclick=sakamoto9() >第九集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/SuuB6bfjdhs" frameborder="0" allowfullscreen></iframe>';
	
}
function wk1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4HGkLytSmuP7gaClse" allowfullscreen=""></iframe>';
}
function wk2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4pTMwwzKCQYmpaDLrG" allowfullscreen=""></iframe>';
}
function wk3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kRTtOKXiqMxpCGbtntE" allowfullscreen=""></iframe>';
}
function wk4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/ksnEbMmzmDrqbSbtnuC" allowfullscreen=""></iframe>';
}
function wk5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3SdaQjiZSM9DwaGhrJ" allowfullscreen=""></iframe>';
}
function wk6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3wbAF0b592CX9aGZA7" allowfullscreen=""></iframe>';
}
function bz1()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6MGhBOUJST0FsWEE/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz2()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6Y2l6aWprbE9yX1E/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz3()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6ODRwbWtMLVpBQ2M/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz4()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6N1pZVjNmdEpOd0k/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz5()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6MDdTcE1kWWtJUUk/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz6()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6ZUZmVVpVajFKMWc/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz7()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6RkNJVkhkeFpDbTA/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz8()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6Zm84MGxTUzcxOUE/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz9()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6X0ptWDdtY0sxUm8/preview" frameborder="0" allowfullscreen></iframe>';
}
function bz10()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://drive.google.com/file/d/0B7oqC4s3tlI6Q05pY19yX2Y0NXM/preview" frameborder="0" allowfullscreen></iframe>';
}
function bc1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k9JNUQb1zmVYuKdDfqa" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3RKF5g0xD3hxAdDfs2" allowfullscreen=""></iframe>';
}
function bc2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1njgZEOu7Ax2mdKfnC" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k7feAnuU1ZRsfbdKfnS" allowfullscreen=""></iframe>';
}
function bc3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1YCP1qKrNY3gMdRaaE" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2JaZBpkGIA2BHdRaaR" allowfullscreen=""></iframe>';
}
function bc4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k6xl4bEeqgaVQOdZ1jr" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2INxYjS8ddvTEdZ1jG" allowfullscreen=""></iframe>';
}
function bc5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2GaRfL8LEYJkze6HQp" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2p7DP2R1rWK4te6HR1" allowfullscreen=""></iframe>';
}
function bc6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3c5iSL42egMwaedFGK" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kfeGlslDlqmskhedFH8" allowfullscreen=""></iframe>';
}
function bc7()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k5pvMA6xhn55LfejRFd" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3xgLhHmgjhMTSejRFN" allowfullscreen=""></iframe>';
}
function bc8()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kOuZYvsrYmsHXlepBDc" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3TYLdhAy7YV8zepBDE" allowfullscreen=""></iframe>';
}
function bc9()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1yMjp4bWtNv4Peyerf" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k5oC9JmZ3ULzdXeyerG" allowfullscreen=""></iframe>';
}
function bc10()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1JGcCLDqUhFGTeCge1" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kGVfkw3f2WkW7SeCgek" allowfullscreen=""></iframe>';
}
function bc11()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k26SCa6vkCcfNTeJXF1" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4aC3nzbNfyEiBeJXFf" allowfullscreen=""></iframe>';
}
function bc12()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4dHEfhdFVNMSUeSIfB" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1W08vioN7zDGweSIg1" allowfullscreen=""></iframe>';
}
function bc13()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3GNuWaQ5CDGTgf1lCQ" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2MFz0WsOTxvUlf1lDi" allowfullscreen=""></iframe>';
}
function bc14()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2NhO48ESWEuAIf7yhe" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k11XsRcScMBdc1f7yhH" allowfullscreen=""></iframe>';
}
function bc15()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k6hB3kW7mDirDJft11i" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1YlxQozQmpF8bftfK2" allowfullscreen=""></iframe>';
}
function itwy1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1483DlPz2Pp0Y4i410" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2s8HCH7h9F6LG4i47b" allowfullscreen=""></iframe>';
}
function itwy2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1GJbb3CyMultW4i4eM" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2AGxhDp4ezNSK4i4j5" allowfullscreen=""></iframe>';
}
function itwy3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1Cjkbf3K7FrBH4i4pE" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3io4uAD0bdOXE4i4yq" allowfullscreen=""></iframe>';
}
function itwy4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3GmfUNe6axSRO4i4E8" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k7rFO7l5dSLIiu4i4K7" allowfullscreen=""></iframe>';
}
function itwy5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3vIP6nmWZr6gM4i4QK" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kNZxSUZtfouSQp4i4Ve" allowfullscreen=""></iframe>';
}
function itwy6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k57BYDO1jh159H4i51I" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k225OpXCDqMGxU4i57E" allowfullscreen=""></iframe>';
}
function itwy7()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1483DlPz2Pp0Y4i410" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k27tGBYPELgCxA4i5jd" allowfullscreen=""></iframe>';
}
function itwy8()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kD35sRV5FIaEwg4i5Mx" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k6cA0PIwZoOfXx4i5xy" allowfullscreen=""></iframe>';
}
function itwy9()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1e2lsa8QTOcHz4i5DS" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1C5ft1ogUK8al4i5L5" allowfullscreen=""></iframe>';
}
function itwy10()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kYwbijV5b9gcEK4i5WP" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k6OG82E5go1nTq4i652" allowfullscreen=""></iframe>';
}
function itwy11()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kARo6LrUzBaNhL4i6dz" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1FeZPahc0CIfZ4i6qV" allowfullscreen=""></iframe>';
}
function itwy12()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/x2gmd5g" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/x2gmdzz" allowfullscreen=""></iframe>';
}
function itwy13()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/x2gmen8" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/x2gmfnp" allowfullscreen=""></iframe>';
}
function love1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3XZ8YZACeQggKgKaMt" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k8SYbLCCbYHIpogK9u5" allowfullscreen=""></iframe>';
}
function love2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3413749&ref=http://www.acfun.tv/v/ac2677529" allowfullscreen=""></iframe>';
}
function love3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kRE9XP5to77zVJh734O" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2F8mU8IDZw3lJh736f" allowfullscreen=""></iframe>';
}
function love4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3483511&ref=http://www.acfun.tv/v/ac2711531" allowfullscreen=""></iframe>';
}
function love5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3517295&ref=http://www.acfun.tv/v/ac2726128" allowfullscreen=""></iframe>';
}
function love6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3552511&ref=http://www.acfun.tv/v/ac2742962" allowfullscreen=""></iframe>';
}
function love7()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3588211&ref=http://www.acfun.tv/v/ac2760037" allowfullscreen=""></iframe>';
}
function love8()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3623210&ref=http://www.acfun.tv/v/ac2777339" allowfullscreen=""></iframe>';
}
function love9()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3654700&ref=http://www.acfun.tv/v/ac2793556" allowfullscreen=""></iframe>';
}
function love10()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=3682559&ref=http://www.acfun.tv/v/ac2810815" allowfullscreen=""></iframe>';
}
function sakamoto1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B5Rz-UgFJ1DEMkhNelpjZ0MxR00/preview""></iframe>';
}
function sakamoto2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B5Rz-UgFJ1DEU0JlTXVUY0xCWjQ/preview""></iframe>';
}
function sakamoto3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B5Rz-UgFJ1DERmJTSWo4ZUIyZ1k/preview""></iframe>';
}
function sakamoto4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B5Rz-UgFJ1DEcjFMNVQwcEliYkU/preview""></iframe>';
}
function sakamoto5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B9bsrKratUH-eEU2U1NuT3NjMmM/preview""></iframe>';
}
function sakamoto6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B9bsrKratUH-eS0yQ3BnRGctTkk/preview""></iframe>';
}
function sakamoto7()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B9bsrKratUH-bk1xbDV6dDEyNHc/preview""></iframe>';
}
function sakamoto8()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B9bsrKratUH-clBkWWRSX19ZTm8/preview""></iframe>';
}
function sakamoto9()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="https://docs.google.com/file/d/0B9bsrKratUH-OTdGTHRjb0NLQUU/preview""></iframe>';
}