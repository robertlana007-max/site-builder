/* GetToolNest astronomy helpers (global AX), shared by Sunrise & Sunset, Moon Phase and Night Sky Map.
   Places (offline city list, your location, manual latitude/longitude), time-zone maths with Intl,
   and Sun/Moon events computed with Astronomy Engine (assets/vendor/astronomy, MIT). Nothing is sent anywhere. */
(function (W) {
  'use strict';
  var A = W.Astronomy;
  var DAY = 864e5;
  var CITIES = "Abidjan|Côte d'Ivoire|Africa/Abidjan|5.36|-4.01;Abu Dhabi|United Arab Emirates|Asia/Dubai|24.45|54.38;Abuja|Nigeria|Africa/Lagos|9.08|7.4;Accra|Ghana|Africa/Accra|5.6|-0.19;Addis Ababa|Ethiopia|Africa/Addis_Ababa|9.03|38.74;Adelaide|Australia|Australia/Adelaide|-34.93|138.6;Ahmedabad|India|Asia/Kolkata|23.02|72.57;Alexandria|Egypt|Africa/Cairo|31.2|29.92;Algiers|Algeria|Africa/Algiers|36.75|3.06;Almaty|Kazakhstan|Asia/Almaty|43.24|76.89;Amman|Jordan|Asia/Amman|31.95|35.93;Amsterdam|Netherlands|Europe/Amsterdam|52.37|4.9;Anchorage|United States|America/Anchorage|61.22|-149.9;Ankara|Türkiye|Europe/Istanbul|39.93|32.86;Antananarivo|Madagascar|Indian/Antananarivo|-18.88|47.51;Apia|Samoa|Pacific/Apia|-13.83|-171.76;Ashgabat|Turkmenistan|Asia/Ashgabat|37.95|58.38;Asmara|Eritrea|Africa/Asmara|15.32|38.93;Asunción|Paraguay|America/Asuncion|-25.26|-57.58;Athens|Greece|Europe/Athens|37.98|23.73;Atlanta|United States|America/New_York|33.75|-84.39;Auckland|New Zealand|Pacific/Auckland|-36.85|174.76;Baghdad|Iraq|Asia/Baghdad|33.31|44.36;Baku|Azerbaijan|Asia/Baku|40.41|49.87;Bamako|Mali|Africa/Bamako|12.64|-8.0;Bandar Seri Begawan|Brunei|Asia/Brunei|4.9|114.94;Bandung|Indonesia|Asia/Jakarta|-6.91|107.61;Bangalore|India|Asia/Kolkata|12.97|77.59;Bangkok|Thailand|Asia/Bangkok|13.76|100.5;Barcelona|Spain|Europe/Madrid|41.39|2.17;Beijing|China|Asia/Shanghai|39.9|116.41;Beirut|Lebanon|Asia/Beirut|33.89|35.5;Belgrade|Serbia|Europe/Belgrade|44.79|20.45;Bergen|Norway|Europe/Oslo|60.39|5.32;Berlin|Germany|Europe/Berlin|52.52|13.4;Bishkek|Kyrgyzstan|Asia/Bishkek|42.87|74.59;Bogotá|Colombia|America/Bogota|4.71|-74.07;Boston|United States|America/New_York|42.36|-71.06;Brasília|Brazil|America/Sao_Paulo|-15.79|-47.88;Bratislava|Slovakia|Europe/Bratislava|48.15|17.11;Brisbane|Australia|Australia/Brisbane|-27.47|153.03;Brussels|Belgium|Europe/Brussels|50.85|4.35;Bucharest|Romania|Europe/Bucharest|44.43|26.1;Budapest|Hungary|Europe/Budapest|47.5|19.04;Buenos Aires|Argentina|America/Argentina/Buenos_Aires|-34.6|-58.38;Busan|South Korea|Asia/Seoul|35.18|129.08;Cairo|Egypt|Africa/Cairo|30.04|31.24;Calgary|Canada|America/Edmonton|51.05|-114.07;Cape Town|South Africa|Africa/Johannesburg|-33.92|18.42;Caracas|Venezuela|America/Caracas|10.48|-66.9;Casablanca|Morocco|Africa/Casablanca|33.57|-7.59;Cebu|Philippines|Asia/Manila|10.32|123.89;Chengdu|China|Asia/Shanghai|30.57|104.07;Chennai|India|Asia/Kolkata|13.08|80.27;Chicago|United States|America/Chicago|41.88|-87.63;Chisinau|Moldova|Europe/Chisinau|47.01|28.86;Chittagong|Bangladesh|Asia/Dhaka|22.36|91.78;Christchurch|New Zealand|Pacific/Auckland|-43.53|172.64;Colombo|Sri Lanka|Asia/Colombo|6.93|79.86;Conakry|Guinea|Africa/Conakry|9.64|-13.58;Copenhagen|Denmark|Europe/Copenhagen|55.68|12.57;Córdoba|Argentina|America/Argentina/Cordoba|-31.42|-64.18;Cotonou|Benin|Africa/Porto-Novo|6.37|2.42;Dakar|Senegal|Africa/Dakar|14.72|-17.47;Dallas|United States|America/Chicago|32.78|-96.8;Damascus|Syria|Asia/Damascus|33.51|36.28;Dar es Salaam|Tanzania|Africa/Dar_es_Salaam|-6.79|39.21;Darwin|Australia|Australia/Darwin|-12.46|130.84;Delhi|India|Asia/Kolkata|28.61|77.21;Denpasar (Bali)|Indonesia|Asia/Makassar|-8.65|115.22;Denver|United States|America/Denver|39.74|-104.99;Dhaka|Bangladesh|Asia/Dhaka|23.81|90.41;Dili|Timor-Leste|Asia/Dili|-8.56|125.57;Djibouti|Djibouti|Africa/Djibouti|11.59|43.15;Doha|Qatar|Asia/Qatar|25.29|51.53;Douala|Cameroon|Africa/Douala|4.05|9.77;Dubai|United Arab Emirates|Asia/Dubai|25.2|55.27;Dublin|Ireland|Europe/Dublin|53.35|-6.26;Durban|South Africa|Africa/Johannesburg|-29.86|31.02;Dushanbe|Tajikistan|Asia/Dushanbe|38.56|68.79;Edinburgh|United Kingdom|Europe/London|55.95|-3.19;Fairbanks|United States|America/Anchorage|64.84|-147.72;Faisalabad|Pakistan|Asia/Karachi|31.42|73.08;Fortaleza|Brazil|America/Fortaleza|-3.73|-38.52;Frankfurt|Germany|Europe/Berlin|50.11|8.68;Freetown|Sierra Leone|Africa/Freetown|8.47|-13.23;Gaborone|Botswana|Africa/Gaborone|-24.63|25.92;Geneva|Switzerland|Europe/Zurich|46.2|6.14;Guadalajara|Mexico|America/Mexico_City|20.66|-103.35;Guangzhou|China|Asia/Shanghai|23.13|113.26;Guatemala City|Guatemala|America/Guatemala|14.63|-90.51;Guayaquil|Ecuador|America/Guayaquil|-2.19|-79.89;Halifax|Canada|America/Halifax|44.65|-63.58;Hamburg|Germany|Europe/Berlin|53.55|9.99;Hanoi|Vietnam|Asia/Bangkok|21.03|105.85;Harare|Zimbabwe|Africa/Harare|-17.83|31.05;Havana|Cuba|America/Havana|23.11|-82.37;Helsinki|Finland|Europe/Helsinki|60.17|24.94;Ho Chi Minh City|Vietnam|Asia/Ho_Chi_Minh|10.82|106.63;Hobart|Australia|Australia/Hobart|-42.88|147.33;Hong Kong|China|Asia/Hong_Kong|22.32|114.17;Honolulu|United States|Pacific/Honolulu|21.31|-157.86;Houston|United States|America/Chicago|29.76|-95.37;Hyderabad|India|Asia/Kolkata|17.39|78.49;Ibadan|Nigeria|Africa/Lagos|7.38|3.94;Islamabad|Pakistan|Asia/Karachi|33.68|73.05;Istanbul|Türkiye|Europe/Istanbul|41.01|28.98;Izmir|Türkiye|Europe/Istanbul|38.42|27.14;Jaipur|India|Asia/Kolkata|26.91|75.79;Jakarta|Indonesia|Asia/Jakarta|-6.21|106.85;Jeddah|Saudi Arabia|Asia/Riyadh|21.49|39.19;Jerusalem|Israel|Asia/Jerusalem|31.77|35.21;Johannesburg|South Africa|Africa/Johannesburg|-26.2|28.05;Juba|South Sudan|Africa/Juba|4.85|31.58;Kabul|Afghanistan|Asia/Kabul|34.56|69.21;Kampala|Uganda|Africa/Kampala|0.35|32.58;Kano|Nigeria|Africa/Lagos|12.0|8.52;Karachi|Pakistan|Asia/Karachi|24.86|67.01;Kathmandu|Nepal|Asia/Kathmandu|27.72|85.32;Khartoum|Sudan|Africa/Khartoum|15.5|32.56;Kigali|Rwanda|Africa/Kigali|-1.94|30.06;Kingston|Jamaica|America/Jamaica|17.97|-76.79;Kinshasa|DR Congo|Africa/Kinshasa|-4.44|15.27;Kiritimati|Kiribati|Pacific/Kiritimati|1.87|-157.43;Kolkata|India|Asia/Kolkata|22.57|88.36;Kraków|Poland|Europe/Warsaw|50.06|19.94;Kuala Lumpur|Malaysia|Asia/Kuala_Lumpur|3.14|101.69;Kumasi|Ghana|Africa/Accra|6.69|-1.62;Kuwait City|Kuwait|Asia/Kuwait|29.38|47.99;Kyiv|Ukraine|Europe/Kyiv|50.45|30.52;La Paz|Bolivia|America/La_Paz|-16.5|-68.15;Lagos|Nigeria|Africa/Lagos|6.52|3.38;Lahore|Pakistan|Asia/Karachi|31.55|74.34;Lhasa|China|Asia/Shanghai|29.65|91.17;Lilongwe|Malawi|Africa/Blantyre|-13.96|33.77;Lima|Peru|America/Lima|-12.05|-77.04;Lisbon|Portugal|Europe/Lisbon|38.72|-9.14;Ljubljana|Slovenia|Europe/Ljubljana|46.06|14.51;Lomé|Togo|Africa/Lome|6.13|1.22;London|United Kingdom|Europe/London|51.51|-0.13;Longyearbyen|Svalbard (Norway)|Arctic/Longyearbyen|78.22|15.65;Los Angeles|United States|America/Los_Angeles|34.05|-118.24;Luanda|Angola|Africa/Luanda|-8.84|13.23;Lucknow|India|Asia/Kolkata|26.85|80.95;Lusaka|Zambia|Africa/Lusaka|-15.39|28.32;Luxembourg|Luxembourg|Europe/Luxembourg|49.61|6.13;Lyon|France|Europe/Paris|45.76|4.84;Madrid|Spain|Europe/Madrid|40.42|-3.7;Makassar|Indonesia|Asia/Makassar|-5.15|119.43;Malé|Maldives|Indian/Maldives|4.18|73.51;Managua|Nicaragua|America/Managua|12.11|-86.24;Manama|Bahrain|Asia/Bahrain|26.23|50.59;Manaus|Brazil|America/Manaus|-3.12|-60.02;Manchester|United Kingdom|Europe/London|53.48|-2.24;Manila|Philippines|Asia/Manila|14.6|120.98;Maputo|Mozambique|Africa/Maputo|-25.97|32.57;Mashhad|Iran|Asia/Tehran|36.3|59.6;McMurdo Station|Antarctica|Antarctica/McMurdo|-77.85|166.67;Mecca|Saudi Arabia|Asia/Riyadh|21.39|39.86;Medan|Indonesia|Asia/Jakarta|3.6|98.67;Medellín|Colombia|America/Bogota|6.24|-75.58;Medina|Saudi Arabia|Asia/Riyadh|24.47|39.61;Melbourne|Australia|Australia/Melbourne|-37.81|144.96;Mexico City|Mexico|America/Mexico_City|19.43|-99.13;Miami|United States|America/New_York|25.76|-80.19;Milan|Italy|Europe/Rome|45.46|9.19;Minsk|Belarus|Europe/Minsk|53.9|27.56;Mogadishu|Somalia|Africa/Mogadishu|2.05|45.32;Mombasa|Kenya|Africa/Nairobi|-4.04|39.67;Monrovia|Liberia|Africa/Monrovia|6.3|-10.8;Monterrey|Mexico|America/Monterrey|25.69|-100.32;Montevideo|Uruguay|America/Montevideo|-34.9|-56.16;Montreal|Canada|America/Toronto|45.5|-73.57;Moscow|Russia|Europe/Moscow|55.76|37.62;Mumbai|India|Asia/Kolkata|19.08|72.88;Munich|Germany|Europe/Berlin|48.14|11.58;Murmansk|Russia|Europe/Moscow|68.97|33.08;Muscat|Oman|Asia/Muscat|23.59|58.41;N'Djamena|Chad|Africa/Ndjamena|12.13|15.06;Nairobi|Kenya|Africa/Nairobi|-1.29|36.82;Naples|Italy|Europe/Rome|40.85|14.27;New York|United States|America/New_York|40.71|-74.01;Niamey|Niger|Africa/Niamey|13.51|2.11;Nicosia|Cyprus|Asia/Nicosia|35.17|33.36;Norilsk|Russia|Asia/Krasnoyarsk|69.35|88.2;Nouakchott|Mauritania|Africa/Nouakchott|18.08|-15.98;Nouméa|New Caledonia|Pacific/Noumea|-22.27|166.46;Novosibirsk|Russia|Asia/Novosibirsk|55.01|82.93;Nuuk|Greenland|America/Nuuk|64.18|-51.72;Osaka|Japan|Asia/Tokyo|34.69|135.5;Oslo|Norway|Europe/Oslo|59.91|10.75;Ottawa|Canada|America/Toronto|45.42|-75.7;Ouagadougou|Burkina Faso|Africa/Ouagadougou|12.37|-1.53;Panama City|Panama|America/Panama|8.98|-79.52;Paris|France|Europe/Paris|48.86|2.35;Perth|Australia|Australia/Perth|-31.95|115.86;Peshawar|Pakistan|Asia/Karachi|34.01|71.58;Phnom Penh|Cambodia|Asia/Phnom_Penh|11.56|104.93;Phoenix|United States|America/Phoenix|33.45|-112.07;Port Louis|Mauritius|Indian/Mauritius|-20.16|57.5;Port Moresby|Papua New Guinea|Pacific/Port_Moresby|-9.44|147.18;Port-au-Prince|Haiti|America/Port-au-Prince|18.59|-72.31;Porto Alegre|Brazil|America/Sao_Paulo|-30.03|-51.23;Porto|Portugal|Europe/Lisbon|41.15|-8.61;Prague|Czechia|Europe/Prague|50.08|14.44;Pune|India|Asia/Kolkata|18.52|73.86;Quetta|Pakistan|Asia/Karachi|30.18|66.98;Quito|Ecuador|America/Guayaquil|-0.18|-78.47;Rabat|Morocco|Africa/Casablanca|34.02|-6.83;Recife|Brazil|America/Recife|-8.05|-34.88;Reykjavík|Iceland|Atlantic/Reykjavik|64.15|-21.94;Riga|Latvia|Europe/Riga|56.95|24.11;Rio de Janeiro|Brazil|America/Sao_Paulo|-22.91|-43.17;Riyadh|Saudi Arabia|Asia/Riyadh|24.71|46.68;Rome|Italy|Europe/Rome|41.9|12.5;Rovaniemi|Finland|Europe/Helsinki|66.5|25.73;Saint Petersburg|Russia|Europe/Moscow|59.94|30.31;Salvador|Brazil|America/Bahia|-12.97|-38.5;San Francisco|United States|America/Los_Angeles|37.77|-122.42;San José|Costa Rica|America/Costa_Rica|9.93|-84.09;San Juan|Puerto Rico|America/Puerto_Rico|18.47|-66.11;San Salvador|El Salvador|America/El_Salvador|13.69|-89.22;Sana'a|Yemen|Asia/Aden|15.37|44.19;Santiago|Chile|America/Santiago|-33.45|-70.67;Santo Domingo|Dominican Republic|America/Santo_Domingo|18.49|-69.93;São Paulo|Brazil|America/Sao_Paulo|-23.55|-46.63;Sapporo|Japan|Asia/Tokyo|43.06|141.35;Sarajevo|Bosnia and Herzegovina|Europe/Sarajevo|43.86|18.41;Seattle|United States|America/Los_Angeles|47.61|-122.33;Seoul|South Korea|Asia/Seoul|37.57|126.98;Shanghai|China|Asia/Shanghai|31.23|121.47;Shenzhen|China|Asia/Shanghai|22.54|114.06;Singapore|Singapore|Asia/Singapore|1.35|103.82;Skopje|North Macedonia|Europe/Skopje|42.0|21.43;Sofia|Bulgaria|Europe/Sofia|42.7|23.32;Stockholm|Sweden|Europe/Stockholm|59.33|18.07;Surabaya|Indonesia|Asia/Jakarta|-7.25|112.75;Suva|Fiji|Pacific/Fiji|-18.14|178.44;Sydney|Australia|Australia/Sydney|-33.87|151.21;Taipei|Taiwan|Asia/Taipei|25.03|121.57;Tallinn|Estonia|Europe/Tallinn|59.44|24.75;Tarawa|Kiribati|Pacific/Tarawa|1.45|173.0;Tashkent|Uzbekistan|Asia/Tashkent|41.3|69.24;Tbilisi|Georgia|Asia/Tbilisi|41.72|44.79;Tegucigalpa|Honduras|America/Tegucigalpa|14.07|-87.19;Tehran|Iran|Asia/Tehran|35.69|51.39;Tel Aviv|Israel|Asia/Jerusalem|32.09|34.78;Thimphu|Bhutan|Asia/Thimphu|27.47|89.64;Tirana|Albania|Europe/Tirane|41.33|19.82;Tokyo|Japan|Asia/Tokyo|35.68|139.69;Toronto|Canada|America/Toronto|43.65|-79.38;Tripoli|Libya|Africa/Tripoli|32.89|13.19;Tromsø|Norway|Europe/Oslo|69.65|18.96;Tunis|Tunisia|Africa/Tunis|36.81|10.18;Ulaanbaatar|Mongolia|Asia/Ulaanbaatar|47.89|106.91;Urumqi|China|Asia/Urumqi|43.83|87.62;Ushuaia|Argentina|America/Argentina/Ushuaia|-54.8|-68.3;Utqiaġvik (Barrow)|United States|America/Anchorage|71.29|-156.79;Valletta|Malta|Europe/Malta|35.9|14.51;Vancouver|Canada|America/Vancouver|49.28|-123.12;Vienna|Austria|Europe/Vienna|48.21|16.37;Vientiane|Laos|Asia/Vientiane|17.98|102.63;Vilnius|Lithuania|Europe/Vilnius|54.69|25.28;Vladivostok|Russia|Asia/Vladivostok|43.12|131.89;Warsaw|Poland|Europe/Warsaw|52.23|21.01;Washington, D.C.|United States|America/New_York|38.91|-77.04;Wellington|New Zealand|Pacific/Auckland|-41.29|174.78;Windhoek|Namibia|Africa/Windhoek|-22.56|17.08;Winnipeg|Canada|America/Winnipeg|49.9|-97.14;Yakutsk|Russia|Asia/Yakutsk|62.03|129.73;Yangon|Myanmar|Asia/Yangon|16.87|96.2;Yerevan|Armenia|Asia/Yerevan|40.18|44.51;Zagreb|Croatia|Europe/Zagreb|45.81|15.98;Zurich|Switzerland|Europe/Zurich|47.38|8.54".split(';').map(function (s) { var p = s.split('|'); return { name: p[0], country: p[1], zone: p[2], lat: +p[3], lon: +p[4] }; });

  function validZone(z) { if (!z || typeof z !== 'string') return false; try { new Intl.DateTimeFormat('en', { timeZone: z }); return true; } catch (e) { return false; } }
  var BZ = (function () { var z; try { z = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) {} return validZone(z) ? z : 'UTC'; })();
  BZ = { 'Asia/Calcutta': 'Asia/Kolkata', 'Asia/Katmandu': 'Asia/Kathmandu', 'Asia/Saigon': 'Asia/Ho_Chi_Minh', 'Asia/Rangoon': 'Asia/Yangon', 'Europe/Kiev': 'Europe/Kyiv', 'America/Buenos_Aires': 'America/Argentina/Buenos_Aires', 'Asia/Dacca': 'Asia/Dhaka', 'Asia/Ulan_Bator': 'Asia/Ulaanbaatar', 'America/Godthab': 'America/Nuuk' }[BZ] || BZ;
  if (!validZone(BZ)) BZ = 'UTC';

  // ---------- time-zone maths ----------
  var PF = {};
  function pf(z) { return PF[z] || (PF[z] = new Intl.DateTimeFormat('en-US', { timeZone: z, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', era: 'short' })); }
  function parts(t, z) {
    var o = {}; pf(z).formatToParts(new Date(t)).forEach(function (p) { o[p.type] = p.value; });
    var y = +o.year; if (o.era && /^B/.test(o.era)) y = 1 - y;
    return { y: y, m: +o.month, d: +o.day, h: (+o.hour) % 24, mi: +o.minute, s: +o.second };
  }
  function utcOf(y, m, d, h, mi, s) { var dt = new Date(0); dt.setUTCFullYear(y, m - 1, d); dt.setUTCHours(h || 0, mi || 0, s || 0, 0); return dt.getTime(); }
  function offsetMin(t, z) { var p = parts(t, z); return Math.round((utcOf(p.y, p.m, p.d, p.h, p.mi, p.s) - Math.floor(t / 1000) * 1000) / 60000); }
  function localToUtc(y, m, d, h, mi, z) {
    var g = utcOf(y, m, d, h, mi, 0), t = g - offsetMin(g, z) * 60000;
    t = g - offsetMin(t, z) * 60000;
    return t;
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(t, z) { var p = parts(t, z); return p.y + '-' + pad(p.m) + '-' + pad(p.d); }
  function parseYmd(s) { var m = /^(-?\d{1,6})-(\d{2})-(\d{2})$/.exec(String(s || '')); if (!m) return null; var y = +m[1], mo = +m[2], d = +m[3]; if (mo < 1 || mo > 12 || d < 1 || d > 31) return null; var t = utcOf(y, mo, d); var c = new Date(t); if (c.getUTCDate() !== d) return null; return { y: y, m: mo, d: d }; }
  function addDays(s, n) { var p = parseYmd(s), t = utcOf(p.y, p.m, p.d) + n * DAY, dt = new Date(t); return dt.getUTCFullYear() + '-' + pad(dt.getUTCMonth() + 1) + '-' + pad(dt.getUTCDate()); }
  function dayStart(s, z) { var p = parseYmd(s); return localToUtc(p.y, p.m, p.d, 0, 0, z); }
  function daysInMonth(y, m) { var dt = new Date(0); dt.setUTCFullYear(y, m, 0); return dt.getUTCDate(); }

  // ---------- formatting ----------
  var LOC = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  var CLOCK_KEY = 'gtn-astro-clock';
  var clock = 'auto'; try { clock = localStorage.getItem(CLOCK_KEY) || 'auto'; } catch (e) {}
  var TF = {};
  function tf(z, sec) {
    var k = z + '|' + (sec ? 1 : 0) + '|' + clock;
    if (TF[k]) return TF[k];
    var o = { timeZone: z, hour: 'numeric', minute: '2-digit' }; if (sec) o.second = '2-digit';
    if (clock === '24') o.hourCycle = 'h23'; else if (clock === '12') o.hour12 = true;
    var f; try { f = new Intl.DateTimeFormat(LOC, o); } catch (e) { f = new Intl.DateTimeFormat('en', o); }
    var hc = f.resolvedOptions().hourCycle; // 24-hour clocks read best as 04:43, not 4:43
    if (hc === 'h23' || hc === 'h24') { o.hour = '2-digit'; o.hourCycle = 'h23'; delete o.hour12; try { f = new Intl.DateTimeFormat(LOC, o); } catch (e) { f = new Intl.DateTimeFormat('en', o); } }
    return (TF[k] = f);
  }
  function fmtTime(t, z, sec) { if (t == null || isNaN(t)) return '—'; return tf(z, sec).format(new Date(t)); }
  function dayDiff(t, s, z) { if (t == null) return 0; var a = parseYmd(ymd(t, z)), b = parseYmd(s); return Math.round((utcOf(a.y, a.m, a.d) - utcOf(b.y, b.m, b.d)) / DAY); }
  function fmtTimeOn(t, s, z) { // time plus "(next day)" when it falls on another date
    if (t == null) return '—';
    var d = dayDiff(t, s, z), x = fmtTime(t, z);
    return d === 0 ? x : x + (d === 1 ? ' (next day)' : d === -1 ? ' (day before)' : ' (' + (d > 0 ? '+' : '') + d + ' days)');
  }
  function fmtDate(s, opt) { var p = parseYmd(s); if (!p) return s; var o = opt || { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }; o.timeZone = 'UTC'; try { return new Intl.DateTimeFormat(LOC, o).format(new Date(utcOf(p.y, p.m, p.d, 12))); } catch (e) { return s; } }
  function fmtDateTime(t, z) { if (t == null || isNaN(t)) return '—'; return fmtDate(ymd(t, z)) + ', ' + fmtTime(t, z); }
  function fmtDur(ms, sec) {
    if (ms == null || isNaN(ms)) return '—';
    var neg = ms < 0; ms = Math.abs(ms);
    var tot = Math.round(ms / (sec ? 1000 : 60000)), h, m, s;
    if (sec) { h = Math.floor(tot / 3600); m = Math.floor(tot / 60) % 60; s = tot % 60; return (neg ? '−' : '') + (h ? h + ' h ' : '') + (h || m ? m + ' min ' : '') + s + ' s'; }
    h = Math.floor(tot / 60); m = tot % 60;
    return (neg ? '−' : '') + h + ' h ' + pad(m) + ' min';
  }
  var C16 = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  function compass(deg) { return C16[Math.round((((deg % 360) + 360) % 360) / 22.5) % 16]; }
  function fmtAz(deg) { if (deg == null || isNaN(deg)) return '—'; return Math.round(((deg % 360) + 360) % 360) + '° ' + compass(deg); }
  function fmtLat(v) { return Math.abs(v).toFixed(2) + '° ' + (v >= 0 ? 'N' : 'S'); }
  function fmtLon(v) { return Math.abs(v).toFixed(2) + '° ' + (v >= 0 ? 'E' : 'W'); }
  function zoneShort(z, t) { try { var p = new Intl.DateTimeFormat('en', { timeZone: z, timeZoneName: 'shortOffset' }).formatToParts(new Date(t || Date.now())); for (var i = 0; i < p.length; i++) if (p[i].type === 'timeZoneName') return p[i].value; } catch (e) {} var o = offsetMin(t || Date.now(), z); return 'GMT' + (o >= 0 ? '+' : '−') + Math.floor(Math.abs(o) / 60) + (Math.abs(o) % 60 ? ':' + pad(Math.abs(o) % 60) : ''); }
  function setClock(v) { clock = v === '12' || v === '24' ? v : 'auto'; TF = {}; try { localStorage.setItem(CLOCK_KEY, clock); } catch (e) {} }

  // ---------- astronomy ----------
  function observer(p) { return new A.Observer(p.lat, p.lon, 0); }
  function tm(x) { return x ? x.date.getTime() : null; }
  function altAz(body, t, p) {
    var o = observer(p), eq = A.Equator(body, new Date(t), o, true, true), h = A.Horizon(new Date(t), o, eq.ra, eq.dec, 'normal');
    return { alt: h.altitude, az: h.azimuth, ra: eq.ra, dec: eq.dec, dist: eq.dist };
  }
  function safe(f) { try { return f(); } catch (e) { return null; } }
  function sunDay(p, s) {
    var o = observer(p), z = p.zone, t0 = dayStart(s, z), t1 = dayStart(addDays(s, 1), z);
    var ne = A.SearchHourAngle('Sun', o, 0, new Date(t0), +1);
    if (ne.time.date.getTime() >= t1) ne = A.SearchHourAngle('Sun', o, 0, new Date(t1), -1);
    var noon = ne.time.date.getTime(), noonAlt = ne.hor.altitude;
    var lo = A.SearchHourAngle('Sun', o, 12, new Date(noon), +1), lowAlt = lo.hor.altitude;
    var lo0 = A.SearchHourAngle('Sun', o, 12, new Date(noon), -1), lowAlt0 = lo0.hor.altitude;
    var N = new Date(noon);
    function back(alt) { return safe(function () { return tm(alt == null ? A.SearchRiseSet('Sun', o, +1, N, -0.6) : A.SearchAltitude('Sun', o, +1, N, -0.6, alt)); }); }
    function fwd(alt) { return safe(function () { return tm(alt == null ? A.SearchRiseSet('Sun', o, -1, N, 0.6) : A.SearchAltitude('Sun', o, -1, N, 0.6, alt)); }); }
    var r = { date: s, t0: t0, t1: t1, noon: noon, noonAlt: noonAlt, lowAlt: lowAlt, lowAlt0: lowAlt0, place: p };
    r.rise = back(null); r.set = fwd(null);
    r.civil = [back(-6), fwd(-6)]; r.naut = [back(-12), fwd(-12)]; r.astro = [back(-18), fwd(-18)];
    r.gold = [back(-4), back(6), fwd(6), fwd(-4)]; // morning start, morning end, evening start, evening end
    r.blue = [back(-6), back(-4), fwd(-4), fwd(-6)];
    if (r.rise != null && r.set != null) { r.state = 'normal'; r.dayLen = r.set - r.rise; }
    else if (r.rise == null && r.set == null) { r.state = noonAlt > -0.27 ? 'up' : 'down'; r.dayLen = r.state === 'up' ? (t1 - t0) : 0; }
    else { r.state = r.rise == null ? 'noRise' : 'noSet'; r.dayLen = upTime(o, t0, t1); }
    return r;
  }
  function upTime(o, t0, t1) { // minutes the Sun is up between t0 and t1, by sampling (used only on rare polar edge days)
    var up = 0, step = 300000;
    for (var t = t0 + step / 2; t < t1; t += step) { var eq = A.Equator('Sun', new Date(t), o, true, true), h = A.Horizon(new Date(t), o, eq.ra, eq.dec, 'normal'); if (h.altitude > -0.833) up += step; }
    return up;
  }
  function riseSetIn(body, p, t0, t1) { // all rises and sets of a body in [t0, t1)
    var o = observer(p), out = [];
    [+1, -1].forEach(function (dir) {
      var t = t0;
      for (var k = 0; k < 3; k++) {
        var r = safe(function () { return A.SearchRiseSet(body, o, dir, new Date(t), (t1 - t) / DAY); });
        if (!r) break; var x = r.date.getTime(); if (x >= t1) break;
        out.push({ t: x, dir: dir }); t = x + 60000;
      }
    });
    return out.sort(function (a, b) { return a.t - b.t; });
  }
  function moonDay(p, s) {
    var z = p.zone, t0 = dayStart(s, z), t1 = dayStart(addDays(s, 1), z), ev = riseSetIn('Moon', p, t0, t1), o = observer(p);
    var rise = null, set = null; ev.forEach(function (e) { if (e.dir > 0 && rise == null) rise = e.t; if (e.dir < 0 && set == null) set = e.t; });
    var tr = safe(function () { return A.SearchHourAngle('Moon', o, 0, new Date(t0), +1); }), transit = null, transitAlt = null;
    if (tr && tr.time.date.getTime() < t1) { transit = tr.time.date.getTime(); transitAlt = tr.hor.altitude; }
    var a0 = altAz('Moon', t0, p).alt;
    return { rise: rise, set: set, transit: transit, transitAlt: transitAlt, events: ev, upAtStart: a0 > -0.3, state: ev.length ? 'normal' : (a0 > -0.3 ? 'up' : 'down') };
  }
  var SYN = 29.530588853;
  var PHASES = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
  function phaseName(e) { // e = Moon-Sun ecliptic longitude difference 0..360
    if (e < 6.5 || e > 353.5) return 'New Moon';
    if (e < 83.5) return 'Waxing Crescent'; if (e < 96.5) return 'First Quarter'; if (e < 173.5) return 'Waxing Gibbous';
    if (e < 186.5) return 'Full Moon'; if (e < 263.5) return 'Waning Gibbous'; if (e < 276.5) return 'Last Quarter';
    return 'Waning Crescent';
  }
  function moonAt(t) {
    var e = A.MoonPhase(new Date(t)), il = A.Illumination('Moon', new Date(t));
    var nm = safe(function () { return A.SearchMoonPhase(0, new Date(t - 31 * DAY), 31.5); }), prev = tm(nm);
    if (prev != null) { var nx = safe(function () { return A.SearchMoonPhase(0, new Date(prev + DAY), 31); }); if (nx && nx.date.getTime() <= t) prev = nx.date.getTime(); }
    return { elong: e, frac: il.phase_fraction, mag: il.mag, age: prev != null ? (t - prev) / DAY : e / 360 * SYN, prevNew: prev, name: phaseName(e), waxing: e < 180, distKm: A.GeoMoon(new Date(t)).Length() * A.KM_PER_AU };
  }
  function quarters(from, n) { var out = [], q = A.SearchMoonQuarter(new Date(from)); for (var i = 0; i < n; i++) { out.push({ q: q.quarter, name: PHASES[q.quarter], t: q.time.date.getTime() }); q = A.NextMoonQuarter(q); } return out; }

  // ---------- places ----------
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[ʻʼ’'`.,()\-_/]+/g, ' ').replace(/\s+/g, ' ').trim(); }
  CITIES.forEach(function (c) { c.k = norm(c.name); c.kc = norm(c.country); c.kz = norm(c.zone.replace(/_/g, ' ')); });
  function dist(a, b, c, d) { var r = Math.PI / 180, x = Math.sin((c - a) * r / 2), y = Math.sin((d - b) * r / 2), h = x * x + Math.cos(a * r) * Math.cos(c * r) * y * y; return 12742 * Math.asin(Math.min(1, Math.sqrt(h))); }
  function nearest(lat, lon) { var best = null, bd = 1e9; CITIES.forEach(function (c) { var d = dist(lat, lon, c.lat, c.lon); if (d < bd) { bd = d; best = c; } }); return best ? { city: best, km: bd } : null; }
  function search(q) {
    var k = norm(q); if (!k) return [];
    var sc = [];
    CITIES.forEach(function (c) {
      var s = c.k === k ? 0 : c.k.indexOf(k) === 0 ? 1 : (' ' + c.k).indexOf(' ' + k) !== -1 ? 2 : c.kc.indexOf(k) === 0 ? 3 : c.k.indexOf(k) !== -1 ? 4 : c.kc.indexOf(k) !== -1 ? 5 : c.kz.indexOf(k) !== -1 ? 6 : -1;
      if (s >= 0) sc.push([s, c]);
    });
    return sc.sort(function (a, b) { return a[0] - b[0] || a[1].name.localeCompare(b[1].name); }).slice(0, 8).map(function (x) { return x[1]; });
  }
  function parseCoords(q) {
    var m = /^\s*(-?\d+(?:[.,]\d+)?)\s*°?\s*([NS])?\s*[,;\s]\s*(-?\d+(?:[.,]\d+)?)\s*°?\s*([EW])?\s*$/i.exec(q || '');
    if (!m) return null;
    var lat = +m[1].replace(',', '.'), lon = +m[3].replace(',', '.');
    if (m[2] && /s/i.test(m[2])) lat = -Math.abs(lat); if (m[4] && /w/i.test(m[4])) lon = -Math.abs(lon);
    if (!(lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180)) return null;
    return { lat: lat, lon: lon };
  }
  function defaultPlace() {
    var c = null;
    var zn = norm(BZ.split('/').pop().replace(/_/g, ' '));
    for (var i = 0; i < CITIES.length; i++) if (CITIES[i].zone === BZ && (CITIES[i].k === zn || !c)) c = CITIES[i];
    if (!c) { var now = Date.now(), off = offsetMin(now, BZ); for (var j = 0; j < CITIES.length; j++) if (offsetMin(now, CITIES[j].zone) === off) { c = CITIES[j]; break; } }
    if (!c) c = CITIES.filter(function (x) { return x.name === 'London'; })[0];
    return { name: c.name, country: c.country, lat: c.lat, lon: c.lon, zone: c.zone, src: 'guess' };
  }
  function cleanPlace(o) {
    if (!o || typeof o !== 'object') return null;
    var lat = +o.lat, lon = +o.lon;
    if (!(lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) || !validZone(o.zone)) return null;
    return { name: String(o.name || 'Custom place').slice(0, 80), country: String(o.country || '').slice(0, 60), lat: lat, lon: lon, zone: o.zone, src: String(o.src || 'manual') };
  }
  function placeLabel(p) { return p.name + (p.country ? ', ' + p.country : ''); }
  var KEYS = ['gtn-sunrise-sunset', 'gtn-moon-phase', 'gtn-night-sky-map'];
  function loadPlace(key) {
    var all = [key].concat(KEYS.filter(function (k) { return k !== key; }));
    for (var i = 0; i < all.length; i++) { try { var o = JSON.parse(localStorage.getItem(all[i]) || 'null'); var p = o && cleanPlace(o.place); if (p) return p; } catch (e) {} }
    return defaultPlace();
  }
  function savePlace(key, p, extra) { try { var o = JSON.parse(localStorage.getItem(key) || 'null') || {}; o.place = p; if (extra) for (var k in extra) o[k] = extra[k]; localStorage.setItem(key, JSON.stringify(o)); } catch (e) {} }
  function zoneList() {
    var z = []; try { if (Intl.supportedValuesOf) z = Intl.supportedValuesOf('timeZone'); } catch (e) {}
    var set = {}; z.concat(CITIES.map(function (c) { return c.zone; }), [BZ, 'UTC']).forEach(function (x) { if (validZone(x)) set[x] = 1; });
    return Object.keys(set).sort();
  }

  var CSS = '.axp{margin:0 0 14px}.axp .axp-row{display:flex;flex-wrap:wrap;gap:8px;align-items:end}.axp .axp-q{position:relative;flex:1 1 240px;min-width:0}' +
    '.axp label{display:block;font-weight:600;font-size:14px;margin:0 0 4px}.axp input,.axp select{width:100%;min-width:0;box-sizing:border-box}' +
    '.axp .axp-list{position:absolute;z-index:30;left:0;right:0;top:100%;margin:4px 0 0;padding:4px;list-style:none;background:var(--surface);border:1px solid var(--line);border-radius:10px;box-shadow:var(--shadow,0 8px 22px rgba(0,0,0,.15));max-height:320px;overflow:auto}' +
    '.axp .axp-list li{padding:9px 10px;border-radius:8px;cursor:pointer;display:flex;justify-content:space-between;gap:8px;font-size:15px}.axp .axp-list li small{color:var(--muted);white-space:nowrap;font-size:12.5px}' +
    '.axp .axp-list li[aria-selected="true"],.axp .axp-list li:hover{background:var(--accent-soft)}.axp .axp-list .none{cursor:default;color:var(--muted)}.axp .axp-list .none:hover{background:none}' +
    '.axp .axp-geo{min-height:44px;flex:0 0 auto}.axp details{margin:8px 0 0}.axp summary{cursor:pointer;color:var(--accent);font-weight:600;font-size:14.5px;padding:4px 0}' +
    '.axp .axp-man{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin:8px 0 0;align-items:end}.axp .axp-man .btn{min-height:44px}' +
    '.axp .axp-cur{margin:10px 0 0;font-size:14.5px;color:var(--muted);overflow-wrap:anywhere}.axp .axp-cur b{color:var(--ink)}.axp .msg{margin-top:6px}' +
    '.axp .axp-clock{display:flex;gap:6px;align-items:center;font-size:14px;color:var(--muted);margin:8px 0 0;flex-wrap:wrap}.axp .axp-clock select{width:auto}';
  function injectCss() { if (document.getElementById('axpCss')) return; var st = document.createElement('style'); st.id = 'axpCss'; st.textContent = CSS; document.head.appendChild(st); }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  // A place picker: search the offline city list, use this device's location, or type coordinates.
  function placePicker(o) {
    injectCss();
    var box = o.box, id = o.id || 'axp', place = loadPlace(o.key), zones = null;
    box.classList.add('axp'); box.textContent = '';
    var row = el('div', 'axp-row'), qw = el('div', 'axp-q'), lab = el('label', null, 'Place'), q = el('input'), list = el('ul', 'axp-list'), geo = el('button', 'btn ghost axp-geo', 'Use my location');
    lab.htmlFor = id + 'Q'; q.id = id + 'Q'; q.type = 'search'; q.setAttribute('data-nomemo', ''); q.autocomplete = 'off'; q.placeholder = 'Search a city or country, or type 51.5, -0.12'; q.setAttribute('role', 'combobox'); q.setAttribute('aria-expanded', 'false'); q.setAttribute('aria-controls', id + 'L'); q.setAttribute('aria-autocomplete', 'list');
    list.id = id + 'L'; list.setAttribute('role', 'listbox'); list.hidden = true; geo.type = 'button';
    qw.appendChild(lab); qw.appendChild(q); qw.appendChild(list); row.appendChild(qw); row.appendChild(geo); box.appendChild(row);
    var det = el('details'), sum = el('summary', null, 'Enter latitude, longitude and time zone'), man = el('div', 'axp-man');
    function fld(label, inp) { var d = el('div'), l = el('label', null, label); l.htmlFor = inp.id; d.appendChild(l); d.appendChild(inp); man.appendChild(d); return inp; }
    var la = el('input'); la.id = id + 'Lat'; la.type = 'number'; la.step = 'any'; la.min = '-90'; la.max = '90'; la.inputMode = 'decimal'; la.setAttribute('data-nomemo', ''); la.placeholder = 'e.g. -33.87';
    var lo = el('input'); lo.id = id + 'Lon'; lo.type = 'number'; lo.step = 'any'; lo.min = '-180'; lo.max = '180'; lo.inputMode = 'decimal'; lo.setAttribute('data-nomemo', ''); lo.placeholder = 'e.g. 151.21';
    var zs = el('select'); zs.id = id + 'Zone'; zs.setAttribute('data-nomemo', '');
    fld('Latitude (north +, south −)', la); fld('Longitude (east +, west −)', lo); fld('Time zone', zs);
    var ap = el('button', 'btn', 'Use these'); ap.type = 'button'; var apw = el('div'); apw.appendChild(ap); man.appendChild(apw);
    det.appendChild(sum); det.appendChild(man); box.appendChild(det);
    var cur = el('p', 'axp-cur'), msg = el('p', 'msg'); msg.setAttribute('role', 'status'); box.appendChild(cur); box.appendChild(msg);
    var ck = el('div', 'axp-clock'), ckl = el('label', null, 'Clock'), cks = el('select'); cks.id = id + 'Clock'; cks.setAttribute('data-nomemo', ''); ckl.htmlFor = cks.id; ckl.style.cssText = 'display:inline;font-weight:400;margin:0';
    [['auto', 'Like my device'], ['24', '24-hour'], ['12', '12-hour (AM/PM)']].forEach(function (x) { var op = el('option', null, x[1]); op.value = x[0]; cks.appendChild(op); }); cks.value = clock;
    ck.appendChild(ckl); ck.appendChild(cks); box.appendChild(ck);
    function fillZones() { if (zones) return; zones = zoneList(); zones.forEach(function (z) { var op = el('option', null, z.replace(/_/g, ' ')); op.value = z; zs.appendChild(op); }); }
    function say(cls, t) { msg.className = 'msg' + (cls ? ' ' + cls : ''); msg.textContent = t || ''; }
    function show() {
      cur.textContent = ''; cur.appendChild(document.createTextNode('Showing ')); cur.appendChild(el('b', null, placeLabel(place)));
      cur.appendChild(document.createTextNode(' · ' + fmtLat(place.lat) + ', ' + fmtLon(place.lon) + ' · ' + place.zone.replace(/_/g, ' ') + ' (' + zoneShort(place.zone) + ')'));
    }
    function set(p, quiet) { place = p; savePlace(o.key, p); show(); if (!quiet && o.onChange) o.onChange(p); }
    var items = [], sel = -1;
    function close() { list.hidden = true; q.setAttribute('aria-expanded', 'false'); sel = -1; }
    function pick(c) {
      if (c.coords) { fillZones(); det.open = true; la.value = c.lat; lo.value = c.lon; var n = nearest(c.lat, c.lon); zs.value = n && n.km < 600 ? n.city.zone : BZ; zoneTouched = false; close(); q.value = ''; say('', 'Check the time zone below, then press Use these.'); return; }
      set({ name: c.name, country: c.country, lat: c.lat, lon: c.lon, zone: c.zone, src: 'city' }); q.value = ''; close(); say('ok', 'Place set to ' + c.name + '.');
    }
    function render() {
      list.textContent = ''; var v = q.value.trim();
      if (!v) { close(); return; }
      var cc = parseCoords(v); items = search(v);
      if (cc) items.unshift({ coords: true, lat: cc.lat, lon: cc.lon, name: 'Use ' + fmtLat(cc.lat) + ', ' + fmtLon(cc.lon), country: '' });
      if (!items.length) { var li = el('li', 'none', 'No city found. Try a bigger nearby city, or enter latitude and longitude below.'); list.appendChild(li); }
      items.forEach(function (c, i) {
        var li = el('li'); li.id = id + 'o' + i; li.setAttribute('role', 'option'); li.setAttribute('aria-selected', i === sel ? 'true' : 'false');
        li.appendChild(el('span', null, c.coords ? c.name : c.name + ', ' + c.country)); if (!c.coords) li.appendChild(el('small', null, zoneShort(c.zone)));
        li.addEventListener('mousedown', function (e) { e.preventDefault(); }); li.addEventListener('click', function () { pick(c); });
        list.appendChild(li);
      });
      list.hidden = false; q.setAttribute('aria-expanded', 'true');
    }
    q.addEventListener('input', function () { sel = -1; render(); });
    q.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { if (!items.length) return; e.preventDefault(); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; render(); var s = list.children[sel]; if (s) { s.scrollIntoView({ block: 'nearest' }); q.setAttribute('aria-activedescendant', s.id); } }
      else if (e.key === 'Enter') { e.preventDefault(); if (items.length && q.value.trim()) pick(items[sel >= 0 ? sel : 0]); }
      else if (e.key === 'Escape') close();
    });
    q.addEventListener('blur', function () { setTimeout(function () { if (document.activeElement !== q) close(); }, 150); });
    var zoneTouched = false;
    zs.addEventListener('change', function () { zoneTouched = true; });
    function guessZone() { if (zoneTouched) return; var a = parseFloat(la.value), b = parseFloat(lo.value); if (isNaN(a) || isNaN(b)) return; var n = nearest(a, b); zs.value = n && n.km < 600 ? n.city.zone : (zs.value || BZ); }
    la.addEventListener('input', guessZone); lo.addEventListener('input', guessZone);
    det.addEventListener('toggle', function () { if (det.open) { fillZones(); if (la.value === '') { la.value = place.lat; lo.value = place.lon; zs.value = place.zone; } } });
    ap.addEventListener('click', function () {
      var a = parseFloat(String(la.value).replace(',', '.')), b = parseFloat(String(lo.value).replace(',', '.'));
      if (isNaN(a) || a < -90 || a > 90) { say('bad', 'Latitude must be a number from −90 (South Pole) to 90 (North Pole).'); la.focus(); return; }
      if (isNaN(b) || b < -180 || b > 180) { say('bad', 'Longitude must be a number from −180 to 180 (west is negative).'); lo.focus(); return; }
      var z = zs.value || BZ, n = nearest(a, b);
      set({ name: n && n.km < 40 ? 'Near ' + n.city.name : 'Custom place', country: n && n.km < 40 ? n.city.country : '', lat: a, lon: b, zone: z, src: 'manual' });
      say('ok', 'Using ' + fmtLat(a) + ', ' + fmtLon(b) + ' with the ' + z.replace(/_/g, ' ') + ' time zone.');
    });
    geo.addEventListener('click', function () {
      if (!navigator.geolocation) { say('bad', 'This browser cannot share your location. Search for your city instead.'); return; }
      if (W.isSecureContext === false) { say('bad', 'Location only works on a secure (https) page. Search for your city instead.'); return; }
      geo.disabled = true; say('', 'Asking for your location… (it stays on this device)');
      navigator.geolocation.getCurrentPosition(function (pos) {
        geo.disabled = false;
        var a = Math.round(pos.coords.latitude * 1e4) / 1e4, b = Math.round(pos.coords.longitude * 1e4) / 1e4, n = nearest(a, b);
        set({ name: n && n.km < 60 ? 'My location (near ' + n.city.name + ')' : 'My location', country: n && n.km < 60 ? n.city.country : '', lat: a, lon: b, zone: BZ, src: 'gps' });
        say('ok', 'Using your location. Your time zone is taken from this device (' + BZ.replace(/_/g, ' ') + ').');
      }, function (err) {
        geo.disabled = false;
        say('bad', err && err.code === 1 ? 'Location permission was not given. You can search for your city, or allow location for this site in your browser settings.' : err && err.code === 3 ? 'Finding your location took too long. Try again outdoors, or search for your city.' : 'Your location could not be found. Search for your city instead.');
      }, { enableHighAccuracy: false, timeout: 15000, maximumAge: 600000 });
    });
    cks.addEventListener('change', function () { setClock(cks.value); if (o.onChange) o.onChange(place); });
    show();
    return { get: function () { return place; }, set: function (p) { var c = cleanPlace(p); if (c) set(c); }, say: say };
  }

  W.AX = {
    A: A, DAY: DAY, CITIES: CITIES, BZ: BZ, validZone: validZone, parts: parts, offsetMin: offsetMin, localToUtc: localToUtc, ymd: ymd, parseYmd: parseYmd, addDays: addDays, dayStart: dayStart, pad: pad, utcOf: utcOf,
    fmtTime: fmtTime, fmtTimeOn: fmtTimeOn, dayDiff: dayDiff, fmtDate: fmtDate, fmtDateTime: fmtDateTime, fmtDur: fmtDur, fmtAz: fmtAz, compass: compass, fmtLat: fmtLat, fmtLon: fmtLon, zoneShort: zoneShort, setClock: setClock, clock: function () { return clock; },
    observer: observer, altAz: altAz, sunDay: sunDay, moonDay: moonDay, moonAt: moonAt, quarters: quarters, phaseName: phaseName, riseSetIn: riseSetIn, SYN: SYN, PHASES: PHASES,
    nearest: nearest, search: search, parseCoords: parseCoords, defaultPlace: defaultPlace, cleanPlace: cleanPlace, placeLabel: placeLabel, daysInMonth: daysInMonth, loadPlace: loadPlace, savePlace: savePlace, placePicker: placePicker, el: el
  };
})(window);
