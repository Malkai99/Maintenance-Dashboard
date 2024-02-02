const b={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},v=(e,t,a)=>{let n;const o=b[e];return typeof o=="string"?n=o:t===1?n=o.one:n=o.other.replace("{{count}}",t.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"en "+n:"hace "+n:n};function c(e){return(t={})=>{const a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const y={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},P={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},w={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:c({formats:y,defaultWidth:"full"}),time:c({formats:P,defaultWidth:"full"}),dateTime:c({formats:w,defaultWidth:"full"})},p={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},W={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},M=(e,t,a,n)=>t.getHours()!==1?W[e]:p[e];function m(e){return(t,a)=>{const n=a!=null&&a.context?String(a.context):"standalone";let o;if(n==="formatting"&&e.formattingValues){const r=e.defaultFormattingWidth||e.defaultWidth,i=a!=null&&a.width?String(a.width):r;o=e.formattingValues[i]||e.formattingValues[r]}else{const r=e.defaultWidth,i=a!=null&&a.width?String(a.width):e.defaultWidth;o=e.values[i]||e.values[r]}const d=e.argumentCallback?e.argumentCallback(t):t;return o[d]}}const j={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},k={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},C={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},x={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},D={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},H={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},S=(e,t)=>Number(e)+"º",V={ordinalNumber:S,era:m({values:j,defaultWidth:"wide"}),quarter:m({values:k,defaultWidth:"wide",argumentCallback:e=>Number(e)-1}),month:m({values:C,defaultWidth:"wide"}),day:m({values:x,defaultWidth:"wide"}),dayPeriod:m({values:D,defaultWidth:"wide",formattingValues:H,defaultFormattingWidth:"wide"})};function z(e){return(t,a={})=>{const n=t.match(e.matchPattern);if(!n)return null;const o=n[0],d=t.match(e.parsePattern);if(!d)return null;let r=e.valueCallback?e.valueCallback(d[0]):d[0];r=a.valueCallback?a.valueCallback(r):r;const i=t.slice(o.length);return{value:r,rest:i}}}function l(e){return(t,a={})=>{const n=a.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],d=t.match(o);if(!d)return null;const r=d[0],i=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(i)?T(i,u=>u.test(r)):F(i,u=>u.test(r));let s;s=e.valueCallback?e.valueCallback(h):h,s=a.valueCallback?a.valueCallback(s):s;const f=t.slice(r.length);return{value:s,rest:f}}}function F(e,t){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&t(e[a]))return a}function T(e,t){for(let a=0;a<e.length;a++)if(t(e[a]))return a}const A=/^(\d+)(º)?/i,L=/\d+/i,X={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},N={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},R={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},E={any:[/1/i,/2/i,/3/i,/4/i]},O={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},Y={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},q={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},_={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},I={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},Q={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},K={ordinalNumber:z({matchPattern:A,parsePattern:L,valueCallback:function(e){return parseInt(e,10)}}),era:l({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),quarter:l({matchPatterns:R,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any",valueCallback:e=>e+1}),month:l({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),day:l({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:I,defaultMatchWidth:"any",parsePatterns:Q,defaultParseWidth:"any"})},B={code:"es",formatDistance:v,formatLong:g,formatRelative:M,localize:V,match:K,options:{weekStartsOn:1,firstWeekContainsDate:1}},G=B;export{G as e};