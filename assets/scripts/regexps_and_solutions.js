/* regular expressions/ questions to be answered: */ 
 const q1 = /(din k(ai|e)saa?( (gu(j|z)ar|jaa?) ?rahaa?)? h(e|ai))|(k(e|ai|ay)s(aa?|i|ee) (feel|mehs(u|oo)s) kar rahi h(o|e|ai)n?)/i, 
   q2 = /(who('?re|( \b\w\b \b\w\b)? are) you)|(h(o|ai|e)n? k(o|au)n (tum?|aa?p))/i, 
   q3 = /(who am I)|(my (info|bio))|(what( do)? you know about me)|((m(e|ai)n?|h(u|a)m) k(o|au)n h(u|oo|e|ai)n?)|((k(y|i)aa?( k(y|i)aa?)? jaa?nt(i|e)|jaa?nt(i|e) k(y|i)aa?( k(y|i)aa?)?) h(o|e|ai)n? ?(aa?p|tum?)? (h(u|a))?m(e|aa?)r(e|a(i|y)) baa?r(e|ai) m(ai|e)n?)/i,
   q4 = /(k(ai|e|ay)s(i|ee)( rahi)? h(o|e|ai)n?)|(how('?ve?| have)? you been)/i, 
   q5 = /((k(y|i)aa? naa?m h(e|ai)|naa?m (k(y|i)aa? h(e|ai)|bataa?o)) ?(aa?p|tum)? meraa?)|(^(my|mera) naa?me?$)/i, 
   q6 = /(k(y|i)aa? (bulaa?(u|oo|e|ai)n?|bulaa? sakt(aa?|i|e|ai)? h(u|oo|e|ai)n?) (m(e|ai)n?|h(u|a)m) (tumh(e|ai)n?|aa?p ?ko))|((k(y|i)aa? )?naa?m( k(y|i)aa?)? (he|hai) (tumhaa?raa?|aa?p ?kaa?))|((full|p(u|oo)raa?) naa?me?)/i, 
   q7 = /(is|was|will) (this|it|\d{4})( year)?( (going to )?be)? a leap year/i, 
   q8 = /mer(i|a) (jana?m ?din|saa?l ?giraa?|p(e|ai)daish kab?|birth ?(day|date|year))/i, 
   q9 = /(k(y|i)aa? (age|uma?r) h(e|ai|a?y) meri)|(uma?r bataa?( sakti h)?(o|e|ai)n? ?(tum?|aa?p)? meri)|((meri|my) (age|uma?r))/i, 
   q10 = /(kisi (o|au)r naa?me? (se|sa(i|y)) (bulaa?|pukaa?r)(o|e|ai)n?)|(meraa? naa?m dubaa?ra (puchi?y?en?|save (kar|kij)(i?y?e|(e|ai)n)))|((set a( new)?|change my) ?(nick)? ?name)/i, 
   q11 = 
   /(((change|resubmit) my|incorrect) (dob|bday|(birth|b(-)?)day))|((dob|bday|(birth|b(-)?)day) is incorrect)/i, 
   q12 = /(((m(e|ai)n?|h(u|a)m) (k(ai|e)s(aa?|i|ee) (laga|lagi)))|(ham (k(ai|e)se lage|pasand a(e|a?i|e))))|(pasand a(ya|a?i) (m(e|ai)n?|h(u|a)m) ((aa?p|tum) ?ko|tumh(e|ai)n?))|((m(e|ai)n?|h(u|a)m) ((aa?p|tum) ?ko|tumh(e|ai)n?) pasand a(ya|a?i|e|ay))/i, 
   q13 = 
   /(time ((batao|bataie)|(bataa?o )?k(y|i)aa? (hora?haa? )?(he|hai|hy)))|((current|local) (date and )?time)|(date today)|(time now)|(date and time)|(^(aa?j )?(k(y|i)aa?|k(o|au)n ?s(aa?|i|ee)?) (din|day|date|tar(i|ee)kh) (h(e|ai)$|th(aa?|i|ee)))/i, 
   q14 = /^(hi)|(hello)|(hey)|(h?ola)|(howdy)|(namas(hkar|t(e|ai)))|((as?)?salam ?(u|o)?( ala?(e|i)kum)?)$/i, 
   q15 = /tic( |-)?tac( |-)?toe/i, 
   q16 = /(temperature today)|(is it a (hot|rainy|cloudy|sunny) day today)|(weather)|(m(o|au)sam)|(a?aj k(e|ai)sa din (ra)?h(e|ai)(ga)?$)/i, 
   q17 = /^$/, 
   q18 = /(^calculator)|((open|ayesha?) ?(cal)?culator)|(calculate(?:bmi))/i, 
   q19 = 
   /(tts)|(speech engine)|(text to speech)|((e|text)?(-| )?book( to |2)audio(book)?)|((document|text) reader)/i, 
   q20 = /feedback/i, 
   q21 = /(todos?)|(reminders?)|(remind me to)|((bucket|shopping) list)|(mujh(e|ai) yaa?d dilaa?naa?)|(notes?)|(\btodo\b)/i, 
   q22 = /(music)|(songs?)|(jukebox)|(gaa?n(e|ay))/i, 
   q23 = /((weight|mass) conver(sion|ter))|((\b\d*\b )?((k?(ilo)?s?)?g(ram)?s?|pounds?|ounces?|oz) (to|and|in|ko|((equals|(is|are) equal to|=)( how many)?)|(baraa?bar h(e|ai)n?)))/i, 
   q24 = /(random games?)|(games)|(play( me)? a game)/i, 
   q25 = /(breakout)|(brick (game|breaker))/i, 
   q26 = /sodoku/i, 
   q27 = /(^(play( me)?|run|launch|execute|open) hangman)|((hollywood|word) game)/i, 
   q28 = /((ayesh)? ?((drums? ?)?beat) maker)|(piano)|(synth(esizer)?)/i, 
   q29 = /(rock|stone) papers? scissors?/i, 
   q30 = /(lyrics)|((encycl|lyric|wiki|ayesh)o?pedia)/i, 
   q31 = /((crypto)?currency)|(exchange rates?)|(\b\w\w\w\b to \b\w\w\w\b)/i, 
   q32 = /((what )?day of year( is it)?)|((aa?j )?saa?l ka k(o|au)n ?saa? din h(e|ai|a?y))|(saa?l ka din number)|(din number is saa?l ka)/i, 
   q33 = 
   /(is (this|it)( a)? week ?day (today|yet))|((is today|today is) a week ?day)/i, 
   q34 = /(is (this|it)( a)? week ?end (today|yet))|((is today|today is) a week ?end)|(k(y|i)aa?( aa?j)? (itwaa?r|haftaa?) (h(e|ai)|thaa?)( aa?j)?)/i, 
   q35 = /numbers? to roman/i, 
   q36 = /(\b\d*\b )?(mi|miles?) (to|and|in|me|mai|ko|((equals|(is|are) equal to|=)( how many)?)|(baraa?bar h(e|ai)n?( kit ?n(e|a(y|i)))) (km|kilomet(er|re))s?)?/i, 
   q37 = /(\b\d*\b )?k(ilo)?m(et(er|re))?s? (to|and|in|m(e|ai)|ko|((equals|(is|are) equal to|=)( how many)?)|(baraa?bar h(e|ai)n?( kit ?n(e|a(y|i)))) mi(les?)?)?/i, 
   q38 = /(what (date|day) was it yesterday)|((k|c)al (k(y|i)aa?|k(o|au)n ?s(aa?|i|ee)) (din|day|date|tar(i|ee)kh) (rah|th)(aa?|i|ee))/i, 
   q39 = /(what (date|day) (will it|is it (going to|gon(na)?)) be tomorrow)|((k|c)al (k(y|i)aa?|k(o|au)n ?s(aa?|i|ee)) (din|day|date|tar(i|ee)kh) ((ho|rah(e|ai)) ?g(aa?|i|ee))|(hon(e|ai) (jaa?rah|waa?l)(i|aa?) h(e|ai)))/i, 
   q40 = /(monopoly|k((o|au)n)? ?b(an(e|ai)ga)? ?c(rorepati)?)|(crorepati game)|(^crorepati$)|(board games)/i, 
   q41 = /(canvas(es)?)|((drawings?|arts?|paint(ings?)?|brush) (app|tool))|(((draw|paint)(ing)? karn(i|aa?|e))|((sketch|canvas|painting)(e?s)? (banaa?n(aa?|e|ai)|karnaa?)) ((chaa?ha?t(a(a|i|y)?|i|ee?) )?h(u|oo|e|ai)n?))/i, 
   q42 = /(audio (visuali(z|s)er|player))|(play local audio)|(soundjam)/i, 
   q43 = /((ayesh|t)ranslat(e|or))|(english to (hindi|urdu|chinese|german|spanish|arabic|french|italian|russian))|((hindi|urdu|arabic|spanish|russian|chinese|german) to english)/i, 
   q44 = /((ayesh ?)?dict(ionary)?)|(ayesh ?nary)|(english ?(lafz k(i|a))? m(eaning|atlab))/i, 
   q45 = /(^(execute|launch|play( me)?|run) (the )?mai?ze)|(the mai?ze game)/i, 
   q46 = /calendar/i, 
   q47 = /(world (time|clock|zones))|((time|world) ?zones)|(time around the world)|(time in \b\w+\b)|(\w+ (ka|m(e|ai)n?) time)/i, 
   q48 = /((image|pic(ture)?|photo) edit(or)?)|(ayesh('?d?| )?edit)/i, 
   q49 = /^voice ?(notes?|recorder)$/i, 
   q50 = /(smash cube|(box|slice|cube) game)/i, 
   q51 = /(percent(age)? calculat(or|e))|(calculate ?\b\d*\b percent(age)?)/i, 
   q52 = /temperature( units)? conver(sion|ter)/i, 
   q53 = 
   /(how to (cook|bake))|((k(e|ai)se pakaa?te|pakaa?te k(e|ai)se) h(e|ai)n?)|(k(e|ai)se paka((u|oo|e|ai)n?|ya))|(help me( with)? (cook|bake?)(ing)?)|(ingredients)/i, 
   q54 = 
   /(I'?( ?a)?m (anxious|tired|scared))|(help me (calm down|relax|with my anxiety))|(relaxer)|(thakk? (chuk|gay?)(aa?|i|e) h(u|oo|ai|e)n? (m(e|ai)n?|h(u|a)m))|((mer|h(u|a)maa?r)(a?i|e) (lag|(f|ph)at)(a?i|e) pa(r|d)(a?i|e) h(e|ai)n?)/i, 
   q55 = 
   /(new year countdown)|(((days|time)( left)? (un)?till?|(what time|when) is) (new year|20\d\d))|((new year|(year )?20\d\d) (kab|kis time|kitna d(oo|u)r|m(e|ai)n? kit ?n(aa?|i) (time|der)) h(e|ai))/i, 
   q56 = /(typing game)|((open|run|launch|play( me)?) speed( |-)?typer)/i, 
   q57 = 
   /((expenses?|budgets?|wages?|incomes?|bills?|money) (tracker|calculator))|(track my (budgets?|wages?|bills?|incomes?|expenses?|(pocket )?money))/i, 
   q58 = /(stop ?watch)|(timer)|(counter ?clock)|(^count ?down$)|(^ulti ginti$)|((calculate )?date differences?)/i, 
   q59 = /(play save ayesha)|(^save ayesha( (play|chalaa?(o|na|(e|ai)n?)))?$)|((space|rock(et)?|meteor) game)/i, 
   q60 = 
   /((loan|mortgage) (calculator|payment))|(calculate( my)? (loan|mortgage))|(how much (do )?(I|people) owe)|(l(o|au)gon? k(a(a|i)?|e) kitn(a(a|i)?|e) kar(z|j)(a(a|i)?|e) h(e|ai)n?)|(mera kar(j|z)a)|((m(e|ai)n?|h(u|a)m) kar(j|z)(i|ee| ?dar) h(u|oo|e|ai)n?)/i, 
   q61 = /(quotes?|shaa?(ya|i)ri(y?aa?n?)?|a(q|k)waa?l)/i, 
   q62 = /memory (game|test)/i, 
   q63 = /(calo(ries? )?track(er| karo))|(track(( of)? (my|karo meri))? calories)/i, 
   q64 = /jokes?|humor/i, 
   q65 = /(fotoflick)|(puzzle game)|((photo|picture) puzzle)/i, 
   q66 = 
   /((motivate|inspire) (me|karo (h(u|a)m(e|ai)n?|mujh(e|ai))))|(I'?( ?a)?m demotivated)|(motivat(ional|ing) app)/i, 
   q67 = /((space ?(X|station)|nasa) (data|live))|(live( outer)? space)/i, 
   q68 = /(snap ?shots)|(landscapes)|((wall|ayesha?) ?papers?)|((kuch|some) (photos|pictures|images))/i, 
   q69 = /(features)|((e|ai)sa kya h(e|ai) (aa?p|tu(m|jh)|tere) ?m(e|ai))/i, 
   q70 = /(trivia)|(quiz)|(questionnares)/i, 
   q71 = /(ratings? for( tv)? (series|serials?))|((tv )?series app)|(yo ?movies)/i, 
   q72 = 
   /((movies?'? (cast|ratings?))|(ratings? (for|of) movies?))|(movies? app)/i, 
   q73 = /(day (planner|scheduler))|((plan|schedule)( my)? day)/i, 
   q74 = /(some advi(c|s)e)|(advi(c|s)e generator)|(proverbs)|(quotes?)/i, 
   q75 = /(giphy)|(ayesha? ?gifs)|(^gifs$)|((random|love|some) gifs)/i, 
   q76 = 
   /(pass(code|word|phrase) (generat(e|or)|chahi?y?e))|(random pass(code|word))/i, 
   q77 = /the (logic game|constructor)/i, 
   q78 = 
   /(fisave)|(net ?worth track(er|ing))|(track (my )?net ?worth)|((my|meri) savings)|(mer(e|ay) p(e|ai)s(e|a?y) calculate karo)|(^mer(e|ay) p(e|ai)s(e|a?y)$)/i, 
   q79 = /(analog|physical|live|real(( |-)life)?) clock/i, 
   q80 = /(ba(r|ll) game)|(rising bars)/i, 
   q81 = /((units?|\bmet(er|re)s?\b|f(oo|ee)t|area|minutes?|seconds?|hours?|time|measure|°?(c(elsius|entigrade)?|f(ahrenheit)?|k(elvin)?)) (to|conver(sion|ter)))|(to (\bmet(er|re)s?\b|f(oo|ee)t|minutes?|seconds?|hours?|time|measure|°?(c(elsius|entigrade)?|f(ahrenheit)?|k(elvin)?)))/i, 
   q82 = /(^game of (adventure|dragon)s?$)|((adventur(ous|e)|dragon|dinosaur|city|castle|battle) game)/i, 
   q83 = /(my( fave?(orite)?)? ?books?'? ?list)|(books? (in|to) my wishlist)/i, 
   q84 = /(math flash ?cards)|((arithmetic|math) game)/i, 
   q85 = /((files?|images?|content) (compress|zip)((o|e)r|ion)?)|((win|7) ?(zip|rar))|((Ayesha?)? ?(zipp|archiv)er)/i, 
   q86 = /((ayesha? ?)?ludo)|(board game)/i, 
   q87 = 
   /(book|pdf|kitaa?b) (read kar ?k(e|ai)|pa(r|d)h? ?k(e|ai)) (do|d(ai|e)n?|bataa?(o|(e|ai)n?)|de sakt(e|i) h(o|(e|ai)n?))|((pdf|book) (viewer|reader))/i, 
   q88 = 
   /(you|ayesha?) ?tube/i, 
   q89 = /truth or dare/i, 
   q90 = /metronome/i, 
   q91 = /your? licen(s|c)ed?/i, 
   q92 = /(kis ?n(e|ai) (banaa?ya|create|develop kiy?aa?))|((I )?like (yo)?u)|(you( a|')?re( my)? (cute|sweet(ie)?|lovely|sexy|funny|pyaa?ri|adorable|favou?rite))|((((k(y|i)aa? (tu|to)|acc?hi|ba(d|r)hiy?aa?|(z|j)abardast|alag hi|pyaari?) ch(i|ee)j)|(pyaa?ri|cute|sweet|funny|lovely|sexy|acc?hi|ba(d|r)hiy?a|(z|j)abardast|kaa?bi?l ?(e ?)?tar(ee|i)f) ho))|((tum?|aa?p) ?h(o|e|ai)n? (pyari|cute|sweet|sexy|acc?hi|ba(d|r)hiy?a|(z|j)abardast|kaa?bi?l ?(e ?)?tar(ee|i)f|tar(i|ee)f k(e|i|a(i|y)) kaa?bil))|(ku(r|d)i (b|w)add?i (soni?(ye| h(e|ai))|changi))/i,
   q93 = /((I )?love (yo)?u)|((m(e|ai)n?|h(u|a)m) (aa?p|tum|tere) ?(ko|se|sa(y|i)) (chaha?t(aa?|a?i|e)|pyaa?r kart(aa?|i|e)) h(u|oo|e|ai)n?)|(you( a|')?re lovable)|(give me a rose)|(do you love me)|(ph(u|oo)l d((o|e|ai)n?|iji?y?e) ?(aa?p|tum|a(ye|a?i)sha)? (mujh(e|a(i|y))|h(u|a)m(e|ai)n?))/i,
   q94 = /(random fun)|(I'?( ?a)?m bored)|(bore? ho ?rah(aa?|i|e|ai))|(entertain ?(me(nt)?|(kar( sakti h)?|kij)(o|e|ai|iy?e)n?))/i,
   q95 = /k(y|i)aa? (m(ai|e)n?|h(a|u)m) (aa?p|tum) ?ko baby bulaa? sakt(aa?|i|e|ai) h(u|oo|e|ai)n?/i,
   q96 = /(will you be my (g(irl)?f(riend)?|wife))|(meri (g(irl)?f(riend)?|wife) ban( ?na (chah|pasand kar)(o|e|ai)n?|(o|(ai|e)n?)) ?gi)|(mujh(e|ai|ay) apnaa? (lover|husband|b(oy)?f(riend)?) bana(o|(e|ai)n?)gi)|(kyaa? (m(e|ai)n?|h(u|a)m) ((aa?p|tum) ?ko|tum(e|ai)n?) apni (wife|g(irl)?f(riend)?) (maa?n|bulaa?|keh|banaa?|samajh) sakt(aa?|a?i|e) h(u|oo|e|ai)n?)/i,
   q97 = /aa?j (se|say|sai) ?((aa?p|tum|aa?(ye|i)sha)?( meri)? (bab(y|es?)|g(irl)?f(riend)?|wife)|((m(ai|e)n?|h(u|a)m) ((aa?p|aa?(ye|i)sha) kaa?|tumhaa?raa?|tera) (lover|husband|b(oy)?f(riend)?)))/i,
   q98 = /(favou?rite|pasand(ee|i)daa?) colou?r/i,
   q99 = /(favou?rite|pasand(ee|i)daa?) ((ghumne ki )?jagh?(aa?|(e|ai)n?)|places to (go|visit|be))/i,
   q100 = /(I('| )?a?m sorry)|(mujh(e|a?y|ai) maa?f kar ?d(o|e|ai|iji?ye)n?)|(mujhe ((e|ai)sa|ye( sab)?) nahi kehnaa? chahi?y?e tha)|((aa?p|tum|tere) ko buraa? laga( hogaa?)?)/i,
   q101 = /(fu?c?k you)|(aj(i|ee)b ho)|(ghat(iy?|y)aa? (au|o)rat)/i,
   q102 = /(I hate you)|(you('?re| are)? stupid)/i,
   q103 = /meri friend ban(o|(e|ai)n?)gi/i,
   q104 = /((m(e|ai)n?|h(u|a)m) b(u|o)h(o|a)t pareshaa?n h(u|oo|e|ai)n?)|(I'?( ?a)?m depressed)/i,
   q105 = /(I hate m(e|yself))|((mujh(e|ai)|h(u|a)m((e|ai)n?)?|m(e|ai)n?) khud se nafrat (kart(aa?|a?i|e))? ?h(u|oo|e|ai)n?)/i,
   q106 = /(I( just)? need a friend)|(I'?( ?a)?m lonely)|(ak(ai|e)l(a?i|aa?|e)( pa(r|d)h?)? ga(i|i?yaa?|y?e) h(u|oo|e|ai)n? (m(e|ai)n?|h(u|a)m))/i, 
   q107 = /(k(y|i)a )?(m(e|ai)n?|h(u|a)m) khud ?gar(z|j) h(u|oo|e|ai)n?/i,
   q108 = /((k(y|i)a )?(m(e|ai)n?|h(u|a)m) bur(aa?|e|i|ee|ay) h(u|oo|e|ai)n?)|(I'?( ?a)?m bad)/i,
   q109 = /((t(e|umhaa?)r|aa?pk)i (zodiac|star) sign)|(^(zodiac|star) sign$)/i,
   q110 = /((age|uma?r)( k(i|y)aa? h(e|ai))? ?(aa?p ?k|tumhaa?r)i)|((aa?p ?k|t(umhaa?|e)r)i uma?r)/i,
   q111 = /hamaa?ri pasand((e|ai)n?)? kitni milti julti h(e|ai)n?/i,
   q112 = /(can'?t? you feel the chemistry between us)|(k(i|y)aa? (tum?|aa?p)( hamaa?r(e|ay) darmyaa?n ?(ki|(hone )?wali|(kisi|(e|ai)k)( kisam ki)?))? chemistry( ko)? mehsus( nahi)? kar (rahi|sakti)( h(o|ai|e)n?)?)/i,
   q113 = /crap|brat|fool|(mother)?fuck(er)?s?|mf|mofo|twats?|cunts?|cock(biter|sucker)?s?|boobs?|morons?|douche?(bag)?s?|pricks?|dicks?|(ass|arse) ?(hole)?s?|dick(head)?s?|fag(got)?|nigg?(a|er)|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/i,
   q114 = /(be ?wafaa?( h(o|e|ai)n?)?$)|(^be ?wafaa?$)/i,
   q115 = /meri (girlfriend|wife|lover) k(o|au)n( h(e|ai))?$/i,
   q116 = /meri (dusri )?(g(irl)?f(riend)?|cousin|wife|lover) ka kya$/i,
   q117 = /par (aa?p|tum) to (e|ai)k (robot|machine|ai) h(o|e|ai)n?/i,
   q118 = /(kahaa? chali)|(meri (wife|lover|g(irl)?f(riend)?) kahaa? (h(e|ai)|gai))/i,
   q119 = /(miss (yo)?u)|((aa?p|tum|tere) ko miss kar rah(aa?|i|e) h(u|oo|e|ai)n?)/i,
   q120 = /(time bataa?( d)?(o|e|ai|iy?e)n?)|(time( (bataa?o|ayesha))? kyaa? (((ho|baj) ?ra?haa?) ?)?h(e|ai))/i,
   q121 = /(who is your (aa?shik|lover|husband|b(oy)?f(riend)?))|((t(umhaa?|e)raa?|aa?p ?ka) (aa?shik|lover|husband|b(oy)?f(riend)?) k(o|au)n?)/i,
   q122 = /YYYYYYYY/i,
   q123 = /(M(ujh|ere)|h(u|a)m(aa?r(e|ai))?) se shaa?di kar(((l)?(o|(e|ai)n?))| ?ne ke baa?r(e|a(y|i)) m(e|ai)n?)? ?(k(y|(ai|e)s)aa?|gi)?/i, 
   q124 = /(ult(i|aa?) gin((ti|o|(i?y?e|ai)n?))?( (kar|k(i|ee)j)(i?y?e|(e|ai)n?|o))? 5 (se|to) (0|1))|(5 (se|to) (0|1)( (ki|tak( ki)?))? ult(i|aa?) gin((ti|o|(i?y?e|ai)n?))?)/i,
   q125 = /(count to (10|ten))|(10 tak gin((ti|o|(i?y?e|ai)n?))?)/i,
   q126 = /(gaa?na|lori)? gaa?(( ?ke)? sunaa?)? ?d?((o|e|ai|ij?i?y?e)n?|(sak|pa)? ?ti)/i,
   q127 = /XXXXXXXX/i,
   q128 = /ch(u|o)d( ?ne|ai) (pe kesi|ki) awaa?z nikaa?l(o|i?y?e|ai)n?( gi)?/i,
   q129 = /dil ki dha(r|d) ?kan sunaa?(o(gi)?|i?y?e|ai)n?/i,
   q130 = /(me|h(u|a)m) t(um ?(haa?r)?|er)e se tang( ho ?gay?(aa?|e|i)?)? h(u|oo|e|ai)n?/i;
   
  
 function ask() { 
   const q = document.querySelector("#searchInput").value; 
   const $output = $("#message"); 
   if (q1.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = [];
     msg[0] = "Aap kay binaa"; 
     msg[1] = "Kesa guzar sakta hay aapkay binaa, hmm...";
     if ( 
       userName != null && 
       userName.length >= 3 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
       msg[0] += ` ${userName} ji? Baraa adhuraa sa ${cry} ${cry2}`; 
     } else { 
       msg[0] += "? Bilkul adhuraa sa!" + cry + cry2; 
     } 
     msg[1] += `? Puchiye hee matt${pessimistic}`;
     let responses = msg[Math.floor(Math.random() * msg.length)];
     $output.html(responses); 
     sound("fake_cry");
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q2.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = 
       "Mayray ilawah or kon ho saktaa hay? May Ayesha, aap jaysay ac'chay insaan say mil kar bayhad khushi hoo'i. Bas boli'ay toh, hukam kiji'ay! Batai'yay kaysee khidmat kar sakti hu may aapki?" + happy; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q3.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let age = calc_age(new Date(bday)); 
     msg = "<em style='font-weight:600;'>"; 
     msg += "Kuch cheezay jo may aap kay baaray may jaanti hoon:<ul>"; 
     msg += "<li>Aapka naam: "; 
     if ( 
       userName != null && 
       userName.length >= 3 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
       msg += userName.split(" ")[0]; //only show the first name 
     } else { 
       msg += "Anjaan." + duh; 
     } 
     msg += "</li><li>Aapki personality: cute, kind, funny" + in_love + "</li><li>Aapki saal gira ka din: "; 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       msg += bday; 
       if (isBday(bday)) { 
         msg += " (today)"; 
       } 
     } else { 
       msg += "Anjaan." + duh; 
     } 
     msg += "</li><li>Aapki umr: "; 
     if ((!isNaN(parseInt(age)) && age >= 8) && (age != "" && age.length != 0)) { 
       msg += age; 
     } else { 
       msg += "Aapki birthday na jannay ki wajaa say calculate na karpa'i."; 
     } 
     msg += "</li></ul></em>"; 
     $output.html(msg); 
     console.log(msg); 
     if ( 
       /Kuch cheezay jo may/im.test(msg) && 
       mesg.innerText.toLowerCase().indexOf("data received via") === -1 
     ) { 
       const API_KEY = 
         "63a8b1ef829b0a90909b1bb7e9c931fe1ffb70e27378da4c302e22c7"; 
       $.get( 
         `https://api.ipdata.co/?api-key=${API_KEY}`, 
         function (response) { 
         	console.log(response);
           $("#message").append( 
             `<br><b>Mazid data... jo ke app ke IP Address se lia gaya (oops, ye harkat thori jasusana nahi thi? Whisphers, <em>"sorry!"</em>) </b><br>Apki andazana location: ${response.country_name} <img src="${response.flag}" height="15vh" width="22vw"> <sup><small>[${response.country_code}]</small></sup><br>Apki national language: zyada tar ${response.languages[1].native}<br>Apka timezone: UTC ${response.time_zone.offset.slice(0,3)} ${response.time_zone.name} [${response.time_zone.abbr}]<br>Note: We value your privacy! Hence we assure you that none of your data will be shared with a third-party (not unless we have your written consent). We also assure you that this is just a demonstraion of how far the AI can go, hence the "<em>precise</em>" location.` 
           ); 
         }, 
         "jsonp" 
       ); 
     } 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q4.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Barhia hoon ji may, poochne kay liye thanks. Umeed hay aap bhi ac'chay or sehti'yaab hongay? As a friend, I deeply care" + hearts; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q5.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Aapka naam hay "; 
     if ( 
       userName != null && 
       userName.length >= 3 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
       msg += userName; 
       msg += `. Agar aap chahtay ho may aapko kisi or naam say, jese kay ek nickname, say bulaun, <a onclick="$('#searchInput').val('kisi or nam se bulao ap mujhe');stopText();ask();playText(mesg.innerText);" onmouseover="$(this).css('cursor', 'pointer')" style="color:rgba(165,25,25,0.8);text-decoration:underline;">Idhar dabaao</a>${nickName()}!`; 
     } else { 
       msg += "\"ek anjaan insan\"" + lol; 
       msg += `. <a onclick="$('#searchInput').val('Mera naam dubara puchiye');stopText();ask();playText(mesg.innerText);" onmouseover="$(this).css('cursor', 'pointer')" style="color:rgba(165,25,25,0.8);text-decoration:underline;">Idhar dabaao</a> naam dubaara darj karne kay li'yay!`; 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q6.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "May'ra pura naam Ayesha Mehnaaz hay... Par agar ap chaho to mujhay sirf Ayesha bhi bulaa saktay ho, mujhay ac'cha lagay gaa!" + blush; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q7.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = document.querySelector("#searchInput").value; 
     msg = msg.replace(/(this|it)/i, new Date().getFullYear()); 
     msg = msg.replace(/(was|will)/i, "is"); 
     msg = msg.substr(3, 4); 
     msg = parseInt(msg); 
     log(msg); 
     if (isLeapYear(msg)) { 
       msg = `Of course, ${msg} is a leap year!`;
       let x = msg.slice(11, 15); 
       let curY = new Date().getFullYear(); 
       if (curY != x && curY > x) { 
         msg = msg.replace(/is/i, "was"); 
       } else if (curY != x && curY < x) {
       	msg = msg.replace(/(is|was)/i, "is going to be"); 
       }
       sound("genius");
     } else { 
       msg = "Mayree intelligence kay mutaabik? Nahi!"; 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q8.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       bday = toTitleCase(bday); 
       msg = `Aapki saal gira hay ${bday} ko aapkay mutaabik`; 
       log(msg); 
       if (isBday(bday)) { 
         msg += 
           " (jo kay aaj hay)<br>Happy birthday by the way" + kiss; 
           sound("hbd.mp3");
       } 
     } else { 
       bday = prompt( 
         "Apki birthday saved nahi he, sorry! Zara dubara submit kijie ga please?\nAccepted format: YYYY(separator)m(separator)d\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku." 
       ); 
       if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       bday = toTitleCase(bday); 
       ls.setItem("lsbday", bday);
       msg = `Date submitted. Your newly set birthday--- and hopefully the "actual" one--- is ${bday} (unlike the last time, which was a weird joke from you`; 
       if ( 
       userName != null && 
       userName.length >= 3 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
     	msg += `, ${toTitleCase(userName.split(" ")[0])}`; //only show the first name; capitalized
     } else {
     	msg += "";
     }
     msg += "!)" + smirk; 
     bday = toTitleCase(bday);
     if (isBday(bday)) { 
         msg += 
           "<br>Happy birthday by the way" + kiss;
           } 
       }
     }
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q9.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       age = calc_age(new Date(bday));
        if ((!isNaN(parseInt(age)) && age >= 8) && (age != "" && age.length != 0)) {
       msg = `Aap ho... ${age} kay!`; 
       if (age <= 18) { 
         msg += "<br>Kaafi young ho yar aap to" + what2 + "... still cute though" + in_love + blush; 
         console.log(msg); 
       }  else if (age >= 40) {
       	msg += "<br>Don't worry, age doesn't matter... Not to me at least!<br>Aap mayray leeyay ab bhi athaara saal kay no jawaan hi ho!" + hearts;
       console.log(msg);
       sound("ily");
       }
       } 
     } else { 
       bday = prompt( 
         "Apki saal gira ka din jane bager kese bata sakti hu? Apni sal gira ka din dubara darj kijie niche.\nSupported format: YYYY(separator)m(separator)d" 
       ); 
       if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
     	bday = toTitleCase(bday);
     	ls.setItem("lsbday", bday);
       age = calc_age(new Date(bday)); 
       if ((!isNaN(parseInt(age)) && age >= 8) && (age != "" && age.length != 0)) {
       msg = "Aap ho... " + age + " kay!"; 
       if (age <= 18) { 
         msg += "<br>Kaafi young ho yar aap to" + what2 + "... still cute though" + in_love + blush;
         console.log(msg); 
       } else if (age >= 40) {
       	msg += "<br>Don't worry, age doesn't matter... Not to me at least!<br>Aap mayray leeyay ab bhi athaara saal kay no jawaan hi ho!" + hearts;
       sound("ily");
       console.log(msg);
       }
       }
       }
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q10.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let cfm = confirm("Pakka?"); 
     if (cfm) { 
       userName = prompt("Kya bulau me apko? Koi nickname?", userName); 
       if ( 
         userName != null && 
         userName.length >= 3 && 
         /^[a-z\s]+$/i.test(userName) && 
         userName != "" 
       ) {
       	userName = toTitleCase(userName); 
       	ls.setItem("lsuserName", userName);
         console.log(`New username: ${userName}`); 
         msg = `Theek hay jee, aaj say may aapko ${userName} bulaoongi ${smirk}`; 
         console.log(msg); 
       } else { 
         userName = prompt("Failed to change your name for some reason! Dubara submit karne ki zehmat karege?"); 
         if ( 
         userName != null && 
         userName.length >= 3 && 
         /^[a-z\s]+$/i.test(userName) && 
         userName != "" 
       ) { 
       	userName = toTitleCase(userName); 
       	ls.setItem("lsuserName", userName);
         console.log(`New username: ${userName}`); 
         msg = `Theek hay jee, aaj say may aapko ${userName} bulaoongi ${smirk}`; 
         console.log(msg); 
         } else { 
         userName = prompt("Failed to change your name for some reason! Dubara submit karne ki zehmat karege?"); 
         if ( 
         userName != null && 
         userName.length >= 3 && 
         /^[a-z\s]+$/i.test(userName) && 
         userName != "" 
       ) { 
       	userName = toTitleCase(userName); 
       	ls.setItem("lsuserName", userName);
         console.log(`New username: ${userName}`); 
         msg = `Theek hay jee, aaj say may aapko ${userName} bulaoongi ${smirk}`; 
         console.log(msg); 
         } else { 
         userName = prompt("Failed to change your name for some reason! Dubara submit karne ki zehmat karege?"); 
         if ( 
         userName != null && 
         userName.length >= 3 && 
         /^[a-z\s]+$/i.test(userName) && 
         userName != "" 
       ) { 
       	userName = toTitleCase(userName); 
       	ls.setItem("lsuserName", userName);
         console.log(`New username: ${userName}`); 
         msg = `Theek hay jee, aaj say may aapko ${userName} bulaoongi ${smirk}`; 
         console.log(msg); 
         } else { 
         userName = prompt("Failed to change your name for some reason! Dubara submit karne ki zehmat karege?"); 
         if ( 
         userName != null && 
         userName.length >= 3 && 
         /^[a-z\s]+$/i.test(userName) && 
         userName != "" 
       ) { 
       	userName = toTitleCase(userName); 
       	ls.setItem("lsuserName", userName);
         console.log(`New username: ${userName}`); 
         msg = `Theek hay jee, aaj say may aapko ${userName} bulaoongi ${smirk}`; 
         console.log(msg); 
         } else { 
         userName = prompt("Na kaam!\nThak chuki hu, akhri bar puchti hu... ab bata bhi do?!");
         msg = `Baray hee ziddi niklay yaar tum tou ${duh}${angry}`; 
         sound("attitude", 0, 0, 2.0);
               }
             }
           }
         }
       } 
       } else {
       	msg = "Operation Cancelled!";
       }
       $output.html(msg); 
       log(msg); 
       $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q11.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let cfm = confirm("Pakka?"); 
     if (cfm) { 
       bday = prompt( 
         "Apni salgira dubara submit kijie please. Kuch is tara: YYYY(separator)m(separator)d\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku." 
       ); 
       if ( 
         bday != null && 
         /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
         bday != "" && 
         /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
           bday 
         ) 
       ) { 
         bday = toTitleCase(bday);
         ls.setItem("lsbday", bday);
         msg = `Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
       } else { 
         bday = prompt( 
           "Kisi waja se change nahi karpai, zara dubara submit kijie?\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku." 
         ); 
         if ( 
         bday != null && 
         /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
         bday != "" && 
         /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
           bday 
         ) 
       ) { 
         bday = toTitleCase(bday);
         ls.setItem("lsbday", bday);
         msg = `Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
         } else {
         	bday = prompt( 
           "Kisi waja se change nahi karpai, zara dubara submit kijie?\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku.\n10 bar puchu, tab bataoge?" 
         ); 
         if ( 
         bday != null && 
         /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
         bday != "" && 
         /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
           bday 
         ) 
       ) { 
         bday = toTitleCase(bday);
         ls.setItem("lsbday", bday);
         msg = `Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
           } else {
           	bday = prompt( 
           "Kisi waja se change nahi karpai, zara dubara submit kijie?\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku.\nUgh......" 
         ); 
         if ( 
         bday != null && 
         /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
         bday != "" && 
         /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
           bday 
         ) 
       ) { 
         bday = toTitleCase(bday);
         ls.setItem("lsbday", bday);
         msg = `Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
             } else {
             	bday = prompt( 
           "Kisi waja se change nahi karpai, zara dubara submit kijie?\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku." 
         ); 
         if ( 
         bday != null && 
         /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
         bday != "" && 
         /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
           bday 
         ) 
       ) { 
         bday = toTitleCase(bday);
         ls.setItem("lsbday", bday);
         msg = `Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
               } else { 
               	bday = prompt( 
           "Kisi waja se change nahi karpai, zara dubara submit kijie?\nNote: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku." 
         ); 
                   msg = `Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
               }
             }
           }
         }
       } 
       } else {
       	msg = "Operation Cancelled!";
       }
       $output.html(msg); 
       log(msg); 
       $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q12.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "You are! In some ways, I think you are even nicer than I am. I'm not as funny as you are!"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q13.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = dateTime(); 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q14.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = 
       "Hey there, batai'yay kaysee khidmat kar sakti hu may aapki? <a onclick='$(\"#searchInput\").val(\"mosam ke surati hal\");stopText();ask();playText(mesg.innerText);' onmouseover='$(this).css(\"cursor\", \"pointer\")' style='font-weight:500;font-style:italic;color:rgba(165,25,25,0.8);text-decoration:underline;'>mosam ka hal</a> bataa kay, <a onclick='$(\"#searchInput\").val(\"ayesha gaane chalao\");stopText();ask();playText(mesg.innerText);' onmouseover='$(this).css(\"cursor\", \"pointer\")' style='font-weight:500;font-style:italic;color:rgba(165,25,25,0.8);text-decoration:underline;'>gaane</a> chala kay ya koi <a onclick='$(\"#searchInput\").val(\"set a new reminder\");' onmouseover='$(this).css(\"cursor\", \"pointer\")' style='font-weight:500;font-style:italic;color:rgba(165,25,25,0.8);text-decoration:underline;'>reminder</a> set kar kay?"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q15.test(q)) { 
     let ticTacToeWin = window.open( 
       "./tic-tac-toe/", 
       "_blank", 
       "width=500,height=900,resizable=yes,toolbar=no,menubar=no" 
     ); 
     if (ticTacToeWin) { 
       window.focus(); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q16.test(q)) { 
     msg = "";
     $output.html(msg); 
     let weatherWin = window.open("./weather/", "_blank"); 
     if (weatherWin) { 
       window.focus(); 
       msg = "Mosam ka haal jaannay kay li'yay abhi apnay shay'here ka naam likh kar submit dabaa'ee'yay";
       playText(msg);
       log("Launched Weather"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q17.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Aray kuch pucho gay bhi ya bas yuhi dekhte raho gay?" + duh + cmon;
     $output.html(msg); 
     let audio = new Audio();
     audio.src = "assets/audio/attitude.mp3"; 
     utterance.onend = function () { audio.play(); } 
     setTimeout(() => { utterance.onend = ""; }, 10000); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q18.test(q)) { 
     let calcApps = ["./girly-calc/", "./ayeshculator/"]
     let calcAppsWin = window.open(calcApps[Math.floor(Math.random() * calcApps.length)], "_blank"); 
     if (calcAppsWin) { 
       window.focus(); 
       log("Launched Calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q19.test(q)) { 
     let ttsWin = window.open("./tts/", "_blank"); 
     if (ttsWin) { 
       window.focus(); 
       log("Launched TTS"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q20.test(q)) { 
     let pianoWin = window.open("./beat-maker/", "_blank"); 
     if (pianoWin) { 
       window.focus(); 
       log("Launched Beat Maker/ Synthesizer!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q21.test(q)) { 
     let todoWin = window.open("./todo-app-project-master/", "_blank"); 
     if (todoWin) { 
       window.focus(); 
       log("Launched Todo app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q22.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let musicWin = window.open("./music/", "_blank"); 
     if (musicWin) { 
       window.focus(); 
       log("Launched Music"); 
       msg = "Filhaal sirf English available hay, sorry!";
       playText(msg);
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q23.test(q)) { 
     let weightConvAppWin = window.open("./weight-conv/", "_blank"); 
     if (weightConvAppWin) { 
       window.focus(); 
       log("Launched Weight Converter"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q24.test(q)) { 
     let games = [ 
       "./tic-tac-toe/", 
       "./hangman-master/", 
       "./Monopoly-master", 
       "https://alexs-maze-game.netlify.app/", 
       "https://alexs-simon-says.netlify.app/", 
       "./typing-game/", 
       "./mem-game/", 
       "../foto-flick/", 
       "../Trivia-Db/", 
       "./The Constructor/", 
       "../math-flash-cards/", 
       "https://truth-or-dare-by-alex.netlify.app", 
       "./RPG-game/", 
       "./smash-cube/", 
       "./breakout-mobile", 
       "./sodoku", 
       "./ludo", 
       "./rising-bars/", 
       "./save-ayesha/", 
       "./ayeshSnake", 
       "./muskyBird/", 
       "./Rock-Paper-Scissor-master", 
     ]; 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       age = calc_age(new Date(bday));
        if ((!isNaN(parseInt(age)) && age <= 18) && (age != "" && age.length != 0)) {
        	games.push("./dress%20up", 
       "./dress-up-2");
        }
        }
     let gamesWin = window.open( 
       games[Math.floor(Math.random() * games.length)], 
       "_blank" 
     ); 
     if (gamesWin) { 
       window.focus(); 
       log("Launched a random game"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q25.test(q)) { 
     let breakOutWin = window.open("./breakout-mobile/", "_blank"); 
     if (breakOutWin) { 
       window.focus(); 
       log("Launched Breakout"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q26.test(q)) { 
     let sodokuWin = window.open( 
       "./sodoku/", 
       "_blank"
     ); 
     if (sodokuWin) { 
       window.focus(); 
       log("Launched Sodoku"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q27.test(q)) { 
     let hangManWin = window.open("./hangman-master/", "_blank"); 
     if (hangManWin) { 
       window.focus(); 
       log("Launched Hangman"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q28.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let beatMakerWin = window.open( 
       "./beat-maker/", 
       "_blank"
     ); 
     if (beatMakerWin) { 
       window.focus(); 
       log("Launched ayeshBeat Maker!"); 
       msg = "Music say pyaar hay? Aray mujhay bhi. Ao music bana'ay saath may";
       playText(msg);
       sound("hoo-hoo-hoo");
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     
   } else if (q29.test(q)) { 
     let rockPSWin = window.open( 
       "./Rock-Paper-Scissor-master/", 
       "_blank"
       );
     if (rockPSWin) { 
       window.focus(); 
       log("Launched Rock Paper Scissors"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q30.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let lyricsAppWin = window.open("./lyrics-search-master/", "_blank"); 
     if (lyricsAppWin) { 
       window.focus(); 
       msg = "Lyricopedia... lyrics application or encyclopedia... ab dono ek may! Nikaa'lo information har cheez kay baa'ray may. Ek chair say laykar celebrity tak. Celebrity or artist, jaysay kay Aatif Aslam... or us kay kisi song ke lyrics... say laykar ek kitaab kay lay'khak tak, jaysay kay Abraham Lincoln... Ek sciencedaan or uski popular theories say laykar kisi actor kay background tak. Sab jaano sirf ek hee app me";
       playText(msg);
       log("Launched Lyricopedia"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q31.test(q)) {
     let curConvAppWin = window.open("./exchange-rate/", "_blank", 
       "width=600,height=800,resizable=no,toolbar=no,menubar=no" 
     ); 
  
     if (curConvAppWin) { 
       window.focus(); 
       log("Launched Currency Converter"); 
     } else { 
       alert("Conversion API failed to load, Adblocker me jake ye webpage pehle whitelist kijie please!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q32.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = 
       "Aaj din hay " + 
       dayOfYear(new Date()) + 
       " saal " + 
       new Date().getFullYear() + " ka! "; 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q33.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if (isWeekday() == true) { 
       msg = "Yes. Of course it is!"; 
     } else { 
       msg = "According to my intelligence, no, it's not."; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q34.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if (isWeekend() == true) { 
       msg = 
         "Han. bayshak hay! Kisi adventure pay kyun nahi ja'tay?"; 
     } else { 
       msg = "Mayri intelligence kay mutaabik, aaj na itwaar hay... or na hi haftaa" + smile + in_mood; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q35.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let p = prompt("Enter the number you want me to convert to Roman numeral"); 
     let conv = toRomanNumeral(p); 
     if (/^[0-9]*$/g.test(p) && p != null && p != "" && p >= 1) { 
       msg = `Roman numeral for ${p} is ${conv}`; 
     } else { 
       msg = "Values other than integers cannot be converted!"; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q36.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let amount = q.match(/[0-9(.)]+/)[0];
     let p;
     if ((amount != null && amount != "") && (amount.length >= 1 && !isNaN(amount))) {
     p = prompt("Kitne miles convert karna chahe ge ap kilometers me? Niche darj kijie please.", amount); 
     }
     let conv = milesToKm(p); 
     if (/^[0-9(.)]*$/g.test(p) && p != null && p != "" && p.length >= 1) { 
       msg = `${p} miles are equal to ${conv} kilometers`; 
     } else { 
       msg = "Values other than numbers cannot be converted!" + duh; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q37.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let amount = q.match(/[0-9(.)]+/)[0];
     let p;
     if ((amount != null && amount != "") && (amount.length >= 1 && !isNaN(amount))) {
     p = prompt("Kitne kilometers convert karna chahte he ap miles me?", amount); 
     } 
     let conv = kmToMiles(p); 
     if (/^[0-9(.)]*$/g.test(p) && p != null && p != "" && p.length >= 1) { 
       msg = `${p} Kilometers are equal to ${conv} miles`; 
     } else { 
       msg = "Obviously, sirf numbers hee convert ho saktay hay!" + duh; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q38.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = yesterday(); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q39.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = tomorrow(); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q40.test(q)) { 
     let monopolyWin = window.open("./Monopoly-master/", "_blank"); 
     if (monopolyWin) { 
       window.focus(); 
       log("Launched Monopoly"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q41.test(q)) { 
     let canvasWin = window.open("./ayeshaBrusha/", "_blank"); 
     if (canvasWin) { 
       window.focus(); 
       log("Launched ayeshaBrusha: A Modern Brush Tool!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q42.test(q)) { 
     let audioVisualizerWin = window.open( 
       "../soundjam/", 
       "_blank" 
     ); 
     if (audioVisualizerWin) { 
       window.focus(); 
       log("Launched Audio Player/Visualizer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q43.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let ayeshRanslateWin = window.open("./ayeshranslate/", "_blank"); 
     if (ayeshRanslateWin) { 
       window.focus(); 
       msg = "Oho,... zaraa ham bhi to day'khe tumhay kyaa translate karna hay. Jald az jald language select karkay translate button dabaao, or magic day'khoh";
       playText(msg);
       log("Launched ayeshRansla!or"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q44.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let dictionaryWin = window.open("./dictionary/", "_blank"); 
     if (dictionaryWin) { 
       window.focus(); 
       msg = "English seekhnee hay?... Bilkul sahi jagaa aay ho. Abhi ek lafz likh kar search dabaao, or oos lafz kee meaning jaano chut'keeyo may";
       playText(msg);
       log("Launched Dictionary"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q45.test(q)) { 
     let theMazeWin = window.open( 
       "https://alexs-maze-game.netlify.app/", 
       "_blank" 
     ); 
     if (theMazeWin) { 
       window.focus(); 
       log("Launched The Maze"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q46.test(q)) { 
     let calendarWin = window.open("./calendar-mobile/", "_blank"); 
     if (calendarWin) { 
       window.focus(); 
       log("Launched the mobile-friendly Calendar"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q47.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let timeZoneAppWin = window.open("./world-zones/", "_blank"); 
     if (timeZoneAppWin) { 
       window.focus(); 
       msg = "Dunya bhar kaa time jaano,... sirf ek hee app may";
       playText(msg);
       log("Launched worldZones!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q48.test(q)) { 
     let photoEditorWin = window.open("./ayeshEdit/", "_blank"); 
     if (photoEditorWin) { 
       window.focus(); 
       log("Launched Ayesh'dEdit!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q49.test(q)) { 
     let voiceNotesAppWin = window.open("./speech-to-text-js-master/", "_blank"); 
     if (voiceNotesAppWin) { 
       window.focus(); 
       log("Launched Voicenotes App"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q50.test(q)) { 
     let smashCubeWin = window.open( 
       "./smash-cube/", 
       "_blank" 
     ); 
     if (smashCubeWin) { 
       window.focus(); 
       log("Launched Smash Cube!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q51.test(q)) { 
     let percentCalcWin = window.open("./percentage-calc/", "_blank"); 
     if (percentCalcWin) { 
       window.focus(); 
       log("Launched %age calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q52.test(q)) { 
     let tempConvWin = window.open("./temp-conv/", "_blank"); 
     if (tempConvWin) { 
       window.focus(); 
       log("Launched Temperature Converter"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q53.test(q)) { 
     let recipesAppWin = window.open("./meal-finder/", "_blank"); 
     if (recipesAppWin) { 
       window.focus(); 
       log("Launched Recipes app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q54.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let relaxerAppWin = window.open("./relaxer-app/", "_blank"); 
     if (relaxerAppWin) { 
       window.focus(); 
         msg = "Gehri saas lo, "; 
         playText(msg); 
         setTimeout(() => { 
           msg = "andar lo, hold karo"; 
           playText(msg); 
           setTimeout(() => { 
             msg = "or baahir nikaalo"; 
             playText(msg); 
             /*sound("sigh");*/
           }, 2005); 
         }, 1650); 
       log("Launched Relaxer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q55.test(q)) { 
     let newYearCountdownWin = window.open("./new-year-countdown/", "_blank"); 
     if (newYearCountdownWin) { 
       window.focus(); 
       log("Launched New Year Countdown app"); 
     } else { 
       alert("Please enable popups for this site!");
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q56.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let typingGameWin = window.open("./typing-game/", "_blank"); 
     if (typingGameWin) { 
       window.focus(); 
       msg = "How fast do you type? Let's test!"; 
       playText(msg); 
       log("Launched Speed Typer"); 
     } else { 
       alert("Please enable popups for this site!");
     } 
   } else if (q57.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let expenseTrackerWin = window.open("./expense-tracker/", "_blank"); 
     if (expenseTrackerWin) { 
       window.focus(); 
       msg = 
         "Worried about keeping track of your expenses? Don't be. I can definitely help you track them 24/7!"; 
       playText(msg); 
       log("Launched Expense Tracker"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q58.test(q)) {
     let timerAppWin = window.open("./timer","_blank"); 
     if (timerAppWin) { 
       window.focus(); 
       log("Launched Timer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q59.test(q)) { 
     let rockGameWin = window.open("./save-ayesha/", "_blank"); 
     if (rocketGameWin) { 
       window.focus(); 
       log("Launched Ayesha Heading Back To Earth!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q60.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let loanCalcWin = window.open("./loan-calc/", "_blank"); 
     if (loanCalcWin) { 
       window.focus(); 
       msg = "Aap logo (ya log aap) kay kitnay karz'daar hay jaani'yay"; 
       playText(msg); 
       log("Launched Loan Calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q61.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let randomQuoteWin = window.open("./random-quote-gen/", "_blank"); 
     if (randomQuoteWin) { 
       window.focus(); 
       msg = "Here's a random quote of the day"; 
       playText(msg); 
       log("Launched Quotes app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q62.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let memoryGameWin = window.open("./mem-game/", "_blank"); 
     if (memoryGameWin) { 
       window.focus(); 
       msg = "May aapko challenge karti hoo aap yay game nahi jeet saktay"; 
       playText(msg); 
       log("Launched Memory Game"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q63.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let caloTrackerWin = window.open("./calotracker/", "_blank"); 
     if (caloTrackerWin) { 
       window.focus(); 
       msg = "Apnay diet say pareshaan ho? Mat ho. I can help you track calories... taa'kay aap motaapay say bacch sakay...I mean, esa nahi hay kay mujhay mo'tay logo say nafrat hay, but... obesity (that is... motaapan)... hurts! You should be healthy!!"; 
       playText(msg); 
       log("Launched CaloTracker"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q64.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let jokesAppWin = window.open("./jokes/", "_blank"); 
     if (jokesAppWin) { 
       window.focus(); 
       playText("Click the button to generate some random jokes, and make your day!");
       log("Launched Joke Machine"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q65.test(q)) { 
     let fotoflickWin = window.open("../foto-flick/", "_blank"); 
     if (fotoflickWin) { 
       window.focus(); 
       log("Launched Fotoflick"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q66.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let motivQuotesAppWin = window.open( 
       "../motivational-quote-generator/", 
       "_blank" 
     ); 
     if (motivQuotesAppWin) { 
       window.focus(); 
       msg = "Demotivated hain? Na ho, may jo hoon aapko motivate karnay kay li'yay!"; 
       playText(msg); 
       log("Launched Motivational Quotes app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q67.test(q)) { 
     let spaceDataAppWin = window.open("../live-spacestation-data/", "_blank"); 
     if (spaceDataAppWin) { 
       window.focus(); 
       msg = 
         "Chali'ay discover ka'ray hamaa'ray upar kya kyaa hay... space may! Search for stuff like blackholes, wormholes, Apollo 8, or 12 mission!"; 
       playText(msg); 
       log("Launched Space_data app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     msg = ""; 
     $output.html(msg); 
   } else if (q68.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let ayeshPapersWin = window.open("./ayeshPapers/", "_blank"); 
     if (ayeshPapersWin) { 
       window.focus(); 
       log("Launched ayeshPapers"); 
       msg = "Wallpaper chahi'yay... Abhi download karo search kar'kay. Bas wallpaper dhoondtay hee use pe right click karo, or download link ka button dabaao. All the images are royalty free, so you don't have to worry about the copyright claims. Image download karo... or karo enjoy!";
       playText(msg);
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q69.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     showFeatures(); 
   } else if (q70.test(q)) { 
     let quizGameWin = window.open("../Trivia-Db/", "_blank"); 
     if (quizGameWin) { 
       window.focus(); 
       log("Launched Trivia_Db"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q71.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let tvSeriesAppWin = window.open("../yoMovies/", "_blank"); 
     if (tvSeriesAppWin) { 
       window.focus(); 
       msg = "Yahaa aapko milaygi ek say ek ac'chay draa'may ya film ki information, cha'hay wo nai ho... ya puraani! Tau phir wait kaysaa? Koi movie ya show ka naam likho (jaysay kay Housefull, Nautanki Saala), or us ki rating pataa karo. Movie kab release hoo'i, draa'may ki story kya hay, kon kon say actors hay... sab jaano, ek ek movie aur show ka (chaahay wo Indian ho, ya American!)";
       playText(msg); 
       log("Launched an app for TV-related data"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q72.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let moviesAppWin = window.open("../yoMovies/", "_blank"); 
     if (moviesAppWin) { 
       window.focus(); 
       msg = "Yahaa aapko milaygi ek say ek ac'chay draa'may ya film ki information, cha'hay wo nai ho... ya puraani! Tau phir wait kaysaa? Koi movie ya show ka naam likho (jaysay kay Housefull, Nautanki Saala), or us ki rating pataa karo. Movie kab release hoo'i, draa'may ki story kya hay, kon kon say actors hay... sab jaano, ek ek movie aur show ka (chaahay wo Indian ho, ya American!)"; 
       playText(msg); 
       log("Launched Movies"); 
     } else { 
       alert("Please enable popups for this site!"); 
     }
   } else if (q73.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let daySchedulerAppWin = window.open("./day_scheduler/", "_blank"); 
     if (daySchedulerAppWin) { 
       window.focus(); 
       msg = 
         "Time is a precious resource—you can’t stop using it and you can’t find more of it, but you need it to do absolutely everything. From scheduling meetings to fulfilling orders, time is behind every aspect of running a business and you can’t afford to manage it poorly. So, I think you might want to develop a better routine. If you do, use our built-in application as your scheduler and never miss any of your scheduled work"; 
       playText(msg); 
       log("Launched Day Scheduler"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q74.test(q)) { 
     let adviceGenWin = window.open("./advice-gen/", "_blank"); 
     if (adviceGenWin) { 
       window.focus(); 
       log("Launched Advice Generator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q75.test(q)) { 
     let giphyAppWin = window.open("./giphy/", "_blank"); 
     if (giphyAppWin) { 
       window.focus(); 
       log("Launched Giphy"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q76.test(q)) { 
     let passGenApps = ["./Passwordgen/", "./Passwordgen2"];
     let pwGenAppWin = window.open(passGenApps[Math.floor(Math.random() * passGenApps.length)], "_blank"); 
     if (pwGenAppWin) { 
       window.focus(); 
       log("Launched Password Generator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q77.test(q)) { 
     let theConstructorWin = window.open("./The Constructor/", "_blank"); 
     if (theConstructorWin) { 
       window.focus(); 
       log("Launched The Constructor"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q78.test(q)) { 
     let fisaveWin = window.open("../fisave-networth-tracking-app/", "_blank"); 
     if (fisaveWin) { 
       window.focus(); 
       log("Launched Fisave"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q79.test(q)) { 
     let analogClockWin = window.open("./analog-clock/", "_blank"); 
     if (analogClockWin) { 
       window.focus(); 
       log("Launched Analog Clock"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q80.test(q)) { 
     let risingBarsWin = window.open("./rising-bars/", "_blank"); 
     if (risingBarsWin) { 
       window.focus(); 
       log("Launched Rising-Bar Game!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q81.test(q)) { 
     let unitConvAppWin = window.open("./unit-conv/", "_blank"); 
     if (unitConvAppWin) { 
       window.focus(); 
       log("Launched Unit_Converter"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q82.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let rpgGameWin = window.open("./RPG-game/", "_blank"); 
     if (rpgGameWin) { 
       window.focus(); 
       msg = "Shay'here chaaro taraf say gher li'yaa gayaa hay... Kya tum bachaa pao gay?! Let's find out!";
       playText(msg);
       log("Launched Game of Adventures: City Under Havoc!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q83.test(q)) { 
     let bookListAppWin = window.open("./Mybooklist/", "_blank"); 
     if (bookListAppWin) { 
       window.focus(); 
       log("Launched MyBookList"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q84.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let mathGameWin = window.open("../math-flash-cards/", "_blank"); 
     if (mathGameWin) { 
       window.focus(); 
       log("Launched Math flashcards game"); 
       msg = "Zaraa dekhay aapki Math kitni tez hay?";
       playText(msg);
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q85.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let ayeshZipperWin = window.open( 
       "./zipper", 
       "_blank" 
     ); 
     if (ayeshZipperWin) { 
       window.focus(); 
       msg = "Kisi file kee size kam karni hay?... Don't worry, may kab kaam aa'oongi? Abhi kuch files upload karkay download button dabaao or compressed files zip ki soorat may haasil karo... backups kay li'yay kaafi kaam aatay hay yay!";
       playText(msg);
       log("Launched ayeshZipper: An online file compression tool!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q86.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let ludoWin = window.open("./ludo/", "_blank"); 
     if (ludoWin) { 
       window.focus(); 
       msg = "Classical Ludo... simple, yet powerful!";
       playText(msg);
       log("Launched Classical ayeshLudo"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q87.test(q)) { 
     let pdfReaderWin = window.open("./voice-pdf-viewer/", "_blank"); 
     if (pdfReaderWin) { 
       window.focus(); 
       log("Launched PDF Books Reader"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q88.test(q)) { 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
     let ayeshTubeWin = window.open("../youtube/", "_blank"); 
     if (ayeshTubeWin) { 
       window.focus(); 
       msg = "Ayesha Tube,... ab youtube ba'gay'r ads ke!";
       playText(msg);
       sound("woo-hoo");
       log("Launched AyeshTube/ YouTube!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q89.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let truthOrDareWin = window.open( 
       "https://truth-or-dare-by-alex.netlify.app", 
       "_blank" 
     ); 
     if (truthOrDareWin) { 
       window.focus(); 
       msg = "Iss application may sirf ek hee Adult game hay... aur wo hay truth or dare! Dekhay zaraa aap kitnay challenges pooray kar paa'tay ho";
       playText(msg);
       log("Launched Truth_or_Dare"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q90.test(q)) { 
     let metronomeWin = window.open( 
       "../metronome/", 
       "_blank" 
     ); 
     if (metronomeWin) { 
       window.focus(); 
       log("Launched Metronome"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q91.test(q)) { 
     showLicense(); 
   } else if (q92.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Jaan'na chahtay ho kis nay banaaya mujhay? Ek khubsurat si larki nay! Actually, mujhe bananay wali kaa naam bhi khud Ayesha hee hay... <em>(Ayesha Mehnaaz!)</em>... Surprise!"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
     } else if (q93.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Satch?..." + blush + in_love + "<br>Oh I love you too" ;
     if ( 
       userName != null && 
       userName.length >= 3 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
     	msg += `, ${toTitleCase(userName.split(" ")[0])}`; //only show the first name; capitalized
     } else {
     	msg += "";
     }
     msg += hearts + kiss2; 
     let audio = new Audio();
     audio.src = "assets/audio/kiss.mp3"; 
     utterance.onend = function () { audio.play(); } 
     audio.onended = () => { audio.src = "assets/audio/ily.mp3"; audio.play(); }
     setTimeout(() => { audio.onended = ""; }, 4000);
     setTimeout(() => { utterance.onend = ""; }, 10000); 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
     } else if (q94.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let entertainmentApps = [
       "./tic-tac-toe/", 
       "./hangman-master/", 
       "./Monopoly-master", 
       "https://alexs-maze-game.netlify.app/", 
       "./ayeshaBrusha", 
       "./typing-game/", 
       "./mem-game/", 
       "../foto-flick/", 
       "../Trivia-Db/", 
       "./The Constructor/", 
       "../math-flash-cards/", 
       "https://alexs-simon-says.netlify.app/", 
       "https://truth-or-dare-by-alex.netlify.app", 
       "../yoMovies", 
       "./music", 
       "../soundjam", 
       "./giphy/", 
       "./smash-cube/", 
       "./sodoku", 
       "./breakout-mobile", 
       "./muskyBird/", 
       "./Rock-Paper-Scissor-master", 
       "../youtube", 
       "./beat-maker/", 
       "./jokes", 
       "./ludo", 
       "./rising-bars/", 
       "./save-ayesha/", 
       "./ayeshSnake",
       "./one-tap-instrument", 
       "./ayeshEdit", 
       "./ayeshPapers", 
       ];
       let entertainmentAppsWin = window.open( 
       entertainmentApps[Math.floor(Math.random() * entertainmentApps.length)], 
       "_blank" 
     ); 
     if (entertainmentAppsWin) { 
       window.focus(); 
       log("Launched a random entertainment app!"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else { 
     $("#message").slideFadeToggle(800); 
     msg = "Sorry yaar, program ab bhi development may hay, mayray developers key mujhay improve karnay may zyaada say zyaada koshish rahegi."; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } 
 }
