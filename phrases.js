const phrases = [
  `Plenty`,
  `Prone`,
  `briefer`,
  `misusing`,
  `instantiated`,
  `Merely`,
  `Likewise`,
  `cumbersome`,
  `bloating`,
  `shift the focus`,
  `Furthermore`,
  `Even though`,
  `blew up`,
  `to be fair`,
  `is a bit misleading`,
  `upsetting`,
  `spread blatant untruths`,
  `disregarding`,
  `frankly stated`,
  `spread around`,
  `reiterate`,
  `take a bit of fiddling with ...`,
  `worrisome`,
  `Admittedly`,
  `Easypeasy`,
  `is only viable`,
  `unwieldy`,
  `The reason for this claim seems to be`,
  `skeptical`,
  `if you end up not liking it`,
  `Delving into`,
  `nuances`,
  `widely`,
  `neglected`,
  `last but not least`,
  `sleuthing`,
  `under the hood`,
  `In short term`,
  `It all comes down to ...`,
  `That's as far as it goes`,
  `from the shape`,
  `Whilst`,
  `factually correct`,
  `tailored`,
  `Thus`,
  `add up`,
  `Break down the problem`,
  `We're not aiming or perfect`,
  `thoughful`,
  `curated listicles`,
  `straightforward`,
  `Its dependencies remain unchanged`,
  `leveranging`,
  `do either of the following`,
  `towards`,
  `eagerly`,
  `in eiteher case`,
  `reliably`,
  `entitled`,
  `om a tough spot`,
  `halt`,
  `thoroughly`,
  `thwart`,
  `pesky`,
  `daunting`,
  `lean`,
  `debt`,
  `swiftly`,
  `endeavours`,
  `pinpoint`,
  `fairly strightforward`,
  `behave this way`,
  `vacuously`,
  `pun`,
  `pun intended`,
  `counterintuitive`,
  `Regardless`,
  `to be aware`,
  `beforehand`,
  `strengthened`,
  `idle`,
  `chaining`,
  `ground up`,
  `signpost`,
  `caveats`,
  `What are they to begin with?`,
  `abstract away`,
  `comprehend`,
  `tirelessly`,
  `it's a pity`,
  `unbearable`,
  `off it goes`,
  `you're willing`,
  `It's up to you`,
  `It will kick in`,
  `the stale value`,
  `clear out`,
  `arguably`,
  `tempted (sometimes you might feel tempted to...)`,
  `resilient`,
  `It doesn't end up being rendered`,
  `altogether`,
  `keep an eye out`,
  `very few though`,
  `mandatory`,
  `dust off`,
  `although`,
  `fiddlings`,
  `fiddling around`,
  `kinda`,
  `stay out`,
  `wearing off`,
  `the poison should wear off in 5 minutes`,
  `he was paid off`,
  `go off`,
  `went off`,
  `the gun just went off`,
  `So you get better results for what you're wanting`,
  `what do you fancy...?  // opposite of "hate"`,
  `dance the night away`,
  `taking the law into our own hands`,
  `Want to give it another go?`,
  `I grew up in Ver`,
  `It turns out I do, It surprises`,
  `Do you get on[along] well with your family?`,
  `We see one another at...`,
  `We always fight[another verb] with each other`,
  `How do you know each other?`,
  `They dont see each other often`,
  `They see one another every weekend`,
  `You are so kind`,
  `He is so polite`,
  `Cara's fun | Someone who makes you happy to be around them`,
  `my mom is very funny | Someone woho has a good sense of humour and makes you laugh`,
  `They yielded two key realizations`,
  `But those benefits come with some pretty hefty tradeoffs`,
  `tackle`,
  `without relyng on`,
  `crowd`,
  `you have no clue`,
  `stay sane`,
  `Despite`,
  `The job hunt`,
  `Struggle`,
  `Stale React component state (previous state, i think so...)`,
  `We can get rid of some of that cruft by...`,
  `flawed`,
  `move around`,
  `Ruthlessly`,
  `negligible`,
  `jitter`,
  `arose from`,
  `this change shoved off another...`,
  `can seem a bit daunting...`,
  `happen off`,
  `who paved the way`,
  `Stockpile`,
  `brittle`,
  `wind up`,
  `It all boils down to...`,
  `to wander `,
  `to haunt you`,
  `trip each other up`,
  `can be reasoned about`,
  `outcomes predicted`,
  `we get way better...`,
  `the market is tough`,
  `come off`,
  `upbeat`,
  `pump yourself up`,
  `highest bidder`,
  `regarding the...`,
  `Companies are biased towaed hiring people with right attitude`,
  `strive`,
  `thorough`,
  `drifted away from...`,
  `blissful`,
  `spite`,
  `tongue 'n'heek stab`,
  `where can I find the fitting room?`,
  `Their shoes don't match their dresses or bags, but it suits them!`,
  `It loked really in style and matched my brown skirt!`,
  `The fitting room's at the end of the shop on the right`,
  `Pure functions are functions which obey two laws`,
  `The fundamental building block we build our applications with`,
  `How would you like to ...`,
  `That's a reasonable price for those shoes`,
  `That word "reasonable" describes an item that is neither cheap nor expensive`,
  `The designer store has a sale on, so prices are more reasonable`,
  `This traffic is the worst I've seen yet, I'd better...`,
  `Would you like a receipt emailed to you?`,
  `Dou you want me to print or email the receipt?`,
  `And the real you made fun of my pie suit`,
  `The word "crowded" can mean that there are a lot of people or too many people in one place`,
  `The school's sports day is held at a large vanue`,
  `life out here is very different than life in the city`,
  `I am getting better at (it)`,
  `Around the corner = very close (place)`,
  `There's a new cafe on the way to the university`,
  `She passes a post office whilst travelling to work`,
  `the supermarket us just down the street from my apartment`,
  `I'll get breakfast on the way to work`,
  `the pharmacy is on the other side of the shopping centre`,
  `My parents live ON Quenn Street`,
  `Have you come across any nice places to eat here?`,
  `"to come across" menas to find something by change`,
  `Sometimes we come across something by change`,
  `Sometimes an especially nice place is not very well known, we can call these places "finds" or "hidden gems"`,
  `What a great find`,
  `Have you tried that new restaurant yet?`,
  `There's a supermarket just down the road from my apartment`,
  `Around the corner from my house is a really nice place..s`,
  `He owes us an appetiazer`,
  `Thanks fot that severance check`,
  `He used his severance money to start a ...`,
  `that i have some concerns`,
  `What i'm getting at, ...`,
  `my train was delayed by 30 minutes`,
  `Am I able to get a refund?`,
  `We are sorry to announce...`,
  `We are sorry for any incovenience...this may cause`,
  `...has been cancelled due to technical issues...`,
  `We are arranging a replacement bus service for ...`,
  `To go away fot the weekend.`,
  `I think we'll eat lots of local food at the supermarket`,
  `the workflow here is pretty straightforward`,
  `eaversdropping`,
  `He delves into the ...`,
  `This seemingly simple action lies a ...`,
  `with seamless integration...`,
  `By the time you finish...`,
  `A dead giveaway that a function is inpure...`,
  `It was suddenly all the rage.`,
  `If a function were to mutate a property...`,
  `which could screw up something`,
  `throughout your career`,
  `take pride in your work`,
  `be willing to learn`,
  `We decided to go away to XXx this weekend`,
  `We arraive at 10pm, if our flights aren't delayed`,
  `do you want me to quickly summarize for you?`,
  `step towards`,
  `It gets wiped out in memory (erased from memory)`,
  `Conversely (in another hand)`,
  `It's important not to confuse`,
  `We like to go on holiday in the summer`,
  `slight differences`,
  `to go on a cruise`,
  `We can use "to go" to suggest travelling and enganging in an activity.`,
  `We use "to go on" for a specific type of journey, especially an organised event`,
  `The phrase "to go to" indicates moving towards a particular destination`,
  `She wants to go camping`,
  `He doesn't want to go on a cruise`,
  `The love to go to the beach`,
  `I'd wager that's some sort of a code...`,
  `you may yet meet your match`,
  `Would that be some sort of defense against...`,
  `subtle change (b is silent)`,
  `for the job and hand`,
  `tangled up`,
  `mingling data`,
  `if the user screw up.. (make a mistake)`,
  `stale data`,
  `It's a lot more clear what's going on`,
  `rest assured`,
  `they can really add up`,
  `dodged`,
  `worth a gist`,
  `Which you've just seen an example of`,
  `everything is as it should be`,
  `Scratch the surface`,
  `At the very list`,
  `It lacks`,
  `In spite of the fact that...`,
  `at a glance...`,
  `bump into it`,
  `gather together`,
  `We'll circle back`,
  `Mark is the least intelligent of my friends`,
  `I want to go to the least dangerous place in the city`,
  `Let's focus on the least difficult problems first`,
  `Angela is the least pretty of them all`,
  `Without further ado`,
  `She plays late (she interpretes to anyone else)`,
  `Fine, have it your own way | Hazlo a tu manera`,
  `Go past the bakery and the café is on your left | We can use "past" to indicate movement beyond a certain point`,
  `More formal: The bus stop beside the bank; Less formal: The bus stop is next to the bank
    | The prepositions "beside" and "next to" both mean __by the side of something or someone__`,
  `You can tell from his stance he's still aggressive dominant | Se puede decir por su postura que sigue siendo agresivo y dominante`,
  `Seeking revenge | Buscando venganza`,
  `Meantime, let's ponder the crooke's motive | ... reflexionemos sobre el motivo del ladron`,
  `no wonder you fell for that crook's phony promises | No es de extrañar que cayeraas en las falsas promesas de ese ladron`,
  `Out of the question! | Fuera de toda duda!`,
  `My flight doesn't leave until 11pm`,
  `I often spend time with my friends, It will be nice to spend some time together`,
  `I'm sorry I screed up | Siendo haber metido la pata`,
  `Plus 30 degrees fharenheit and rising | Mas 30 grados fahrenheit y subiendo`,
  `So far, so good | Hasta ahora, todo bien`,
  `Verb patterns involve two verbs: a __stative__ verb that refers to a state of mind, and an __action__ verb
    | Stative verbs: to want to ..., to like to..., to decide to..., to hope to... to plan to..., to try to...`,
  `You have never cared about my career | Nunca te ha preocupado mi carrera`,
  `Have they worked at all | ¿Ellos han trabajado?`,
  `Has no one informed her? | ¿Nadie la ha informado?`,
  `How long have you lived here? | ¿Cuánto tiempo has vivido aquí?`,
  `Where have you worked before? | ¿Dónde has trabajado antes?`,
  `Who has helped you this week? | ¿Quién te ha ayudado?`,
  `Why have you not called them ,  Why haven't you called them?`,
  `Shut your filthy mouth | Cierre tu asquerosa boca`,
  `The world is a filthy place | El mundo es un lugar asqueroso`,
  `Our budget turned out to be smaller than we had thought | Nuestro presupuesto resultó ser menor de lo que habíamos pensado`,
  `My bag feels lighter today than yesterday | Mi bolsa se siente más ligera hoy que ayer`,
  `I'm not sure if I'm going to be able to make it | No estoy seguro de si voy a poder hacerlo`,
  `I'm sorry I didn't get to see you | Siendo haber perdido la oportunidad de verte`,
  `Why do I have to pull the heavier suitcase | ¿Por qué tengo que llevar la maleta más pesada?`,
  `Then again, It's nicer to have to much to read than too little | Por otra parte, es mejor tener muchos libros para leer que pocos`,
  `But still, next time I'm going to choose the suitcase that's smaller | Aún así, la próxima vez que voy elegiré la maleta que sea más pequeña`,
  `This is the slowest line I have ever waited in | Esta es la fila más lenta en la que jamás he esperado`,
  `A two hour delay was a bit too much for her`,
  `Which gate does the flight leave from?`,
  `We're kind of counting on your autobiography`,
  `Have you got a minute = Gotta minute`,
  `I have got to go = I gotta go`,
  `We gotta get up at five tomorrow`,
  `Shes has got a boyfriend = She's gotta boyfriend`,
  `You hungry? R: kinda = Are you hungry? R: kind of | mas o menos`,
  `I'm kinda worried, tired, thirsty | Estoy un poco preucupado, cansado, con sed`,
  `You should have asked = You shoulda asked`,
  `I would have helped you = I woulda helped you`,
  `Let me thing about it = Lemme thing about it`,
  `Could you give me a hand? = Could ya gimme a hand?`,
  `Whaddya = what do you, what are you`,
  `What are you going to do this weekend? = Whaddya gonna do this weekend?`,
  `What do you want to have for dinner? = Whaddya wanna have for dinner?`,
  `What do you have to do before work = Whaddya hafta do before work?`,
  `I hafta go to the bank, I gotta go to the bank`,
  `You haven't shared the document with us yet, have you?`,
  `My friends and I went on a road trip to ...`,
  `We planned everything in advance`,
  `On the way there, we went sightseeing in Las Vegas | De camino, hicimos turismo pro Las Vegas`,
  `I've been in a good mood lately | He estado de buen humor recientemente`,
  `He has given me so much of his time | Ha invertido mucho tiempo en mí`,
  `Social workers face many challenges nowadays | Hoy en dia, los trabajadores sociales se enfrentan a muchos desafíos`,
  `Go on an adventure`,
  `good time management skills`,
  `I may take the whole army single-handed | Puede que me lleve a todo el ejercito sin ayuda`,
  `I was heading for an island with wild natives | Me dirigía a una isla con nativos salvajes`,
  `There's something wrong with my computer screen`,
  `Did you manage to connect your phone to the wifi?`,
  `Could you give me a hand with this application?`,
  `I could switch fields for a change, too | Yo también cambiaría de sector`,
  `It's getting a bit boring`,
  `I have never worked anywhere else than in the factory`,
  `I've been looking into jobs in my field`,
  `I was mad at Dwight, I did it out of spite | Yo estaba enfadado con Dwight, lo hice por despecho`,
  `You can not go wrong with a throat punch`,
  `I get a headache when I look at the computer screen for too long`,
  `They have thought this through | Lo han pensado detenidamente`,
  `Larry has finally found his calling | ha encontrado su vocación`,
  `Nothing at work has ever brought me as much joy as this project | Nada me ha traido tanto exito en el trabajo como este proyecto`,
  `I told him not to worry about it too much`,
  `We've come to this conclusion`,
  `I came as soon as I heard what had happened`,
  `I spoke to the staff about the upcoming changes yesterday`,
  `I meant what I said | Yo quise decir lo que yo dije`,
  `This is the most exciting workplace I've ever been in`,
  `Not so much anymore`,
  `Me and my friends used to compete to see who could get the most points`,
  `We'll sprinkle some sugar on the table`,
  `Do you wnat to hang out?`,
  `Olivia is getting along well in her studies | Olivia está llevando bien sus estudios`,
  `job duties | Deberes`,
  `He hung up on me! | Me colgó`,
  `get alongo with somebody, get along in something`,
  `When we heard what had happened, we wanted to find out more`,
  `Keep up the good work!`,
  `Take after | Parecerse a`,
  `How are you holding up? | ¿Cómo lo estás sobrellevando?`,
  `I'm looking forward to it | Tengo muchas ganas, Estoy ansioso`,
  `I think you take after your mother. - Yes, we really look alike`,
  `We haven't had a chance to cath up lately | No hemos tenido oportunidad de ponernos al dia últimamente`,
  `Perhaps our gathering tonight will cheer you up | Quizá nuestra reunión de esta noche te anime`,
  `It's going to be great`,
  `My mother brought me up with lots of love | Mi mamá me crió con mucho amor`,
  `Having twins seems to run in the family | Tener gemelos parece que viene de familia`,
  `We have become closer over time | Nos hemos vuelto cercanas con el paso del tiempo`,
  `He always got on very well with his mother-in-law | El siempre se llevó muybien con su suegra`,
  `I am going to stop sleeping around | Voy a dejar de dormir por ahí (with someone)`,
  `He has been my best frind for five years now`,
  `Yesterday I took my stepson to the movies | Ayer llevé a mi hijastro al cine`,
  `I knew I would like this apartment`,
  `You were supposed to be home at six`,
  `We talked for a while`,
  `I thought we could order pizza`,
  `Do you think those two could be having an affair? | Aventura`,
  `What is the key to a happy marriage?`,
  `The staff is at your service`,
  `We want our employees to be happy and motivaded`,
  `Do you know who your ancestors are?`,
  `My roommates are basically just acquaintances to me`,
  `He became an orphan as a toddler`,
  `Those are my godparents with a random acquaintance of theirs`,
  `No, I mean the picture with the two toddlers`,
  `They're my ancestors, although I don't know exactly who they are `,
  `Toddlers should not be left unsupervised on the playground`,
  `My mother told me that being a single parent in the 1920s was tough`,
  `I'm going on a trip around India`,
  `I didn't see him yesterday either | tampoco lo vi ayer`,
  `Have you heard anything from him? | ¿Has sabido algo de el?`,
  `Did he say anything to you? | ¿Te dijo algo?`,
  `I wonder how my cousins are doing`,
  `I didn't call him yesterday even though I promised to`,
  `I haven't seen him in a very long time`,
  `Has she moved to her own place already?`,
  `Your husband does have an amazing sense of humor | This is not a question`,
  `Every Saturday my roommate would come home late | Cada sábado mi compañero de piso solía llegar a casa tarde`,
  `Used to | Se puede usar para hablar tanto de estados como de hábitos pasados`,
  `Would | Solo se puede usar para hablar de hábitos pasados`,
  `She would dress up as her twin to trick the teachers | Ella se vestía como su gemela para engañar a los profesores`,
  `What was your childhood like?`,
  `I would visit the cows every day and I knew all their names | Iba a ver a las vacas...`,
  `Can you make it to my party on Friday? | When someone asks "Can you make it to...?", they are inviting you to an event`,
  `Sure, count me in!`,
  `Thanks for the invite - we're in!; Lucy says "she's in" for your drinks party; Sure, count us in for drinks later; They said to count them in!
    | Two very common informal expressions you can use to accept a party invitation are "I'm in " and "count me in"`,
  `Can I let you know later?`,
  `Why are you always trying to play it cool? | ¿Por qué siempre intentas actuar como si nada?`,
  `Where have you been hiding yourself?`,
  `How long have you been selling ballons?`,
  `How have you been getting away with this? | ¿Cómo te has salido con la tuya?`,
  `Would you like me to bring anything?`,
  `Thank for the dinner invite`,
  `Sorry, I can't make dinner tomorrow, I have other plans`,
  `I'm afraid I can't make it | We can use "I'm afraid" to help us sound more polite when saying no to an invitation`,
  `I can't decide whether this sign should say --- or ---]`,
  `Would you mind fixing both of our wasing machines while you're here?`,
  `Accommodation will probably be the most expensive part of our trip | El alojamiento será...`,
  `I hope you will join us on the excursion`,
  `Will you take care of the travel arrangements? | ¿Te encargarás de los preparativos para el viaje?`,
  `We will confirm the schedule well in advance | Confirmaremos la planificación con bastante antelación`,
  `Rendering you personally liable | Haciéndote personalmente responsable`,
  `It sounds like we've got plenty of food | Plenty means "a large number" or "more than enough"`,
  `I think we've got some, but we'll need a few more...`,
  `Our budget will not be sufficient to stay at a five star hotel | presupuesto`,
  `You won't get to know the local way of life on a package tour`,
  `I'm going to look up flights tonight | Buscar vuelos`,
  `All the hotels are going to be full this time of the year`,
  `Are you going to visit all the countries on your bucket list? | Lista de deseos`,
  `I think we're going to travel more frequently now that the kids are older`,
  `There's no such things as an affordable but fancy hotel`,
  `We made arrangements that ended up being out of our budget range | Hicimos preparativos que terminaron estado fuera de nuestro presupuesto`,
  `The resort we visited was so shabby | El resort que visitamos estaba tan descuidado`,
  `Yes, and it was neither fancy nor all-inclusive`,
  `That's what the brochure said it should have been like | Según el folleto así debería haber sido`,
  `Next time, let's do better research before making travel arrangements`
]