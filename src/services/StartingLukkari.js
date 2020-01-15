const start = 
`<style type="text/css">
.cl-time
{
        height:50px;

}

.cl-col
{
        height:50px;

}


#weekCal
{
        border:1pt solid #666;
        height:650px;
        width:100%;
        table-layout:fixed;


}

.cl-colevents
{
        cursor:default;
        position:relative;
        height:650px;
        margin-bottom:-650px;
}

.cl-hline
{
        height:50px;


}


</style>
<div id="calendarTypeChange"><span style="font-size:10px;">Näytä: </span><span class=" box calendarchangeActive" onclick="updateBasketRaceRemover('saveconfig','calendartype|calendar','tabContent','false','2019-11-25');">Kalenteri</span> <span style="font-size:10px;">|</span>
          <span class="calendarchange" onclick="updateBasketRaceRemover('saveconfig','calendartype|list','tabContent','false','2019-11-25');">Lista</span></div><div id="subTitle" style="margin-bottom:.1em">
        <div class="col50l" style="width:100%"><div style="width:200px;float:left;">    <a href="#" onclick="updateCalendarBase('2019-11-25','-1 week')" title="Edellinen viikko" class="prevArrow"><span>Edellinen</span></a>
                <a href="#" onclick="updateCalendarBase('2019-11-25','+1 week')" title="Seuraava viikko" class="nextArrow"><span>Seuraava</span></a>
                <span id="timePeriod" style="font-size:.9em">Viikko 48</span>&nbsp;</div><div style="width:500px;float:left;"><span ></span><img style="cursor:pointer;" onclick="runcollectingpopup('Suora linkki kalenteriin');" src="images/bookmark-new.png" alt="Suora linkki lukujärjestykseen" /></a></div><input type="button" class="btn small" value="Piilotetut varaukset" style="float:right;margin:.4em;font-size:0.8em" onclick="viewExcludedReservations()"/><input type="button" class="btn small" value="Tulosta" style="float:right;margin:.4em;font-size:0.8em" onclick="window.open('tulostus.php?date=2019-11-25')" target="_blank"/>        </div>
      </div><table border="0" cellpadding="0" cellspacing="0" id="weekCal" width="98%">
  <tr class="cl-Days">
    <td class="cl-timeCol">&nbsp;</td>
<td nowrap="nowrap" class="nd today">Ma 25.11.</td><td nowrap="nowrap" class="nd">Ti 26.11.</td><td nowrap="nowrap" class="nd">Ke 27.11.</td><td nowrap="nowrap" class="nd">To 28.11.</td><td nowrap="nowrap" class="nd">Pe 29.11.</td><tr height="1">
<td class="cl-timeCol"></td>
<td colspan="5">
<div id="cl-hourlinesContainer">
  <div id="cl-hourlines">
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
<div class="cl-hline"></div>
    </div>
</div>
</td>
</tr>
<tr>
    <td class="cl-timeCol">
<div class="cl-time">08:00</div>
<div class="cl-time">09:00</div>
<div class="cl-time">10:00</div>
<div class="cl-time">11:00</div>
<div class="cl-time">12:00</div>
<div class="cl-time">13:00</div>
<div class="cl-time">14:00</div>
<div class="cl-time">15:00</div>
<div class="cl-time">16:00</div>
<div class="cl-time">17:00</div>
<div class="cl-time">18:00</div>
<div class="cl-time">19:00</div>
<div class="cl-time">20:00</div>
   </td>

<td class="cl-col nd"><div class="cl-colevents" id="wd1" clDay="25.11.2019"> 
  </div></div></td><td class="cl-col nd"><div class="cl-colevents" id="wd2" clDay="26.11.2019">  
  </div></div></td><td class="cl-col nd"><div class="cl-colevents" id="wd3" clDay="27.11.2019">  
  </div>    <div class="lds-roller" style="cursor:pointer;top:203px;width:99%;left:20%;"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div></div></td><td class="cl-col nd"><div class="cl-colevents" id="wd4" clDay="28.11.2019">  
  
  </div></div></td><td class="cl-col nd"><div class="cl-colevents" id="wd5" clDay="29.11.2019"> 
  </div></div></td>  </tr>
  </tbody>
</table>

<!--</div>-->
    <script type="text/javascript">
      $('.cl-colevents').click(function(e) {
            var posY = $(this).offset().top;
            var relativePosY = e.pageY - posY;
            var cell = Math.floor(relativePosY / 50);
            loadPopup(e,'kalenteriPaikkaHaku.php?day='+encodeURIComponent($(this).attr('clday'))+'&row='+encodeURIComponent(cell),'Paikkahaku');
        });
    </script><script type="text/javascript">

$(document).ready(function() {miniCalendarToggle(true);});
function update() {
  updateCalendarBase('2019-11-25');
}
</script>`

export default start;