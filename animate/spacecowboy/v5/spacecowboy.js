(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"spacecowboy_atlas_", frames: [[0,918,1195,931],[0,0,1240,916]]},
		{name:"spacecowboy_atlas_2", frames: [[0,895,1200,654],[0,0,1197,893]]},
		{name:"spacecowboy_atlas_3", frames: [[927,1782,48,48],[977,1782,48,48],[198,1176,326,21],[2041,52,2,1],[0,784,1202,146],[0,932,1201,137],[627,1768,74,45],[1799,1043,37,17],[1144,1125,22,13],[1444,1767,71,53],[1135,1071,66,52],[1186,673,11,11],[703,1768,58,43],[1944,1749,72,55],[2036,571,10,12],[1418,1224,208,208],[2047,39,1,1],[1980,1096,64,45],[2030,204,14,30],[960,1120,42,23],[1346,1401,39,26],[1125,1401,59,27],[2001,571,33,13],[1186,662,15,9],[2001,412,39,80],[1106,593,10,7],[1151,662,33,80],[1842,1706,28,79],[0,1152,196,37],[0,1199,244,22],[1981,956,62,62],[532,1742,20,93],[1889,0,150,161],[1203,1066,651,79],[0,1071,651,79],[1563,1569,167,170],[1889,163,139,139],[417,1605,135,135],[1294,1588,138,136],[279,1605,136,135],[840,1605,116,121],[554,1605,137,133],[1732,1569,140,135],[2001,304,47,106],[2013,1380,32,80],[1517,1767,31,82],[894,1728,31,82],[1809,1706,31,82],[1979,1380,32,80],[121,1683,137,77],[1979,1328,64,50],[2007,1143,39,65],[2001,494,41,75],[763,1768,39,63],[2030,163,16,39],[1033,1120,27,21],[246,1199,27,21],[1091,1120,27,21],[1004,1120,27,21],[1062,1120,27,21],[526,1152,106,61],[958,1605,42,60],[0,1683,119,92],[2041,38,4,6],[1681,593,112,120],[2041,21,5,7],[1135,1684,82,103],[1732,1706,75,89],[1049,1684,84,101],[1151,593,48,67],[1856,1043,122,94],[2041,30,4,6],[554,1740,71,77],[1556,1741,71,77],[960,1071,173,47],[653,1147,675,75],[1330,1147,675,75],[1042,1434,519,75],[0,1374,519,75],[521,1451,519,75],[521,1374,519,75],[0,1224,707,71],[709,1224,707,71],[0,1528,505,75],[507,1528,505,75],[0,1297,519,75],[521,1297,519,75],[1204,876,594,93],[1203,971,594,93],[1042,1511,519,75],[0,1451,519,75],[1106,0,781,326],[1219,1726,174,39],[1042,1297,362,102],[1395,1726,159,39],[1628,1361,349,102],[817,1071,141,71],[1563,1465,312,102],[1800,782,179,259],[1219,1767,118,39],[1339,1767,103,39],[121,1762,129,39],[398,1742,132,39],[260,1742,136,39],[0,0,1104,600],[0,602,1149,180],[252,1783,43,35],[2030,268,12,29],[2030,236,13,30],[2041,0,5,19],[1681,715,105,114],[1948,1224,98,102],[1243,1401,49,30],[1889,304,54,22],[1981,1020,47,19],[52,1777,56,42],[1945,304,47,21],[1106,328,687,263],[1014,1588,278,94],[2041,55,1,1],[2044,55,1,1],[2047,42,1,1],[2045,52,1,1],[2047,36,1,1],[2047,33,1,1],[2047,55,1,1],[2041,58,1,1],[2047,30,1,1],[2044,58,1,1],[2047,58,1,1],[1042,1401,81,30],[2041,46,5,1],[2041,49,5,1],[693,1716,119,50],[1628,1224,318,135],[1219,1684,72,32],[1151,744,50,37],[1944,1657,101,90],[275,1199,22,21],[693,1605,145,109],[0,1605,277,76],[1681,831,116,37],[198,1152,315,22],[1204,593,475,281],[1795,587,247,193],[1434,1588,126,136],[814,1728,78,75],[1874,1657,68,167],[1980,1043,68,51],[381,1783,40,33],[1168,1125,24,8],[341,1783,38,36],[653,1071,162,68],[1186,1401,55,28],[1120,1125,22,15],[0,1777,50,48],[297,1783,42,34],[1795,328,204,257],[1981,782,54,172],[958,1684,89,96],[1877,1465,165,190],[1629,1741,80,55],[1294,1401,50,29],[2018,1749,30,30]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CachedTexturedBitmap_1529 = function() {
	this.initialize(ss["spacecowboy_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1530 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1531 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1533 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1534 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1535 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1536 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1537 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1538 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1539 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1540 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1541 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1542 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1543 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1544 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1545 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1546 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1547 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1548 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1549 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1550 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1551 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1552 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1553 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1554 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1555 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1556 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1557 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1558 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1559 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1560 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1561 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1562 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1563 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1564 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1565 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1566 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1567 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1568 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1569 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1570 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1571 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1572 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1573 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1574 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1575 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1576 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1577 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1578 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1579 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1580 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1581 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1582 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1583 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1584 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1585 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1586 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1590 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1591 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1592 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1593 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1594 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1595 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1596 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1597 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1598 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1599 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1600 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1601 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1602 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1603 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1604 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1605 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1606 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1607 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1608 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1609 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1610 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1611 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1612 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1613 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1614 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1615 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1616 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1617 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1618 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1619 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1620 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1621 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1622 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1623 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1624 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1625 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1626 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1627 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1628 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1629 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1630 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1631 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1632 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1633 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1634 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1635 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1636 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1637 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1638 = function() {
	this.initialize(ss["spacecowboy_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1639 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1640 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1641 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1642 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1643 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1644 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1645 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1646 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1647 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1648 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1649 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1650 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1651 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1652 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1653 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1678 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1679 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1681 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1685 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1686 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1687 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1688 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1689 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1698 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1700 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1701 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1702 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1703 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1704 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1705 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1706 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1707 = function() {
	this.initialize(ss["spacecowboy_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1708 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1709 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1710 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1711 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1712 = function() {
	this.initialize(ss["spacecowboy_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1713 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1714 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1715 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1716 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1717 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1718 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1719 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1720 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1721 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1722 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1723 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1724 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1725 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1726 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1727 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1728 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1729 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1730 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1731 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1732 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1733 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1734 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1735 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1736 = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.CrispySmall = function() {
	this.initialize(ss["spacecowboy_atlas_3"]);
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wormupperbody02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1736();
	this.instance.parent = this;
	this.instance.setTransform(-16.6,-6.4,0.5263,0.5263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-6.4,26.3,15.3);


(lib.wormmidbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1735();
	this.instance.parent = this;
	this.instance.setTransform(-13.75,-9.55,0.3438,0.3438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.5,27.5,18.9);


(lib.wormheadup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1734();
	this.instance.parent = this;
	this.instance.setTransform(-25.65,-29.6,0.3113,0.3113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-29.6,51.3,59.2);


(lib.wormheadside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1733();
	this.instance.parent = this;
	this.instance.setTransform(-29.25,-31.55,0.6583,0.6583);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-31.5,58.599999999999994,63.2);


(lib.wormheaddown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1732();
	this.instance.parent = this;
	this.instance.setTransform(8.7,-35.75,0.2477,0.2477);

	this.instance_1 = new lib.CachedTexturedBitmap_1731();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.2,-29.55,0.2477,0.2477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-35.7,50.599999999999994,69.80000000000001);


(lib.wormhands02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1730();
	this.instance.parent = this;
	this.instance.setTransform(-12.6,-10.25,0.6058,0.6058);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-10.2,25.5,20.6);


(lib.wormhand02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1729();
	this.instance.parent = this;
	this.instance.setTransform(-4.35,-4.25,0.1759,0.1759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.2,8.8,8.4);


(lib.wormhand01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1728();
	this.instance.parent = this;
	this.instance.setTransform(-6.85,-4.55,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-4.5,13.7,9.4);


(lib.wormbodyupper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1727();
	this.instance.parent = this;
	this.instance.setTransform(-13.05,-9.5,0.6579,0.6579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-9.5,36.2,18.4);


(lib.wormbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1726();
	this.instance.parent = this;
	this.instance.setTransform(-23.95,-8.95,0.295,0.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-8.9,47.8,20);


(lib.wormarms01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1725();
	this.instance.parent = this;
	this.instance.setTransform(-10.15,-9.55,0.5361,0.5361);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.5,20.299999999999997,19.3);


(lib.wormarm04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1723();
	this.instance.parent = this;
	this.instance.setTransform(-14.4,-11.8,0.7196,0.7196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-11.8,28.8,23.8);


(lib.wormarm03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1722();
	this.instance.parent = this;
	this.instance.setTransform(-11,-8.35,0.3267,0.3267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-8.3,22.2,16.6);


(lib.wormarm02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1721();
	this.instance.parent = this;
	this.instance.setTransform(-5.2,-12.8,0.1535,0.1535);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-12.8,10.5,25.700000000000003);


(lib.wormarm01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1720();
	this.instance.parent = this;
	this.instance.setTransform(-10.55,-10,0.2697,0.2697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10,21,20.3);


(lib.wheel01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1719();
	this.instance.parent = this;
	this.instance.setTransform(-52.25,-51,0.8334,0.8334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-51,105,113.4);


(lib.wagonpod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1718();
	this.instance.parent = this;
	this.instance.setTransform(-31.9,-117.05,0.8334,0.8334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-117,205.9,160.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1714();
	this.instance.parent = this;
	this.instance.setTransform(-69.3,-19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-19,138.5,38);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1713();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-45.45,0.8334,0.8334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-45.4,120.9,90.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CrispySmall();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.swirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1712();
	this.instance.parent = this;
	this.instance.setTransform(-265.25,-195.8,0.4276,0.4276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-195.8,530.3,391.70000000000005);


(lib.Star02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1711();
	this.instance.parent = this;
	this.instance.setTransform(-11.4,-11.1,1.0504,1.0504);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-11.1,23.1,22.1);


(lib.Star01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1710();
	this.instance.parent = this;
	this.instance.setTransform(-22.95,-20.5,0.4554,0.4554);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-20.5,46,41);


(lib.spade02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1709();
	this.instance.parent = this;
	this.instance.setTransform(-17,-12.55,0.6861,0.6861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12.5,34.3,25.4);


(lib.spade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1708();
	this.instance.parent = this;
	this.instance.setTransform(-18.65,-8.15,0.5151,0.5151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-8.1,37.1,16.5);


(lib.Ship_Jet01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1706();
	this.instance.parent = this;
	this.instance.setTransform(-68.3,-8.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-8.7,159,67.5);


(lib.roundedBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.RikShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1705();
	this.instance.parent = this;
	this.instance.setTransform(-29.7,-12.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-12.5,59.5,25);


(lib.PlanetDistance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1652();
	this.instance.parent = this;
	this.instance.setTransform(-171.85,-65.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.8,-65.6,343.5,131.5);


(lib.nut02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1651();
	this.instance.parent = this;
	this.instance.setTransform(-11.7,-5.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-5.2,23.5,10.5);


(lib.nugget06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1650();
	this.instance.parent = this;
	this.instance.setTransform(-14,-10.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-10.5,28,21);


(lib.nugget05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1649();
	this.instance.parent = this;
	this.instance.setTransform(-11.75,-4.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-4.7,23.5,9.5);


(lib.nugget04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1648();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-5.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-5.3,27,11);


(lib.nugget03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1647();
	this.instance.parent = this;
	this.instance.setTransform(-12.3,-7.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-7.4,24.5,15);


(lib.monstermainbody02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1646();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-25.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.4,49,51);


(lib.monstermainbody01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1645();
	this.instance.parent = this;
	this.instance.setTransform(-24.45,-26.4,0.4648,0.4648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-26.4,48.8,53);


(lib.monsterleg03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1644();
	this.instance.parent = this;
	this.instance.setTransform(-1.35,-4.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-4.8,2.5,9.5);


(lib.monsterleg02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1643();
	this.instance.parent = this;
	this.instance.setTransform(-3.25,-7.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-7.6,6.5,15);


(lib.monsterleg01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1642();
	this.instance.parent = this;
	this.instance.setTransform(-3.1,-6.9,0.5017,0.5017);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-6.9,6,14.600000000000001);


(lib.monsterarm01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1641();
	this.instance.parent = this;
	this.instance.setTransform(-10.8,-8.8,0.5008,0.5008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-8.8,21.6,17.6);


(lib.LoadingBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1639();
	this.instance.parent = this;
	this.instance.setTransform(-279.3,-151.7,0.5063,0.5063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.3,-151.7,559,303.79999999999995);


(lib.Horseturn07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1605();
	this.instance.parent = this;
	this.instance.setTransform(-1.3,10.85,0.7974,0.7974);

	this.instance_1 = new lib.CachedTexturedBitmap_1604();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.6,-37.55,0.7974,0.7974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-37.5,97.30000000000001,74.9);


(lib.Horseturn05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1603();
	this.instance.parent = this;
	this.instance.setTransform(-24.45,-40,0.7664,0.7664);

	this.instance_1 = new lib.CachedTexturedBitmap_1602();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.95,-37.35,0.7664,0.7664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-40,64.4,80.1);


(lib.Horseturn04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1601();
	this.instance.parent = this;
	this.instance.setTransform(-33.55,-40.1,0.8983,0.8983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-40.1,67.3,80);


(lib.Horseturn03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1600();
	this.instance.parent = this;
	this.instance.setTransform(-31.95,-39.95,0.7764,0.7764);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-39.9,63.599999999999994,79.9);


(lib.Horseturn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1599();
	this.instance.parent = this;
	this.instance.setTransform(-9.8,4.5,0.6543,0.6543);

	this.instance_1 = new lib.CachedTexturedBitmap_1598();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.6,-39.25,0.6543,0.6543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-39.2,73.30000000000001,78.5);


(lib.Horseturn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1597();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,10.9,0.8169,0.8169);

	this.instance_1 = new lib.CachedTexturedBitmap_1596();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.6,-37.55,0.8169,0.8169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-37.5,97.2,75.1);


(lib.horseneck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1595();
	this.instance.parent = this;
	this.instance.setTransform(-16,-26.15,0.8399,0.8399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-26.1,35.3,50.400000000000006);


(lib.horsehead01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1594();
	this.instance.parent = this;
	this.instance.setTransform(-50.75,-29.15,0.9627,0.9627);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-29.1,102,58.7);


(lib.horseeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1586();
	this.instance.parent = this;
	this.instance.setTransform(45.7,-39.45,0.8431,0.8431);

	this.instance_1 = new lib.CachedTexturedBitmap_1593();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.7,-39.45,0.8431,0.8431);

	this.instance_2 = new lib.CachedTexturedBitmap_1592();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.7,-39.45,0.8431,0.8431);

	this.instance_3 = new lib.CachedTexturedBitmap_1591();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45.7,-39.45,0.8431,0.8431);

	this.instance_4 = new lib.CachedTexturedBitmap_1590();
	this.instance_4.parent = this;
	this.instance_4.setTransform(45.7,-39.45,0.8431,0.8431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.7,-39.4,22.799999999999997,17.7);


(lib.horsecontrol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1585();
	this.instance.parent = this;
	this.instance.setTransform(-7.55,-19,0.9698,0.9698);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-19,15.5,37.8);


(lib.horseblit05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1584();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-24.1,0.7686,0.7686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-24.1,30,48.400000000000006);


(lib.horseblit02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1583();
	this.instance.parent = this;
	this.instance.setTransform(-9,-16.35,0.4366,0.4366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-16.3,17.9,32.7);


(lib.horseblit01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1582();
	this.instance.parent = this;
	this.instance.setTransform(-15,-23.05,0.7126,0.7126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-23,27.8,46.3);


(lib.horsearm04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1581();
	this.instance.parent = this;
	this.instance.setTransform(-13.85,-10.45,0.4167,0.4167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-10.4,26.6,20.8);


(lib.horse01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1580();
	this.instance.parent = this;
	this.instance.setTransform(-61.65,-41.55,1.0114,1.0114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-41.5,138.5,77.9);


(lib.headturn07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1579();
	this.instance.parent = this;
	this.instance.setTransform(-9.75,-24.4,0.6125,0.6125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-24.4,19.6,49);


(lib.headturn05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1578();
	this.instance.parent = this;
	this.instance.setTransform(-9.55,-25.1,0.6126,0.6126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-25.1,19,50.3);


(lib.headturn03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1577();
	this.instance.parent = this;
	this.instance.setTransform(-9.55,-25.15,0.6122,0.6122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-25.1,19,50.2);


(lib.headturn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1576();
	this.instance.parent = this;
	this.instance.setTransform(-9.45,-24.95,0.6125,0.6125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-24.9,19,50.2);


(lib.headturn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1575();
	this.instance.parent = this;
	this.instance.setTransform(-9.7,-24.35,0.6121,0.6121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-24.3,19.6,48.900000000000006);


(lib.Headfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1574();
	this.instance.parent = this;
	this.instance.setTransform(-25.45,-57.25,1.0818,1.0818);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-57.2,50.8,114.6);


(lib.Hatturn08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1573();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-48.8,0.723,0.723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-48.8,101.2,97.6);


(lib.Hatturn06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1572();
	this.instance.parent = this;
	this.instance.setTransform(-49.6,-48.15,0.7231,0.7231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-48.1,99.1,96.1);


(lib.Hatturn04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1571();
	this.instance.parent = this;
	this.instance.setTransform(-47.7,-49.45,0.8209,0.8209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-49.4,95.30000000000001,99.3);


(lib.Hatturn03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1570();
	this.instance.parent = this;
	this.instance.setTransform(-49.2,-48.9,0.723,0.723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-48.9,98.30000000000001,97.6);


(lib.Hatturn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1569();
	this.instance.parent = this;
	this.instance.setTransform(-49.65,-49.2,0.7228,0.7228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-49.2,99.7,98.30000000000001);


(lib.Hatturn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1568();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,-48.85,0.7229,0.7229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-48.8,97.6,97.6);


(lib.Hatdefault = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1567();
	this.instance.parent = this;
	this.instance.setTransform(-48.4,-52.2,0.7225,0.7225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-52.2,100.5,100.5);


(lib.glass01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1566();
	this.instance.parent = this;
	this.instance.setTransform(-69.75,-70.75,0.8334,0.8334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-70.7,139.10000000000002,141.60000000000002);


(lib.Gamename = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.CachedTexturedBitmap_1564();
	this.instance.parent = this;
	this.instance.setTransform(-118.95,5.35,0.3621,0.3621);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.CachedTexturedBitmap_1565();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121.95,3.3,0.3621,0.3621);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,3.3,238.7,30.7);


(lib.Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1563();
	this.instance.parent = this;
	this.instance.setTransform(-34.15,-32.5,0.3825,0.3825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-32.5,57.3,61.6);


(lib.Flame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1562();
	this.instance.parent = this;
	this.instance.setTransform(-4.05,0,0.4248,0.4248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,8.5,39.5);


(lib.FireBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1561();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5194,0.5194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,32.2);


(lib.cowboyleg01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1558();
	this.instance.parent = this;
	this.instance.setTransform(-12.7,-40.65,1.0306,1.0306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-40.6,28.9,81.4);


(lib.cowboyhead04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1557();
	this.instance.parent = this;
	this.instance.setTransform(-10.05,-24.5,0.6129,0.6129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-24.5,20.2,49.1);


(lib.cowboyhead01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1556();
	this.instance.parent = this;
	this.instance.setTransform(3.05,-11.65,0.6119,0.6119);

	this.instance_1 = new lib.CachedTexturedBitmap_1555();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.8,-24.5,0.6119,0.6119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-24.5,23.9,49);


(lib.cowboyhand02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1554();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-3.4,1.2719,1.2719);

	this.instance_1 = new lib.CachedTexturedBitmap_1553();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.9,-8.3,1.2719,1.2719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-8.3,42,16.6);


(lib.Cowboyhand01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1552();
	this.instance.parent = this;
	this.instance.setTransform(-22.25,-10.2,0.7635,0.7635);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-10.2,45,20.6);


(lib.cowboyfoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1551();
	this.instance.parent = this;
	this.instance.setTransform(-18.75,-12.4,0.9663,0.9663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-12.4,37.7,25.1);


(lib.cowboybottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1550();
	this.instance.parent = this;
	this.instance.setTransform(-12.1,-6.6,0.5782,0.5782);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-6.6,24.299999999999997,13.3);


(lib.cowboyarm03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1549();
	this.instance.parent = this;
	this.instance.setTransform(-2.85,-6.3,0.4173,0.4173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-6.3,5.8,12.5);


(lib.cowboyarm01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1548();
	this.instance.parent = this;
	this.instance.setTransform(-29.45,-16.05,0.8448,0.8448);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-16,54,38);


(lib.bodyturn07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1545();
	this.instance.parent = this;
	this.instance.setTransform(-9.45,-4.65,0.7342,0.7342);

	this.instance_1 = new lib.CachedTexturedBitmap_1544();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.3,-20,0.7342,0.7342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-20,52.900000000000006,40.4);


(lib.bodyturn06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1543();
	this.instance.parent = this;
	this.instance.setTransform(-26.05,-19.45,0.8987,0.8987);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-19.4,52.1,38.599999999999994);


(lib.bodyturn04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1542();
	this.instance.parent = this;
	this.instance.setTransform(12.5,-4.05,0.7347,0.7347);

	this.instance_1 = new lib.CachedTexturedBitmap_1541();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.35,-18.95,0.7347,0.7347);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-18.9,48.5,38.2);


(lib.bodyturn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1540();
	this.instance.parent = this;
	this.instance.setTransform(-26.05,-19.45,0.7342,0.7342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-19.4,52.1,38.9);


(lib.bodyturn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1539();
	this.instance.parent = this;
	this.instance.setTransform(-11.65,-18.35,0.7342,0.7342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-18.3,16.1,9.5);


(lib.Bodyside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1538();
	this.instance.parent = this;
	this.instance.setTransform(-16.65,-20.65,0.7339,0.7339);

	this.instance_1 = new lib.CachedTexturedBitmap_1537();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27.1,-11.95,0.7339,0.7339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-20.6,54.3,41.7);


(lib.bgMiddle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1536();
	this.instance.parent = this;
	this.instance.setTransform(-300.35,-31.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.3,-31.5,600.5,68.5);


(lib.bgMatcher = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1535();
	this.instance.parent = this;
	this.instance.setTransform(-300.5,-35.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.5,-35.2,601,73);


(lib.Bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_1533();
	this.instance.parent = this;
	this.instance.setTransform(-81.55,-5.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-5.3,163,10.5);


(lib.ArrowBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedTexturedBitmap_1530();
	this.instance.parent = this;
	this.instance.setTransform(3.6,1.95,0.5194,0.5194);

	this.instance_1 = new lib.CachedTexturedBitmap_1531();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.1,3,0.5194,0.5194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedTexturedBitmap_1561();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5194,0.5194);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,32.2);


(lib.wormarm05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wormarm01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.65);

	this.instance_1 = new lib.CachedTexturedBitmap_1724();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.7,-10.8,0.2697,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.8,21,21.700000000000003);


(lib.wagonbody01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-210.7,-63.4);

	this.instance_1 = new lib.CachedTexturedBitmap_1717();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-197.85,-117.05,0.8334,0.8334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.2,-117,469.2,234.1);


(lib.waggonship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ship_Jet01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-223.45,-109,1,1,0,0,0,11.1,25);

	this.instance_1 = new lib.wheel01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109.85,105.35,0.7701,0.807);

	this.instance_2 = new lib.wheel01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.25,124.3);

	this.instance_3 = new lib.wagonbody01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.75,9);

	this.instance_4 = new lib.wheel01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-28.75,89.2,0.6369,0.6091,0,0,0,0.1,0);

	this.instance_5 = new lib.wheel01("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(114.3,99.5,0.8271,0.7548);

	this.instance_6 = new lib.Ship_Jet01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-172.45,-110,1,1,0,0,0,11.1,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.8,-143.7,524.6,330.4);


(lib.Timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Layer 12
	this.instance = new lib.CachedTexturedBitmap_1715();
	this.instance.parent = this;
	this.instance.setTransform(-51.15,-22.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AruArQgHgEgHgGQgLgLAAgRIAAgJQAAgRALgMIAAAAQAMgLARAAIW/AAQARAAALALQAGAHADAHQADAHAAAIIAAAJQAAARgMALIAAAAQgLAMgRAAI2/AAIAAAAQgIAAgHgCg");
	mask.setTransform(21.875,-12.525);

	// Layer 8
	this.instance_1 = new lib.Bar("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-135.05,-12.35);
	this.instance_1.alpha = 0.8008;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:18.85},99).wait(1));

	// Layer 2
	this.instance_2 = new lib.CachedTexturedBitmap_1716();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56.75,-18.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-22.4,157.5,18.5);


(lib.Stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Star02("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(88,-125.25,0.3181,0.3181,44.3528);
	this.instance.alpha = 0.3984;

	this.instance_1 = new lib.Star02("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.8,-137.45,0.3181,0.3181,44.3528);
	this.instance_1.alpha = 0.3984;

	this.instance_2 = new lib.Star02("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(270.5,-113,0.3181,0.3181,44.3528);
	this.instance_2.alpha = 0.3984;

	this.instance_3 = new lib.Star02("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-270.45,118.5,0.3181,0.3181,44.3528);
	this.instance_3.alpha = 0.3984;

	this.instance_4 = new lib.Star02("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-222.55,46.2,0.3181,0.3181,44.3528);
	this.instance_4.alpha = 0.3984;

	this.instance_5 = new lib.Star02("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(189.25,-77.35,0.3181,0.3181,44.3528);
	this.instance_5.alpha = 0.3984;

	this.instance_6 = new lib.Star02("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-105.65,-52.9,0.3181,0.3181,44.3528);
	this.instance_6.alpha = 0.3984;

	this.instance_7 = new lib.Star02("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-259.3,-61.8,0.3181,0.3181,44.3528);
	this.instance_7.alpha = 0.3984;

	this.instance_8 = new lib.Star02("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(160.35,137.45,0.3181,0.3181,44.3528);
	this.instance_8.alpha = 0.3984;

	this.instance_9 = new lib.Star02("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(211.55,110.7,0.3181,0.3181,44.3528);
	this.instance_9.alpha = 0.3984;

	this.instance_10 = new lib.Star02("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(259.4,110.75,0.3181,0.3181,44.3528);
	this.instance_10.alpha = 0.3984;

	this.instance_11 = new lib.Star02("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(116.95,25,0.3181,0.3181,44.3528);
	this.instance_11.alpha = 0.3984;

	this.instance_12 = new lib.Star02("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(159.3,58.45,0.3181,0.3181,44.3528);
	this.instance_12.alpha = 0.3984;

	this.instance_13 = new lib.Star02("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(165.9,13.9,0.3181,0.3181,44.3528);
	this.instance_13.alpha = 0.3984;

	this.instance_14 = new lib.Star02("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(220.45,-59.6,0.3181,0.3181,44.3528);
	this.instance_14.alpha = 0.3984;

	this.instance_15 = new lib.Star02("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(105.8,-105.2,0.3181,0.3181,44.3528);
	this.instance_15.alpha = 0.3984;

	this.instance_16 = new lib.Star02("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(179.25,-109.65,0.3181,0.3181,44.3528);
	this.instance_16.alpha = 0.3984;

	this.instance_17 = new lib.Star02("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(54.55,-69.6,0.3181,0.3181,44.3528);
	this.instance_17.alpha = 0.3984;

	this.instance_18 = new lib.Star02("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-2.15,82.85,0.3181,0.3181,44.3528);
	this.instance_18.alpha = 0.3984;

	this.instance_19 = new lib.Star02("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(24.55,109.6,0.3181,0.3181,44.3528);
	this.instance_19.alpha = 0.3984;

	this.instance_20 = new lib.Star02("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(75.75,91.8,0.3181,0.3181,44.3528);
	this.instance_20.alpha = 0.3984;

	this.instance_21 = new lib.Star02("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(44.55,6.1,0.3181,0.3181,44.3528);
	this.instance_21.alpha = 0.3984;

	this.instance_22 = new lib.Star02("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-15.5,-31.75,0.3181,0.3181,44.3528);
	this.instance_22.alpha = 0.3984;

	this.instance_23 = new lib.Star02("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-57.8,45.05,0.3181,0.3181,44.3528);
	this.instance_23.alpha = 0.3984;

	this.instance_24 = new lib.Star02("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-160.25,135.2,0.3181,0.3181,44.3528);
	this.instance_24.alpha = 0.3984;

	this.instance_25 = new lib.Star02("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-77.85,108.5,0.3181,0.3181,44.3528);
	this.instance_25.alpha = 0.3984;

	this.instance_26 = new lib.Star02("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-74.5,-51.8,0.3181,0.3181,44.3528);
	this.instance_26.alpha = 0.3984;

	this.instance_27 = new lib.Star02("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-30,-111.9,0.3181,0.3181,44.3528);
	this.instance_27.alpha = 0.3984;

	this.instance_28 = new lib.Star02("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-102.35,-29.55,0.3181,0.3181,44.3528);
	this.instance_28.alpha = 0.3984;

	this.instance_29 = new lib.Star02("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-171.35,16.1,0.3181,0.3181,44.3528);
	this.instance_29.alpha = 0.3984;

	this.instance_30 = new lib.Star02("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-231.45,100.7,0.3181,0.3181,44.3528);
	this.instance_30.alpha = 0.3984;

	this.instance_31 = new lib.Star02("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(-141.35,85.15,0.3181,0.3181,44.3528);
	this.instance_31.alpha = 0.3984;

	this.instance_32 = new lib.Star02("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(-242.6,-71.85,0.3181,0.3181,44.3528);
	this.instance_32.alpha = 0.3984;

	this.instance_33 = new lib.Star02("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(34.55,45.05,0.3181,0.3181,44.3528);
	this.instance_33.alpha = 0.3984;

	this.instance_34 = new lib.Star02("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(207.65,-4.55,0.3181,0.3181,44.3528);
	this.instance_34.alpha = 0.3984;

	this.instance_35 = new lib.Star02("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(181.65,131.45,0.476,0.476);

	this.instance_36 = new lib.Star02("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-70.3,-84.55,0.476,0.476);

	this.instance_37 = new lib.Star02("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(12.7,22.45,0.476,0.476);

	this.instance_38 = new lib.Star02("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(-184.3,79.45,0.476,0.476);

	this.instance_39 = new lib.Star02("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(-244.3,-101.55,0.476,0.476);

	this.instance_40 = new lib.Star02("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(108.65,-56.55,0.476,0.476);

	this.instance_41 = new lib.Star02("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(-33.4,41.2,0.476,0.476);

	this.instance_42 = new lib.Star01("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(-246.6,56.2,0.7581,0.7581,16.5207);
	this.instance_42.alpha = 0.75;

	this.instance_43 = new lib.Star01("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(162.3,-73.55,0.5991,0.5991,-43.0959);
	this.instance_43.alpha = 0.75;

	this.instance_44 = new lib.Star01("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(83.35,54.05,1.0979,1.0979,-35.0834);

	this.instance_45 = new lib.Star01("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(-165.5,-111.35,0.5997,0.5997,12.8198);
	this.instance_45.alpha = 0.4805;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.4,-142.5,551,285);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.swirl("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.45,20.7);
	this.instance.alpha = 0.0898;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.CachedTexturedBitmap_1707();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-264.95,-196.95,0.4276,0.4276);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.7,-196.9,530.3,413.5);


(lib.RikonDigAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(2));

	// Layer 1
	this.instance = new lib.wormarm05("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.95,-14.15,0.7997,0.7997,-5.7754);

	this.instance_1 = new lib.wormheaddown("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.85,-41.45,0.7995,0.6879,-9.8142);

	this.instance_2 = new lib.wormarm02("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.3,-16.55,0.8,0.8);

	this.instance_3 = new lib.spade02("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.55,-7.25,0.7288,0.7043,-10.0788);

	this.instance_4 = new lib.wormmidbody("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.7,-14.35,0.7993,1.145,-14.7904);

	this.instance_5 = new lib.wormbase("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.35,-5.75,0.8,0.8);

	this.instance_6 = new lib.wormhand01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-4.6,-17.75,0.8,0.8);

	this.instance_7 = new lib.wormhand02("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-13.1,-20.15,0.8724,0.875,5.3131);

	this.instance_8 = new lib.spade("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2.45,-19.25,0.7993,0.7993,-14.7971);

	this.instance_9 = new lib.wormarm03("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.25,-19,0.8,0.8);

	this.instance_10 = new lib.CachedTexturedBitmap_1703();
	this.instance_10.parent = this;
	this.instance_10.setTransform(3.7,-24.95,0.5,0.5);

	this.instance_11 = new lib.wormhands02("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-2.05,-22.45,0.8254,0.7895,-8.2538);

	this.instance_12 = new lib.wormarms01("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0.75,-27.2,0.9242,0.9326,13.2916);

	this.instance_13 = new lib.wormheadup("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-10.5,-49.5,0.8,0.8);

	this.instance_14 = new lib.CachedTexturedBitmap_1704();
	this.instance_14.parent = this;
	this.instance_14.setTransform(3.7,-24.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-14.35,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7288,rotation:-10.0788,x:-2.55,y:-7.25,regX:0,regY:0,scaleY:0.7043}},{t:this.instance_2,p:{scaleX:0.8,scaleY:0.8,rotation:0,x:-10.3,y:-16.55,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:0.7995,scaleY:0.6879,rotation:-9.8142,x:-14.85,y:-41.45}},{t:this.instance,p:{scaleX:0.7997,scaleY:0.7997,rotation:-5.7754,x:-1.95,y:-14.15}}]}).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-14.35,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7287,rotation:-11.8463,x:-3.15,y:-6.85,regX:0,regY:0,scaleY:0.7043}},{t:this.instance_2,p:{scaleX:0.7991,scaleY:0.7991,rotation:10.4606,x:-10.25,y:-15.6,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:0.7993,scaleY:0.6877,rotation:-15.0776,x:-16.45,y:-39.5}},{t:this.instance,p:{scaleX:0.7995,scaleY:0.7995,rotation:-10.8248,x:-3.05,y:-13.45}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-11.8,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7285,rotation:-4.5294,x:-3,y:-3.25,regX:-0.1,regY:-0.1,scaleY:0.7041}},{t:this.instance_2,p:{scaleX:0.8,scaleY:0.8,rotation:0,x:-11.1,y:-14,regX:0,regY:0}},{t:this.instance,p:{scaleX:0.7997,scaleY:0.7997,rotation:-5.7754,x:-2.65,y:-11.2}},{t:this.instance_1,p:{scaleX:0.7989,scaleY:0.6874,rotation:-22.8435,x:-20.05,y:-35.25}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-11.8,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7285,rotation:-4.5294,x:-8.75,y:-7.7,regX:-0.1,regY:-0.1,scaleY:0.7041}},{t:this.instance_2,p:{scaleX:0.7984,scaleY:0.7984,rotation:38.7958,x:-11.45,y:-16.6,regX:-0.1,regY:-0.1}},{t:this.instance_1,p:{scaleX:0.7993,scaleY:0.6877,rotation:-15.0776,x:-17.25,y:-39.1}},{t:this.instance,p:{scaleX:0.799,scaleY:0.799,rotation:9.8235,x:-6.75,y:-13.45}}]},1).to({state:[{t:this.instance_10},{t:this.instance_5},{t:this.instance_4,p:{y:-15.15,scaleX:0.8,scaleY:1.1805,rotation:0,x:-2.45}},{t:this.instance_1,p:{scaleX:0.7984,scaleY:0.6869,rotation:5.7036,x:-6.85,y:-43.9}},{t:this.instance_9},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.7993,scaleY:0.7993,rotation:-14.7971,x:-2.45,y:-19.25}},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-15.8,scaleX:0.8,scaleY:1.1805,rotation:0,x:-2.1}},{t:this.instance_1,p:{scaleX:0.7984,scaleY:0.6869,rotation:7.4954,x:-3.65,y:-47.5}},{t:this.instance_8,p:{regX:-0.1,regY:0.1,scaleX:0.8402,scaleY:0.9706,rotation:-35.3244,x:5.35,y:-27.3}},{t:this.instance_11}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-18.05,scaleX:0.7644,scaleY:1.3133,rotation:-18.6591,x:-2.45}},{t:this.instance_13,p:{regX:0,regY:0,scaleX:0.8,scaleY:0.8,rotation:0,x:-10.5,y:-49.5}},{t:this.instance_8,p:{regX:-0.2,regY:0,scaleX:0.7976,scaleY:0.7976,rotation:-39.3135,x:4.8,y:-31.7}},{t:this.instance_12,p:{scaleX:0.9242,scaleY:0.9326,rotation:13.2916,x:0.75,y:-27.2}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-19,scaleX:0.7643,scaleY:1.4543,rotation:-16.3816,x:-2.45}},{t:this.instance_13,p:{regX:-0.1,regY:-0.1,scaleX:0.7996,scaleY:0.7171,rotation:-8.537,x:-11.7,y:-48.75}},{t:this.instance_8,p:{regX:-0.2,regY:0,scaleX:0.7974,scaleY:0.7974,rotation:-43.8743,x:4.8,y:-33.45}},{t:this.instance_12,p:{scaleX:0.9237,scaleY:0.9321,rotation:4.2583,x:1.05,y:-28.8}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-18.05,scaleX:0.7644,scaleY:1.3133,rotation:-18.6591,x:-2.45}},{t:this.instance_13,p:{regX:0,regY:0,scaleX:0.8,scaleY:0.8,rotation:0,x:-9.25,y:-49.5}},{t:this.instance_8,p:{regX:-0.2,regY:0,scaleX:0.7976,scaleY:0.7976,rotation:-39.3135,x:4.8,y:-31.7}},{t:this.instance_12,p:{scaleX:0.9242,scaleY:0.9326,rotation:13.2916,x:0.75,y:-27.2}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-18.05,scaleX:0.6888,scaleY:1.1994,rotation:-5.5851,x:-2.45}},{t:this.instance_13,p:{regX:0,regY:0,scaleX:0.7994,scaleY:0.7994,rotation:12.7926,x:-2.25,y:-49.1}},{t:this.instance_8,p:{regX:-0.1,regY:0.1,scaleX:0.8402,scaleY:0.9706,rotation:-35.3244,x:5.35,y:-27.3}},{t:this.instance_12,p:{scaleX:0.9227,scaleY:0.9311,rotation:25.7915,x:1.05,y:-24.95}}]},1).to({state:[{t:this.instance_14},{t:this.instance_5},{t:this.instance_4,p:{y:-15.15,scaleX:0.8,scaleY:1.1805,rotation:0,x:-2.45}},{t:this.instance_1,p:{scaleX:0.7984,scaleY:0.6869,rotation:5.7036,x:-6.85,y:-43.9}},{t:this.instance_9},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.7993,scaleY:0.7993,rotation:-14.7971,x:-2.45,y:-19.25}},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-11.8,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7285,rotation:-4.5294,x:-8.75,y:-7.7,regX:-0.1,regY:-0.1,scaleY:0.7041}},{t:this.instance_2,p:{scaleX:0.7984,scaleY:0.7984,rotation:38.7958,x:-11.45,y:-16.6,regX:-0.1,regY:-0.1}},{t:this.instance_1,p:{scaleX:0.7993,scaleY:0.6877,rotation:-15.0776,x:-17.25,y:-39.1}},{t:this.instance,p:{scaleX:0.799,scaleY:0.799,rotation:9.8235,x:-6.75,y:-13.45}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-11.8,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7285,rotation:-4.5294,x:-3,y:-3.25,regX:-0.1,regY:-0.1,scaleY:0.7041}},{t:this.instance_2,p:{scaleX:0.8,scaleY:0.8,rotation:0,x:-11.1,y:-14,regX:0,regY:0}},{t:this.instance,p:{scaleX:0.7997,scaleY:0.7997,rotation:-5.7754,x:-2.65,y:-11.2}},{t:this.instance_1,p:{scaleX:0.7989,scaleY:0.6874,rotation:-22.8435,x:-20.05,y:-35.25}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-14.35,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7287,rotation:-11.8463,x:-3.15,y:-6.85,regX:0,regY:0,scaleY:0.7043}},{t:this.instance_2,p:{scaleX:0.7991,scaleY:0.7991,rotation:10.4606,x:-10.25,y:-15.6,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:0.7993,scaleY:0.6877,rotation:-15.0776,x:-16.45,y:-39.5}},{t:this.instance,p:{scaleX:0.7995,scaleY:0.7995,rotation:-10.8248,x:-3.05,y:-13.45}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{y:-14.35,scaleX:0.7993,scaleY:1.145,rotation:-14.7904,x:-3.7}},{t:this.instance_3,p:{scaleX:0.7288,rotation:-10.0788,x:-2.55,y:-7.25,regX:0,regY:0,scaleY:0.7043}},{t:this.instance_2,p:{scaleX:0.8,scaleY:0.8,rotation:0,x:-10.3,y:-16.55,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:0.7995,scaleY:0.6879,rotation:-9.8142,x:-14.85,y:-41.45}},{t:this.instance,p:{scaleX:0.7997,scaleY:0.7997,rotation:-5.7754,x:-1.95,y:-14.15}}]},1).wait(2));

	// Layer 3
	this.instance_15 = new lib.RikShadow("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.35,3.85,0.7345,0.7345);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-76.7,69.8,89.7);


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.6,8.35);

	this.instance_1 = new lib.CachedTexturedBitmap_1653();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.05,-17.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-17.2,139,47);


(lib.nugget = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0.42, 0.42, 0.42, 1, 147.9, 88.74, 0, 0)];
	this.instance.cache(-17,-17,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Flames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.instance = new lib.Flame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.05,-0.05,1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-0.1,8.5,39.6);


(lib.DistanceT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Layer 11
	this.instance = new lib.CachedTexturedBitmap_1559();
	this.instance.parent = this;
	this.instance.setTransform(-52.3,0.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao/ArQgHgEgGgGQgMgLAAgRIAAgJQAAgRAMgMIAAAAQAMgLAQAAIRhAAQAQAAAMALQAGAHADAHQADAHAAAIIAAAJQAAARgMALIgBAAQgLAMgQAAIxhAAIAAAAQgIAAgHgCg");
	mask.setTransform(4.325,9.825);

	// Layer 10
	this.instance_1 = new lib.Bar("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-134.9,9.6);
	this.instance_1.alpha = 0.8008;
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 41, 217, 0, 0)];
	this.instance_1.cache(-83,-7,167,15);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-16.1},99).wait(1));

	// Layer 2
	this.instance_2 = new lib.CachedTexturedBitmap_1560();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56.75,4.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,0.4,122,18.5);


(lib.ControlPad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.fire_btn = new lib.FireBtn();
	this.fire_btn.name = "fire_btn";
	this.fire_btn.parent = this;
	this.fire_btn.setTransform(46.9,47.4,0.8686,0.8686,0,0,0,16,16.1);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 2, false, new lib.FireBtn(), 3);

	this.left_btn = new lib.ArrowBtn();
	this.left_btn.name = "left_btn";
	this.left_btn.parent = this;
	this.left_btn.setTransform(17.6,47.2,0.8686,0.8686,0,-90,90,16.1,16.1);
	new cjs.ButtonHelper(this.left_btn, 0, 1, 2, false, new lib.ArrowBtn(), 3);

	this.right_btn = new lib.ArrowBtn();
	this.right_btn.name = "right_btn";
	this.right_btn.parent = this;
	this.right_btn.setTransform(76.4,47.2,0.8686,0.8686,90,0,0,16.1,16);
	new cjs.ButtonHelper(this.right_btn, 0, 1, 2, false, new lib.ArrowBtn(), 3);

	this.down_btn = new lib.ArrowBtn();
	this.down_btn.name = "down_btn";
	this.down_btn.parent = this;
	this.down_btn.setTransform(46.9,77.35,0.8686,0.8686,0,180,0,16,16);
	new cjs.ButtonHelper(this.down_btn, 0, 1, 2, false, new lib.ArrowBtn(), 3);

	this.up_btn = new lib.ArrowBtn();
	this.up_btn.name = "up_btn";
	this.up_btn.parent = this;
	this.up_btn.setTransform(46.9,17.35,0.8686,0.8686,0,0,0,16,16.1);
	new cjs.ButtonHelper(this.up_btn, 0, 1, 2, false, new lib.ArrowBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_btn},{t:this.down_btn},{t:this.right_btn},{t:this.left_btn},{t:this.fire_btn}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1546();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4512,0.4512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ControlPad, new cjs.Rectangle(0,0,93.9,93.9), null);


(lib.BG01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bgMatcher("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1169.9,5.45);
	this.instance.filters = [new cjs.ColorFilter(0.59, 0.59, 0.59, 1, 62.73, 41.82, 20.91, 0)];
	this.instance.cache(-302,-37,605,77);

	this.instance_1 = new lib.bgMiddle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-570.4,5.45);
	this.instance_1.filters = [new cjs.ColorFilter(0.59, 0.59, 0.59, 1, 62.73, 41.82, 20.91, 0)];
	this.instance_1.cache(-302,-33,605,73);

	this.instance_2 = new lib.bgMatcher("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.15,4.95);
	this.instance_2.filters = [new cjs.ColorFilter(0.59, 0.59, 0.59, 1, 62.73, 41.82, 20.91, 0)];
	this.instance_2.cache(-302,-37,605,77);

	this.instance_3 = new lib.CachedTexturedBitmap_1534();
	this.instance_3.parent = this;
	this.instance_3.setTransform(307.35,5.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG01, new cjs.Rectangle(-1470.4,-30.3,1801.1000000000001,73.5), null);


(lib.Ricicle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nugget("synched",0);
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0.42, 0.42, 0.42, 1, 147.9, 88.74, 0, 0)];
	this.instance.cache(-17,-17,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ricicle, new cjs.Rectangle(-15,-15,30,30), null);


(lib.nugget01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nugget("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.MenuBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.distance_mc = new lib.DistanceT();
	this.distance_mc.name = "distance_mc";
	this.distance_mc.parent = this;
	this.distance_mc.setTransform(-18.8,-8.75);

	this.timer_mc = new lib.Timer();
	this.timer_mc.name = "timer_mc";
	this.timer_mc.parent = this;
	this.timer_mc.setTransform(-19.1,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.timer_mc},{t:this.distance_mc}]}).wait(1));

	// Layer 2
	this.instance = new lib.Ricicle();
	this.instance.parent = this;
	this.instance.setTransform(173.95,-11.8,1,1,-90);
	this.instance.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance.cache(-17,-17,34,34);

	this.collected_txt = new cjs.Text("000", "normal 400 32px 'Lato'", "#FFFFFF");
	this.collected_txt.name = "collected_txt";
	this.collected_txt.lineHeight = 37;
	this.collected_txt.lineWidth = 75;
	this.collected_txt.parent = this;
	this.collected_txt.setTransform(190.85,-30.85);
	if(!lib.properties.webfonts['Lato']) {
		lib.webFontTxtInst['Lato'] = lib.webFontTxtInst['Lato'] || [];
		lib.webFontTxtInst['Lato'].push(this.collected_txt);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.collected_txt},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.CachedTexturedBitmap_1640();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-284.35,-44.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.3,-44.7,574.5,90);


(lib.Instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.nugget("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(208.55,-15.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1631();
	this.instance_1.parent = this;
	this.instance_1.setTransform(242.2,-2.95,0.5369,0.5369);

	this.instance_2 = new lib.CachedTexturedBitmap_1630();
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.2,-32.35,0.5369,0.5369);

	this.instance_3 = new lib.CachedTexturedBitmap_1629();
	this.instance_3.parent = this;
	this.instance_3.setTransform(242.2,-108.5,0.5369,0.5369);

	this.instance_4 = new lib.CachedTexturedBitmap_1628();
	this.instance_4.parent = this;
	this.instance_4.setTransform(242.2,-133.75,0.5369,0.5369);

	this.instance_5 = new lib.CachedTexturedBitmap_1627();
	this.instance_5.parent = this;
	this.instance_5.setTransform(239.7,-213.5,0.5369,0.5369);

	this.instance_6 = new lib.CachedTexturedBitmap_1626();
	this.instance_6.parent = this;
	this.instance_6.setTransform(240.35,-234.2,0.5369,0.5369);

	this.instance_7 = new lib.wormarm05("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(204.55,-86.8,0.6181,0.6181,-5.7748);

	this.instance_8 = new lib.wormheaddown("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(194.6,-109.7,0.618,0.5317,-9.8154);

	this.instance_9 = new lib.wormarm02("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(197.4,-91.15,0.6183,0.6183);

	this.instance_10 = new lib.spade02("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(204.2,-81.15,0.6079,0.6201,-4.819,0,0,-0.1,0);

	this.instance_11 = new lib.wormmidbody("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(203.15,-88.75,0.6178,0.885,-14.7886);

	this.instance_12 = new lib.wormbase("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(209.4,-82.1,0.6183,0.6183,0,0,0,-0.1,0);

	this.instance_13 = new lib.monsterleg01();
	this.instance_13.parent = this;
	this.instance_13.setTransform(213.75,-167.95,0.8578,0.8138,0,0,180);

	this.instance_14 = new lib.monsterleg01("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(189.15,-167.25,0.8578,0.8138);

	this.instance_15 = new lib.monstermainbody02("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(198.3,-192.8,0.8607,0.8607);

	this.instance_16 = new lib.monsterarm01("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(183.65,-186.5,0.8575,0.8575,-67.6912,0,0,0.1,-0.1);

	this.instance_17 = new lib.monsterleg03();
	this.instance_17.parent = this;
	this.instance_17.setTransform(196.8,-169.75,0.8607,0.8607);

	this.instance_18 = new lib.monsterleg02();
	this.instance_18.parent = this;
	this.instance_18.setTransform(193.9,-168.3,0.8607,0.8607);

	this.instance_19 = new lib.monsterarm01("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(182.05,-178,0.7299,0.774,-70.7217);

	this.instance_20 = new lib.monsterarm01();
	this.instance_20.parent = this;
	this.instance_20.setTransform(184.25,-171.65,0.7295,0.7737,-98.1018,0,0,0.1,-0.1);

	this.instance_21 = new lib.monsterarm01("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(221.95,-185.75,0.8581,0.8581,0,69.4364,-110.5636,0.1,-0.1);

	this.instance_22 = new lib.monsterarm01("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(221.7,-179.15,0.7301,0.7743,0,87.0066,-92.9937);

	this.instance_23 = new lib.monsterarm01("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(219.4,-173.7,0.7298,0.7739,0,91.054,-88.9457,0.1,0);

	this.instance_24 = new lib.monsterleg02();
	this.instance_24.parent = this;
	this.instance_24.setTransform(209.65,-168.3,0.8607,0.8607,0,0,180);

	this.instance_25 = new lib.monsterleg03();
	this.instance_25.parent = this;
	this.instance_25.setTransform(207.1,-169.75,0.8607,0.8607,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 5
	this.instance_26 = new lib.RikShadow("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(207.35,7.55,0.4901,0.4901);
	this.instance_26.alpha = 0.3008;

	this.instance_27 = new lib.RikShadow("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(205.9,-74.35,0.803,0.803);
	this.instance_27.alpha = 0.6406;

	this.instance_28 = new lib.RikShadow("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(203.25,-160.55,0.803,0.803);
	this.instance_28.alpha = 0.4883;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	// Layer 3
	this.instance_29 = new lib.CachedTexturedBitmap_1632();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-63.4,-105.85,0.5369,0.5369);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1));

	// Layer 2
	this.instance_30 = new lib.CachedTexturedBitmap_1637();
	this.instance_30.parent = this;
	this.instance_30.setTransform(28.55,-59.05,0.5369,0.5369);

	this.instance_31 = new lib.CachedTexturedBitmap_1636();
	this.instance_31.parent = this;
	this.instance_31.setTransform(28.55,-0.15,0.5369,0.5369);

	this.instance_32 = new lib.CachedTexturedBitmap_1635();
	this.instance_32.parent = this;
	this.instance_32.setTransform(28.55,-29.6,0.5369,0.5369);

	this.instance_33 = new lib.CachedTexturedBitmap_1634();
	this.instance_33.parent = this;
	this.instance_33.setTransform(28.55,-88.5,0.5369,0.5369);

	this.instance_34 = new lib.CachedTexturedBitmap_1633();
	this.instance_34.parent = this;
	this.instance_34.setTransform(28.55,-117.9,0.5369,0.5369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30}]}).wait(1));

	// Layer 1
	this.instance_35 = new lib.ControlPad();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-31.35,-4.65,1.1,1.1899,0,0,0,47,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1));

	// Layer 6
	this.instance_36 = new lib.CachedTexturedBitmap_1638();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-131.5,-266.55,0.5369,0.5369);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-266.5,644.3,351.1);


(lib.InfoBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scoreStuff
	this.instance = new lib.CachedTexturedBitmap_1608();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-22.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1607();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.15,-20.45,0.5,0.5);

	this.score_txt = new cjs.Text("00000", "28px 'Arial'", "#B85235");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 36;
	this.score_txt.lineWidth = 151;
	this.score_txt.parent = this;
	this.score_txt.setTransform(55.75,-16.15);

	this.instance_2 = new lib.CachedTexturedBitmap_1606();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104,-25.8,0.5,0.5);

	this.time_txt = new cjs.Text("000000", "20px 'Arial'", "#B85235");
	this.time_txt.name = "time_txt";
	this.time_txt.textAlign = "center";
	this.time_txt.lineHeight = 27;
	this.time_txt.lineWidth = 101;
	this.time_txt.parent = this;
	this.time_txt.setTransform(-27.7,-0.75);

	this.nuggets_txt = new cjs.Text("000", "20px 'Arial'", "#B85235");
	this.nuggets_txt.name = "nuggets_txt";
	this.nuggets_txt.textAlign = "center";
	this.nuggets_txt.lineHeight = 27;
	this.nuggets_txt.lineWidth = 44;
	this.nuggets_txt.parent = this;
	this.nuggets_txt.setTransform(-139.45,-1);

	this.instance_3 = new lib.Ricicle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-141.2,-13,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.nuggets_txt},{t:this.time_txt},{t:this.instance_2},{t:this.score_txt},{t:this.instance_1},{t:this.instance}]},1).wait(3));

	// info
	this.instance_4 = new lib.CachedTexturedBitmap_1612();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-134,22,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_1611();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-131.05,24,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_1610();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-172.5,-52.15,0.5,0.5);

	this.instance_7 = new lib.CachedTexturedBitmap_1609();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-169.95,-50.15,0.5,0.5);

	this.instance_8 = new lib.CachedTexturedBitmap_1616();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-186.6,-56.45,0.5,0.5);

	this.instance_9 = new lib.CachedTexturedBitmap_1615();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-188.65,-57.6,0.5,0.5);

	this.instance_10 = new lib.CachedTexturedBitmap_1614();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-134,22,0.5,0.5);

	this.instance_11 = new lib.CachedTexturedBitmap_1613();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-131.05,24,0.5,0.5);

	this.instance_12 = new lib.CachedTexturedBitmap_1620();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-134,22,0.5,0.5);

	this.instance_13 = new lib.CachedTexturedBitmap_1619();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-131.05,24,0.5,0.5);

	this.instance_14 = new lib.CachedTexturedBitmap_1618();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-130.2,-59.5,0.5,0.5);

	this.instance_15 = new lib.CachedTexturedBitmap_1617();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-128.05,-56.5,0.5,0.5);

	this.instance_16 = new lib.CachedTexturedBitmap_1624();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-134,22,0.5,0.5);

	this.instance_17 = new lib.CachedTexturedBitmap_1623();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-131.05,24,0.5,0.5);

	this.instance_18 = new lib.CachedTexturedBitmap_1622();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-150.5,-66.45,0.5,0.5);

	this.instance_19 = new lib.CachedTexturedBitmap_1621();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-148.05,-63.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},1).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]},1).wait(1));

	// bg
	this.instance_20 = new lib.roundedBlock("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(81.35,-66.4,0.8033,0.6694);
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 152, 156, 248, 0)];
	this.instance_20.cache(-2,-2,4,4);

	this.instance_21 = new lib.roundedBlock("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-57.65,-13.8,0.8033,0.6694);

	this.instance_22 = new lib.CachedTexturedBitmap_1625();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-202.5,-80.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.5,-80.6,411.6,163);


(lib.ricicleDigUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Hide:3});

	// timeline functions:
	this.frame_0 = function() {
		this.x = 0;
		this.y = 0;
		this.stop();
	}
	this.frame_4 = function() {
		playSound("Vanish03wav");
	}
	this.frame_7 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(3).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.Ricicle("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3).to({startPosition:0},0).to({scaleX:1.2633,scaleY:1.2633},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.9,37.9,37.9);


(lib.ricicleCollectoffRunner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("Vanish03wav");
	}
	this.frame_4 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.Ricicle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.2633,scaleY:1.2633,y:-2.25},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-21.1,68.1,37.900000000000006);


(lib.nut01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nugget01("synched",0);
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0.42, 0.42, 0.42, 1, 147.9, 88.74, 0, 0)];
	this.instance.cache(-17,-17,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Cowboyall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ricicle = new lib.ricicleCollectoffRunner();
	this.ricicle.name = "ricicle";
	this.ricicle.parent = this;
	this.ricicle.setTransform(-13.7,38.85);

	this.instance = new lib.cowboybottom("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.7,44.4,0.5172,0.5292,0,-4.1654,-4.3229);

	this.instance_1 = new lib.cowboyarm01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,42.05,0.5543,0.4237,0,32.6628,31.8631);

	this.instance_2 = new lib.Hatdefault("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.15,-12.6,0.6915,0.3289,0,-16.7323,-15.423);

	this.instance_3 = new lib.Bodyside("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(10.6,33.15,0.681,0.5264,0,-1.5579,-1.9005);

	this.instance_4 = new lib.cowboyhead01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(11.95,13.5,0.8171,0.527,7.5592);

	this.instance_5 = new lib.cowboyarm01("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.65,38.25,0.515,0.5241,0,26.9813,26.6174);

	this.instance_6 = new lib.cowboyhand02("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(33.9,37.25,0.3928,0.3681,0,-12.9498,-13.7912);

	this.instance_7 = new lib.Cowboyhand01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(32.85,46.45,0.4058,0.3812,0,-13.7715,165.7255);

	this.instance_8 = new lib.CachedTexturedBitmap_1547();
	this.instance_8.parent = this;
	this.instance_8.setTransform(11.25,28.5,0.5375,0.5375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.ricicle}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-38.5,76.4,95.6);


(lib.Ship_Frontpod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// Layer 7
	this.instance = new lib.waggonship("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-52.25,24.8,1,1,0,0,0,-40.6,21.4);

	this.instance_1 = new lib.glass01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.25,-30.6);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.wagonpod("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(83.25,-27.95,1,1,0,0,0,71,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(9));

	// Layer 3
	this.instance_3 = new lib.Cowboyall("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-109.95,-25.9,1.4019,1.5505);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.5388,scaleY:1.4896,x:113.3,y:-26.45},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.5,-140.3,527.2,330.4);


(lib.RikonDig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nugget3
	this.nugget3_mc = new lib.ricicleDigUp();
	this.nugget3_mc.name = "nugget3_mc";
	this.nugget3_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.nugget3_mc).wait(1));

	// nugget2
	this.nugget2_mc = new lib.ricicleDigUp();
	this.nugget2_mc.name = "nugget2_mc";
	this.nugget2_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.nugget2_mc).wait(1));

	// nugget1
	this.nugget1_mc = new lib.ricicleDigUp();
	this.nugget1_mc.name = "nugget1_mc";
	this.nugget1_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.nugget1_mc).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcHAQgUgBgLgOQgJAFgDgJQgGgZgaAQQgQgIgGgUQgBgEgDgCQgSgFgTgEQgsgDgSgFQgTgEgSgBQgSgBgQgEQgQgEgQgCIgkgCQgSAAgTACIgKABIAAsuIM9AAIAAM5IgKABQgSACgSAEQgSAEgnAGIggAFQgMABgFAKQgGAMgNgDQgTgFgJARQgEAJgIAFQgPALgTAHQgRAHgWgEQgHgCgHACQgNADgOABQgXADgVgJQgJgEgKAGQgJAGgKABIgEAAQgQAAgQgNg");
	mask.setTransform(-6.9875,-31.768);

	// rikon
	this.anim_mc = new lib.RikonDigAnim();
	this.anim_mc.name = "anim_mc";
	this.anim_mc.parent = this;

	var maskedShapeInstanceList = [this.anim_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.anim_mc).wait(1));

	// hole
	this.instance = new lib.CachedTexturedBitmap_1702();
	this.instance.parent = this;
	this.instance.setTransform(-20.25,-0.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RikonDig, new cjs.Rectangle(-38.1,-68.7,61.6,83.3), null);


(lib.RikAnims = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{right:0,left:10,rightHit:26,leftHit:36,rightShoot:51,leftShoot:60});

	// timeline functions:
	this.frame_0 = function() {
		this.right = true;
		this.stop();
	}
	this.frame_10 = function() {
		this.right = false;
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}
	this.frame_25 = function() {
		playSound("rikHitwav");
	}
	this.frame_26 = function() {
		this.play();
	}
	this.frame_33 = function() {
		if (game !== undefined) game.status="FLY";
		this.gotoAndStop("right");
	}
	this.frame_35 = function() {
		playSound("rikHitwav");
	}
	this.frame_36 = function() {
		this.play();
	}
	this.frame_43 = function() {
		if (game !== undefined) game.rikStatus="FLY";
		this.gotoAndStop("left");
	}
	this.frame_50 = function() {
		playSound("iAirgunwav");
	}
	this.frame_51 = function() {
		this.play();
	}
	this.frame_56 = function() {
		if (game !== undefined) game.status="FLY";
		this.gotoAndStop("right");
	}
	this.frame_59 = function() {
		playSound("iAirgunwav");
	}
	this.frame_60 = function() {
		this.play();
	}
	this.frame_65 = function() {
		if (game !== undefined) game.status="FLY";
		this.gotoAndStop("left");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(5).call(this.frame_25).wait(1).call(this.frame_26).wait(7).call(this.frame_33).wait(2).call(this.frame_35).wait(1).call(this.frame_36).wait(7).call(this.frame_43).wait(7).call(this.frame_50).wait(1).call(this.frame_51).wait(5).call(this.frame_56).wait(3).call(this.frame_59).wait(1).call(this.frame_60).wait(5).call(this.frame_65).wait(14));

	// Layer 4
	this.nugget_mc = new lib.ricicleCollectoffRunner();
	this.nugget_mc.name = "nugget_mc";
	this.nugget_mc.parent = this;
	this.nugget_mc.setTransform(-13.7,38.85);

	this.instance = new lib.Flash("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11.95,33.95,0.5146,0.5146);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nugget_mc}]}).to({state:[{t:this.instance}]},25).to({state:[{t:this.instance}]},7).to({state:[]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},7).to({state:[]},1).to({state:[]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:1.3072,scaleY:1.3072,rotation:-360,x:17.95,y:24.95,alpha:0},7).to({_off:true},1).wait(2).to({_off:false,scaleX:0.5146,scaleY:0.5146,x:11.95,y:33.95,alpha:1},0).to({scaleX:1.3072,scaleY:1.3072,rotation:-720,x:17.95,y:24.95,alpha:0},7).to({_off:true},1).wait(36));

	// Layer 1
	this.instance_1 = new lib.horseeyes("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.5,12.25,0.5173,0.5268,0,-5.9182,-6.1397,57.4,-30.6);

	this.instance_2 = new lib.horsehead01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.65,12.45,0.4372,0.4622,0,0,0,0,-0.2);

	this.instance_3 = new lib.cowboyfoot("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.65,83.2,0.5174,0.466,0,-8.1277,-8.4283);

	this.instance_4 = new lib.cowboyleg01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.25,61.65,0.4851,0.4208,0,-7.8733,-8.1676);

	this.instance_5 = new lib.cowboybottom("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.7,44.4,0.5172,0.5292,0,-4.1654,-4.3229);

	this.instance_6 = new lib.cowboyarm01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-14.95,34.2,0.5549,0.4242,0,142.4714,141.6704);

	this.instance_7 = new lib.Hatdefault("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(8.75,-12.6,0.6918,0.329,0,-8.4593,-7.1534);

	this.instance_8 = new lib.Bodyside("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.4,33.15,0.681,0.5264,0,-1.5579,-1.9005);

	this.instance_9 = new lib.cowboyhead01("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(10.75,13.5,0.8171,0.527,7.5592);

	this.instance_10 = new lib.cowboyarm01("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(16.4,30.25,0.5158,0.5249,0,-9.8481,-10.213);

	this.instance_11 = new lib.cowboyhand02("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(34.1,21.7,0.3928,0.3681,0,-12.9498,-13.7912);

	this.instance_12 = new lib.horse01("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(12.85,52.65,0.4944,0.492);

	this.instance_13 = new lib.cowboyfoot("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(38.25,69.7,0.5175,0.4664);

	this.instance_14 = new lib.horseneck("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(46.95,33.1,0.3954,0.5953,0,6.6771,9.4543,5.3,3.1);

	this.instance_15 = new lib.Cowboyhand01("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-24.85,47.2,0.4058,0.3812,0,13.7715,14.2745);

	this.instance_16 = new lib.horsecontrol("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(31.95,30.95,0.3538,0.5152,0,2.4324,2.0934);

	this.instance_17 = new lib.CachedTexturedBitmap_1698();
	this.instance_17.parent = this;
	this.instance_17.setTransform(11.3,28.55,0.5,0.5);

	this.instance_18 = new lib.Hatturn01("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(6.3,-12.5,0.6916,0.3289,0,-13.5102,-12.2062);

	this.instance_19 = new lib.headturn01("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(11.2,13.6,0.8169,0.5268,2.2445);

	this.instance_20 = new lib.Horseturn01("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(13.3,52.75,0.612,0.5875);

	this.instance_21 = new lib.bodyturn01("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(9.85,33.25,0.681,0.5264,0,-1.5579,-1.9005);

	this.instance_22 = new lib.Hatturn02("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(10.75,-11.45,0.6918,0.329,0,-7.3917,-6.0916);

	this.instance_23 = new lib.Horseturn02("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(13.65,52.3,0.7642,0.5684);

	this.instance_24 = new lib.bodyturn02("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(9.25,34.6,0.681,0.5264,0,-1.5579,-1.9005);

	this.instance_25 = new lib.headturn02("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(12.3,15.55,0.8164,0.5265,3.3);

	this.instance_26 = new lib.cowboyarm03("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(27.75,33.4,0.9343,1.1983,-16.5294);

	this.instance_27 = new lib.horseblit01("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(17.55,41.9,0.6625,0.7017,0,0,0,-0.1,0);

	this.instance_28 = new lib.Hatturn03("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(9,-13.1,0.6916,0.3289,0,-3.9532,-2.6493);

	this.instance_29 = new lib.bodyturn04("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(8.85,32.65,0.6806,0.5261,0,-3.2853,-3.6263);

	this.instance_30 = new lib.headturn03("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(11.9,13,0.8167,0.5267,-2.2234);

	this.instance_31 = new lib.Horseturn03("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(14.45,52.15,0.644,0.6119);

	this.instance_32 = new lib.cowboyleg01("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(22.05,59.85,0.4851,0.4208,0,-7.8733,-8.1676);

	this.instance_33 = new lib.cowboyarm03("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(25.85,35.05,0.9333,1.1971,-35.8357);

	this.instance_34 = new lib.Headfront("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(15.7,31.2,0.4372,0.4622,0,0,0,0,-0.1);

	this.instance_35 = new lib.horseblit02("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(14.8,45.85,1.0107,1.1451);

	this.instance_36 = new lib.Hatturn04("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(10.95,-13.1,0.6091,0.3774,0,-4.4616,-3.1538);

	this.instance_37 = new lib.Horseturn04("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(15.15,52.9,0.5566,0.5367);

	this.instance_38 = new lib.horseblit05("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(12.8,41.4,0.6505,0.6505);

	this.instance_39 = new lib.Hatturn06("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(17.65,-9.65,0.6915,0.3289,0,0.0957,1.3985);

	this.instance_40 = new lib.bodyturn06("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(18.2,39,0.5563,0.526,0,13.03,12.6914);

	this.instance_41 = new lib.Horseturn05("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(16.15,52,0.6425,0.6524);

	this.instance_42 = new lib.headturn05("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(16.25,16.9,0.8162,0.5263,5.08);

	this.instance_43 = new lib.Hatturn08("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(14.3,-12.9,0.6916,0.3289,0,-1.946,-0.6422);

	this.instance_44 = new lib.headturn07("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(13.7,13.2,0.8163,0.5264,1.0597);

	this.instance_45 = new lib.Horseturn07("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(14.6,55,0.627,0.5558);

	this.instance_46 = new lib.bodyturn07("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(14.25,32.85,0.681,0.5264,0,-1.5579,-1.9005);

	this.instance_47 = new lib.CachedTexturedBitmap_1685();
	this.instance_47.parent = this;
	this.instance_47.setTransform(11.65,27.9,0.5,0.5);

	this.instance_48 = new lib.horsearm04("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(-17.7,16.45,1.2,1.2);

	this.instance_49 = new lib.CachedTexturedBitmap_1678();
	this.instance_49.parent = this;
	this.instance_49.setTransform(11.45,26.1,0.5,0.5);

	this.instance_50 = new lib.CachedTexturedBitmap_1679();
	this.instance_50.parent = this;
	this.instance_50.setTransform(11.35,25.9,0.5,0.5);

	this.instance_51 = new lib.cowboyhead04("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(8.8,4.6,0.8157,0.526,23.144);

	this.instance_52 = new lib.CachedTexturedBitmap_1688();
	this.instance_52.parent = this;
	this.instance_52.setTransform(11.25,27.25,0.5,0.5);

	this.instance_53 = new lib.CachedTexturedBitmap_1681();
	this.instance_53.parent = this;
	this.instance_53.setTransform(11.2,25.95,0.5,0.5);

	this.instance_54 = new lib.CachedTexturedBitmap_1686();
	this.instance_54.parent = this;
	this.instance_54.setTransform(33.25,26.1,0.5,0.5);

	this.instance_55 = new lib.CachedTexturedBitmap_1687();
	this.instance_55.parent = this;
	this.instance_55.setTransform(33.85,25.9,0.5,0.5);

	this.instance_56 = new lib.CachedTexturedBitmap_1689();
	this.instance_56.parent = this;
	this.instance_56.setTransform(37.1,25.95,0.5,0.5);

	this.instance_57 = new lib.CachedTexturedBitmap_1700();
	this.instance_57.parent = this;
	this.instance_57.setTransform(11.65,28.35,0.5,0.5);

	this.instance_58 = new lib.CachedTexturedBitmap_1701();
	this.instance_58.parent = this;
	this.instance_58.setTransform(11,27.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17,p:{x:11.3,y:28.55}},{t:this.instance_16,p:{x:31.95,y:30.95,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.3812,skewX:13.7715,skewY:14.2745,x:-24.85,y:47.2,scaleX:0.4058}},{t:this.instance_14,p:{x:46.95,y:33.1,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:6.6771,skewY:9.4543,regY:3.1}},{t:this.instance_13,p:{x:38.25,y:69.7,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:12.85,y:52.65,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:34.1,y:21.7,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:16.4,y:30.25}},{t:this.instance_9,p:{rotation:7.5592,skewX:0,skewY:0,x:10.75,y:13.5,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:-1.5579,skewY:-1.9005,x:9.4,y:33.15,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:-8.4593,skewY:-7.1534,x:8.75,y:-12.6,scaleX:0.6918,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:142.4714,skewY:141.6704,x:-14.95,y:34.2}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:9.7,y:44.4}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:-7.8733,skewY:-8.1676,x:15.25,y:61.65}},{t:this.instance_3,p:{x:30.65,y:83.2,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:61.65,y:12.45,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:-5.9182,skewY:-6.1397,x:57.5,y:12.25,startPosition:0,regX:57.4}}]}).to({state:[{t:this.instance_17,p:{x:11.75,y:28.65}},{t:this.instance_10,p:{scaleX:0.5155,scaleY:0.5245,skewX:-22.9185,skewY:-23.2819,x:15.65,y:34.2}},{t:this.instance_16,p:{x:28.8,y:31.95,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_13,p:{x:34.5,y:72.5,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_21},{t:this.instance_20},{t:this.instance_11,p:{x:31.25,y:22.7,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_5,p:{scaleX:0.6429,scaleY:0.8381,skewX:-4.1648,skewY:-4.323,x:7.9,y:42.1}},{t:this.instance_4,p:{scaleX:0.4848,scaleY:0.4205,skewX:6.4153,skewY:6.1219,x:7.9,y:61.5}},{t:this.instance_3,p:{x:17.9,y:83.3,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_15,p:{scaleY:0.3811,skewX:17.8212,skewY:18.3239,x:-24.65,y:45.5,scaleX:0.4058}},{t:this.instance_6,p:{scaleX:0.5548,scaleY:0.4241,skewX:146.5249,skewY:145.7216,x:-13.6,y:33.45}},{t:this.instance_14,p:{x:40.8,y:29.9,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:6.6771,skewY:9.4543,regY:3.1}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4365,scaleY:0.4615,rotation:-1.2884,x:56.75,y:13.95,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5165,scaleY:0.526,skewX:-7.206,skewY:-7.4282,x:52.65,y:13.95,startPosition:1,regX:57.4}}]},1).to({state:[{t:this.instance_17,p:{x:12.1,y:28.2}},{t:this.instance_16,p:{x:28.85,y:36.9,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.4287,skewX:12.2189,skewY:16.0633,x:-24.65,y:43.4,scaleX:0.4093}},{t:this.instance_13,p:{x:30.35,y:75.05,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_11,p:{x:31,y:27.65,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:13.3,y:36.2}},{t:this.instance_25,p:{rotation:3.3,skewX:0,skewY:0,x:12.3}},{t:this.instance_24,p:{skewX:-1.5579,skewY:-1.9005,x:9.25}},{t:this.instance_23,p:{skewY:0,x:13.65}},{t:this.instance_22,p:{skewX:-7.3917,skewY:-6.0916,x:10.75}},{t:this.instance_6,p:{scaleX:0.5655,scaleY:0.4726,skewX:160.8414,skewY:155.1305,x:-11.75,y:30.7}},{t:this.instance_5,p:{scaleX:0.6625,scaleY:0.5289,skewX:6.5972,skewY:6.4405,x:6,y:44.05}},{t:this.instance_4,p:{scaleX:0.3036,scaleY:0.4206,skewX:1.6673,skewY:1.3708,x:4.95,y:61.3}},{t:this.instance_3,p:{x:14.65,y:84.65,scaleX:0.517,scaleY:0.4657,skewX:5.4055,skewY:5.1018}},{t:this.instance_14,p:{x:36.25,y:32.2,regX:5.5,scaleX:0.3403,scaleY:0.5124,skewX:6.678,skewY:9.4556,regY:3.1}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4358,scaleY:0.4607,rotation:-3.0148,x:52.9,y:14.15,regX:-0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5157,scaleY:0.5252,skewX:-8.9325,skewY:-9.1535,x:48.85,y:14.25,startPosition:2,regX:57.6}}]},1).to({state:[{t:this.instance_17,p:{x:12.9,y:28.05}},{t:this.instance_33},{t:this.instance_32,p:{skewX:-7.8733,skewY:-8.1676,x:22.05,y:59.85,scaleX:0.4851,scaleY:0.4208}},{t:this.instance_15,p:{scaleY:0.3469,skewX:43.872,skewY:44.3776,x:-24.15,y:35.9,scaleX:0.3596}},{t:this.instance_6,p:{scaleX:0.5426,scaleY:0.3058,skewX:171.3043,skewY:170.5025,x:-9.75,y:30.7}},{t:this.instance_13,p:{x:36.55,y:83.3,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_31},{t:this.instance_30,p:{rotation:-2.2234,x:11.9,y:13}},{t:this.instance_29,p:{scaleX:0.6806,scaleY:0.5261,skewX:-3.2853,skewY:-3.6263,x:8.85,y:32.65}},{t:this.instance_11,p:{x:17,y:27.5,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_28},{t:this.instance_5,p:{scaleX:0.8129,scaleY:0.5292,skewX:-4.1654,skewY:-4.3231,x:8.15,y:42.1}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:2.25,y:58.05}},{t:this.instance_3,p:{x:-9.15,y:83.6,scaleX:0.5161,scaleY:0.4648,skewX:-20.4623,skewY:159.8415}},{t:this.instance_27},{t:this.instance_26,p:{scaleX:0.9343,scaleY:1.1983,rotation:-16.5294,x:27.75,y:33.4}},{t:this.instance_14,p:{x:24.65,y:30.8,regX:5.2,scaleX:0.358,scaleY:0.5703,skewX:6.147,skewY:8.9283,regY:3.2}},{t:this.instance_2,p:{regY:-0.4,scaleX:0.4359,scaleY:0.4608,rotation:15.7776,x:40.95,y:15.5,regX:0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5158,scaleY:0.5253,skewX:9.8612,skewY:9.6373,x:36.95,y:14.25,startPosition:3,regX:57.2}}]},1).to({state:[{t:this.instance_17,p:{x:13.6,y:28.8}},{t:this.instance_15,p:{scaleY:0.3469,skewX:43.872,skewY:44.3776,x:-20.15,y:35.45,scaleX:0.3596}},{t:this.instance_6,p:{scaleX:0.5426,scaleY:0.3058,skewX:171.3043,skewY:170.5025,x:-6.05,y:30.7}},{t:this.instance_13,p:{x:44.75,y:80.75,scaleX:0.5173,scaleY:0.4663,rotation:-4.5514,skewY:0,skewX:0}},{t:this.instance_37},{t:this.instance_30,p:{rotation:-0.7652,x:13.05,y:13.75}},{t:this.instance_29,p:{scaleX:0.6804,scaleY:0.526,skewX:-7.6214,skewY:-7.964,x:11.75,y:33.4}},{t:this.instance_11,p:{x:13.85,y:28.4,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_32,p:{skewX:7.8733,skewY:-171.8324,x:1.85,y:58,scaleX:0.4851,scaleY:0.4208}},{t:this.instance_3,p:{x:-13.5,y:79.55,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_36},{t:this.instance_5,p:{scaleX:0.8648,scaleY:0.5292,skewX:-4.1654,skewY:-4.3231,x:14.4,y:44.65}},{t:this.instance_35},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:-7.8733,skewY:-8.1676,x:30.35,y:58.6}},{t:this.instance_26,p:{scaleX:0.9332,scaleY:1.197,rotation:-39.323,x:26.35,y:31.9}},{t:this.instance_14,p:{x:16.9,y:29.7,regX:5.2,scaleX:0.3032,scaleY:0.4565,skewX:-15.8731,skewY:-13.0914,regY:3.1}},{t:this.instance_34},{t:this.instance_1,p:{regY:-30.7,scaleX:0.5678,scaleY:0.5272,skewX:34.185,skewY:33.96,x:15.05,y:30.1,startPosition:4,regX:57.5}}]},1).to({state:[{t:this.instance_17,p:{x:14.6,y:27.9}},{t:this.instance_15,p:{scaleY:0.3789,skewX:79.3937,skewY:79.9008,x:-12.2,y:11.95,scaleX:0.4035}},{t:this.instance_6,p:{scaleX:0.5509,scaleY:0.5919,skewX:0.845,skewY:-178.3494,x:-1.85,y:21.05}},{t:this.instance_42},{t:this.instance_13,p:{x:-6.45,y:72.25,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_41},{t:this.instance_40},{t:this.instance_16,p:{x:17.2,y:38.75,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:20.95,y:46.15}},{t:this.instance_11,p:{x:14.8,y:30.3,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_39},{t:this.instance_4,p:{scaleX:0.4849,scaleY:0.4206,skewX:1.9294,skewY:1.632,x:23.05,y:60.7}},{t:this.instance_3,p:{x:35.05,y:82.25,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_38},{t:this.instance_14,p:{x:4.85,y:29.05,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.2}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4366,scaleY:0.4616,rotation:0,x:-9.7,y:22.55,regX:0.1,skewX:-24.5455,skewY:155.4555}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5167,scaleY:0.5262,skewX:-18.6262,skewY:161.5956,x:-6.6,y:21.15,startPosition:5,regX:57.5}},{t:this.instance_26,p:{scaleX:0.9332,scaleY:1.197,rotation:-39.323,x:27.45,y:34.4}}]},1).to({state:[{t:this.instance_17,p:{x:17.3,y:28.2}},{t:this.instance_15,p:{scaleY:0.4275,skewX:127.0777,skewY:130.9187,x:1.4,y:2.3,scaleX:0.4081}},{t:this.instance_10,p:{scaleX:0.5638,scaleY:0.4712,skewX:-84.3036,skewY:-90.0124,x:7.55,y:19.25}},{t:this.instance_13,p:{x:-0.35,y:75.05,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_25,p:{rotation:0,skewX:-3.3,skewY:176.7008,x:17.75}},{t:this.instance_24,p:{skewX:1.5579,skewY:-178.0995,x:20.8}},{t:this.instance_16,p:{x:5.95,y:37.6,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_23,p:{skewY:180,x:16.35}},{t:this.instance_22,p:{skewX:7.3917,skewY:-173.9084,x:19.3}},{t:this.instance_5,p:{scaleX:0.6625,scaleY:0.5289,skewX:-6.5972,skewY:173.5595,x:24.05,y:44.05}},{t:this.instance_4,p:{scaleX:0.3036,scaleY:0.4206,skewX:-1.6673,skewY:178.6292,x:25.05,y:61.3}},{t:this.instance_3,p:{x:15.4,y:84.65,scaleX:0.517,scaleY:0.4657,skewX:-5.4055,skewY:174.8982}},{t:this.instance_11,p:{x:3.8,y:28.4,skewX:32.4885,skewY:-146.6708,scaleX:0.3924,scaleY:0.3677}},{t:this.instance_14,p:{x:-6.2,y:32.2,regX:5.4,scaleX:0.3403,scaleY:0.5124,skewX:-6.678,skewY:170.5444,regY:3.1}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4361,scaleY:0.461,rotation:0,x:-22.5,y:20.95,regX:-0.1,skewX:-18.5549,skewY:161.444}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.516,scaleY:0.5255,skewX:-12.6367,skewY:167.5831,x:-18.7,y:19.45,startPosition:2,regX:57.4}},{t:this.instance_6,p:{scaleX:0.3992,scaleY:0.4429,skewX:3.5675,skewY:-176.0701,x:19.35,y:37.4}}]},1).to({state:[{t:this.instance_17,p:{x:16.15,y:28.25}},{t:this.instance_13,p:{x:-5.55,y:70,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_16,p:{x:-1.95,y:33.75,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_46},{t:this.instance_45},{t:this.instance_11,p:{x:-4.1,y:24.6,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_44},{t:this.instance_43},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:14.55,y:44.1}},{t:this.instance_6,p:{scaleX:0.4398,scaleY:0.5249,skewX:9.8481,skewY:-169.7867,x:12.15,y:33.3}},{t:this.instance_14,p:{x:-11.9,y:35.2,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-26.6,y:14.55,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-22.5,y:14.35,startPosition:7,regX:57.4}},{t:this.instance_4,p:{scaleX:0.3036,scaleY:0.4206,skewX:-1.6673,skewY:178.6292,x:15.2,y:60.7}},{t:this.instance_3,p:{x:5.8,y:82.45,scaleX:0.517,scaleY:0.4657,skewX:-5.4055,skewY:174.8982}}]},1).to({state:[{t:this.instance_17,p:{x:17.5,y:28.8}},{t:this.instance_15,p:{scaleY:0.3802,skewX:13.8026,skewY:-166.6991,x:37.4,y:58.75,scaleX:0.4048}},{t:this.instance_16,p:{x:-2.55,y:31.2,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_14,p:{x:-17.55,y:33.35,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_13,p:{x:-8.85,y:69.95,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:180,x:16.55,y:52.9,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:-4.7,y:22,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_9,p:{rotation:0,skewX:-7.5592,skewY:172.4392,x:18.65,y:13.75,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:1.5579,skewY:-178.0995,x:20,y:33.4,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:8.4593,skewY:-172.8466,x:20.65,y:-12.35,scaleX:0.6918,scaleY:0.329}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:19.7,y:44.65}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:14.15,y:61.9}},{t:this.instance_3,p:{x:-1.25,y:83.45,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-32.25,y:12.7,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-28.1,y:12.5,startPosition:0,regX:57.4}},{t:this.instance_6,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:13,y:30.45}}]},1).to({state:[{t:this.instance_17,p:{x:17.5,y:28.8}},{t:this.instance_15,p:{scaleY:0.3802,skewX:13.8026,skewY:-166.6991,x:37.4,y:58.75,scaleX:0.4048}},{t:this.instance_16,p:{x:-2.55,y:31.2,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_14,p:{x:-17.55,y:33.35,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_13,p:{x:-8.85,y:69.95,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:180,x:16.55,y:52.9,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:-4.7,y:22,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_9,p:{rotation:0,skewX:-7.5592,skewY:172.4392,x:18.65,y:13.75,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:1.5579,skewY:-178.0995,x:20,y:33.4,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:8.4593,skewY:-172.8466,x:20.65,y:-12.35,scaleX:0.6918,scaleY:0.329}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:19.7,y:44.65}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:14.15,y:61.9}},{t:this.instance_3,p:{x:-1.25,y:83.45,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-32.25,y:12.7,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-28.1,y:12.5,startPosition:0,regX:57.4}},{t:this.instance_6,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:13,y:30.45}}]},1).to({state:[{t:this.instance_17,p:{x:17.5,y:28.8}},{t:this.instance_15,p:{scaleY:0.3802,skewX:13.8026,skewY:-166.6991,x:37.4,y:58.75,scaleX:0.4048}},{t:this.instance_16,p:{x:-2.55,y:31.2,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_14,p:{x:-17.55,y:33.35,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_13,p:{x:-8.85,y:69.95,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:180,x:16.55,y:52.9,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:-4.7,y:22,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_9,p:{rotation:0,skewX:-7.5592,skewY:172.4392,x:18.65,y:13.75,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:1.5579,skewY:-178.0995,x:20,y:33.4,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:8.4593,skewY:-172.8466,x:20.65,y:-12.35,scaleX:0.6918,scaleY:0.329}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:19.7,y:44.65}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:14.15,y:61.9}},{t:this.instance_3,p:{x:-1.25,y:83.45,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-32.25,y:12.7,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-28.1,y:12.5,startPosition:3,regX:57.4}},{t:this.instance_6,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:13,y:30.45}}]},1).to({state:[{t:this.instance_17,p:{x:17.5,y:28.8}},{t:this.instance_15,p:{scaleY:0.3802,skewX:13.8026,skewY:-166.6991,x:37.4,y:58.75,scaleX:0.4048}},{t:this.instance_16,p:{x:-2.55,y:31.2,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_14,p:{x:-17.55,y:33.35,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_13,p:{x:-8.85,y:69.95,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:180,x:16.55,y:52.9,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:-4.7,y:22,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_9,p:{rotation:0,skewX:-7.5592,skewY:172.4392,x:18.65,y:13.75,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:1.5579,skewY:-178.0995,x:20,y:33.4,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:8.4593,skewY:-172.8466,x:20.65,y:-12.35,scaleX:0.6918,scaleY:0.329}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:19.7,y:44.65}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:14.15,y:61.9}},{t:this.instance_3,p:{x:-1.25,y:83.45,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-32.25,y:12.7,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-28.1,y:12.5,startPosition:0,regX:57.4}},{t:this.instance_6,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:13,y:30.45}}]},1).to({state:[{t:this.instance_17,p:{x:16.15,y:28.25}},{t:this.instance_13,p:{x:-5.55,y:70,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_16,p:{x:-1.95,y:33.75,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_46},{t:this.instance_45},{t:this.instance_11,p:{x:-4.1,y:24.6,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_44},{t:this.instance_43},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:14.55,y:44.1}},{t:this.instance_6,p:{scaleX:0.4398,scaleY:0.5249,skewX:9.8481,skewY:-169.7867,x:12.15,y:33.3}},{t:this.instance_14,p:{x:-11.9,y:35.2,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-26.6,y:14.55,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-22.5,y:14.35,startPosition:7,regX:57.4}},{t:this.instance_4,p:{scaleX:0.3036,scaleY:0.4206,skewX:-1.6673,skewY:178.6292,x:15.2,y:60.7}},{t:this.instance_3,p:{x:5.8,y:82.45,scaleX:0.517,scaleY:0.4657,skewX:-5.4055,skewY:174.8982}}]},1).to({state:[{t:this.instance_17,p:{x:17.3,y:28.2}},{t:this.instance_15,p:{scaleY:0.4275,skewX:127.0777,skewY:130.9187,x:1.4,y:2.3,scaleX:0.4081}},{t:this.instance_10,p:{scaleX:0.5638,scaleY:0.4712,skewX:-84.3036,skewY:-90.0124,x:7.55,y:19.25}},{t:this.instance_13,p:{x:-0.35,y:75.05,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_25,p:{rotation:0,skewX:-3.3,skewY:176.7008,x:17.75}},{t:this.instance_24,p:{skewX:1.5579,skewY:-178.0995,x:20.8}},{t:this.instance_16,p:{x:5.95,y:37.6,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_23,p:{skewY:180,x:16.35}},{t:this.instance_22,p:{skewX:7.3917,skewY:-173.9084,x:19.3}},{t:this.instance_5,p:{scaleX:0.6625,scaleY:0.5289,skewX:-6.5972,skewY:173.5595,x:24.05,y:44.05}},{t:this.instance_4,p:{scaleX:0.3036,scaleY:0.4206,skewX:-1.6673,skewY:178.6292,x:25.05,y:61.3}},{t:this.instance_3,p:{x:15.4,y:84.65,scaleX:0.517,scaleY:0.4657,skewX:-5.4055,skewY:174.8982}},{t:this.instance_11,p:{x:3.8,y:28.4,skewX:32.4885,skewY:-146.6708,scaleX:0.3924,scaleY:0.3677}},{t:this.instance_14,p:{x:-6.2,y:32.2,regX:5.4,scaleX:0.3403,scaleY:0.5124,skewX:-6.678,skewY:170.5444,regY:3.1}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4361,scaleY:0.461,rotation:0,x:-22.5,y:20.95,regX:-0.1,skewX:-18.5549,skewY:161.444}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.516,scaleY:0.5255,skewX:-12.6367,skewY:167.5831,x:-18.7,y:19.45,startPosition:2,regX:57.4}},{t:this.instance_6,p:{scaleX:0.3992,scaleY:0.4429,skewX:3.5675,skewY:-176.0701,x:19.35,y:37.4}}]},1).to({state:[{t:this.instance_17,p:{x:14.6,y:27.9}},{t:this.instance_15,p:{scaleY:0.3789,skewX:79.3937,skewY:79.9008,x:-12.2,y:11.95,scaleX:0.4035}},{t:this.instance_6,p:{scaleX:0.5509,scaleY:0.5919,skewX:0.845,skewY:-178.3494,x:-1.85,y:21.05}},{t:this.instance_42},{t:this.instance_13,p:{x:-6.45,y:72.25,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_41},{t:this.instance_40},{t:this.instance_16,p:{x:17.2,y:38.75,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:20.95,y:46.15}},{t:this.instance_11,p:{x:14.8,y:30.3,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_39},{t:this.instance_4,p:{scaleX:0.4849,scaleY:0.4206,skewX:1.9294,skewY:1.632,x:23.05,y:60.7}},{t:this.instance_3,p:{x:35.05,y:82.25,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_38},{t:this.instance_14,p:{x:4.85,y:29.05,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.2}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4366,scaleY:0.4616,rotation:0,x:-9.7,y:22.55,regX:0.1,skewX:-24.5455,skewY:155.4555}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5167,scaleY:0.5262,skewX:-18.6262,skewY:161.5956,x:-6.6,y:21.15,startPosition:5,regX:57.5}},{t:this.instance_26,p:{scaleX:0.9332,scaleY:1.197,rotation:-39.323,x:27.45,y:34.4}}]},1).to({state:[{t:this.instance_17,p:{x:13.6,y:28.8}},{t:this.instance_15,p:{scaleY:0.3469,skewX:43.872,skewY:44.3776,x:-20.15,y:35.45,scaleX:0.3596}},{t:this.instance_6,p:{scaleX:0.5426,scaleY:0.3058,skewX:171.3043,skewY:170.5025,x:-6.05,y:30.7}},{t:this.instance_13,p:{x:44.75,y:80.75,scaleX:0.5173,scaleY:0.4663,rotation:-4.5514,skewY:0,skewX:0}},{t:this.instance_37},{t:this.instance_30,p:{rotation:-0.7652,x:13.05,y:13.75}},{t:this.instance_29,p:{scaleX:0.6804,scaleY:0.526,skewX:-7.6214,skewY:-7.964,x:11.75,y:33.4}},{t:this.instance_11,p:{x:13.85,y:28.4,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_32,p:{skewX:7.8733,skewY:-171.8324,x:1.85,y:58,scaleX:0.4851,scaleY:0.4208}},{t:this.instance_3,p:{x:-13.5,y:79.55,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_36},{t:this.instance_5,p:{scaleX:0.8648,scaleY:0.5292,skewX:-4.1654,skewY:-4.3231,x:14.4,y:44.65}},{t:this.instance_35},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:-7.8733,skewY:-8.1676,x:30.35,y:58.6}},{t:this.instance_26,p:{scaleX:0.9332,scaleY:1.197,rotation:-39.323,x:26.35,y:31.9}},{t:this.instance_14,p:{x:16.9,y:29.7,regX:5.2,scaleX:0.3032,scaleY:0.4565,skewX:-15.8731,skewY:-13.0914,regY:3.1}},{t:this.instance_34},{t:this.instance_1,p:{regY:-30.7,scaleX:0.5678,scaleY:0.5272,skewX:34.185,skewY:33.96,x:15.05,y:30.1,startPosition:4,regX:57.5}}]},1).to({state:[{t:this.instance_17,p:{x:12.9,y:28.05}},{t:this.instance_33},{t:this.instance_32,p:{skewX:-7.8733,skewY:-8.1676,x:22.05,y:59.85,scaleX:0.4851,scaleY:0.4208}},{t:this.instance_15,p:{scaleY:0.3469,skewX:43.872,skewY:44.3776,x:-24.15,y:35.9,scaleX:0.3596}},{t:this.instance_6,p:{scaleX:0.5426,scaleY:0.3058,skewX:171.3043,skewY:170.5025,x:-9.75,y:30.7}},{t:this.instance_13,p:{x:36.55,y:83.3,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_31},{t:this.instance_30,p:{rotation:-2.2234,x:11.9,y:13}},{t:this.instance_29,p:{scaleX:0.6806,scaleY:0.5261,skewX:-3.2853,skewY:-3.6263,x:8.85,y:32.65}},{t:this.instance_11,p:{x:17,y:27.5,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_28},{t:this.instance_5,p:{scaleX:0.8129,scaleY:0.5292,skewX:-4.1654,skewY:-4.3231,x:8.15,y:42.1}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:2.25,y:58.05}},{t:this.instance_3,p:{x:-9.15,y:83.6,scaleX:0.5161,scaleY:0.4648,skewX:-20.4623,skewY:159.8415}},{t:this.instance_27},{t:this.instance_26,p:{scaleX:0.9343,scaleY:1.1983,rotation:-16.5294,x:27.75,y:33.4}},{t:this.instance_14,p:{x:24.65,y:30.8,regX:5.2,scaleX:0.358,scaleY:0.5703,skewX:6.147,skewY:8.9283,regY:3.2}},{t:this.instance_2,p:{regY:-0.4,scaleX:0.4359,scaleY:0.4608,rotation:15.7776,x:40.95,y:15.5,regX:0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5158,scaleY:0.5253,skewX:9.8612,skewY:9.6373,x:36.95,y:14.25,startPosition:3,regX:57.2}}]},1).to({state:[{t:this.instance_17,p:{x:12.1,y:28.2}},{t:this.instance_16,p:{x:28.85,y:36.9,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.4287,skewX:12.2189,skewY:16.0633,x:-24.65,y:43.4,scaleX:0.4093}},{t:this.instance_13,p:{x:30.35,y:75.05,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_11,p:{x:31,y:27.65,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:13.3,y:36.2}},{t:this.instance_25,p:{rotation:3.3,skewX:0,skewY:0,x:12.3}},{t:this.instance_24,p:{skewX:-1.5579,skewY:-1.9005,x:9.25}},{t:this.instance_23,p:{skewY:0,x:13.65}},{t:this.instance_22,p:{skewX:-7.3917,skewY:-6.0916,x:10.75}},{t:this.instance_6,p:{scaleX:0.5655,scaleY:0.4726,skewX:160.8414,skewY:155.1305,x:-11.75,y:30.7}},{t:this.instance_5,p:{scaleX:0.6625,scaleY:0.5289,skewX:6.5972,skewY:6.4405,x:6,y:44.05}},{t:this.instance_4,p:{scaleX:0.3036,scaleY:0.4206,skewX:1.6673,skewY:1.3708,x:4.95,y:61.3}},{t:this.instance_3,p:{x:14.65,y:84.65,scaleX:0.517,scaleY:0.4657,skewX:5.4055,skewY:5.1018}},{t:this.instance_14,p:{x:36.25,y:32.2,regX:5.5,scaleX:0.3403,scaleY:0.5124,skewX:6.678,skewY:9.4556,regY:3.1}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4358,scaleY:0.4607,rotation:-3.0148,x:52.9,y:14.15,regX:-0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5157,scaleY:0.5252,skewX:-8.9325,skewY:-9.1535,x:48.85,y:14.25,startPosition:2,regX:57.6}}]},1).to({state:[{t:this.instance_17,p:{x:11.75,y:28.65}},{t:this.instance_10,p:{scaleX:0.5155,scaleY:0.5245,skewX:-22.9185,skewY:-23.2819,x:15.65,y:34.2}},{t:this.instance_16,p:{x:28.8,y:31.95,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_13,p:{x:34.5,y:72.5,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_21},{t:this.instance_20},{t:this.instance_11,p:{x:31.25,y:22.7,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_5,p:{scaleX:0.6429,scaleY:0.8381,skewX:-4.1648,skewY:-4.323,x:7.9,y:42.1}},{t:this.instance_4,p:{scaleX:0.4848,scaleY:0.4205,skewX:6.4153,skewY:6.1219,x:7.9,y:61.5}},{t:this.instance_3,p:{x:17.9,y:83.3,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_15,p:{scaleY:0.3811,skewX:17.8212,skewY:18.3239,x:-24.65,y:45.5,scaleX:0.4058}},{t:this.instance_6,p:{scaleX:0.5548,scaleY:0.4241,skewX:146.5249,skewY:145.7216,x:-13.6,y:33.45}},{t:this.instance_14,p:{x:40.8,y:29.9,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:6.6771,skewY:9.4543,regY:3.1}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4365,scaleY:0.4615,rotation:-1.2884,x:56.75,y:13.95,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5165,scaleY:0.526,skewX:-7.206,skewY:-7.4282,x:52.65,y:13.95,startPosition:1,regX:57.4}}]},1).to({state:[{t:this.instance_17,p:{x:11.3,y:28.55}},{t:this.instance_16,p:{x:31.95,y:30.95,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.3812,skewX:13.7715,skewY:14.2745,x:-24.85,y:47.2,scaleX:0.4058}},{t:this.instance_14,p:{x:46.95,y:33.1,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:6.6771,skewY:9.4543,regY:3.1}},{t:this.instance_13,p:{x:38.25,y:69.7,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:12.85,y:52.65,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:34.1,y:21.7,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:16.4,y:30.25}},{t:this.instance_9,p:{rotation:7.5592,skewX:0,skewY:0,x:10.75,y:13.5,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:-1.5579,skewY:-1.9005,x:9.4,y:33.15,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:-8.4593,skewY:-7.1534,x:8.75,y:-12.6,scaleX:0.6918,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:142.4714,skewY:141.6704,x:-14.95,y:34.2}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:9.7,y:44.4}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:-7.8733,skewY:-8.1676,x:15.25,y:61.65}},{t:this.instance_3,p:{x:30.65,y:83.2,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:61.65,y:12.45,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:-5.9182,skewY:-6.1397,x:57.5,y:12.25,startPosition:0,regX:57.4}}]},1).to({state:[{t:this.instance_17,p:{x:11.3,y:28.55}},{t:this.instance_16,p:{x:31.95,y:30.95,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.3812,skewX:13.7715,skewY:14.2745,x:-24.85,y:47.2,scaleX:0.4058}},{t:this.instance_14,p:{x:46.95,y:33.1,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:6.6771,skewY:9.4543,regY:3.1}},{t:this.instance_13,p:{x:38.25,y:69.7,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:12.85,y:52.65,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:34.1,y:21.7,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:16.4,y:30.25}},{t:this.instance_9,p:{rotation:7.5592,skewX:0,skewY:0,x:10.75,y:13.5,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:-1.5579,skewY:-1.9005,x:9.4,y:33.15,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:-8.4593,skewY:-7.1534,x:9.45,y:-12.6,scaleX:0.6918,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:142.4714,skewY:141.6704,x:-14.95,y:34.2}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:9.7,y:44.4}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:-7.8733,skewY:-8.1676,x:15.25,y:61.65}},{t:this.instance_3,p:{x:30.65,y:83.2,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:61.65,y:12.45,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:-5.9182,skewY:-6.1397,x:57.5,y:12.25,startPosition:0,regX:57.4}}]},6).to({state:[{t:this.instance_17,p:{x:11.6,y:29.05}},{t:this.instance_16,p:{x:31.55,y:31.45,skewX:-9.0871,skewY:-9.4266,scaleX:0.354,scaleY:0.5155}},{t:this.instance_15,p:{scaleY:0.3806,skewX:-2.2565,skewY:-1.7522,x:-24.4,y:54.75,scaleX:0.4052}},{t:this.instance_14,p:{x:47.05,y:32.6,regX:5.3,scaleX:0.3952,scaleY:0.5951,skewX:2.4218,skewY:5.1986,regY:3.2}},{t:this.instance_13,p:{x:40,y:70.2,scaleX:0.5171,scaleY:0.4661,rotation:-13.7715,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:14.55,y:54.6,scaleX:0.4943,scaleY:0.4919,rotation:-4.2571,skewX:0}},{t:this.instance_11,p:{x:32.05,y:22.25,skewX:-25.4823,skewY:-26.3224,scaleX:0.3931,scaleY:0.3684}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:14.55,y:30.95}},{t:this.instance_9,p:{rotation:-6.7729,skewX:0,skewY:0,x:5.65,y:15.45,scaleX:0.8172,scaleY:0.527}},{t:this.instance_8,p:{skewX:-9.1204,skewY:-9.4611,x:8.45,y:35.6,scaleX:0.6813,scaleY:0.5267}},{t:this.instance_7,p:{skewX:-18.5273,skewY:-17.2259,x:-0.75,y:-9.85,scaleX:0.692,scaleY:0.3291}},{t:this.instance_6,p:{scaleX:0.5544,scaleY:0.4238,skewX:140.2628,skewY:139.4623,x:-15.55,y:40.4}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:10,y:45.6}},{t:this.instance_4,p:{scaleX:0.485,scaleY:0.4207,skewX:-14.9022,skewY:-15.1985,x:18.7,y:61.95}},{t:this.instance_3,p:{x:35.25,y:78.9,scaleX:0.5169,scaleY:0.4655,skewX:-28.1509,skewY:-28.452}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4369,scaleY:0.4619,rotation:2.0295,x:61.65,y:12.85,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:-5.9182,skewY:-6.1397,x:57.8,y:12.75,startPosition:1,regX:57.4}}]},1).to({state:[{t:this.instance_17,p:{x:11.8,y:29.1}},{t:this.instance_16,p:{x:32.2,y:34.75,skewX:-9.0871,skewY:-9.4266,scaleX:0.354,scaleY:0.5155}},{t:this.instance_15,p:{scaleY:0.3809,skewX:26.8196,skewY:27.3228,x:-31.05,y:46.3,scaleX:0.4056}},{t:this.instance_14,p:{x:47.8,y:30.8,regX:5.2,scaleX:0.3952,scaleY:0.595,skewX:-0.6201,skewY:2.1553,regY:3.2}},{t:this.instance_13,p:{x:40.2,y:70.25,scaleX:0.5171,scaleY:0.4661,rotation:-13.7715,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:16.55,y:54.5,scaleX:0.4942,scaleY:0.4918,rotation:-7.3016,skewX:0}},{t:this.instance_11,p:{x:33,y:25.1,skewX:-25.4823,skewY:-26.3224,scaleX:0.3931,scaleY:0.3684}},{t:this.instance_10,p:{scaleX:0.5153,scaleY:0.5244,skewX:8.9525,skewY:8.5865,x:14.75,y:31}},{t:this.instance_9,p:{rotation:-9.8164,skewX:0,skewY:0,x:5.65,y:15.85,scaleX:0.817,scaleY:0.5269}},{t:this.instance_8,p:{skewX:-12.1634,skewY:-12.5032,x:9.45,y:35.8,scaleX:0.6811,scaleY:0.5266}},{t:this.instance_7,p:{skewX:-21.5735,skewY:-20.2685,x:-2.1,y:-9,scaleX:0.6919,scaleY:0.3291}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:169.3376,skewY:168.543,x:-16.2,y:38.15}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:10.2,y:45.65}},{t:this.instance_4,p:{scaleX:0.485,scaleY:0.4207,skewX:-14.9022,skewY:-15.1985,x:18.9,y:62}},{t:this.instance_3,p:{x:35.45,y:78.95,scaleX:0.5169,scaleY:0.4655,skewX:-28.1509,skewY:-28.452}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4368,scaleY:0.4618,rotation:-3.9925,x:61.85,y:12.4,regX:-0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5171,scaleY:0.5266,skewX:-13.7451,skewY:-13.9678,x:57.8,y:12.7,startPosition:2,regX:57.2}}]},1).to({state:[{t:this.instance_47,p:{x:11.65}},{t:this.instance_16,p:{x:31.3,y:35.65,skewX:-3.0634,skewY:-3.3988,scaleX:0.3539,scaleY:0.5154}},{t:this.instance_15,p:{scaleY:0.3808,skewX:32.8475,skewY:33.3491,x:-32.25,y:35.8,scaleX:0.4054}},{t:this.instance_14,p:{x:46.6,y:35.1,regX:5.4,scaleX:0.3951,scaleY:0.5949,skewX:8.4456,skewY:11.2257,regY:3.1}},{t:this.instance_13,p:{x:35.55,y:71.85,scaleX:0.5169,scaleY:0.4659,rotation:-7.7451,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:11.85,y:53.65,scaleX:0.4941,scaleY:0.4917,rotation:1.7694,skewX:0}},{t:this.instance_11,p:{x:33.05,y:26.1,skewX:-19.4577,skewY:-20.2975,scaleX:0.393,scaleY:0.3682}},{t:this.instance_10,p:{scaleX:0.5151,scaleY:0.5242,skewX:14.9795,skewY:14.6109,x:14.4,y:30.15}},{t:this.instance_9,p:{rotation:-0.7469,skewX:0,skewY:0,x:7.2,y:14.35,scaleX:0.8168,scaleY:0.5268}},{t:this.instance_8,p:{skewX:-3.0936,skewY:-3.4361,x:7.85,y:34.1,scaleX:0.681,scaleY:0.5265}},{t:this.instance_7,p:{skewX:-15.2919,skewY:-13.99,x:3.45,y:-11.45,scaleX:0.6916,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5547,scaleY:0.4241,skewX:175.3603,skewY:174.5657,x:-16.65,y:29.2}},{t:this.instance_5,p:{scaleX:0.517,scaleY:0.529,skewX:1.8613,skewY:1.7047,x:8.3,y:44.25}},{t:this.instance_4,p:{scaleX:0.4848,scaleY:0.4205,skewX:-8.8751,skewY:-9.1718,x:15.3,y:61.35}},{t:this.instance_3,p:{x:29.9,y:80,scaleX:0.5167,scaleY:0.4654,skewX:-22.1279,skewY:-22.4267}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4366,scaleY:0.4616,rotation:2.0327,x:63.15,y:16.6,regX:-0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.517,scaleY:0.5265,skewX:-4.6776,skewY:-4.8996,x:59.1,y:16.35,startPosition:3,regX:57.5}}]},1).to({state:[{t:this.instance_49},{t:this.instance_16,p:{x:29.95,y:36.3,skewX:4.4866,skewY:4.1504,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.5258,skewX:95.5776,skewY:96.0788,x:-36.7,y:2.7,scaleX:0.4082}},{t:this.instance_14,p:{x:45.05,y:37.75,regX:5.1,scaleX:0.395,scaleY:0.5947,skewX:15.9971,skewY:18.7779,regY:3.1}},{t:this.instance_13,p:{x:29.35,y:76.85,scaleX:0.516,scaleY:0.4651,rotation:28.398,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:8.3,y:51.6,scaleX:0.4939,scaleY:0.4915,rotation:9.317,skewX:0}},{t:this.instance_11,p:{x:32.85,y:27.05,skewX:-11.9048,skewY:-12.747,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_6,p:{scaleX:0.5149,scaleY:0.524,skewX:22.5295,skewY:22.1596,x:13.85,y:28.65}},{t:this.instance_9,p:{rotation:6.8021,skewX:0,skewY:0,x:8.85,y:12.6,scaleX:0.8165,scaleY:0.5265}},{t:this.instance_8,p:{skewX:4.4568,skewY:4.1134,x:6.85,y:31.7,scaleX:0.6807,scaleY:0.5262}},{t:this.instance_7,p:{skewX:-14.4995,skewY:-13.1955,x:6.65,y:-13.45,scaleX:0.6911,scaleY:0.3287}},{t:this.instance_5,p:{scaleX:0.5168,scaleY:0.5288,skewX:9.4088,skewY:9.2543,x:6,y:41.85}},{t:this.instance_4,p:{scaleX:0.4846,scaleY:0.4203,skewX:-1.325,skewY:-1.6222,x:10.65,y:59.65}},{t:this.instance_3,p:{x:20.35,y:86.65,scaleX:0.5156,scaleY:0.4644,skewX:26.7907,skewY:26.4923}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4364,scaleY:0.4614,rotation:9.5832,x:63.95,y:21.6,regX:-0.2,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5168,scaleY:0.5263,skewX:2.8717,skewY:2.6502,x:59.95,y:20.8,startPosition:4,regX:57.3}},{t:this.instance_48,p:{scaleX:1.2,scaleY:1.2,rotation:0,x:-17.7,y:16.45,skewY:0,skewX:0,regX:0,regY:0}}]},1).to({state:[{t:this.instance_50},{t:this.instance_16,p:{x:29.6,y:36.6,skewX:6.0178,skewY:5.6791,scaleX:0.3537,scaleY:0.5151}},{t:this.instance_14,p:{x:44.75,y:38.45,regX:5.2,scaleX:0.3949,scaleY:0.5946,skewX:17.5282,skewY:20.3058,regY:3.1}},{t:this.instance_12,p:{skewY:0,x:7.5,y:51.35,scaleX:0.4938,scaleY:0.4915,rotation:10.847,skewX:0}},{t:this.instance_11,p:{x:32.75,y:27.45,skewX:-10.3762,skewY:-11.2148,scaleX:0.3928,scaleY:0.368}},{t:this.instance_6,p:{scaleX:0.5148,scaleY:0.5239,skewX:24.0599,skewY:23.6887,x:13.75,y:28.5}},{t:this.instance_9,p:{rotation:8.3304,skewX:0,skewY:0,x:9.15,y:12.05,scaleX:0.8164,scaleY:0.5265}},{t:this.instance_8,p:{skewX:5.9857,skewY:5.644,x:6.6,y:31.35,scaleX:0.6807,scaleY:0.5262}},{t:this.instance_5,p:{scaleX:0.5168,scaleY:0.5287,skewX:10.9402,skewY:10.7847,x:5.55,y:41.5}},{t:this.instance_4,p:{scaleX:0.4845,scaleY:0.4203,skewX:0.2039,skewY:-0.0938,x:9.7,y:59.45}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4364,scaleY:0.4614,rotation:11.1118,x:64,y:22.8,regX:-0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5167,scaleY:0.5263,skewX:4.4018,skewY:4.1793,x:60.05,y:21.95,startPosition:5,regX:57.3}},{t:this.instance_7,p:{skewX:-12.9703,skewY:-11.6642,x:7.4,y:-16.45,scaleX:0.691,scaleY:0.3286}},{t:this.instance_15,p:{scaleY:0.5257,skewX:97.1093,skewY:97.6091,x:-36.15,y:1.25,scaleX:0.4082}},{t:this.instance_48,p:{scaleX:1.1999,scaleY:1.1999,rotation:1.5303,x:-17.5,y:15.45,skewY:0,skewX:0,regX:0,regY:0}},{t:this.instance_13,p:{x:27.5,y:77.55,scaleX:0.516,scaleY:0.4651,rotation:28.398,skewY:0,skewX:0}},{t:this.instance_3,p:{x:18.5,y:87.35,scaleX:0.5156,scaleY:0.4644,skewX:26.7907,skewY:26.4923}}]},1).to({state:[{t:this.instance_52,p:{x:11.25}},{t:this.instance_32,p:{skewX:-16.3341,skewY:-16.6298,x:11.2,y:51.95,scaleX:0.4836,scaleY:0.4195}},{t:this.instance_11,p:{x:32.45,y:29.75,skewX:-7.8647,skewY:-8.7047,scaleX:0.3927,scaleY:0.368}},{t:this.instance_6,p:{scaleX:0.5142,scaleY:0.5233,skewX:46.4035,skewY:46.0339,x:13.5,y:25.1}},{t:this.instance_51,p:{x:8.8,y:4.6,rotation:23.144,skewX:0,skewY:0}},{t:this.instance_7,p:{skewX:5.8647,skewY:7.166,x:15.65,y:-25.8,scaleX:0.6907,scaleY:0.3285}},{t:this.instance_16,p:{x:28.1,y:39.05,skewX:17.2932,skewY:16.9564,scaleX:0.3531,scaleY:0.5141}},{t:this.instance_14,p:{x:43.95,y:41.3,regX:5.2,scaleX:0.3949,scaleY:0.5945,skewX:20.04,skewY:22.8178,regY:3.1}},{t:this.instance_13,p:{x:23.1,y:72.2,scaleX:0.5157,scaleY:0.4648,rotation:34.6875,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:3,y:50,scaleX:0.4935,scaleY:0.4911,rotation:23.4022,skewX:0}},{t:this.instance_8,p:{skewX:17.7777,skewY:17.435,x:2.05,y:24.7,scaleX:0.6802,scaleY:0.5259}},{t:this.instance_5,p:{scaleX:0.5167,scaleY:0.5287,skewX:13.4494,skewY:13.2967,x:-1.25,y:36.7}},{t:this.instance_4,p:{scaleX:0.4843,scaleY:0.4201,skewX:10.7418,skewY:10.446,x:0.6,y:56.15}},{t:this.instance_3,p:{x:8.5,y:77.1,scaleX:0.5153,scaleY:0.4641,skewX:-14.282,skewY:-14.5835}},{t:this.instance_2,p:{regY:-0.3,scaleX:0.4803,scaleY:0.5194,rotation:0,x:63.4,y:23,regX:-0.3,skewX:0.7491,skewY:1.4107}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5682,scaleY:0.593,skewX:-5.8051,skewY:-5.6867,x:58.9,y:22.8,startPosition:6,regX:57.4}},{t:this.instance_15,p:{scaleY:0.6475,skewX:100.3621,skewY:100.862,x:-31.4,y:-16.35,scaleX:0.4884}},{t:this.instance_48,p:{scaleX:1.1986,scaleY:1.1986,rotation:21.8449,x:-16.7,y:3.5,skewY:0,skewX:0,regX:0,regY:0}}]},1).to({state:[{t:this.instance_53},{t:this.instance_16,p:{x:28,y:38.15,skewX:17.2932,skewY:16.9564,scaleX:0.3531,scaleY:0.5141}},{t:this.instance_32,p:{skewX:-16.3341,skewY:-16.6298,x:11.1,y:51.05,scaleX:0.4836,scaleY:0.4195}},{t:this.instance_13,p:{x:23,y:71.3,scaleX:0.5162,scaleY:0.4653,rotation:15.8964,skewY:0,skewX:0}},{t:this.instance_11,p:{x:32.3,y:29.15,skewX:-6.0558,skewY:-6.8986,scaleX:0.3927,scaleY:0.368}},{t:this.instance_6,p:{scaleX:0.5142,scaleY:0.5233,skewX:46.4035,skewY:46.0339,x:13.4,y:24.2}},{t:this.instance_51,p:{x:8.1,y:5.45,rotation:23.144,skewX:0,skewY:0}},{t:this.instance_7,p:{skewX:5.8647,skewY:7.166,x:15.6,y:-18.9,scaleX:0.6907,scaleY:0.3285}},{t:this.instance_8,p:{skewX:17.7776,skewY:17.4349,x:1.95,y:24.7,scaleX:0.6386,scaleY:0.5081}},{t:this.instance_15,p:{scaleY:0.6475,skewX:100.3621,skewY:100.862,x:-31.5,y:-17.25,scaleX:0.4884}},{t:this.instance_48,p:{scaleX:1.1986,scaleY:1.1986,rotation:21.8449,x:-16.8,y:2.6,skewY:0,skewX:0,regX:0,regY:0}},{t:this.instance_3,p:{x:8.3,y:80.4,scaleX:0.5158,scaleY:0.4646,skewX:6.5322,skewY:6.2322}},{t:this.instance_14,p:{x:43.05,y:37.85,regX:5.2,scaleX:0.3948,scaleY:0.5944,skewX:15.5041,skewY:18.2823,regY:3.1}},{t:this.instance_12,p:{skewY:0,x:2.95,y:49.8,scaleX:0.4933,scaleY:0.491,rotation:18.864,skewX:0}},{t:this.instance_2,p:{regY:-0.3,scaleX:0.4802,scaleY:0.5192,rotation:0,x:62.8,y:22.95,regX:-0.1,skewX:6.0631,skewY:6.7248}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5681,scaleY:0.5929,skewX:-0.4925,skewY:-0.3724,x:58.3,y:22.35,startPosition:6,regX:57.5}},{t:this.instance_5,p:{scaleX:0.5167,scaleY:0.5287,skewX:13.4494,skewY:13.2967,x:-1.35,y:35.8}},{t:this.instance_4,p:{scaleX:0.4843,scaleY:0.4201,skewX:10.7418,skewY:10.446,x:0.5,y:55.25}}]},1).to({state:[{t:this.instance_17,p:{x:37.5,y:28.55}},{t:this.instance_16,p:{x:17.45,y:30.95,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.3812,skewX:-13.7715,skewY:165.7255,x:74.25,y:47.2,scaleX:0.4058}},{t:this.instance_14,p:{x:2.45,y:33.1,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_13,p:{x:11.15,y:69.7,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:180,x:36.5,y:52.65,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:15.25,y:21.7,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:32.95,y:30.25}},{t:this.instance_9,p:{rotation:0,skewX:-7.5592,skewY:172.4392,x:38.6,y:13.5,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:1.5579,skewY:-178.0995,x:40,y:33.15,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:8.4593,skewY:-172.8466,x:39.95,y:-12.6,scaleX:0.6918,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:-142.4714,skewY:38.3296,x:64.35,y:34.2}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:39.7,y:44.4}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:34.1,y:61.65}},{t:this.instance_3,p:{x:18.75,y:83.2,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-12.25,y:12.45,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-8.15,y:12.25,startPosition:0,regX:57.4}}]},3).to({state:[{t:this.instance_17,p:{x:34.05,y:29.05}},{t:this.instance_16,p:{x:14.75,y:31.45,skewX:9.0871,skewY:-170.5734,scaleX:0.354,scaleY:0.5155}},{t:this.instance_15,p:{scaleY:0.3806,skewX:2.2565,skewY:-178.2478,x:70.65,y:54.75,scaleX:0.4052}},{t:this.instance_14,p:{x:-0.8,y:32.6,regX:5.4,scaleX:0.3952,scaleY:0.5951,skewX:-2.4218,skewY:174.8014,regY:3.2}},{t:this.instance_13,p:{x:6.25,y:70.2,scaleX:0.5171,scaleY:0.4661,rotation:0,skewY:-166.2295,skewX:13.7715}},{t:this.instance_12,p:{skewY:-175.7437,x:31.7,y:54.6,scaleX:0.4943,scaleY:0.4919,rotation:0,skewX:4.2571}},{t:this.instance_11,p:{x:14.3,y:22.25,skewX:25.4823,skewY:-153.6776,scaleX:0.3931,scaleY:0.3684}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:31.7,y:30.95}},{t:this.instance_9,p:{rotation:0,skewX:6.7729,skewY:-173.2268,x:40.6,y:15.45,scaleX:0.8172,scaleY:0.527}},{t:this.instance_8,p:{skewX:9.1204,skewY:-170.5389,x:37.85,y:35.6,scaleX:0.6813,scaleY:0.5267}},{t:this.instance_7,p:{skewX:18.5273,skewY:-162.7741,x:47,y:-9.85,scaleX:0.692,scaleY:0.3291}},{t:this.instance_6,p:{scaleX:0.5544,scaleY:0.4238,skewX:-140.2628,skewY:40.5377,x:61.85,y:40.4}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:36.25,y:45.6}},{t:this.instance_4,p:{scaleX:0.485,scaleY:0.4207,skewX:14.9022,skewY:-164.8015,x:27.55,y:61.95}},{t:this.instance_3,p:{x:11,y:78.9,scaleX:0.5169,scaleY:0.4655,skewX:28.1509,skewY:-151.548}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4369,scaleY:0.4619,rotation:0,x:-15.4,y:12.85,regX:0,skewX:-2.0295,skewY:177.9726}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-11.55,y:12.75,startPosition:1,regX:57.4}}]},1).to({state:[{t:this.instance_17,p:{x:31.9,y:29.1}},{t:this.instance_16,p:{x:12.1,y:34.75,skewX:9.0871,skewY:-170.5734,scaleX:0.354,scaleY:0.5155}},{t:this.instance_15,p:{scaleY:0.3809,skewX:-26.8196,skewY:152.6772,x:75.35,y:46.3,scaleX:0.4056}},{t:this.instance_14,p:{x:-3.5,y:30.8,regX:5.2,scaleX:0.3952,scaleY:0.595,skewX:0.6201,skewY:177.8447,regY:3.2}},{t:this.instance_13,p:{x:4.1,y:70.25,scaleX:0.5171,scaleY:0.4661,rotation:0,skewY:-166.2295,skewX:13.7715}},{t:this.instance_12,p:{skewY:-172.7001,x:27.75,y:54.5,scaleX:0.4942,scaleY:0.4918,rotation:0,skewX:7.3016}},{t:this.instance_11,p:{x:11.4,y:25.1,skewX:25.4823,skewY:-153.6776,scaleX:0.3931,scaleY:0.3684}},{t:this.instance_10,p:{scaleX:0.5153,scaleY:0.5244,skewX:-8.9525,skewY:171.4135,x:29.55,y:31}},{t:this.instance_9,p:{rotation:0,skewX:9.8164,skewY:-170.1844,x:38.7,y:15.85,scaleX:0.817,scaleY:0.5269}},{t:this.instance_8,p:{skewX:12.1634,skewY:-167.4968,x:34.85,y:35.8,scaleX:0.6811,scaleY:0.5266}},{t:this.instance_7,p:{skewX:21.5735,skewY:-159.7315,x:46.4,y:-9,scaleX:0.6919,scaleY:0.3291}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:-169.3376,skewY:11.457,x:60.5,y:38.15}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:34.1,y:45.65}},{t:this.instance_4,p:{scaleX:0.485,scaleY:0.4207,skewX:14.9022,skewY:-164.8015,x:25.4,y:62}},{t:this.instance_3,p:{x:8.85,y:78.95,scaleX:0.5169,scaleY:0.4655,skewX:28.1509,skewY:-151.548}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4368,scaleY:0.4618,rotation:0,x:-17.55,y:12.4,regX:-0.1,skewX:3.9925,skewY:-176.0055}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5171,scaleY:0.5266,skewX:13.7451,skewY:-166.0322,x:-13.45,y:12.7,startPosition:2,regX:57.2}}]},1).to({state:[{t:this.instance_47,p:{x:31.9}},{t:this.instance_16,p:{x:12.8,y:35.65,skewX:3.0634,skewY:-176.6012,scaleX:0.3539,scaleY:0.5154}},{t:this.instance_15,p:{scaleY:0.3808,skewX:-32.8475,skewY:146.6509,x:76.35,y:35.8,scaleX:0.4054}},{t:this.instance_14,p:{x:-2.45,y:35.1,regX:5.4,scaleX:0.3951,scaleY:0.5949,skewX:-8.4456,skewY:168.7743,regY:3.1}},{t:this.instance_13,p:{x:8.55,y:71.85,scaleX:0.5169,scaleY:0.4659,rotation:0,skewY:-172.2531,skewX:7.7451}},{t:this.instance_12,p:{skewY:178.2284,x:32.25,y:53.65,scaleX:0.4941,scaleY:0.4917,rotation:0,skewX:-1.7694}},{t:this.instance_11,p:{x:11.1,y:26.1,skewX:19.4577,skewY:-159.7025,scaleX:0.393,scaleY:0.3682}},{t:this.instance_10,p:{scaleX:0.5151,scaleY:0.5242,skewX:-14.9795,skewY:165.3891,x:29.75,y:30.15}},{t:this.instance_9,p:{rotation:0,skewX:0.7469,skewY:-179.2529,x:36.95,y:14.35,scaleX:0.8168,scaleY:0.5268}},{t:this.instance_8,p:{skewX:3.0936,skewY:-176.5639,x:36.3,y:34.1,scaleX:0.681,scaleY:0.5265}},{t:this.instance_7,p:{skewX:15.2919,skewY:-166.01,x:40.65,y:-11.45,scaleX:0.6916,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5547,scaleY:0.4241,skewX:-175.3603,skewY:5.4343,x:60.75,y:29.2}},{t:this.instance_5,p:{scaleX:0.517,scaleY:0.529,skewX:-1.8613,skewY:178.2953,x:35.8,y:44.25}},{t:this.instance_4,p:{scaleX:0.4848,scaleY:0.4205,skewX:8.8751,skewY:-170.8282,x:28.85,y:61.35}},{t:this.instance_3,p:{x:14.2,y:80,scaleX:0.5167,scaleY:0.4654,skewX:22.1279,skewY:-157.5733}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4366,scaleY:0.4616,rotation:0,x:-19.05,y:16.6,regX:-0.1,skewX:-2.0327,skewY:177.9692}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.517,scaleY:0.5265,skewX:4.6776,skewY:-175.1004,x:-14.95,y:16.35,startPosition:3,regX:57.4}}]},1).to({state:[{t:this.instance_54},{t:this.instance_16,p:{x:15.3,y:36.3,skewX:-4.4866,skewY:175.8496,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.5258,skewX:-95.5776,skewY:83.9212,x:81.95,y:2.7,scaleX:0.4082}},{t:this.instance_14,p:{x:0.2,y:37.75,regX:5.2,scaleX:0.395,scaleY:0.5947,skewX:-15.9971,skewY:161.2221,regY:3.1}},{t:this.instance_13,p:{x:15.9,y:76.85,scaleX:0.516,scaleY:0.4651,rotation:0,skewY:151.6008,skewX:-28.398}},{t:this.instance_12,p:{skewY:170.6791,x:36.95,y:51.6,scaleX:0.4939,scaleY:0.4915,rotation:0,skewX:-9.317}},{t:this.instance_11,p:{x:12.45,y:27.05,skewX:11.9048,skewY:-167.253,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_6,p:{scaleX:0.5149,scaleY:0.524,skewX:-22.5295,skewY:157.8404,x:31.4,y:28.65}},{t:this.instance_9,p:{rotation:0,skewX:-6.8021,skewY:173.1985,x:36.45,y:12.6,scaleX:0.8165,scaleY:0.5265}},{t:this.instance_8,p:{skewX:-4.4568,skewY:175.8866,x:38.4,y:31.7,scaleX:0.6807,scaleY:0.5262}},{t:this.instance_7,p:{skewX:14.4995,skewY:-166.8045,x:38.6,y:-13.45,scaleX:0.6911,scaleY:0.3287}},{t:this.instance_5,p:{scaleX:0.5168,scaleY:0.5288,skewX:-9.4088,skewY:170.7457,x:39.25,y:41.85}},{t:this.instance_4,p:{scaleX:0.4846,scaleY:0.4203,skewX:1.325,skewY:-178.3778,x:34.65,y:59.65}},{t:this.instance_3,p:{x:24.9,y:86.65,scaleX:0.5156,scaleY:0.4644,skewX:-26.7907,skewY:153.5077}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4364,scaleY:0.4614,rotation:0,x:-18.7,y:21.6,regX:-0.1,skewX:-9.5832,skewY:170.4198}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5168,scaleY:0.5263,skewX:-2.8717,skewY:177.3498,x:-14.7,y:20.8,startPosition:4,regX:57.4}},{t:this.instance_48,p:{scaleX:1.2,scaleY:1.2,rotation:0,x:62.95,y:16.45,skewY:180,skewX:0,regX:0,regY:0}}]},1).to({state:[{t:this.instance_55},{t:this.instance_16,p:{x:16.2,y:36.6,skewX:-6.0178,skewY:174.3209,scaleX:0.3537,scaleY:0.5151}},{t:this.instance_14,p:{x:1.05,y:38.45,regX:5.2,scaleX:0.3949,scaleY:0.5946,skewX:-17.5282,skewY:159.6942,regY:3.1}},{t:this.instance_12,p:{skewY:169.1494,x:38.3,y:51.35,scaleX:0.4938,scaleY:0.4915,rotation:0,skewX:-10.847}},{t:this.instance_11,p:{x:13.1,y:27.45,skewX:10.3762,skewY:-168.7852,scaleX:0.3928,scaleY:0.368}},{t:this.instance_6,p:{scaleX:0.5148,scaleY:0.5239,skewX:-24.0599,skewY:156.3113,x:32.05,y:28.5}},{t:this.instance_9,p:{rotation:0,skewX:-8.3304,skewY:171.6694,x:36.65,y:12.05,scaleX:0.8164,scaleY:0.5265}},{t:this.instance_8,p:{skewX:-5.9857,skewY:174.356,x:39.2,y:31.35,scaleX:0.6807,scaleY:0.5262}},{t:this.instance_5,p:{scaleX:0.5168,scaleY:0.5287,skewX:-10.9402,skewY:169.2153,x:40.25,y:41.5}},{t:this.instance_4,p:{scaleX:0.4845,scaleY:0.4203,skewX:-0.2039,skewY:-179.9062,x:36.15,y:59.45}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4364,scaleY:0.4614,rotation:0,x:-18.15,y:22.85,regX:-0.2,skewX:-11.1118,skewY:168.8873}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5167,scaleY:0.5263,skewX:-4.4018,skewY:175.8207,x:-14.25,y:21.95,startPosition:5,regX:57.3}},{t:this.instance_7,p:{skewX:12.9703,skewY:-168.3358,x:38.4,y:-16.45,scaleX:0.691,scaleY:0.3286}},{t:this.instance_15,p:{scaleY:0.5257,skewX:-97.1093,skewY:82.3909,x:81.95,y:1.25,scaleX:0.4082}},{t:this.instance_48,p:{scaleX:1.1999,scaleY:1.1999,rotation:0,x:63.3,y:15.45,skewY:178.4697,skewX:-1.5303,regX:0,regY:0}},{t:this.instance_13,p:{x:18.3,y:77.55,scaleX:0.516,scaleY:0.4651,rotation:0,skewY:151.6008,skewX:-28.398}},{t:this.instance_3,p:{x:27.3,y:87.35,scaleX:0.5156,scaleY:0.4644,skewX:-26.7907,skewY:153.5077}}]},1).to({state:[{t:this.instance_52,p:{x:36.4}},{t:this.instance_32,p:{skewX:16.3341,skewY:-163.3702,x:37.05,y:51.95,scaleX:0.4836,scaleY:0.4195}},{t:this.instance_11,p:{x:15.8,y:29.75,skewX:7.8647,skewY:-171.2953,scaleX:0.3927,scaleY:0.368}},{t:this.instance_6,p:{scaleX:0.5142,scaleY:0.5233,skewX:-46.4035,skewY:133.9661,x:34.75,y:25.1}},{t:this.instance_51,p:{x:39.4,y:4.6,rotation:0,skewX:-23.144,skewY:156.8535}},{t:this.instance_7,p:{skewX:-5.8647,skewY:172.834,x:32.6,y:-25.8,scaleX:0.6907,scaleY:0.3285}},{t:this.instance_16,p:{x:20.15,y:39.05,skewX:-17.2932,skewY:163.0436,scaleX:0.3531,scaleY:0.5141}},{t:this.instance_14,p:{x:4.25,y:41.3,regX:5.2,scaleX:0.3949,scaleY:0.5945,skewX:-20.04,skewY:157.1822,regY:3.1}},{t:this.instance_13,p:{x:25.15,y:72.2,scaleX:0.5157,scaleY:0.4648,rotation:0,skewY:145.3088,skewX:-34.6875}},{t:this.instance_12,p:{skewY:156.5995,x:45.25,y:50,scaleX:0.4935,scaleY:0.4911,rotation:0,skewX:-23.4022}},{t:this.instance_8,p:{skewX:-17.7777,skewY:162.565,x:46.2,y:24.7,scaleX:0.6802,scaleY:0.5259}},{t:this.instance_5,p:{scaleX:0.5167,scaleY:0.5287,skewX:-13.4494,skewY:166.7033,x:49.5,y:36.7}},{t:this.instance_4,p:{scaleX:0.4843,scaleY:0.4201,skewX:-10.7418,skewY:169.554,x:47.65,y:56.15}},{t:this.instance_3,p:{x:39.7,y:77.1,scaleX:0.5153,scaleY:0.4641,skewX:14.282,skewY:-165.4165}},{t:this.instance_2,p:{regY:-0.3,scaleX:0.4803,scaleY:0.5194,rotation:0,x:-15.2,y:23,regX:-0.2,skewX:-0.7491,skewY:178.5893}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5682,scaleY:0.593,skewX:5.8051,skewY:-174.3133,x:-10.7,y:22.8,startPosition:6,regX:57.4}},{t:this.instance_15,p:{scaleY:0.6475,skewX:-100.3621,skewY:79.138,x:79.6,y:-16.35,scaleX:0.4884}},{t:this.instance_48,p:{scaleX:1.1986,scaleY:1.1986,rotation:0,x:65.05,y:3.55,skewY:158.1551,skewX:-21.8449,regX:-0.1,regY:0.1}}]},1).to({state:[{t:this.instance_56},{t:this.instance_16,p:{x:20.85,y:38.15,skewX:-17.2932,skewY:163.0436,scaleX:0.3531,scaleY:0.5141}},{t:this.instance_32,p:{skewX:16.3341,skewY:-163.3702,x:37.7,y:51.05,scaleX:0.4836,scaleY:0.4195}},{t:this.instance_13,p:{x:25.8,y:71.3,scaleX:0.5162,scaleY:0.4653,rotation:0,skewY:164.1002,skewX:-15.8964}},{t:this.instance_11,p:{x:16.5,y:29.15,skewX:6.0558,skewY:-173.1014,scaleX:0.3927,scaleY:0.368}},{t:this.instance_6,p:{scaleX:0.5142,scaleY:0.5233,skewX:-46.4035,skewY:133.9661,x:35.4,y:24.2}},{t:this.instance_51,p:{x:40.7,y:5.45,rotation:0,skewX:-23.144,skewY:156.8535}},{t:this.instance_7,p:{skewX:-5.8647,skewY:172.834,x:33.2,y:-18.9,scaleX:0.6907,scaleY:0.3285}},{t:this.instance_8,p:{skewX:-17.7776,skewY:162.5651,x:46.85,y:24.7,scaleX:0.6386,scaleY:0.5081}},{t:this.instance_15,p:{scaleY:0.6475,skewX:-100.3621,skewY:79.138,x:80.3,y:-17.25,scaleX:0.4884}},{t:this.instance_48,p:{scaleX:1.1986,scaleY:1.1986,rotation:0,x:65.6,y:2.6,skewY:158.1551,skewX:-21.8449,regX:0,regY:0}},{t:this.instance_3,p:{x:40.5,y:80.4,scaleX:0.5158,scaleY:0.4646,skewX:-6.5322,skewY:173.7678}},{t:this.instance_14,p:{x:5.75,y:37.85,regX:5.2,scaleX:0.3948,scaleY:0.5944,skewX:-15.5041,skewY:161.7177,regY:3.1}},{t:this.instance_12,p:{skewY:161.1313,x:45.85,y:49.8,scaleX:0.4933,scaleY:0.491,rotation:0,skewX:-18.864}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4802,scaleY:0.5192,rotation:0,x:-13.95,y:23,regX:-0.2,skewX:-6.0631,skewY:173.2752}},{t:this.instance_1,p:{regY:-30.5,scaleX:0.5681,scaleY:0.5929,skewX:0.4925,skewY:-179.6276,x:-9.45,y:22.35,startPosition:6,regX:57.4}},{t:this.instance_5,p:{scaleX:0.5167,scaleY:0.5287,skewX:-13.4494,skewY:166.7033,x:50.15,y:35.8}},{t:this.instance_4,p:{scaleX:0.4843,scaleY:0.4201,skewX:-10.7418,skewY:169.554,x:48.3,y:55.25}}]},1).to({state:[{t:this.instance_17,p:{x:11.3,y:28.55}},{t:this.instance_16,p:{x:31.95,y:30.95,skewX:2.4324,skewY:2.0934,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.3812,skewX:13.7715,skewY:14.2745,x:-24.85,y:47.2,scaleX:0.4058}},{t:this.instance_14,p:{x:46.95,y:33.1,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:6.6771,skewY:9.4543,regY:3.1}},{t:this.instance_13,p:{x:38.25,y:69.7,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:12.85,y:52.65,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:34.1,y:21.7,skewX:-12.9498,skewY:-13.7912,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:-9.8481,skewY:-10.213,x:16.4,y:30.25}},{t:this.instance_9,p:{rotation:7.5592,skewX:0,skewY:0,x:10.75,y:13.5,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:-1.5579,skewY:-1.9005,x:9.4,y:33.15,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:-8.4593,skewY:-7.1534,x:9.45,y:-12.6,scaleX:0.6918,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:142.4714,skewY:141.6704,x:-14.95,y:34.2}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:9.7,y:44.4}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:-7.8733,skewY:-8.1676,x:15.25,y:61.65}},{t:this.instance_3,p:{x:30.65,y:83.2,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:61.65,y:12.45,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:-5.9182,skewY:-6.1397,x:57.5,y:12.25,startPosition:0,regX:57.4}}]},8).to({state:[{t:this.instance_17,p:{x:12.15,y:29.55}},{t:this.instance_10,p:{scaleX:0.515,scaleY:0.5241,skewX:-48.2066,skewY:-48.5723,x:17.25,y:40.55}},{t:this.instance_16,p:{x:29.25,y:31.75,skewX:-32.9904,skewY:-33.3248,scaleX:0.3532,scaleY:0.5143}},{t:this.instance_15,p:{scaleY:0.3812,skewX:13.7715,skewY:14.2745,x:-31.2,y:41.9,scaleX:0.4058}},{t:this.instance_14,p:{x:44.8,y:34.1,regX:5.2,scaleX:0.3951,scaleY:0.5949,skewX:-4.5842,skewY:-1.8082,regY:3.1}},{t:this.instance_13,p:{x:49,y:61.1,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:14.6,y:53.65,scaleX:0.4942,scaleY:0.4919,rotation:-5.2757,skewX:0}},{t:this.instance_11,p:{x:26.2,y:23.5,skewX:-46.0869,skewY:-46.9332,scaleX:0.3921,scaleY:0.3674}},{t:this.instance_9,p:{rotation:-2.9664,skewX:0,skewY:0,x:7.6,y:15.25,scaleX:0.8167,scaleY:0.5266}},{t:this.instance_8,p:{skewX:-4.6011,skewY:-4.9434,x:9.05,y:35.05,scaleX:0.6809,scaleY:0.5263}},{t:this.instance_7,p:{skewX:-23.0044,skewY:-21.7023,x:0.95,y:-10,scaleX:0.6913,scaleY:0.3288}},{t:this.instance_6,p:{scaleX:0.5544,scaleY:0.4238,skewX:159.2368,skewY:158.4369,x:-18,y:30.7}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:-4.1654,skewY:-4.3229,x:10.55,y:45.4}},{t:this.instance_4,p:{scaleX:0.4848,scaleY:0.4205,skewX:-22.4014,skewY:-22.6956,x:22.1,y:60.55}},{t:this.instance_3,p:{x:39.9,y:78.8,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.437,scaleY:0.462,rotation:-8.6126,x:57.75,y:11.05,regX:0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5171,scaleY:0.5266,skewX:-14.5299,skewY:-14.7502,x:53.5,y:11.5,startPosition:1,regX:57.5}}]},1).to({state:[{t:this.instance_17,p:{x:13,y:29.7}},{t:this.instance_10,p:{scaleX:0.515,scaleY:0.5241,skewX:-48.2066,skewY:-48.5723,x:15.7,y:41}},{t:this.instance_11,p:{x:24.65,y:23.95,skewX:-46.0869,skewY:-46.9332,scaleX:0.3921,scaleY:0.3674}},{t:this.instance_16,p:{x:29.8,y:31.9,skewX:-41.4968,skewY:-41.8322,scaleX:0.353,scaleY:0.514}},{t:this.instance_15,p:{scaleY:0.381,skewX:5.4718,skewY:5.9718,x:-31.15,y:48.4,scaleX:0.4057}},{t:this.instance_14,p:{x:45.35,y:29.75,regX:5.2,scaleX:0.3949,scaleY:0.5945,skewX:-15.1463,skewY:-12.3713,regY:3.1}},{t:this.instance_13,p:{x:44.15,y:65.15,scaleX:0.5168,scaleY:0.4659,rotation:22.0673,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:15.45,y:53.8,scaleX:0.4942,scaleY:0.4919,rotation:-5.2757,skewX:0}},{t:this.instance_9,p:{rotation:-11.2708,skewX:0,skewY:0,x:2.85,y:17.75,scaleX:0.8163,scaleY:0.5264}},{t:this.instance_8,p:{skewX:-12.9036,skewY:-13.246,x:7.55,y:36.2,scaleX:0.6805,scaleY:0.5261}},{t:this.instance_7,p:{skewX:-31.306,skewY:-30.0054,x:-7.35,y:-6.3,scaleX:0.6909,scaleY:0.3286}},{t:this.instance_6,p:{scaleX:0.5542,scaleY:0.4236,skewX:150.9328,skewY:150.1354,x:-19.7,y:35.45}},{t:this.instance_5,p:{scaleX:0.5168,scaleY:0.5287,skewX:-19.4285,skewY:-19.5842,x:11.4,y:45.55}},{t:this.instance_4,p:{scaleX:0.4844,scaleY:0.4202,skewX:-34.4541,skewY:-34.7493,x:25.65,y:59.2}},{t:this.instance_3,p:{x:48.05,y:76.55,scaleX:0.5174,scaleY:0.466,skewX:-8.1277,skewY:-8.4283}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.437,scaleY:0.462,rotation:-8.6126,x:54,y:7.6,regX:0.1,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5171,scaleY:0.5266,skewX:-14.5299,skewY:-14.7502,x:49.75,y:8,startPosition:2,regX:57.6}}]},1).to({state:[{t:this.instance_57,p:{x:11.65,y:28.35}},{t:this.instance_16,p:{x:30.25,y:29.95,skewX:-2.1732,skewY:-2.5099,scaleX:0.3526,scaleY:0.5135}},{t:this.instance_15,p:{scaleY:0.381,skewX:21.2833,skewY:21.787,x:-32.95,y:34.9,scaleX:0.4057}},{t:this.instance_14,p:{x:43.45,y:37.15,regX:5.5,scaleX:0.3949,scaleY:0.5946,skewX:2.9272,skewY:5.7053,regY:3.2}},{t:this.instance_13,p:{x:44.05,y:64.45,scaleX:0.5172,scaleY:0.4662,rotation:7.513,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:10.9,y:52.55,scaleX:0.494,scaleY:0.4917,rotation:2.2376,skewX:0}},{t:this.instance_11,p:{x:31.85,y:21.3,skewX:-15.2756,skewY:-16.1166,scaleX:0.3915,scaleY:0.3668}},{t:this.instance_10,p:{scaleX:0.5142,scaleY:0.5233,skewX:-18.9036,skewY:-19.2684,x:15.6,y:31.5}},{t:this.instance_9,p:{rotation:4.5474,skewX:0,skewY:0,x:9.2,y:12.05,scaleX:0.8163,scaleY:0.5264}},{t:this.instance_8,p:{skewX:2.9127,skewY:2.5688,x:7.9,y:32.5,scaleX:0.6806,scaleY:0.5261}},{t:this.instance_7,p:{skewX:-15.4934,skewY:-14.1891,x:5.9,y:-13.8,scaleX:0.691,scaleY:0.3286}},{t:this.instance_6,p:{scaleX:0.5542,scaleY:0.4236,skewX:166.7481,skewY:165.9485,x:-18.4,y:25.55}},{t:this.instance_5,p:{scaleX:0.517,scaleY:0.529,skewX:3.3472,skewY:3.1894,x:8,y:43.8}},{t:this.instance_4,p:{scaleX:0.4846,scaleY:0.4203,skewX:-14.8888,skewY:-15.1811,x:17.45,y:60.35}},{t:this.instance_3,p:{x:32.65,y:80.75,scaleX:0.5172,scaleY:0.4658,skewX:-0.6156,skewY:-0.9163}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4368,scaleY:0.4618,rotation:-1.1,x:59.2,y:16,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5169,scaleY:0.5263,skewX:-7.0171,skewY:-7.2366,x:55,y:15.8,startPosition:1,regX:57.6}}]},1).to({state:[{t:this.instance_57,p:{x:11.9,y:27.5}},{t:this.instance_16,p:{x:31.4,y:29.1,skewX:8.6052,skewY:8.2701,scaleX:0.3524,scaleY:0.5132}},{t:this.instance_15,p:{scaleY:0.3809,skewX:27.0978,skewY:27.5987,x:-41.75,y:23.8,scaleX:0.4055}},{t:this.instance_14,p:{x:45.5,y:35.75,regX:5.4,scaleX:0.3939,scaleY:0.5931,skewX:15.7356,skewY:18.5192,regY:3.1}},{t:this.instance_13,p:{x:34.85,y:70.1,scaleX:0.5167,scaleY:0.4657,rotation:26.3342,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:9.95,y:50.5,scaleX:0.4939,scaleY:0.4916,rotation:6.7566,skewX:0}},{t:this.instance_11,p:{x:34.75,y:20.4,skewX:-5.7229,skewY:-6.5655,scaleX:0.3913,scaleY:0.3666}},{t:this.instance_6,p:{scaleX:0.5139,scaleY:0.5229,skewX:-8.8505,skewY:-9.2162,x:17.95,y:28.25}},{t:this.instance_9,p:{rotation:10.3607,skewX:0,skewY:0,x:11.45,y:10.5,scaleX:0.816,scaleY:0.5262}},{t:this.instance_8,p:{skewX:8.7244,skewY:8.3818,x:8.1,y:30.75,scaleX:0.6803,scaleY:0.5259}},{t:this.instance_7,p:{skewX:-9.6802,skewY:-8.3769,x:10.75,y:-15.5,scaleX:0.6908,scaleY:0.3285}},{t:this.instance_5,p:{scaleX:0.517,scaleY:0.529,skewX:3.3472,skewY:3.1894,x:8.25,y:42.95}},{t:this.instance_4,p:{scaleX:0.4841,scaleY:0.4199,skewX:3.16,skewY:2.8619,x:14.1,y:59.5}},{t:this.instance_3,p:{x:23.3,y:85,scaleX:0.5166,scaleY:0.4654,skewX:18.1813,skewY:17.8811}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4368,scaleY:0.4618,rotation:-1.1,x:65.6,y:15.15,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5169,scaleY:0.5263,skewX:-7.0171,skewY:-7.2366,x:61.4,y:14.95,startPosition:2,regX:57.6}},{t:this.instance_48,p:{scaleX:1.1982,scaleY:1.1982,rotation:-32.3197,x:-18.4,y:23.05,skewY:0,skewX:0,regX:-0.5,regY:-0.1}}]},1).to({state:[{t:this.instance_58,p:{x:11}},{t:this.instance_16,p:{x:32.9,y:29.55,skewX:23.1744,skewY:22.8406,scaleX:0.3521,scaleY:0.5128}},{t:this.instance_15,p:{scaleY:0.6549,skewX:80.5056,skewY:81.0088,x:-36.55,y:8,scaleX:0.4955}},{t:this.instance_14,p:{x:46.7,y:38.35,regX:5.4,scaleX:0.3937,scaleY:0.5928,skewX:26.536,skewY:29.3221,regY:3.1}},{t:this.instance_13,p:{x:25.25,y:70.55,scaleX:0.5167,scaleY:0.4657,rotation:26.3342,skewY:0,skewX:0}},{t:this.instance_12,p:{skewY:0,x:5.45,y:48.55,scaleX:0.4935,scaleY:0.4912,rotation:18.5616,skewX:0}},{t:this.instance_11,p:{x:38.05,y:20.85,skewX:-5.7229,skewY:-6.5655,scaleX:0.3913,scaleY:0.3666}},{t:this.instance_6,p:{scaleX:0.5136,scaleY:0.5226,skewX:0.9167,skewY:0.5515,x:19.15,y:26.3}},{t:this.instance_9,p:{rotation:23.4241,skewX:0,skewY:0,x:16.85,y:10.95,scaleX:0.8154,scaleY:0.5258}},{t:this.instance_8,p:{skewX:21.7662,skewY:21.4217,x:8.4,y:30,scaleX:0.6798,scaleY:0.5256}},{t:this.instance_7,p:{skewX:-17.2073,skewY:-15.9016,x:17.05,y:-14.45,scaleX:0.6905,scaleY:0.3284}},{t:this.instance_5,p:{scaleX:0.5164,scaleY:0.5284,skewX:24.4319,skewY:24.2719,x:3.15,y:40.7}},{t:this.instance_4,p:{scaleX:0.4836,scaleY:0.4195,skewX:21.9558,skewY:21.6564,x:0,y:58.45}},{t:this.instance_3,p:{x:2.9,y:83.65,scaleX:0.5166,scaleY:0.4654,skewX:18.1813,skewY:17.8811}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4368,scaleY:0.4618,rotation:-1.1,x:67.7,y:18.9,regX:0,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5169,scaleY:0.5263,skewX:-7.0171,skewY:-7.2366,x:63.5,y:18.7,startPosition:3,regX:57.6}},{t:this.instance_48,p:{scaleX:1.1969,scaleY:1.1969,rotation:-11.9978,x:-14.55,y:17.45,skewY:0,skewX:0,regX:-0.5,regY:-0.1}}]},1).to({state:[{t:this.instance_17,p:{x:37.5,y:28.55}},{t:this.instance_16,p:{x:17.45,y:30.95,skewX:-2.4324,skewY:177.9066,scaleX:0.3538,scaleY:0.5152}},{t:this.instance_15,p:{scaleY:0.3812,skewX:-13.7715,skewY:165.7255,x:74.25,y:47.2,scaleX:0.4058}},{t:this.instance_14,p:{x:2.45,y:33.1,regX:5.3,scaleX:0.3954,scaleY:0.5953,skewX:-6.6771,skewY:170.5457,regY:3.1}},{t:this.instance_13,p:{x:11.15,y:69.7,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:180,x:36.5,y:52.65,scaleX:0.4944,scaleY:0.492,rotation:0,skewX:0}},{t:this.instance_11,p:{x:15.25,y:21.7,skewX:12.9498,skewY:-166.2088,scaleX:0.3928,scaleY:0.3681}},{t:this.instance_10,p:{scaleX:0.5158,scaleY:0.5249,skewX:9.8481,skewY:-169.787,x:32.95,y:30.25}},{t:this.instance_9,p:{rotation:0,skewX:-7.5592,skewY:172.4392,x:38.6,y:13.5,scaleX:0.8171,scaleY:0.527}},{t:this.instance_8,p:{skewX:1.5579,skewY:-178.0995,x:40,y:33.15,scaleX:0.681,scaleY:0.5264}},{t:this.instance_7,p:{skewX:8.4593,skewY:-172.8466,x:39.95,y:-12.6,scaleX:0.6918,scaleY:0.329}},{t:this.instance_6,p:{scaleX:0.5549,scaleY:0.4242,skewX:-142.4714,skewY:38.3296,x:64.35,y:34.2}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:39.7,y:44.4}},{t:this.instance_4,p:{scaleX:0.4851,scaleY:0.4208,skewX:7.8733,skewY:-171.8324,x:34.1,y:61.65}},{t:this.instance_3,p:{x:18.75,y:83.2,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.4372,scaleY:0.4622,rotation:0,x:-12.25,y:12.45,regX:0,skewX:0,skewY:180}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5173,scaleY:0.5268,skewX:5.9182,skewY:-173.8603,x:-8.15,y:12.25,startPosition:0,regX:57.4}}]},4).to({state:[{t:this.instance_17,p:{x:28.15,y:29.55}},{t:this.instance_10,p:{scaleX:0.515,scaleY:0.5241,skewX:48.2066,skewY:-131.4277,x:23.6,y:40.55}},{t:this.instance_16,p:{x:11.6,y:31.75,skewX:32.9904,skewY:-146.6752,scaleX:0.3532,scaleY:0.5143}},{t:this.instance_15,p:{scaleY:0.3812,skewX:-13.7715,skewY:165.7255,x:72.1,y:41.9,scaleX:0.4058}},{t:this.instance_14,p:{x:-3.9,y:34.1,regX:5.2,scaleX:0.3951,scaleY:0.5949,skewX:4.5842,skewY:-178.1918,regY:3.1}},{t:this.instance_13,p:{x:-8.1,y:61.1,scaleX:0.5175,scaleY:0.4664,rotation:0,skewY:180,skewX:0}},{t:this.instance_12,p:{skewY:-174.7244,x:26.25,y:53.65,scaleX:0.4942,scaleY:0.4919,rotation:0,skewX:5.2757}},{t:this.instance_11,p:{x:14.75,y:23.5,skewX:46.0869,skewY:-133.0668,scaleX:0.3921,scaleY:0.3674}},{t:this.instance_9,p:{rotation:0,skewX:2.9664,skewY:-177.0354,x:33.3,y:15.25,scaleX:0.8167,scaleY:0.5266}},{t:this.instance_8,p:{skewX:4.6011,skewY:-175.0566,x:31.85,y:35.05,scaleX:0.6809,scaleY:0.5263}},{t:this.instance_7,p:{skewX:23.0044,skewY:-158.2977,x:39.95,y:-10,scaleX:0.6913,scaleY:0.3288}},{t:this.instance_6,p:{scaleX:0.5544,scaleY:0.4238,skewX:-159.2368,skewY:21.5631,x:58.9,y:30.7}},{t:this.instance_5,p:{scaleX:0.5172,scaleY:0.5292,skewX:4.1654,skewY:-175.6771,x:30.35,y:45.4}},{t:this.instance_4,p:{scaleX:0.4848,scaleY:0.4205,skewX:22.4014,skewY:-157.3044,x:18.75,y:60.55}},{t:this.instance_3,p:{x:1,y:78.8,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.437,scaleY:0.462,rotation:0,x:-16.85,y:11.05,regX:0.1,skewX:8.6126,skewY:-171.3863}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5171,scaleY:0.5266,skewX:14.5299,skewY:-165.2498,x:-12.6,y:11.5,startPosition:1,regX:57.5}}]},1).to({state:[{t:this.instance_17,p:{x:19.15,y:29.7}},{t:this.instance_10,p:{scaleX:0.515,scaleY:0.5241,skewX:48.2066,skewY:-131.4277,x:17.05,y:41}},{t:this.instance_11,p:{x:8.1,y:23.95,skewX:46.0869,skewY:-133.0668,scaleX:0.3921,scaleY:0.3674}},{t:this.instance_16,p:{x:2.95,y:31.9,skewX:41.4968,skewY:-138.1678,scaleX:0.353,scaleY:0.514}},{t:this.instance_15,p:{scaleY:0.381,skewX:-5.4718,skewY:174.0282,x:63.9,y:48.4,scaleX:0.4057}},{t:this.instance_14,p:{x:-12.6,y:29.75,regX:5.2,scaleX:0.3949,scaleY:0.5945,skewX:15.1463,skewY:-167.6287,regY:3.1}},{t:this.instance_13,p:{x:-11.4,y:65.15,scaleX:0.5168,scaleY:0.4659,rotation:0,skewY:157.9354,skewX:-22.0673}},{t:this.instance_12,p:{skewY:-174.7244,x:17.25,y:53.8,scaleX:0.4942,scaleY:0.4919,rotation:0,skewX:5.2757}},{t:this.instance_9,p:{rotation:0,skewX:11.2708,skewY:-168.7327,x:29.85,y:17.75,scaleX:0.8163,scaleY:0.5264}},{t:this.instance_8,p:{skewX:12.9036,skewY:-166.754,x:25.2,y:36.2,scaleX:0.6805,scaleY:0.5261}},{t:this.instance_7,p:{skewX:31.306,skewY:-149.9946,x:40.05,y:-6.3,scaleX:0.6909,scaleY:0.3286}},{t:this.instance_6,p:{scaleX:0.5542,scaleY:0.4236,skewX:-150.9328,skewY:29.8646,x:52.45,y:35.45}},{t:this.instance_5,p:{scaleX:0.5168,scaleY:0.5287,skewX:19.4285,skewY:-160.4158,x:21.35,y:45.55}},{t:this.instance_4,p:{scaleX:0.4844,scaleY:0.4202,skewX:34.4541,skewY:-145.2507,x:7.05,y:59.2}},{t:this.instance_3,p:{x:-15.3,y:76.55,scaleX:0.5174,scaleY:0.466,skewX:8.1277,skewY:-171.5717}},{t:this.instance_2,p:{regY:-0.2,scaleX:0.437,scaleY:0.462,rotation:0,x:-21.25,y:7.6,regX:0.1,skewX:8.6126,skewY:-171.3863}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5171,scaleY:0.5266,skewX:14.5299,skewY:-165.2498,x:-17,y:8,startPosition:2,regX:57.6}}]},1).to({state:[{t:this.instance_57,p:{x:26.75,y:28.35}},{t:this.instance_16,p:{x:8.75,y:29.95,skewX:2.1732,skewY:-177.4901,scaleX:0.3526,scaleY:0.5135}},{t:this.instance_15,p:{scaleY:0.381,skewX:-21.2833,skewY:158.213,x:71.95,y:34.9,scaleX:0.4057}},{t:this.instance_14,p:{x:-4.45,y:37.15,regX:5.5,scaleX:0.3949,scaleY:0.5946,skewX:-2.9272,skewY:174.2947,regY:3.2}},{t:this.instance_13,p:{x:-5.05,y:64.45,scaleX:0.5172,scaleY:0.4662,rotation:0,skewY:172.4871,skewX:-7.513}},{t:this.instance_12,p:{skewY:177.766,x:28.1,y:52.55,scaleX:0.494,scaleY:0.4917,rotation:0,skewX:-2.2376}},{t:this.instance_11,p:{x:7.2,y:21.3,skewX:15.2756,skewY:-163.8834,scaleX:0.3915,scaleY:0.3668}},{t:this.instance_10,p:{scaleX:0.5142,scaleY:0.5233,skewX:18.9036,skewY:-160.7316,x:23.4,y:31.5}},{t:this.instance_9,p:{rotation:0,skewX:-4.5474,skewY:175.452,x:29.8,y:12.05,scaleX:0.8163,scaleY:0.5264}},{t:this.instance_8,p:{skewX:-2.9127,skewY:177.4312,x:31.1,y:32.5,scaleX:0.6806,scaleY:0.5261}},{t:this.instance_7,p:{skewX:15.4934,skewY:-165.8109,x:33.1,y:-13.8,scaleX:0.691,scaleY:0.3286}},{t:this.instance_6,p:{scaleX:0.5542,scaleY:0.4236,skewX:-166.7481,skewY:14.0515,x:57.4,y:25.55}},{t:this.instance_5,p:{scaleX:0.517,scaleY:0.529,skewX:-3.3472,skewY:176.8106,x:31,y:43.8}},{t:this.instance_4,p:{scaleX:0.4846,scaleY:0.4203,skewX:14.8888,skewY:-164.8189,x:21.55,y:60.35}},{t:this.instance_3,p:{x:6.35,y:80.75,scaleX:0.5172,scaleY:0.4658,skewX:0.6156,skewY:-179.0837}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4368,scaleY:0.4618,rotation:0,x:-20.2,y:16,regX:0,skewX:1.1,skewY:-178.899}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5169,scaleY:0.5263,skewX:7.0171,skewY:-172.7634,x:-16,y:15.8,startPosition:1,regX:57.6}}]},1).to({state:[{t:this.instance_57,p:{x:24,y:27.5}},{t:this.instance_16,p:{x:5.1,y:29.1,skewX:-8.6052,skewY:171.7299,scaleX:0.3524,scaleY:0.5132}},{t:this.instance_15,p:{scaleY:0.3809,skewX:-27.0978,skewY:152.4013,x:78.25,y:23.8,scaleX:0.4055}},{t:this.instance_14,p:{x:-9,y:35.75,regX:5.4,scaleX:0.3939,scaleY:0.5931,skewX:-15.7356,skewY:161.4808,regY:3.1}},{t:this.instance_13,p:{x:1.65,y:70.1,scaleX:0.5167,scaleY:0.4657,rotation:0,skewY:153.665,skewX:-26.3342}},{t:this.instance_12,p:{skewY:173.2465,x:26.55,y:50.5,scaleX:0.4939,scaleY:0.4916,rotation:0,skewX:-6.7566}},{t:this.instance_11,p:{x:1.75,y:20.4,skewX:5.7229,skewY:-173.4345,scaleX:0.3913,scaleY:0.3666}},{t:this.instance_6,p:{scaleX:0.5139,scaleY:0.5229,skewX:8.8505,skewY:-170.7838,x:18.55,y:28.25}},{t:this.instance_9,p:{rotation:0,skewX:-10.3607,skewY:169.6392,x:25.05,y:10.5,scaleX:0.816,scaleY:0.5262}},{t:this.instance_8,p:{skewX:-8.7244,skewY:171.6182,x:28.4,y:30.75,scaleX:0.6803,scaleY:0.5259}},{t:this.instance_7,p:{skewX:9.6802,skewY:-171.6231,x:25.75,y:-15.5,scaleX:0.6908,scaleY:0.3285}},{t:this.instance_5,p:{scaleX:0.517,scaleY:0.529,skewX:-3.3472,skewY:176.8106,x:28.25,y:42.95}},{t:this.instance_4,p:{scaleX:0.4841,scaleY:0.4199,skewX:-3.16,skewY:177.1381,x:22.4,y:59.5}},{t:this.instance_3,p:{x:13.2,y:85,scaleX:0.5166,scaleY:0.4654,skewX:-18.1813,skewY:162.1189}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4368,scaleY:0.4618,rotation:0,x:-29.1,y:15.15,regX:0,skewX:1.1,skewY:-178.899}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5169,scaleY:0.5263,skewX:7.0171,skewY:-172.7634,x:-24.9,y:14.95,startPosition:2,regX:57.6}},{t:this.instance_48,p:{scaleX:1.1982,scaleY:1.1982,rotation:0,x:54.9,y:23.05,skewY:-147.6803,skewX:32.3197,regX:-0.5,regY:-0.1}}]},1).to({state:[{t:this.instance_58,p:{x:33.8}},{t:this.instance_16,p:{x:12.5,y:29.55,skewX:-23.1744,skewY:157.1594,scaleX:0.3521,scaleY:0.5128}},{t:this.instance_15,p:{scaleY:0.6549,skewX:-80.5056,skewY:98.9912,x:81.9,y:8,scaleX:0.4955}},{t:this.instance_14,p:{x:-1.3,y:38.3,regX:5.3,scaleX:0.3937,scaleY:0.5928,skewX:-26.536,skewY:150.6779,regY:3.1}},{t:this.instance_13,p:{x:20.1,y:70.55,scaleX:0.5167,scaleY:0.4657,rotation:0,skewY:153.665,skewX:-26.3342}},{t:this.instance_12,p:{skewY:161.439,x:39.9,y:48.55,scaleX:0.4935,scaleY:0.4912,rotation:0,skewX:-18.5616}},{t:this.instance_11,p:{x:7.35,y:20.85,skewX:5.7229,skewY:-173.4345,scaleX:0.3913,scaleY:0.3666}},{t:this.instance_6,p:{scaleX:0.5136,scaleY:0.5226,skewX:-0.9167,skewY:179.4485,x:26.25,y:26.3}},{t:this.instance_9,p:{rotation:0,skewX:-23.4241,skewY:156.5757,x:28.5,y:10.95,scaleX:0.8154,scaleY:0.5258}},{t:this.instance_8,p:{skewX:-21.7662,skewY:158.5783,x:36.95,y:30,scaleX:0.6798,scaleY:0.5256}},{t:this.instance_7,p:{skewX:17.2073,skewY:-164.0984,x:28.35,y:-14.45,scaleX:0.6905,scaleY:0.3284}},{t:this.instance_5,p:{scaleX:0.5164,scaleY:0.5284,skewX:-24.4319,skewY:155.7281,x:42.25,y:40.7}},{t:this.instance_4,p:{scaleX:0.4836,scaleY:0.4195,skewX:-21.9558,skewY:158.3436,x:45.35,y:58.45}},{t:this.instance_3,p:{x:42.5,y:83.65,scaleX:0.5166,scaleY:0.4654,skewX:-18.1813,skewY:162.1189}},{t:this.instance_2,p:{regY:-0.1,scaleX:0.4368,scaleY:0.4618,rotation:0,x:-22.3,y:18.9,regX:0,skewX:1.1,skewY:-178.899}},{t:this.instance_1,p:{regY:-30.6,scaleX:0.5169,scaleY:0.5263,skewX:7.0171,skewY:-172.7634,x:-18.1,y:18.7,startPosition:3,regX:57.6}},{t:this.instance_48,p:{scaleX:1.1969,scaleY:1.1969,rotation:0,x:59.95,y:17.45,skewY:-168.0022,skewX:11.9978,regX:-0.5,regY:-0.1}}]},1).to({state:[]},14).wait(1));

	// Layer 3
	this.flame = new lib.Flames();
	this.flame.name = "flame";
	this.flame.parent = this;
	this.flame.setTransform(-16.4,56.4,0.9969,0.9969,91.727);

	this.timeline.addTween(cjs.Tween.get(this.flame).wait(1).to({scaleX:0.9956,scaleY:0.9956,rotation:110.7419,x:-15.1,y:50.95},0).wait(1).to({scaleX:1.0032,scaleY:0.993,rotation:122.1192,x:-10.25,y:56.75},0).wait(1).to({scaleX:1.1771,scaleY:0.8585,rotation:0,skewX:32.6769,skewY:42.085,x:10.1,y:29.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.0009,skewX:0,skewY:0,x:16.15,y:30.6},0).wait(1).to({scaleY:1.0004,rotation:0,skewX:-1.5942,x:21.15,y:30.3},0).wait(1).to({scaleX:1.0536,scaleY:0.951,skewX:-18.8876,skewY:-23.341,x:26.9,y:30.35},0).wait(1).to({scaleX:1.0524,scaleY:0.9499,skewX:-109.4327,skewY:-113.8868,x:42.75,y:54.05},0).wait(1).to({scaleX:1.051,scaleY:0.9487,skewX:-92.9741,skewY:-97.429,x:45.9,y:56.9},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,rotation:-96.1711,skewX:0,skewY:0,x:45.55,y:57.2},0).wait(2).to({scaleX:1.051,scaleY:0.9487,rotation:0,skewX:-92.9741,skewY:-97.429,x:45.9,y:56.9},0).wait(1).to({scaleX:1.0524,scaleY:0.9499,skewX:-109.4327,skewY:-113.8868,x:42.75,y:54.05},0).wait(1).to({scaleX:1.0536,scaleY:0.951,skewX:-18.8876,skewY:-23.341,x:26.9,y:30.35},0).wait(1).to({scaleX:1,scaleY:1.0004,skewX:-1.5942,skewY:0,x:21.15,y:30.3},0).wait(1).to({scaleY:1,rotation:0.0009,skewX:0,x:16.15,y:30.6},0).wait(1).to({scaleX:1.1771,scaleY:0.8585,rotation:0,skewX:32.6769,skewY:42.085,x:10.1,y:29.75},0).wait(1).to({scaleX:1.0032,scaleY:0.993,rotation:122.1192,skewX:0,skewY:0,x:-10.25,y:56.75},0).wait(1).to({scaleX:0.9956,scaleY:0.9956,rotation:110.7419,x:-15.1,y:50.95},0).wait(1).to({scaleX:0.9969,scaleY:0.9969,rotation:91.727,x:-16.4,y:56.4},0).to({_off:true},6).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-47,144.9,143.9);


(lib.riciclewithrunner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.Ricicle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-8.2,-31.35,0.997,0.997,-76.5197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-7,y:-29.95},0).wait(1).to({x:-6.5,y:-28.4},0).wait(1).to({x:-7.1,y:-30.6},0).wait(1).to({x:-7.5,y:-32.2},0).wait(1).to({x:-7.1,y:-30.4},0).wait(1).to({x:-5.9,y:-28.2},0).wait(1).to({x:-5.7},0).wait(1).to({x:-7.3,y:-30.4},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.RikonDig();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.75,-43.3,1,1,0,0,0,-7,-31.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-89.3,145.5,92.39999999999999);


(lib.ricicleStolen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("alienHitwav");
	}
	this.frame_10 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(1));

	// Layer 3
	this.instance = new lib.nut01();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.1);
	this.instance.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance.cache(-17,-17,34,34);

	this.instance_1 = new lib.nut02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,-0.3);
	this.instance_1.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance_1.cache(-14,-7,28,15);

	this.instance_2 = new lib.nugget03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.75,0.05);
	this.instance_2.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance_2.cache(-14,-9,29,19);

	this.instance_3 = new lib.nugget04();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.15,2);
	this.instance_3.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance_3.cache(-15,-7,31,15);

	this.instance_4 = new lib.nugget05();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.5,8.7);
	this.instance_4.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance_4.cache(-14,-7,28,14);

	this.instance_5 = new lib.nugget06();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-8.5,18.3);
	this.instance_5.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 124.95, 99.96, 0, 0)];
	this.instance_5.cache(-16,-12,32,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-14.9,37.7,43.7);


(lib.Monsta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 3
	this.nugget_mc = new lib.ricicleStolen();
	this.nugget_mc.name = "nugget_mc";
	this.nugget_mc.parent = this;
	this.nugget_mc.setTransform(135.35,58.75);

	this.timeline.addTween(cjs.Tween.get(this.nugget_mc).to({y:49.75},4).to({y:51.75},2).to({y:59.75},3).wait(1));

	// Layer 4
	this.instance = new lib.monsterleg01();
	this.instance.parent = this;
	this.instance.setTransform(152.25,75.55,0.9944,0.9435,0,20.8103,-159.1909);

	this.instance_1 = new lib.monsterleg01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.4,74.65,0.9953,0.9443,-27.3352);

	this.instance_2 = new lib.monstermainbody02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.95,45.05);

	this.instance_3 = new lib.monsterarm01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.7,55.25,0.9963,0.9963,-67.6905);

	this.instance_4 = new lib.monsterleg03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137.1,71.85);

	this.instance_5 = new lib.monsterleg02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.55,73.4,0.9988,0.9988,-24.084);

	this.instance_6 = new lib.monsterarm01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(121.05,64.7,0.8473,0.8986,-87.7713,0,0,0.1,-0.1);

	this.instance_7 = new lib.monsterarm01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(124.5,69.45,0.8472,0.8985,-106.4102,0,0,0.1,-0.1);

	this.instance_8 = new lib.monsterarm01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(167.05,58,0.9962,0.9962,0,82.73,-97.27,0.1,-0.1);

	this.instance_9 = new lib.monsterarm01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(165.4,65,0.8477,0.899,0,100.5737,-79.4253);

	this.instance_10 = new lib.monsterarm01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(161,68.25,0.8475,0.8988,0,98.5938,-81.406);

	this.instance_11 = new lib.monsterleg02();
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.1,73.7,0.9985,0.9985,0,34.3098,-145.6902);

	this.instance_12 = new lib.monsterleg03();
	this.instance_12.parent = this;
	this.instance_12.setTransform(149.1,71.85,1,1,0,0,180);

	this.instance_13 = new lib.monstermainbody01();
	this.instance_13.parent = this;
	this.instance_13.setTransform(137.55,38.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{x:149.1,y:71.85,scaleX:1,scaleY:1,skewX:0,skewY:180}},{t:this.instance_11,p:{scaleX:0.9985,scaleY:0.9985,skewX:34.3098,skewY:-145.6902,x:149.1,y:73.7}},{t:this.instance_10,p:{scaleX:0.8475,scaleY:0.8988,skewX:98.5938,skewY:-81.406,x:161,y:68.25,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8477,scaleY:0.899,skewX:100.5737,skewY:-79.4253,x:165.4,y:65,regX:0,regY:0}},{t:this.instance_8,p:{regX:0.1,regY:-0.1,scaleX:0.9962,scaleY:0.9962,skewX:82.73,skewY:-97.27,x:167.05,y:58}},{t:this.instance_7,p:{scaleX:0.8472,scaleY:0.8985,rotation:-106.4102,x:124.5,y:69.45,regY:-0.1}},{t:this.instance_6,p:{regX:0.1,regY:-0.1,scaleX:0.8473,scaleY:0.8986,rotation:-87.7713,x:121.05,y:64.7}},{t:this.instance_5,p:{scaleX:0.9988,scaleY:0.9988,rotation:-24.084,x:136.55,y:73.4}},{t:this.instance_4,p:{x:137.1,y:71.85,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:120.7,y:55.25,regY:0,scaleX:0.9963,scaleY:0.9963,rotation:-67.6905,regX:0}},{t:this.instance_2,p:{x:137.95,y:45.05}},{t:this.instance_1,p:{scaleX:0.9953,scaleY:0.9443,rotation:-27.3352,x:132.4,y:74.65}},{t:this.instance,p:{scaleX:0.9944,scaleY:0.9435,skewX:20.8103,skewY:-159.1909,x:152.25,y:75.55}}]}).to({state:[{t:this.instance_12,p:{x:148.7,y:67.05,scaleX:1,scaleY:1,skewX:0,skewY:180}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:151.65,y:68.7}},{t:this.instance_10,p:{scaleX:0.8479,scaleY:0.8992,skewX:91.054,skewY:-88.9462,x:162.95,y:62.5,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8483,scaleY:0.8997,skewX:87.0065,skewY:-92.9932,x:165.65,y:56.1,regX:0,regY:0}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.997,scaleY:0.997,skewX:69.4359,skewY:-110.5641,x:165.9,y:48.6}},{t:this.instance_7,p:{scaleX:0.8476,scaleY:0.8989,rotation:-98.1022,x:122.15,y:64.8,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:0,scaleX:0.848,scaleY:0.8994,rotation:-70.7212,x:119.6,y:57.45}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:133.35,y:68.7}},{t:this.instance_4,p:{x:136.7,y:67.05,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:121.5,y:47.75,regY:0,scaleX:0.9963,scaleY:0.9963,rotation:-67.6905,regX:0}},{t:this.instance_2,p:{x:137.55,y:40.25}},{t:this.instance_1,p:{scaleX:0.9966,scaleY:0.9456,rotation:0,x:127.8,y:69.95}},{t:this.instance,p:{scaleX:0.9966,scaleY:0.9456,skewX:0,skewY:180,x:156.4,y:69.1}}]},1).to({state:[{t:this.instance_12,p:{x:150.2,y:65.7,scaleX:1,scaleY:1,skewX:0,skewY:180}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:153.25,y:66.8}},{t:this.instance_10,p:{scaleX:0.8464,scaleY:0.8976,skewX:57.2252,skewY:-122.7744,x:166.75,y:56.2,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8464,scaleY:0.8976,skewX:43.1284,skewY:-136.8723,x:168.95,y:49.25,regX:0.1,regY:0}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.9952,scaleY:0.9952,skewX:36.2933,skewY:-143.7067,x:168.15,y:42.35}},{t:this.instance_7,p:{scaleX:0.846,scaleY:0.8972,rotation:-52.4871,x:118.85,y:55.8,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:-0.1,scaleX:0.8468,scaleY:0.898,rotation:-42.8352,x:117.85,y:49.8}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:132.35,y:66.6}},{t:this.instance_4,p:{x:135.05,y:65.35,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:119.75,y:42.25,regY:-0.1,scaleX:0.9947,scaleY:0.9947,rotation:-38.3013,regX:0}},{t:this.instance_2,p:{x:137.55,y:38.55}},{t:this.instance_1,p:{scaleX:0.9966,scaleY:0.9456,rotation:0,x:126.9,y:67.4}},{t:this.instance,p:{scaleX:0.9966,scaleY:0.9456,skewX:0,skewY:180,x:157.7,y:66.4}}]},1).to({state:[{t:this.instance_12,p:{x:153.35,y:66.35,scaleX:0.9991,scaleY:0.9991,skewX:-16.3043,skewY:163.6957}},{t:this.instance_11,p:{scaleX:0.9991,scaleY:0.9991,skewX:-16.8049,skewY:163.1951,x:155.95,y:65.7}},{t:this.instance_10,p:{scaleX:0.8458,scaleY:0.8969,skewX:43.6641,skewY:-136.3348,x:170.2,y:53,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8458,scaleY:0.897,skewX:31.0793,skewY:-148.9196,x:171.25,y:44.95,regX:0.1,regY:0}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.9939,scaleY:0.9939,skewX:13.2016,skewY:-166.7984,x:169.45,y:37.1}},{t:this.instance_7,p:{scaleX:0.8451,scaleY:0.8962,rotation:-31.9219,x:115.4,y:52.35,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:-0.1,scaleX:0.846,scaleY:0.8972,rotation:-26.5603,x:116.65,y:45.25}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:129.65,y:66.5}},{t:this.instance_4,p:{x:133.55,y:65.95,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:120.8,y:37.05,regY:-0.1,scaleX:0.9936,scaleY:0.9936,rotation:-18.443,regX:0.1}},{t:this.instance_2,p:{x:137.55,y:38.55}},{t:this.instance_1,p:{scaleX:0.9956,scaleY:0.9446,rotation:19.0812,x:123.4,y:64.65}},{t:this.instance,p:{scaleX:0.9951,scaleY:0.9442,skewX:-32.3286,skewY:147.6717,x:161.7,y:62.45}}]},1).to({state:[{t:this.instance_12,p:{x:156.55,y:66.35,scaleX:0.9977,scaleY:0.9977,skewX:-46.1086,skewY:133.8914}},{t:this.instance_11,p:{scaleX:0.9977,scaleY:0.9977,skewX:-44.4033,skewY:135.5967,x:159.15,y:65.7}},{t:this.instance_10,p:{scaleX:0.8446,scaleY:0.8957,skewX:16.1114,skewY:-163.8897,x:170.45,y:46.8,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8451,scaleY:0.8962,skewX:14.7726,skewY:-165.2248,x:169.35,y:39.9,regX:0.1,regY:-0.1}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.9929,scaleY:0.9929,skewX:-6.1276,skewY:173.8724,x:168.65,y:32.15}},{t:this.instance_7,p:{scaleX:0.8443,scaleY:0.8953,rotation:-14.8675,x:114.65,y:47.45,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:-0.1,scaleX:0.8452,scaleY:0.8964,rotation:-9.5335,x:115.05,y:40.95}},{t:this.instance_5,p:{scaleX:0.9984,scaleY:0.9984,rotation:42.1151,x:123,y:66.15}},{t:this.instance_4,p:{x:127.95,y:65.95,scaleX:0.9984,scaleY:0.9984,rotation:37.595}},{t:this.instance_3,p:{x:116.75,y:33.5,regY:-0.1,scaleX:0.9927,scaleY:0.9927,rotation:-2.6404,regX:0}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:38.55}},{t:this.instance_1,p:{scaleX:0.9942,scaleY:0.9433,rotation:47.6839,x:119.8,y:62}},{t:this.instance,p:{scaleX:0.9946,scaleY:0.9437,skewX:-41.3867,skewY:138.613,x:163.7,y:62.45}}]},1).to({state:[{t:this.instance_12,p:{x:154.35,y:66.95,scaleX:0.9963,scaleY:0.9963,skewX:-17.0512,skewY:162.9488}},{t:this.instance_11,p:{scaleX:0.9968,scaleY:0.9968,skewX:-27.0926,skewY:152.9074,x:158.15,y:66.25}},{t:this.instance_10,p:{scaleX:0.8428,scaleY:0.8938,skewX:67.2348,skewY:-112.7638,x:168.95,y:59.45,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8423,scaleY:0.8932,skewX:52.6783,skewY:-127.3187,x:172.1,y:52.05,regX:0.1,regY:0.1}},{t:this.instance_8,p:{regX:-0.1,regY:-0.1,scaleX:0.9898,scaleY:0.9898,skewX:27.4215,skewY:-152.5785,x:171.45,y:40.95}},{t:this.instance_7,p:{scaleX:0.8422,scaleY:0.8932,rotation:-66.2709,x:114.8,y:59.35,regY:-0.2}},{t:this.instance_6,p:{regX:0.1,regY:-0.1,scaleX:0.8438,scaleY:0.8949,rotation:-41.1311,x:114.35,y:49.55}},{t:this.instance_5,p:{scaleX:0.9973,scaleY:0.9973,rotation:21.5361,x:124.05,y:66.7}},{t:this.instance_4,p:{x:129.55,y:66.55,scaleX:0.9973,scaleY:0.9973,rotation:15.0586}},{t:this.instance_3,p:{x:114.4,y:39.95,regY:0,scaleX:0.9901,scaleY:0.9901,rotation:-18.4017,regX:0}},{t:this.instance_13,p:{scaleX:1.0653,scaleY:1.0756,y:39.15}},{t:this.instance_1,p:{scaleX:0.9926,scaleY:0.9418,rotation:9.8019,x:125.2,y:69.3}},{t:this.instance,p:{scaleX:0.9919,scaleY:0.9412,skewX:-13.8213,skewY:166.1784,x:157.7,y:69.45}}]},1).to({state:[{t:this.instance_12,p:{x:156.55,y:66.35,scaleX:0.9977,scaleY:0.9977,skewX:-46.1086,skewY:133.8914}},{t:this.instance_11,p:{scaleX:0.9977,scaleY:0.9977,skewX:-44.4033,skewY:135.5967,x:159.15,y:65.7}},{t:this.instance_10,p:{scaleX:0.8446,scaleY:0.8957,skewX:16.1114,skewY:-163.8897,x:170.45,y:46.8,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8451,scaleY:0.8962,skewX:14.7726,skewY:-165.2248,x:169.35,y:39.9,regX:0.1,regY:-0.1}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.9929,scaleY:0.9929,skewX:-6.1276,skewY:173.8724,x:168.65,y:32.15}},{t:this.instance_7,p:{scaleX:0.8443,scaleY:0.8953,rotation:-14.8675,x:114.65,y:47.45,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:-0.1,scaleX:0.8452,scaleY:0.8964,rotation:-9.5335,x:115.05,y:40.95}},{t:this.instance_5,p:{scaleX:0.9984,scaleY:0.9984,rotation:42.1151,x:123,y:66.15}},{t:this.instance_4,p:{x:127.95,y:65.95,scaleX:0.9984,scaleY:0.9984,rotation:37.595}},{t:this.instance_3,p:{x:116.75,y:33.5,regY:-0.1,scaleX:0.9927,scaleY:0.9927,rotation:-2.6404,regX:0}},{t:this.instance_13,p:{scaleX:1,scaleY:1,y:38.55}},{t:this.instance_1,p:{scaleX:0.9942,scaleY:0.9433,rotation:47.6839,x:119.8,y:62}},{t:this.instance,p:{scaleX:0.9946,scaleY:0.9437,skewX:-41.3867,skewY:138.613,x:163.7,y:62.45}}]},1).to({state:[{t:this.instance_12,p:{x:153.35,y:66.35,scaleX:0.9991,scaleY:0.9991,skewX:-16.3043,skewY:163.6957}},{t:this.instance_11,p:{scaleX:0.9991,scaleY:0.9991,skewX:-16.8049,skewY:163.1951,x:155.95,y:65.7}},{t:this.instance_10,p:{scaleX:0.8458,scaleY:0.8969,skewX:43.6641,skewY:-136.3348,x:170.2,y:53,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8458,scaleY:0.897,skewX:31.0793,skewY:-148.9196,x:171.25,y:44.95,regX:0.1,regY:0}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.9939,scaleY:0.9939,skewX:13.2016,skewY:-166.7984,x:169.45,y:37.1}},{t:this.instance_7,p:{scaleX:0.8451,scaleY:0.8962,rotation:-31.9219,x:115.4,y:52.35,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:-0.1,scaleX:0.846,scaleY:0.8972,rotation:-26.5603,x:116.65,y:45.25}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:129.65,y:66.5}},{t:this.instance_4,p:{x:133.55,y:65.95,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:120.8,y:37.05,regY:-0.1,scaleX:0.9936,scaleY:0.9936,rotation:-18.443,regX:0.1}},{t:this.instance_2,p:{x:137.55,y:38.55}},{t:this.instance_1,p:{scaleX:0.9956,scaleY:0.9446,rotation:19.0812,x:123.4,y:64.65}},{t:this.instance,p:{scaleX:0.9951,scaleY:0.9442,skewX:-32.3286,skewY:147.6717,x:161.7,y:62.45}}]},1).to({state:[{t:this.instance_12,p:{x:148.7,y:67.05,scaleX:1,scaleY:1,skewX:0,skewY:180}},{t:this.instance_11,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:151.65,y:68.7}},{t:this.instance_10,p:{scaleX:0.8479,scaleY:0.8992,skewX:91.054,skewY:-88.9462,x:162.95,y:62.5,regX:0,regY:0}},{t:this.instance_9,p:{scaleX:0.8483,scaleY:0.8997,skewX:87.0065,skewY:-92.9932,x:165.65,y:56.1,regX:0,regY:0}},{t:this.instance_8,p:{regX:0,regY:0,scaleX:0.997,scaleY:0.997,skewX:69.4359,skewY:-110.5641,x:165.9,y:48.6}},{t:this.instance_7,p:{scaleX:0.8476,scaleY:0.8989,rotation:-98.1022,x:122.15,y:64.8,regY:-0.1}},{t:this.instance_6,p:{regX:0,regY:0,scaleX:0.848,scaleY:0.8994,rotation:-70.7212,x:119.6,y:57.45}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:133.35,y:68.7}},{t:this.instance_4,p:{x:136.7,y:67.05,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:121.5,y:47.75,regY:0,scaleX:0.9963,scaleY:0.9963,rotation:-67.6905,regX:0}},{t:this.instance_2,p:{x:137.55,y:40.25}},{t:this.instance_1,p:{scaleX:0.9966,scaleY:0.9456,rotation:0,x:127.8,y:69.95}},{t:this.instance,p:{scaleX:0.9966,scaleY:0.9456,skewX:0,skewY:180,x:156.4,y:69.1}}]},1).to({state:[{t:this.instance_12,p:{x:147.7,y:71.85,scaleX:1,scaleY:1,skewX:0,skewY:180}},{t:this.instance_11,p:{scaleX:0.9985,scaleY:0.9985,skewX:34.3098,skewY:-145.6902,x:147.3,y:73.7}},{t:this.instance_10,p:{scaleX:0.8468,scaleY:0.8981,skewX:114.1402,skewY:-65.8606,x:158.75,y:71.85,regX:0.1,regY:-0.1}},{t:this.instance_9,p:{scaleX:0.847,scaleY:0.8983,skewX:114.1051,skewY:-65.8941,x:162.55,y:69.55,regX:0,regY:0}},{t:this.instance_8,p:{regX:0,regY:-0.1,scaleX:0.9956,scaleY:0.9956,skewX:94.0058,skewY:-85.9942,x:167.05,y:63.65}},{t:this.instance_7,p:{scaleX:0.8464,scaleY:0.8977,rotation:-123.9888,x:125.3,y:72.2,regY:-0.1}},{t:this.instance_6,p:{regX:0.1,regY:-0.1,scaleX:0.8465,scaleY:0.8978,rotation:-102.8165,x:121.05,y:68.5}},{t:this.instance_5,p:{scaleX:0.9988,scaleY:0.9988,rotation:-24.084,x:137.55,y:73.4}},{t:this.instance_4,p:{x:139.1,y:71.85,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:120.6,y:60.95,regY:-0.1,scaleX:0.995,scaleY:0.995,rotation:-93.5107,regX:0.1}},{t:this.instance_2,p:{x:137.95,y:45.05}},{t:this.instance_1,p:{scaleX:0.9953,scaleY:0.9443,rotation:-27.3352,x:134.4,y:74.45}},{t:this.instance,p:{scaleX:0.9944,scaleY:0.9435,skewX:20.8103,skewY:-159.1909,x:150.25,y:75.75}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.5,10.8,83.30000000000001,73.4);


(lib.alien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Die:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		if (game !== undefined) game.resetAlien();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Layer 3
	this.anim_mc = new lib.Monsta();
	this.anim_mc.name = "anim_mc";
	this.anim_mc.parent = this;
	this.anim_mc.setTransform(2.05,-1.9,1,1,0,0,0,142.8,51.5);

	this.timeline.addTween(cjs.Tween.get(this.anim_mc).wait(2).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-33.8,68.5,63.8);


(lib.RikonRun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 3
	this.instance = new lib.wormarm04();
	this.instance.parent = this;
	this.instance.setTransform(-0.05,-23.15,0.6946,0.6946,-18.5579,0,0,-0.1,-0.1);

	this.instance_1 = new lib.wormheadside();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.4,-50.35,0.7595,0.7595,12.0181);

	this.instance_2 = new lib.wormbodyupper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.1,-20.6,0.76,0.76);

	this.instance_3 = new lib.wormbase("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-12.7,0.8999,0.76);

	this.instance_4 = new lib.wormupperbody02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.5,-21.55,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:0.8999,x:12.5,y:-12.7,regX:0}},{t:this.instance_2},{t:this.instance_1,p:{scaleX:0.7595,scaleY:0.7595,rotation:12.0181,x:11.4,y:-50.35}},{t:this.instance,p:{scaleX:0.6946,scaleY:0.6946,rotation:-18.5579,x:-0.05,y:-23.15,regX:-0.1,regY:-0.1}}]}).to({state:[{t:this.instance_3,p:{scaleX:0.76,x:9.3,y:-12.8,regX:0}},{t:this.instance_4,p:{regX:0,scaleX:0.76,scaleY:0.76,rotation:0,x:5.5,y:-21.55}},{t:this.instance_1,p:{scaleX:0.7591,scaleY:0.7591,rotation:21.5251,x:13.95,y:-47.75}},{t:this.instance,p:{scaleX:0.6944,scaleY:0.6944,rotation:-12.8055,x:-0.25,y:-23.25,regX:-0.1,regY:-0.1}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.6292,x:6.3,y:-12.8,regX:-0.1}},{t:this.instance_4,p:{regX:-0.1,scaleX:0.7346,scaleY:0.7125,rotation:7.0559,x:5.3,y:-19.4}},{t:this.instance_1,p:{scaleX:0.7591,scaleY:0.7591,rotation:21.5251,x:15.9,y:-44.95}},{t:this.instance,p:{scaleX:0.6123,scaleY:0.6946,rotation:-18.5579,x:-0.05,y:-22.9,regX:-0.1,regY:-0.1}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.544,x:4.2,y:-12.7,regX:-0.1}},{t:this.instance_4,p:{regX:0,scaleX:0.6107,scaleY:0.8643,rotation:19.0779,x:4.8,y:-19.45}},{t:this.instance_1,p:{scaleX:0.7591,scaleY:0.7591,rotation:21.5251,x:15.35,y:-45}},{t:this.instance,p:{scaleX:0.6129,scaleY:0.6201,rotation:-18.5567,x:-0.25,y:-23.15,regX:0.1,regY:-0.1}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.6582,x:6.8,y:-12.5,regX:-0.1}},{t:this.instance_4,p:{regX:-0.1,scaleX:0.7345,scaleY:0.8274,rotation:3.2837,x:4.9,y:-20.65}},{t:this.instance_1,p:{scaleX:0.7589,scaleY:0.7589,rotation:17.7416,x:12.25,y:-47}},{t:this.instance,p:{scaleX:0.6944,scaleY:0.6944,rotation:-23.8275,x:-0.1,y:-23.65,regX:0,regY:0}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.76,x:9.4,y:-12.5,regX:0}},{t:this.instance_4,p:{regX:0,scaleX:0.7494,scaleY:0.95,rotation:7.0552,x:6.1,y:-20.8}},{t:this.instance_1,p:{scaleX:0.7591,scaleY:0.7591,rotation:21.5251,x:14.95,y:-46.7}},{t:this.instance,p:{scaleX:0.6949,scaleY:0.6949,rotation:-10.773,x:0.15,y:-22.6,regX:-0.1,regY:-0.1}}]},1).wait(1));

	// Layer 2
	this.nugget_mc = new lib.riciclewithrunner();
	this.nugget_mc.name = "nugget_mc";
	this.nugget_mc.parent = this;
	this.nugget_mc.setTransform(-2.8,1.4);

	this.timeline.addTween(cjs.Tween.get(this.nugget_mc).wait(6));

	// Layer 4
	this.instance_5 = new lib.RikShadow("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(7.95,0.05,0.7345,0.7345);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-78.4,74.4,87.60000000000001);


// stage content:
(lib.spacecowboyv4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{title:0,instructions:16,game:37,win:46,lose:58});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		if (game !== undefined) game.showScore(this.info_mc);
	}
	this.frame_57 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.info_mc.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(6).call(this.frame_37).wait(19).call(this.frame_56).wait(1).call(this.frame_57).wait(10).call(this.frame_67).wait(2).call(this.frame_69).wait(1));

	// Panel
	this.info_mc = new lib.InfoBG();
	this.info_mc.name = "info_mc";
	this.info_mc.parent = this;
	this.info_mc.setTransform(277.45,170.95);
	this.info_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info_mc).wait(55).to({_off:false},0).to({_off:true},3).wait(8).to({_off:false},0).wait(4));

	// ControlPad
	this.control_mc = new lib.ControlPad();
	this.control_mc.name = "control_mc";
	this.control_mc.parent = this;
	this.control_mc.setTransform(494,346,1,1,0,0,0,47,47);
	this.control_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.control_mc).wait(37).to({_off:false},0).to({_off:true},1).wait(32));

	// Menu
	this.instance = new lib.Instructions("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(93.1,-85.35,0.9313,0.8581);
	this.instance._off = true;

	this.menu_mc = new lib.MenuBG();
	this.menu_mc.name = "menu_mc";
	this.menu_mc.parent = this;
	this.menu_mc.setTransform(274.45,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},10).to({state:[{t:this.menu_mc}]},11).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:224.65},10).to({_off:true},11).wait(33));

	// Bullet
	this.instance_1 = new lib.Gamename("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(822.05,351.6,1.381,1.381);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:274.65,y:350.6},6,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({x:281.65,y:300.75},3).to({_off:true},8).wait(33));

	// Nuggets
	this.instance_2 = new lib.Play();
	this.instance_2.parent = this;
	this.instance_2.setTransform(270.05,357.1,1,0.723);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-73,-19,143,51);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Play(), 3);

	this.play_btn = new lib.Play();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(270.05,360.3,1,0.6667);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.Play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.play_btn}]},3).to({state:[]},8).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({_off:true,scaleY:0.6667,y:360.3},3).wait(41));

	// Alien
	this.instance_3 = new lib.LoadingBG("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.25,128.7,0.9875,0.9594);

	this.alien_mc = new lib.alien();
	this.alien_mc.name = "alien_mc";
	this.alien_mc.parent = this;
	this.alien_mc.setTransform(609.35,170,1,1,0,0,0,1.1,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.alien_mc}]},37).wait(33));

	// Ship
	this.instance_4 = new lib.CachedTexturedBitmap_1529();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-19.8,-26.4,0.5,0.5);

	this.pod_mc = new lib.Ship_Frontpod();
	this.pod_mc.name = "pod_mc";
	this.pod_mc.parent = this;
	this.pod_mc.setTransform(831,330,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.pod_mc}]},37).wait(33));

	// Cowboy
	this.cowboy_mc = new lib.RikAnims();
	this.cowboy_mc.name = "cowboy_mc";
	this.cowboy_mc.parent = this;
	this.cowboy_mc.setTransform(100,325);
	this.cowboy_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cowboy_mc).wait(37).to({_off:false},0).wait(33));

	// Shadow
	this.shadow_mc = new lib.RikShadow();
	this.shadow_mc.name = "shadow_mc";
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(100,385.9);
	this.shadow_mc.alpha = 0.5195;
	this.shadow_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shadow_mc).wait(37).to({_off:false},0).wait(33));

	// Rikon
	this.rikonDig_mc = new lib.RikonDig();
	this.rikonDig_mc.name = "rikonDig_mc";
	this.rikonDig_mc.parent = this;
	this.rikonDig_mc.setTransform(655.75,356.6,1,1,0,0,0,-7,-31.8);

	this.rikonRun_mc = new lib.RikonRun();
	this.rikonRun_mc.name = "rikonRun_mc";
	this.rikonRun_mc.parent = this;
	this.rikonRun_mc.setTransform(597.95,362.75,1,1,0,0,0,4.5,-34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.rikonRun_mc},{t:this.rikonDig_mc}]},37).wait(33));

	// BG
	this.instance_5 = new lib.PlanetDistance("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.8,119.5);

	this.bg_mc = new lib.BG01();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.parent = this;
	this.bg_mc.setTransform(1019.9,363.65);
	this.bg_mc.filters = [new cjs.ColorFilter(0.59, 0.59, 0.59, 1, 0, 41.82, 62.73, 0)];
	this.bg_mc.cache(-1472,-32,1805,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bg_mc},{t:this.instance_5}]},37).wait(33));

	// StarsBG
	this.instance_6 = new lib.Stars("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(278.75,187);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).wait(33));

	// black
	this.instance_7 = new lib.sky("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(275.55,196.1,1.1282,1.1692,0,0,0,-1.6,9.8);
	this.instance_7.alpha = 0.4609;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-114,1526.1,558);
// library properties:
lib.properties = {
	id: 'DDFC746DEC8A4DDDBD5415B09FBAA0B8',
	width: 550,
	height: 400,
	fps: 25,
	color: "#0066CC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/spacecowboy_atlas_.png", id:"spacecowboy_atlas_"},
		{src:"images/spacecowboy_atlas_2.png", id:"spacecowboy_atlas_2"},
		{src:"images/spacecowboy_atlas_3.png", id:"spacecowboy_atlas_3"},
		{src:"sounds/alienHitwav.mp3", id:"alienHitwav"},
		{src:"sounds/sfxDig.mp3", id:"sfxDig"},
		{src:"sounds/iAirgunwav.mp3", id:"iAirgunwav"},
		{src:"sounds/sfxAlien.mp3", id:"sfxAlien"},
		{src:"sounds/sfxLoop.mp3", id:"sfxLoop"},
		{src:"sounds/rikHitwav.mp3", id:"rikHitwav"},
		{src:"sounds/sfxRun.mp3", id:"sfxRun"},
		{src:"sounds/sfxBoost.mp3", id:"sfxBoost"},
		{src:"sounds/Vanish03wav.mp3", id:"Vanish03wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DDFC746DEC8A4DDDBD5415B09FBAA0B8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;