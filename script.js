var map = L.map('map').setView([40.7128, -74.0060], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle1 = L.circle([40.706410, -74.013200], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Food Bank For New York City<br> Address: 39 Broadway - 10th Floor<br>New York NY 10006 <br>Contact Info: www.foodbanknyc.org");

var circle2 = L.circle([40.704190, -74.008220], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Metropolitan New York Coordinating Council on Jewish Poverty, Inc.<br> Address: 77 Water Street Manhattan NY 10005<br>Contact Info: Mr. Aaron Cyperstein<br>   (212) 453-9511<br>acyperstein@metcouncil.org");

var circle3 = L.circle([40.646060, -74.016930], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Academy of Medical and Public Health Services<br>Address: 5306 Third Avenue, 2nd Floor<br>  New York NY 11220<br>  Contact Info:  Mr. Hewett Chiu<br>    (917) 690-0072<br> hewett.chiu@amphsonline.org");

var circle4 = L.circle([40.631010, -73.966740], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: American Council of Minority Women, Inc.<br> Address: 1090 Coney Island Avenue Brooklyn NY 11230<br>Contact Info: Ms Bazah Roohi (347) 865-2769<br>   acmw.ny@gmail.com");

var circle5 = L.circle([40.633890, -74.020510], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Arab American Association of New York, Inc.<br>Address: 6803 5th Avenue  Brooklyn NY 11220<br>Contact Info: Ms Marwa Janini (551) 280-6724<br>marwa@arabamericanny.org");

var circle6 = L.circle([40.579210, -73.981300], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Apna Brooklyn Community Center, Inc.<br>  Address: 1236 Neptune Avenue, 2nd Floor<br> Brooklyn NY 11235<br> Contact Info: Ms Erum Hanif <br>(718) 513-4700<br>erum.hanif@apnabrooklyncommunity.com");

var circle7 = L.circle([40.634120, -74.021110], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Bay Ridge Community Development Center Inc.<br>   Address: 6806 5th Avenue  <br>   Brookyn NY 11220<br>Contact Info: Ms Bibi Esahack (347) 560-6700<br>info@brcdc.org");

var circle8 = L.circle([40.618630, -73.899630], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Bergen Basin Community Development Corporation d/b/a Millennium Development<br> Address: 2331 Bergen Avenue<br> Brooklyn NY 11234<br>Contact Info: Ms Nicholas Miller (718) 444-0101<br> nmiller@milldev.org");

var circle9 = L.circle([40.619530, -73.937470], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Bnai Raphael Chesed Organization, Inc.<br>   Address: 3846 Flatlands Ave. Flr 1<br> Brooklyn NY 11234<br>   Contact Info: Mr. Raphael Hazan (917) 861-7282<br>bnairaphael@yahoo.com");

var circle10 = L.circle([40.636320, -73.990180], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Boro Park Jewish Community Council<br>     Address: 1310 46th Street Brooklyn NY 11219<br> Contact Info: Rabbi Avi Greenstein (718) 972-6600<br> agreenstein@bpjcc.org");

var circle11 = L.circle([40.633800, -73.967020], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Brooklyn Emerge, Inc.<br>   Address: 1001 Newkirk Ave <br>    Brooklyn NY 11230<br>   Contact Info: Mr. Salman Rehman (929) 308-9191<br> salman@brooklynemerge.org");

var circle12 = L.circle([40.669070, -73.983780], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Camp Friendship, Inc.<br> Address: 339 8th Street<br> Brooklyn NY 11215<br> Contact Info: Ms Soni Saluja  (646) 591-5635<br>soninder@gmail.com");

var circle13 = L.circle([40.678430, -73.917830], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Campaign Against Hunger, Inc., The<br> Address: 2010 Fulton Street<br> Brooklyn NY 11233<br> Contact Info: Dr. Melony Samuels (718) 773-3551<br>msamuels@tcahnyc.org");

var circle14 = L.circle([40.652050, -74.004770], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Center for Family Life in Sunset Park, Inc.<br> Address: 443 39th Street<br>Brooklyn NY 11232<br>Contact Info: Ms Julia Jean-Francois (718) 438-9500<br>j.jean-francois@centerforfamilylife.org");

var circle15 = L.circle([40.692830, -73.991790], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Catholic Charities Neighborhood Services, Inc.<br>Address: 191 Joralemon Street<br>Brooklyn NY 11201<br>Contact Info: Reverend Alfred LoPinto (718) 722-6087<br> LOPINTO@ccbq.org");

var circle16 = L.circle([40.610480, -73.980440], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Chinese American Social Services Center, Inc.<br>Address: 124 Avenue O<br>Brooklyn NY 11204<br>Contact Info: Yan Shan Wu (718) 975-0955<br>124cass@gmail.com");

var circle17 = L.circle([40.695190, -73.932180], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Collective Focus Resource Hub, Inc.<br>Address: 1046 Broadway<br>Brooklyn NY 11221<br>Contact Info: Ms Briana Calderon (941) 504-4411<br> info@collectivefocus.site");

var circle18 = L.circle([40.678350, -73.982850], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Community Help in Park Slope, Inc.<br>Address: 200 Fourth Avenue<br>Brooklyn NY 11217<br> Contact Info: Ms. Sandra Hagan, LMSW (718) 237-2962<br>sandy@chipsonline.org");

var circle19 = L.circle([40.636950, -73.979790], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Cong Chasdei Lev<br>Address: 1573 39th Street<br>Brooklyn NY 11218<br>Contact Info: Mr. Naftali Miller (718) 831-2500<br> office@chasdeilev.org");

var circle20 = L.circle([40.618430, -73.959330], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Council of Jewish Organizations of Flatbush, Inc.<br> Address: 1523 Avenue M, 3rd Floor <br>Brooklyn NY 11230<br>Contact Info: Mr. Louis Welz (718) 377-2900<br>lwelz@jewishcouncil.org");

var circle21 = L.circle([40.631220, -73.966180], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Council of Peoples Organization, Inc.<br>Address: 1081 Coney Island Avenue<br>Brooklyn NY 11230<br>Contact Info: Mr. Mohammad Razvi (718) 434-3266<br>mrazvi@copo.org");

var circle22 = L.circle([40.665280, -73.942840], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Crown Heights Jewish Community Council, Inc.<br> Address: 392 Kingston Ave<br>Brooklyn NY 11225<br> Contact Info: Mr. Eli Cohen (718) 771-9000<br>ecohen@chjcc.org");

var circle23 = L.circle([40.663330, -73.939830], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Crown Heights Preservation Committee Corporation<br>Address: 483 Albany Avenue<br>Brooklyn NY 11203<br>Contact Info:  Rabbi Shimon Herz (718) 774-9213<br> sherz@chjcc.org");

var circle24 = L.circle([40.668758, -73.908752], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Elite Learners, Inc.<br>Address: 45 Belmont Ave.<br>Brooklyn NY 11212<br>Contact Info: Ms Camara Jackson (347) 742-7913<br>cjackson@elitelearners.org");

var circle25 = L.circle([40.683900, -73.909380], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Family Services Network of New York, Inc.<br>Address: 1420 Bushwick Avenue<br>Brooklyn NY 11207<br>Contact Info: Dr. Benjamin Igwe (718) 455-6010<br>bigwe@fsnny.org");

var circle26 = L.circle([40.637070, -74.026380], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Grandma's Love, Inc.<br>Address: 261 68th Street<br>Brooklyn NY 11220<br>Contact Info:<br>Ms Theresa Monforte-Caraballo (347) 662-6230<br>Theresa@grandmasloveinc.org");

var circle27 = L.circle([40.619980, -73.933510], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Grant House Unity Corp. <br> Address: 2049 Flatbush Avenue<br>Brooklyn NY 11234<br>Contact Info: Mr. Ben DiCostanzo (718) 266-9700<br>granthouseunity@gmail.com");

var circle28 = L.circle([40.632640, -73.891050], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Hebrew Educational Society<br> Address: 9502 Seaview Avenue<br>Brooklyn NY 11236<br>Contact Info:  Ms Moshit Rivkin (718) 241-3000<br>Moshit@thehes.org");

var circle29 = L.circle([40.660570, -73.702960], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: IGUD Harabonim of America, Inc.<br>Address: 11 Sunrise Plaza, Suite 305<br>Brooklyn NY 11580<br>Contact Info: Rabbi Moshe Schmerler (833) 722-4483<br>rabbi@igud.org");

var circle30 = L.circle([40.651460, -73.885800], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Jewish Community Council of Canarsie, Inc.<br>Address: 1170 Pennsylvania Avenue, Suite 1B<br>Brooklyn NY 11239<br>Contact Info: Mr. Avrohom Hecht (718) 495-6210<br>projectlead09@gmail.com");

var circle31 = L.circle([40.572690, -74.002080], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Jewish Community Council of Greater Coney Island, Inc.<br> Address: 3001 West 37th Street<br>Brooklyn NY 11224<br> Contact Info: Rabbi Moshe Wiener (718) 449-5000<br>  m.wiener@jccgci.org");

var circle32 = L.circle([40.598720, -73.941330], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Kings Bay YM-YWHA, Inc.<br>Address: 3495 Nostrand Avenue<br>Brooklyn NY 11229<br>Contact Info: Mr. Leonard Petlakh (718) 648-7703<br>lpetlakh@kingsbayy.org");

var circle33 = L.circle([40.698500, -73.915930], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Make the Road New York<br>Address: 301 Grove St.<br> Brooklyn NY 11237<br>Contact Info: Mr. Derik Mendez 866-365-2724 Ext 4<br>Derik.Mendez@maketheroadny.org");

var circle34 = L.circle([40.632360, -73.995540], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Masbia of Boro Park<br> Address: 5402 New Utrecht Ave<br> Brooklyn NY 11219<br>Contact Info: Mr. Alexander Rapaport (718) 972-4446<br>alex@masbia.org");

var circle35 = L.circle([40.624050, -73.965400], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Masbia of Flatbush<br>Address: 1372 Coney Island<br> Brooklyn NY 11230<br>Contact Info: Mr. Alexander Rapaport (718) 972-4446<br>alex@masbia.org");

var circle36 = L.circle([40.660110, -73.994200], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider:  Mixteca Organization, Inc.<br>Address: 245 23rd Street, 2nd floor<br>Brooklyn NY 11215<br> Contact Info: Ms Lorena Kourousias (718) 896-5479<br> lkouousias@mixteca.org");

var circle37 = L.circle([40.676640, -73.870530], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider:  Muna Social Services, Inc.<br>Address: 464 Crescent Street<br> Brooklyn NY 11208<br>Contact Info: Dr. Jahangir Kabir (516) 864-5078<br> jkabir@munassinc.org");

var circle38 = L.circle([40.619030, -73.933400], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: New York United Jewish Association, Inc.<br> Address: 2076 Flatbush Avenue<br> Brooklyn NY 11234<br>Contact Info: Mr. Michael Rinkoff (718) 407-1832<br>mendy@jccmp.org");

var circle39 = L.circle([40.706610, -73.944130], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Trinity Human Services Corporation<br>Address: 153 A Johnson Avenue<br>Brooklyn NY 11206<br>Contact Info: Miss Victoria Kamungu (718) 388-3176<br>victoriasfmatrinity@gmail.com");

var circle40 = L.circle([40.632200, -73.966360], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Pakistani American Youth Organization, Inc.<br> Address: 1045 Coney Island Avenue<br> Brooklyn NY 11230<br>Contact Info: Mr. Waqil Ahmed (718) 713-2000<br>info@payousa.org");

var circle41 = L.circle([40.633800, -73.967020], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Pakistani American Youth Society<br>Address: 1001 Newkirk Avenue<br>Brooklyn NY 11230<br> Contact Info: Mr. Kashif Hussain (646) 262-4551<br> payouthsociety@gmail.com");

var circle42 = L.circle([40.633520, -73.967410], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: People In Need, Inc.<br> Address: 944 Newkirk Avenue<br>Brooklyn NY 11230<br>Contact Info: Mrs. NOWSHIN ALI (917) 615-8206<br> peopleinneednyc@gmail.com");

var circle43 = L.circle([40.604620, -73.974870], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: SBH Community Service Network, Inc.<br>Address: 425 Kings Hwy<br> Brooklyn NY 11223-1629<br>Contact Info: Mr. Andrey Oliskevich (718) 787-1100<br>Andrey@sbhonline.org");

var circle44 = L.circle([40.688020, -73.997010], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Seeds in the Middle<br> Address: 153 Warren Street<br>Brooklyn NY 11201<br>Contact Info Ms Nancie Katz (917) 697-3745<br>nancie@seedsinthemiddle.org");

var circle45 = L.circle([40.704950, -73.955960], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Southside Community Mission, Inc.<br>Address: 280 Marcy Avenue<br> Brooklyn NY 11211<br>Contact Info: Ms Gertrudis Duran (718) 782-8181<br>250hooperst@gmail.com");

var circle46 = L.circle([40.706900, -73.951720], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Southside United Housing Development Fund Corporation<br> Address: 434 S 5th St<br> Brooklyn NY 11211<br>Contact Info: Mr. Juan Ramos (718) 387-3600<br>jramos@lossures.org");

var circle47 = L.circle([40.706610, -73.944130], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Trinity Human Services Corporation<br>Address: 153 A Johnson Avenue<br>Brooklyn NY 11206<br>Contact Info: Miss Victoria Kamungu (718) 388-3176<br> victoriasfmatrinity@gmail.com");

var circle48 = L.circle([40.700180, -73.960960], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: United Jewish Organizations of Williamsburg, Inc.<br>Address: 32 Penn Street<br> Brooklyn NY 11249<br> Contact Info: Mr. David Katz (718) 643-9700<br> dkatz@unitedjewish.org");

var circle49 = L.circle([40.700680, -73.981390], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Vinegar Hill Food Pantry<br> Address: 228 York St.<br>Brooklyn NY 11201<br>  Contact Info: Ms Jennifer Macksoud (908) 403-5755<br>vinegarhillfoodpantry@gmail.com");

var circle50 = L.circle([40.617320, -74.005500], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Brooklyn)</b><br>Provider: Women’s Empowerment Coalition of New York City<br> Address: 1437 77th Street<br>Brooklyn NY <br>Contact Info: Ms Somia El-Rowmeim (347) 666-7722<br> somia@wecnyc.org");

var circle51 = L.circle([40.854790, -73.866050], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: Albanian & American Open Hand Association<br>Address: 2141 Holland Avenue, Suite ML<br>Bronx NY 10462<br>Contact Info: Mr. Aleksander Nilaj (347) 658-8000<br>aaoha.org@gmail.com");

var circle52 = L.circle([40.850890, -73.908120], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: BronxWorks, Inc.<br>Address: 60 East Tremont Avenue<br>Bronx NY 10453<br>Contact Info: Ms Eileen Torres (646) 393-4023<br>etorres@bronxworks.org");

var circle53 = L.circle([40.815000, -73.915520], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: Destination Tomorrow, Inc.<br> Address: 452 East 149th Street 3rd Floor<br>Bronx NY 10455<br>Contact Info: Mr. Sean Coleman (646) 723-3325<br>sean@destinationtomorrow.org");

var circle54 = L.circle([40.854300, -73.900810], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: Gambian Youths Organization, The<br> Address: 214 E 181st<br>Bronx NY 10457<br>Contact Info: Mr. Salim Drammeh (347) 963-2878<br> salim.drammeh5@gmail.com");

var circle55 = L.circle([40.877590, -73.900730], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: Kingsbridge Heights Community Center, Inc.<br>Address: 3101 Kingsbridge Terrace<br>Bronx NY 10463<br>Contact Info: Raye Barbieri (718) 884-0700<br>development@khcc-nyc.org");

var circle56 = L.circle([40.865750, -73.886560], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: Part of the Solution<br>Address: 2759 Webster Ave<br>Bronx NY 10458<br>Contact Info: Mr Christina Hanson (718) 329-7151<br> chanson@potsbronx.org");

var circle57 = L.circle([40.832900, -73.889000], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: The Union Grove Baptist Church<br>Address: 1488 Hoe Ave. <br>Bronx NY 10460<br>Contact Info: Mr. Joseph Alston (347) 590-3881<br>jalston@ugmbc-ny.org");

var circle58 = L.circle([40.825080, -73.892270], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Bronx)</b><br>Provider: Urban Health Plan, Inc.<br> Address: 1065 Southern Blvd<br>Bronx NY 10459<br> Contact Info: Jamine Williams (347) 302-5562<br>Jamine.Williams@urbanhealthplan.org");

var circle59 = L.circle([40.640690, -74.076030], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: Community Health Action of Staten Island, Inc.<br> Address: 56 Bay Street, 4th Floor<br>  Staten Island NY 10301<br>Contact Info: Ms Diane Arneth (718) 808-1401<br> diane.arneth@chasiny.org");

var circle60 = L.circle([40.632520, -74.120020], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: Dr. Theodore A. Atlas Foundation, Inc.<br> Address: 543 Cary Avenue<br> Staten Island NY 10310<br>Contact Info: Mrs. Sharon Curry (718) 980-7037<br>sharonc@dratlasfoundation.com");


var circle61= L.circle([40.594730, -74.126198], {
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: Jewish Community Center of Staten Island, Inc.<br> Address: 1466 Manor Road<br>Staten Island NY 10314<br> Contact Info:  Mrs. Orit Lender (718) 475-5227<br>  olender@sijcc.com");


var circle62= L.circle([40.634190, -74.136320], {
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: Meals on Wheels of Staten Island, Inc.<br> Address: 304 Port Richmond Avenue<br>Staten Island NY 10302<br>Contact Info: Mr. Joseph Tornello (718) 727-4435<br>jtornello@mealsonwheelsofsi.org");


var circle63= L.circle([40.599450, -74.134890], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: Tomchei Shabbos of Staten Island<br>  Address: 22 Niles Place<br>Staten Island NY 10314<br> Contact Info: Mr. Milton Pfeiffer (718) 761-8905<br> pfeif8993@msn.com");

var circle64= L.circle([40.525720, -74.215940], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: University of Notre Dame Alumni Club of Staten Island<br> Address: 64 Bloomingdale Road<br>  Staten Island NY 10309<br>Contact Info: Mr. Joseph Delaney (718) 967-9825<br> Jodelaney@deloitteretired.com");

var circle65= L.circle([40.625360, -74.144560], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Staten Island)</b><br>Provider: Staten Island Community Job Center, Inc.<br>    Address: 774 Port Richmond Avenue<br>Staten Island NY 10302<br>Contact Info:  Mrs. Yesenia Mata (773) 931-2635<br> yesenia@lacolmenanyc.org");

var circle66= L.circle([40.697090, -73.747020], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Mt. Moriah AME Church<br> Address: 116-20 Francis Lewis Blvd<br>Queens NY 11411<br>  Contact Info: Dr. Barbra Talley (718) 276-1750<br> btalley@moriahcity.org");

var circle67= L.circle([40.729670, -73.823890], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: CHAZAQ Organization USA, Inc.<br> Address:  141-24 Jewel Ave<br>Flushing NY 11367<br>   Contact Info: Mr. Israel Peskowitz  (718) 285-9132<br> community@chazaq.org");

var circle68= L.circle([40.753740, -73.818110], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: South Asian Council for Social Services<br> Address:  143-02 45th Ave<br>Flushing NY 11355<br>     Contact Info: Ms Sudha Acharya (718) 888-0866<br>  sudha@sacssny.org");

var circle69= L.circle([40.758050, -73.818770], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Young Women's Christian Association of Queens <br>   Address:  42-07 Parsons Blvd <br>Flushing NY 11355<br> Contact Info: Mrs. Liceth Turo-Garcia (718) 353-4553 <br> ltgarcia@ywcaqueens.org");

var circle70= L.circle([40.714330, -73.831910], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Queens Jewish Community Council, Inc.<br>Address:  119-45 Union Turnpike<br>Forest Hills NY 11375<br>  Contact Info: Mayer Waxman (718) 544-9033<br> mwaxman@qjcc.org");

var circle71= L.circle([40.715040, -73.831530], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Queens Law Associates Not-For-Profit Corporation<br> Address:  118-21 Queens Blvd<br>  Forest Hills NY 11375<br> Contact Info: Mr. Brian Schatz  (929) 343-5733<br>  bschatz@queensdefenders.org");

var circle72= L.circle([40.720140, -73.807430], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: American Pakistani Advocacy Group Cares Inc.<br> Address:  159-16 Union Turnpike<br>Fresh Meadows NY 11366<br>Contact Info: Mr. Malik Hashim (347) 596-7202<br> apagcares@gmail.com");

var circle73= L.circle([40.734190, -73.635810], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: SCO Family of Services<br>Address: 1415 Kellum Place, Suite 140<br> Garden City NY 11530<br>  Contact Info:  Mr. Leslie Johnson  (718) 312-5850<br>MJukoski@sco.org");

var circle74= L.circle([40.706620, -73.755620], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Mt. Olivet Baptist Church of Hollis<br>Address: 202-03  Hollis Ave<br>Hollis NY 11412<br>Contact Info: Dr. Frankco Harris (718) 465-3746<br>fharris@mobch.org");

var circle75= L.circle([40.746590, -73.894200], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: New Immigrant Community Empowerment (NICE)<br>Address: 71-29 Roosevelt Avenue<br> Jackson Heights NY 11372<br>      Contact Info: Ms Vanessa Marquez (914) 316-4600<br>vanessa@nynice.org");

var circle76= L.circle([40.699540, -73.898140], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: The Greater Ridgewood Youth Council, Inc.<br> Address: 5903 Summerfield Street<br> Ridgewood NY 11385<br>  Contact Info: Mrs. Michelle Koch (718) 456-5437<br>mkoch@thegryc.org");

var circle77= L.circle([40.697680, -73.806550], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Greater Bethel Community Development Corporation<br>  Address:  95-26 Sutphin Boulevard, Suite B<br>    Jamaica NY 11435<br>  Contact Info: Dr. Maria Hubbard (718) 350-9949<br> mhub133061@aol.com");

var circle78= L.circle([40.714030, -73.828000], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Queens Economic Development Corporation<br> Address:  120-55 Queens Blvd. Suite 309<br>Kew Gardens NY 11424<br>Contact Info: Mr. Seth Bornstein  (718) 263-0546<br> sbornstein@queensny.org");

var circle79= L.circle([40.704010, -73.823250], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: TSQ, Inc.<br>Address: 129-01 Metropolitan Avenue<br>    Kew Gardens NY 11415<br>  Contact Info: Mr. Isaac Katz (718) 850-8070<br>info@tsqinc.org");

var circle90= L.circle([40.741210, -73.907000], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: New York Edge, Inc.<br> Address: 58-12 Queens Blvd<br>  Queens NY 11377<br>Contact Info: Ms Rachael Gazdick (347) 417-8150<br> rgazdick@newyorkedge.org");

var circle91= L.circle([40.736170, -73.850150], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Queens Community House, Inc.<br>Address: 108-25 62nd Drive<br>   Queens NY 11375<br> Contact Info: Mr. Anne M.  Foerg (718) 592-5757<br>afoerg@qchnyc.org");

var circle92= L.circle([40.761000, -73.723330], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Samuel Field YM & YWHA, Inc.Inc.<br> Address: 58-20 Little Neck Pkwy<br> Little Neck NY 11362<br>Contact Info: (718) 225-6750<br>dellman@commonpointqueens.org");

var circle93= L.circle([40.756000,-73.942140], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: East River Development Alliance, Inc.<br>   Address: 12-•11 40th Avenue<br> Long Island City NY 11101<br> Contact Info: Mr. Carlos Cano 646) 657-6727<br>  carlos@urbanupbound.org");

var circle94= L.circle([40.750520,-73.934410], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Fortune Society, Inc., The<br> Address: 29-76 Northern Boulevard<br>Long Island City NY 11101<br> Contact Info: Mr. Brian Robinson (347) 510-3613<br>brobinson@fortunesociety.org");

var circle95= L.circle([40.746790,-73.928280], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: The Migrant Kitchen Incorporated<br> Address: 41-15 36th Street<br> Long Island City NY 11101<br>  Contact Info: Ms Jaclinn Tanney (845) 641-4051<br>Jaclinn@themigrantkitchennyc.com");

var circle96= L.circle([40.730369,-73.892207], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Maspeth Town Hall, Inc.<br>   Address: 53-37 72nd Street<br>  Maspeth NY 11378<br>Contact Info:<br>  Mrs. Eileen Reilly<br> (718) 335-6049<br>eileen.reilly@maspethtownhall.org");

var circle97= L.circle([40.734190,-73.678820], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: ICNA Relief USA Programs, Inc.<br>Address: 1529 Jericho Turnpike, Suite # 1<br> New Hyde Park NY 11040<br>Contact Info: Ms Shumaila Siddiqui (718) 249-9992<br>shumaila.noor@icnarelief.org");

var circle98= L.circle([40.741210,-73.907000], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: New York Edge, Inc.<br>Address: 58-12 Queens Blvd<br> Queens NY 11377<br>  Contact Info: Ms Rachael Gazdick (347) 417-8150<br>  rgazdick@newyorkedge.org");

var circle99= L.circle([40.594330,-73.796080], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Battalion Pentecostal Assembly, Inc.<br>      Address: 454 Beach 67th Street<br>  Arvene NY 11692<br> Contact Info: Mr. David T. Cockfield (718) 634-7172<br>  dcockfield@bparock.org");

var circle100= L.circle([40.771010,-73.786480], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Queens)</b><br>Provider: Korean Community Services of Metropolitan New York, Inc.<br>  Address: 203-05 32nd Ave<br>  Bayside NY 11361<br> Contact Info: Mrs. Myoungmi Kim (718) 939-6137<br> mkim@kcsny.org");

var circle101= L.circle([40.858130,-73.935590], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Cabrini Immigrant Services of New York City, Inc.<br> Address: 701 Ft. Washington Ave<br> New York NY 10040<br>Contact Info: Ms Ella Nimmo (212) 791-4590<br> ellanimmo@cis-nyc.org");

var circle102= L.circle([40.757400,-73.963870], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Catholic Charities Community Services, Archdiocese of New York<br>Address: 1011 First Avenue, 6th Floor<br> New York NY 10022-4112<br>Contact Info:  Ms Beatriz Diaz Taveras (646) 794-2438<br>Beatriz.diaztaveras@archny.org");

var circle103= L.circle([40.748360,-73.991770], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Chai Lifeline, Inc.<br>    Address: 151 West 30th Street<br>New York NY 10001<br>Contact Info: Ms Leah Bloch (212) 699-6608<br> lbloch@chailifeline.org");

var circle104= L.circle([40.720150,-73.995040], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Chinese American Planning Council, Inc.<br> Address: 150 Elizabeth Street<br>New York NY 10012<br>Contact Info: Mr. Carlyn Cowen (212) 941-0920<br>ccowen@cpc-nyc.org");

var circle105= L.circle([40.749360,-73.998980], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Church of the Holy Apostles<br>Address: 296 9th Avenue<br> New York NY 10001<br> Contact Info: Mr. Michael Ottley (646) 998-6105<br> mottley@holyapostlesnyc.org");

var circle106= L.circle([40.648390,-74.019410], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: City Harvest, Inc.<br>Address: 150 52nd street<br> New York NY 11232<br>Contact Info:  Ms Jenna Gaglione (203) 885-9520<br>jgaglione@cityharvest.org");

var circle107= L.circle([40.750160,-73.976470], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: CityMeals on Wheels<br>Address: 355 Lexington Avenue<br> New York NY 10017<br>Contact Info: Ms Rachel Sherrow (646) 866-6289<br>rachel@citymeals.org");

var circle108= L.circle([40.710320,-74.007520], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Coalition for the Homeless, Inc.<br> Address: 129 Fulton Street<br> New York NY 10038<br>Contact Info: Mr Dave Giffen (212) 776-2004<br>dgiffen@cfthomeless.org");

var circle109= L.circle([40.834160,-73.941460], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider:  Community League of the Heights, Inc.<br> Address: 500 West 159 Street<br> New York NY 10032<br>Contact Info: Ms Yvonne Stennett (212) 795-4779<br>ystennett@cloth159.org");

var circle110= L.circle([40.710140,-74.003220], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Council on the Environment, Inc.<br>Address: 100 Gold St<br> New York NY 10038<br>Contact Info: Mr. Nick (212) 788-7900<br> nrolf@grownyc.org");

var circle111= L.circle([40.853800,-73.928170], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Dominican Women's Development Center, Inc.<br>Address: 519 W. 189th Street<br>New York NY 10040<br>Contact Info: Mrs. Rosita Romero (212) 994-6060<br> rromero@dwdc.org");

var circle112= L.circle([40.792680,-73.972690], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Evangelical Lutheran Church of the Advent<br>Address: 2504 Broadway<br>New York NY 10025<br>Contact Info: Reverend Danielle Miller (212) 665-2504<br> pastordanielle@adventnyc.org");

var circle113= L.circle([40.725470,-73.974730], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Father's Heart Ministries, The<br>   Address: 543-545 East 11th Street<br>New York NY 10009<br>Contact Info: Mrs. Marian Hutchins (212) 375-1765<br>marianhutchins@fathersheartnyc.org");

var circle114= L.circle([40.725720,-74.003740], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: God's Love We Deliver, Inc.<br> Address: 166 Avenue of the Americas<br>New York NY 10013<br> Contact Info: Ms Karen Pearl (212) 294-8194<br> kpearl@glwd.org");

var circle115= L.circle([40.807320,-73.942780], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Harvest Home Farmer's Market, Inc.<br> Address: 18 west 126th Street<br>New York NY 10027<br>Contact Info: Ms Maritza Owens (212) 828-3361<br>maritzao@hrvesthomefm.org");

var circle116= L.circle([40.714100,-73.984390], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Henry Street Settlement<br> Address: 265 Henry Street<br> New York NY 10002<br>Contact Info: Mr. David Garza (212) 766-9200<br> dgarza@henrystreet.org");

var circle117= L.circle([40.729900,-73.992580], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Hetrick-Martin Institute, Inc.<br>Address: 2 Astor Place<br> New York NY 10003<br> Contact Info:  Mr. Joe Pressley (212) 674-2600<br>jpressley@hmi.org");

var circle118= L.circle([40.706220,-74.010750], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Hispanic Federation, Inc.<br> Address:  55 Exchange Place, Suite 501<br> New York NY 10005<br> Contact Info:  Mr. Frankie Miranda (212) 233-8955<br>fmiranda@hispanicfederation.org");

var circle119= L.circle([40.723480,-73.976580], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider:  Lower East Side Girls Club of New York, Inc., The<br>Address: 101 Avenue D<br> New York NY 10009<br> Contact Info: Ms Bessie Taliaferro (513) 560-7770<br>bessie.taliaferro@girlsclub.org");

var circle120= L.circle([40.752560,-73.992740], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Lantern Community Services<br>  Address: 494 8th Avenue, 20th Floor <br>  New York NY 10001<br> Contact Info: Ms Peggy Leggat (212) 398-3073<br>PLeggat@lanterncommunity.org");

var circle121= L.circle([40.708550,-74.014970], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Metropolitan College of New York <br>Address: 60 West Street <br>New York NY 10006<br> Contact Info: Dr. Joanne Passaro (212) 343-1234 <br> jpassaro@mcny.edu");

var circle122= L.circle([40.821590,-73.927540], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (Bronx)</b><br>Families<br> Intake Facility for Families with Minor Children and Pregnant Women<br>  Prevention Assistance and Temporary<br> Housing Office (PATH):<br>151 E. 151st St., Bronx<br>Subway: 2, 4 or 5 to 149th St. - Grand Concourse.");

var circle123= L.circle([40.739890,-73.974580], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (Manhattan)</b><br>Families<br>Intake Facility for Adult Families with No Children<br> New York City Department of Homeless Services<br>Adult Family Intake Center (AFIC):<br>400-430 East 29th St., Manhattan<br>Subway: 6 to 28th St.");

var circle124= L.circle([40.741020,-73.975230], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (New York)</b><br>Single Adults<br>Men<br>All single adult males must apply at:<br>30th Street Intake Center<br>400-430 East 30th Street <br>  New York, NY<br>30th Street is open 24 hours per day, including weekends and holidays.<br>  How to Get There:<br>Subway: Take the 6 train to 28th Street. Walk east to 1st Avenue,<br> turn left, and go north to 30th Street. <br>Entrance is now at 30th Street and 1st Avenue.");

var circle125= L.circle([40.673160,-73.900540], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (Brooklyn)</b><br>Single Adults<br>Women<br>All single adult women must apply at one of the following locations:<br>HELP Women's Shelter<br>116 Williams Avenue (between Liberty Avenue and Glenmore Avenue) <br>Brooklyn, NY<br>   How to Get There: <br> Subway: Take the C train to Liberty Avenue.");

var circle126= L.circle([40.828040,-73.906070], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (Bronx)</b><br>Single Adults<br>Women<br>Franklin Shelter<br>1122 Franklin Avenue (near 166th Street) <br> Bronx, NY<br> How to Get There: <br> Take the 2 train to 149th Street, followed by the #55 bus to 166th Street and 3rd Avenue.");

var circle127= L.circle([40.758663,-73.995806], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (New York)</b><br>Covenant House<br>460 West 41st Street, New York (between Ninth Avenue and Tenth Avenue)<br>(212) 613-0300");

var circle128= L.circle([40.724190,-74.004570], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (New York)</b><br>The Door<br>  555 Broome Street, New York (between Sixth Avenue and Varick Street)<br>(646) 600-7412");

var circle129= L.circle([40.682430,-73.937940], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (Brooklyn)</b><br>Missionaries of Charity (Mothers and children)<br>  262 Macon Street, Brooklyn (between Throop Avenue and Marcus Garvey Blvd.)<br>(718) 453-7428");

var circle130= L.circle([40.724640,-73.521590], {
color: 'blue',
fillColor: 'blue',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Shelter (New York)</b><br>MOMMAS House (Mothers and children)<br> 3100 Hempstead Turnpike, Levittown, New York (Hempstead Turnpike/Southberry Ln)<br>(516) 781-8637");

var circle131= L.circle([40.816818,-73.889816], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Bronx)</b><br>The living room health center<br> Tuesday & Thursday 8 a.m-4 p.m.<br>  800 Barretto Street, Bronx, NY 10474<br>Open Access");


var circle132= L.circle([40.816980,-73.922650], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Bronx)</b><br>MORRIS AVENUE SAFE HAVEN AND HEALTH CENTER<br>TBD<br>528 Morris Avenue, Bronx, NY, USA<br>Open Access");

var circle133= L.circle([40.850410,-73.910830], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Bronx)</b><br>SUSAN’S PLACE HEALTH CENTER<br>  Monday-Thursday 9am-7pm, Friday 9am-6pm<br>1911-21 Jerome Avenue, Bronx, NY 10453, USA<br> Open Access ");

var circle134= L.circle([40.865750,-73.886560], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Bronx)</b><br>POTS HEALTH CENTER<br>Monday-Friday 8am-4pm<br>2759 Webster Avenue, Bronx, NY 10458<br> Soup Kitchen Services Available");

var circle135= L.circle([40.807070,-73.965090], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Manhattan)</b><br>BROADWAY PRESBYTERIAN CHURCH<br>601 West 114th Street, New York, NY, 10025<br> Open Access & Soup Kitchen Services");

var circle136= L.circle([40.784960,-73.980010], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Manhattan)</b><br>ALL ANGEL’S CHURCH<br> 251 West 80th Street, New York, NY, 10024<br>Open Access");

var circle137= L.circle([40.704930,-73.798720], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Brooklyn)</b><br>CITADEL HEALTH CENTER<br>  Monday-Thursday 9am-4:30pm<br>90-23 161st Street, Jamaica, NY 11432<br> Open Access");

var circle138= L.circle([40.690319,-73.928917], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Brooklyn)</b><br>ST. JOHN’S HEALTH CENTER<br>Monday-Friday 8am-4pm<br>795 Lexington Avenue, Brooklyn, NY 11221<br>  Soup Kitchen Services Available");

var circle139= L.circle([40.673160,-73.903810], {
color: '#194a12',
fillColor: '#194a12',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Health Center (Brooklyn)</b><br>CARE FOUND HERE – JUNIUS STREET<br> Monday - Friday 9 a.m. - 5 p.m.<br>81 Junius Street, Brooklyn, NY 11212, USA<br>Open Access");

var circle140= L.circle([40.840500,-73.897760], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Bronx)</b><br>Crotona Park<br> Crotona Park Community Center<br>1700 Fulton Avenue<br> Bronx, NY 10457<br>(718) 822-4440");

var circle141= L.circle([40.877590,-73.900730], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Bronx)</b><br>Kingsbridge Heights<br>Kingsbridge Heights Community Center<br> 3101 Kingsbridge Terrace<br>Bronx, NY 10463<br>(718) 884-0700");

var circle142= L.circle([40.830850,-73.924900], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Bronx)</b><br>T. Wendell Foster Park<br>  Supportive Children's Advocacy Center - New York<br>40 E. 164th Street<br> Bronx, NY 10452<br>(212) 289-8030");

var circle143= L.circle([40.607860,-73.937450], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Brooklyn)</b><br>Marine Park<br>Carmine Carro Community Center<br>3000 Fillmore Avenue<br>Brooklyn, NY 11229<br>718-336-0275");

var circle144= L.circle([40.618570,-73.899570], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Brooklyn)</b><br>McGuire Park<br>John Malone Community Center<br>2335 Bergen Avenue<br>Brooklyn, NY 11234<br>  (718) 444-0101");

var circle144= L.circle([40.720310,-73.992280], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Manhattan)</b><br>Sara D. Roosevelt Park<br> Bowery Residents Committee<br>30 Delancey Street<br> New York, NY 10002<br> (212) 803-5700");

var circle145= L.circle([40.757320,-73.860600], {
color: '#8f4800',
fillColor: '#8f4800',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Community Center (Queens)</b><br>Louis Armstrong Community Center<br> Elmcor Youth and Adult Activities<br> 33-16 108 St.<br> Corona, NY 11368<br> (718) 651-0096");

var circle146= L.circle([40.7958,-73.949210], {
color: '#00eeff',
fillColor: '#00eeff',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Free Shower (Manhattan)</b><br>New York Common Pantry<br>8 East 109th Street<br>New York, NY 10029<br> Email Contact@Ny-CommonPantry.org");

var circle147= L.circle([40.7452,-73.981480], {
color: '#00eeff',
fillColor: '#00eeff',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Free Shower (Manhattan)</b><br>Grand Central Neighborhood Social Services Corporation & Mainchance Drop-In Center<br> 120 East 32nd Street<br>New York, NY 10016");

var circle148= L.circle([40.865750,-73.886560], {
color: '#00eeff',
fillColor: '#00eeff',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Free Shower (Bronx)</b><br>Part of the Solution<br>2759 Webster Avenue<br>Bronx, NY 10458<br>Call 718-220-4892<br> Call if you have any questions before visiting.<br> Email information@potsbronx.org<br> Email for more information.");

var circle149= L.circle([40.860970,-73.928590], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Uplift NYC, Inc.<br>Address: 73 Elwood street suite 1B<br> New York NY 10040<br>Contact Info: Mr. Domingo Estevez Jr. (917) 826-0224<br>domingo@upliftnyc.us");

var circle150= L.circle([40.718890,-73.986800], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Asian Americans For Equality, Inc.<br>  Address: 108 Norfolk Street, Ground Floor<br> New York NY 10002<br> Contact Info: Mr. Thomas Yu (646) 970-6805<br> thomas_yu@aafe.org");

var circle151= L.circle([40.770950,-73.980840], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Young Men's Christian Association of Greater New York<br> Address:  5 W. 63rd Street, 6th Floor<br> New York NY 10023<br> Contact Info: Mr. Michael Rivadeneyra (212) 630-9717<br>mrivadeneyra@ymcanyc.org");

var circle152= L.circle([40.788950,-73.977300], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: West Side Center for Community Life, Inc. <br>Address: 263 West 86th Street <br>New York NY 10024<br> Contact Info: Mr. Kira Garfinkel (212) 362-3662<br>kgarfinkel@wscah.org");

var circle153= L.circle([40.760840,-73.982410], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Volunteers of America - Greater New York, Inc.<br>Address: 135 W. 50th Street<br> New York NY 10020<br>Contact Info: Mr. Daniel Lombardo (212) 469-4304<br>dlombardo@voa-gny.org");

var circle154= L.circle([40.749770,-73.973190], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Visiting Nurse Service of New York Home Care II<br>Address: 220 East 42nd Street<br> New York NY 10017<br>Contact Info: Mr. James Farrell (516) 424-6663<br> james.farrell@vnshealth.org");

var circle155= L.circle([40.714130,-73.987780], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Vision Urbana, Inc.<br>Address: 207-209 East Broadway<br>New York NY 10002<br>Contact Info: Mr. Eric Diaz (646) 626-9748<br> eric@visionurbana.org");

var circle156= L.circle([40.714770,-73.983930], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: United Jewish Council of the East Side, Inc.<br>   Address: 465 Grand Street<br>  New York NY 10002<br> Contact Info: Ms Betsy Jacobson (917) 542-1266<br> bjacobson@ujces.org");

var circle157= L.circle([40.726040,-73.980190], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Trinity's Services and Food for the Homeless, Inc.<br>  Address:  602 E. 9th Street<br> New York NY 10009<br> Contact Info: Mr. Alex Lawrence (212) 228-5254<br> alex@safhnyc.org");

var circle158= L.circle([40.704680,-74.011250], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Rethink Food NYC, Inc.<br> Address: 75 Broad St, Suite 707 Floor 7<br> New York NY 10004<br>Contact Info: Ms Kathleen DiPerna (212) 364-7040<br> kathleend@rethinkfood.org");

var circle159= L.circle([40.757320,-73.994270], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Rauschenbusch Metro Ministries, Inc. <br>  Address: 410 W. 40th Street<br> New York NY 10018<br>Contact Info: Ms Tiffany Henkel (212) 594-4464<br>thenkel@mbcnyc.org");

var circle160= L.circle([40.739319,-73.989357], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Phipps Neighborhoods, Inc.<br>  Address: 902 Broadway<br> New York NY 10010<br>  Contact Info: Mr. Andre White (646) 388-8233<br> andre.white@phippsny.org");

var circle161= L.circle([40.815380,-73.954580], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Palante Harlem, Inc.<br>    Address: 1411 Amsterdam Avenue, Ground Floor<br>New York NY 10027<br>Contact Info: Ms Elsia Vasquez (212) 491-2541<br>elsia.vasquez@palanteharlem.org");

var circle162= L.circle([40.795800,-73.949210], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: New York Common Pantry, Inc.<br> Address: 8 East 109th Street <br>New York NY 10029<br> Contact Info:<br> Mr. Stephen Grimaldi <br> (917) 720-9701 <br>  sgrimaldi@nycommonpantry.org");

var circle163= L.circle([40.744580,-73.990410], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: New Alternatives for Children, Inc.<br>Address:  37 West 26th Street<br> New York NY 10010<br>Contact Info:<br>Ms Lara Foster<br>(917) 464-5212<br>lfoster@NacKidsCan.org");

var circle164= L.circle([40.725470,-73.974730], {
color: 'red',
fillColor: 'red',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Food Pantry (Manhattan)</b><br>Provider: Nazareth Housing, Inc.<br>  Address: 519 East 11th St. <br> New York NY 10009<br>Contact Info:<br>Ms Rachel Levine<br>(646) 713-2729<br>rlevine@nazarethhousingnyc.org");

var circle165= L.circle([40.819240,-73.913970], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Bronx)</b><br>The Door<br>2999 Third Avenue, Bronx NY 10455<br>(646) 230-1037<br>Mon-Fri 9 AM-5PM");

var circle166= L.circle([40.660770,-73.908640], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Brooklyn)</b><br>SCO Family Services<br>774 Rockaway Avenue, Brooklyn, NY 11211<br>(718) 685 -3850<br> 24/7");

var circle167= L.circle([40.755250,-73.992150], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Manhattan)</b><br>Ali Forney Center<br>307 W 38th Street, New York, NY 10018<br>(212) 206-0574<br> 24/7");

var circle168= L.circle([40.724220,-74.005173], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Manhattan)</b><br>The Door<br>555 Broome Street, New York, NY 10013<br> (646) 690-8986<br> Mon-Fri 9 AM-6PM<br>Sat: 10 AM-6PM");

var circle169= L.circle([40.809290,-73.948680], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Manhattan)</b><br>Safe Horizon Streetwork Harlem<br>  209 West 125th Street, New York, NY 10027<br> (212) 695-2220<br>Mon, Tues, Thurs-Sun 10 AM-6PM");

var circle170= L.circle([40.705780,-73.794440], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Queens)</b><br>Rising Ground<br> 165-13 Jamaica Avenue, 2nd Floor, Jamaica, NY 11432<br> (718) 526-2400 ext. 2080<br> 24/7");

var circle171= L.circle([40.605400,-73.752350], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Queens)</b><br>Rising Ground<br> (Far Rockaway Site)<br> 1600 Central Avenue<br>Far Rockaway, NY 11691<br> (646) 518 - 1202<br>  Mon-Thurs 12 PM-8 PM<br>  Fri: 11 AM-7PM, Sat: 11 AM - 7 PM ");

var circle172= L.circle([40.639940,-74.131720], {
color: '#3f0561',
fillColor: '#3f0561',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Mental Health Hub (Staten Island)</b><br>Project Hospitality<br> 27 Port Richmond Avenue, Staten Island, NY 10302<br>(718) 876-4752<br> 24/7");

var circle173= L.circle([40.848782,-73.894012], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Bronx)</b><br>Crotona SNAP Center: <br>   Address: 1910 Monterey Avenue, 5th Fl., Bronx, NY 10457<br>Monday – Friday 8:30am to 5:00pm");

var circle174= L.circle([40.817810,-73.890770], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Bronx)</b><br>Hunts Point SNAP Center:<br> Address: 845 Barretto Street, B-Level Fl., Bronx, NY 10474<br> Work Requirements (8:30am to 9:00am only)<br> Monday – Friday 8:30am to 5:00pm");

var circle175= L.circle([40.576220,-73.986210], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Broooklyn)</b><br>Coney Island SNAP Center:<br> Address: 1912 Mermaid Avenue, 1st & 2nd Fl., Brooklyn, NY 11224<br>  Monday - Friday 8:30am to 5:00pm");

var circle176= L.circle([40.675770,-73.871231], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Brooklyn)</b><br>East New York SNAP Center: <br>   Address: 404 Pine Street, 1st Fl., Brooklyn, New York 11208<br>Monday – Friday 8:30am to 5:00pm");

var circle177= L.circle([40.700040,-73.932730], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Brooklyn)</b><br>Williamsburg SNAP Center: <br>     Address: 2 George Street, 1st Fl., Brooklyn, NY 11206<br>Monday – Friday 8:30am to 5:00pm");

var circle178= L.circle([40.804790,-73.935471], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Manhattan)</b><br>East End SNAP Center: <br>     Address: 2322 Third Avenue, 3rd Fl., New York, NY 10035<br> Monday – Friday 8:30am to 5:00pm");

var circle179= L.circle([40.870071,-73.913689], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Manhattan)</b><br>Washington Heights SNAP Center: <br>     Address: 4055 10th Avenue, Lower Level, New York, NY 10034<br> Monday – Friday 8:30am to 5:00pm");

var circle180= L.circle([40.735600,-73.988220], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Manhattan)</b><br>SNAP services are available at HRA Benefits Access Center Lower Manhattan: <br>    Address: 109 E. 16th Street, New York, NY 10003<br>Monday - Friday 8:30am to 5:00pm");

var circle181= L.circle([40.808110,-73.947380], {
color: '#ff00ee1',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Manhattan)</b><br>SNAP services are available at HRA Benefits Access Center St. Nicholas: <br> Address: 132 W. 125th Street, New York, NY 10027<br>  Monday - Friday 8:30am to 5:00pm");

var circle182= L.circle([40.708771,-73.795898], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Queens)</b><br>Jamaica SNAP Center: <br>  Address: 165-08 88th Avenue, 3rd Fl., Jamaica, NY 11432<br>   Monday - Friday 8:30am to 5:00pm");

var circle183= L.circle([40.751800,-73.931220], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Queens)</b><br>Queens SNAP Center:<br> Address: 32-20 Northern Blvd., 2nd Fl., LIC, NY 11101<br>   (Entrance on One Honeywell Street)<br>Monday – Friday 8:30am to 5:00pm");

var circle184= L.circle([40.592701,-73.789413], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Queens)</b><br>Rockaway SNAP Center: <br>  Address: 219 Beach 59th Street, 1st Fl., Rockaway, NY 11692<br>    Monday – Friday 8:30am to 5:00pm");

var circle185= L.circle([40.637409,-74.075897], {
color: '#ff00ee',
fillColor: '#ff00ee',
fillOpacity: 0.5,
radius: 40
}).addTo(map).bindPopup("<b>Snap Center (Staten Island)</b><br>Richmond SNAP Center: <br>     Address: 201 Bay Street, 2nd Fl., Staten Island, NY 10301<br> Monday – Friday 8:30am to 5:00pm");



// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Define circle markers with popups for each resource
var resources = [
  { coords: [40.752560, -73.992740], color: 'red', popup: "<b>Food Pantry (Manhattan)</b><br>Provider: Lantern Community Services<br>Address: 494 8th Avenue, 20th Floor<br>New York NY 10001<br>Contact Info: Ms Peggy Leggat (212) 398-3073<br>PLeggat@lanterncommunity.org" },
  { coords: [40.708550, -74.014970], color: 'red', popup: "<b>Food Pantry (Manhattan)</b><br>Provider: Metropolitan College of New York<br>Address: 60 West Street<br>New York NY 10006<br>Contact Info: Dr. Joanne Passaro (212) 343-1234<br>jpassaro@mcny.edu" },
  // Add more resources here...
];

// Add circle markers to the map
resources.forEach(resource => {
  L.circle(resource.coords, {
    color: resource.color,
    fillColor: resource.color,
    fillOpacity: 0.5,
    radius: 40
  }).addTo(map).bindPopup(resource.popup);
});

// Add geocoder control to the map
var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false
}).on('markgeocode', function(e) {
  var latlng = e.geocode.center;
  L.marker(latlng).addTo(map);
  map.setView(latlng, 11);
}).addTo(map);

// Add custom search bar for coordinates
var searchBar = L.control({ position: 'topright' });
searchBar.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'search-bar');
  div.innerHTML = '<input type="text" id="coordinates" placeholder="Enter coordinates (lat, lon)" style="padding: 5px; width: 200px;"/>';
  div.innerHTML += '<button onclick="zoomToCoordinates()" style="padding: 5px;">Search</button>';
  return div;
};
searchBar.addTo(map);

window.zoomToCoordinates = function() {
  var input = document.getElementById('coordinates').value;
  var coords = input.split(',').map(Number);
  if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
    map.setView(coords, 14);
    L.marker(coords).addTo(map).bindPopup(`Coordinates: ${coords[0]}, ${coords[1]}`).openPopup();
  } else {
    alert('Please enter valid coordinates in the format: lat, lon');
  }
};

// Add legend to the map
var legend = L.control({ position: 'bottomright' });
legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend');
  var resourceTypes = ["Food Pantry", "Shelter", "Health Center","Snap Center", "Community Center", "Free Shower","Mental Health Hub"];
  var colors = ['red', 'blue', '#194a12','#ff00ee', '#8f4800', '#00eeff','#3f0561'];

  for (var i = 0; i < resourceTypes.length; i++) {
    div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + resourceTypes[i] + '<br>';
  }
  return div;
};
legend.addTo(map);
