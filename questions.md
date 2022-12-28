# Domande

#### npm vs yarn vs pnpm. Quale package manager sceglieresti per un nuovo progetto? Perché eviteresti gli altri?

Premetto che le mie risposte di basano sul non avere mai usato pnpm. Sceglierei PNPM o yarn 1.x.
Sceglierei PNPM per un progetto da zero e farei il tutto con node 14 in quanto qui https://pnpm.io/it/installation l' unico node che viene supportato da tutte le versioni in elenco è il 14. Dedicherei comunque del tempo a studiarne le criticità possibili. 
Ho messo anche yarn 1.x perchè è quello su cui mi affaccio normalmente. 
Credo sia corretto provare un package manager come pnpm dato che ad oggi ci sono diverse versioni (quindi immagino sia maturo).
Rimanere legati a yarn/npm solo perchè "li ho già usati" non è un approcio che non mi piace.
Sceglierei pnpm perchè credo che nel tempo la gestione dei node_modules vada rivista e pnpm lo ha fatto.

Non sceglierei npm perchè penso sia ormai consilidato, e con yarn 1.x mi trovo appunto bene.
Non sceglierei yarn 2.x perchè la gestione dei node_modules per le prove che ho fatto (e qualche esperienza letta sul web) mi dava diversi problemi. Esperienze di ex colleghi che hanno provato prima yarn 2.x per poi scegliere pnpm.

---
#### Descrivi un’architettura software su cui hai lavorato e che per te è un punto di riferimento positivo da cui trarre ispirazione
Descrivo un progetto dalla sua nascita ad un suo deploy finale in un mondo perfetto che vorrei:

Sarebbe utile essere al corrente di alcuni punti:
- chi è l' utilizzatore finale di questo prodotto? Quanti sono gli ipotetici utilizzatori? Gli utilizzatri sono della mia stessa azienda (pochi)? Sono utenti generici dal web (tanti/N)?
- il prodotto è un sito che punta a scalare le ricerce tramite SEO? Oppure è un prodotto ad uso interno e magari anche dietro vpn? (zero SEO).
- il prodotto necessità di essere un applicativo server side o client side? Le prime due domande possono indirizzarmi.
- che tecnologie posso / non posso usare? Sapere le skill del team potrebbe aiutarmi.
- esistono dei requisiti scritti dal business?

Capito questo scelgo lato infrastrutturale i provider (o mi adeguo a quello che mi viene imposto)
- un tool per le pipeline. Imposterei quindi una pipeline minimale con dei task come [build,test,deploy]
- un tool per il deploy. Se l' azienda lavora con Azuere o Aws troverei il modo per rimanere sulla stessa piattaforma.
- imposterei i deploy in feature brach con una continuos integration. 

Nel dettagio imposterei il progetto esclusivamente frontend cosi:
- possibile sviluppo in TDD. La produttività aumenta considerevolemtne se si hanno ricevuto i requisiti scritti prima e/o se non esiste un backend pronto con delle API.
- linter e pretty. Ognuno può scrivere come vuole, ma pre-push viene formattato il sorgente con regole UGUALI per tutti
- organizzerei un alberatura di cartelle e file che permetta di essere abbastanza scalabile fra i vari colleghi.
- ad ogni logica complessa aggiornerei una doc mantenuta all' interno del progetto o anche su tool esterni (tipo notion).

***Un caso reale è stato: "Rifare il sito aziendale".***
Da una soluzione custom in js abbiamo portato fuori una soluzione più standard in modo che:
- potessivo avere un boost lato SEO
- potessimo avere un boost lato performance sito
- potessimo incorporare diversi contenuti che risiedono in tool di diverse parti (tipo medium/zendek)
- potessimo contribuire a standardizzare pian piano react in tutti i progetti frontend del team
- potessimo avere un sito multilingua

Lo studio vedeva Next js vs Gatsby. Vincitore Next in quanto:
- può portarte a miglirare SEO/perfomance
- può aiutarci con i contenuto + un CMS headless
- AWS amplify annuncia il support per app Next, e già il team usa AWS.


Ho scritto mondo perfetto in quanto nella mia esperienza tutti i punti elencati sono stati spesso conditi con:
- c'è poco tempo :)
- usiamo AWS (esempio) perchè vercel non è in house. Quindi scelte non fatte ma imoposte.
- iniziare un progetto senza specifiche o con alcune specifiche, ma solo con del layout (fatti da chi non sa niente del dominio)
- non mi sono mai trovato a lavorare in un progetto che seguisse al 100% clen-code o BBB per esempio, e quindi nutro lacune in questo nel caso debba impostare io da 0. Userei del tempo per imparare. 


---
#### Styled components, Emotion, Bootstrap, Ant, Material UI, Tailwind… qual è secondo te lo styling framework migliore, e perché?
I nomi elencati fanno cose diverse. Per come li intepreto io sono:
- styled-component e emotion: un modo standard per stilizzare qualsiasi componente react/custom component/tag html
- bootstrap / tailwind: mi danno solo utility e codici agnostici rispetto al progetto (usabili quindi anche in Vue js tipo)
- materia ui, ant: vere e proprio librerie grafiche di componenti

Detto questo il migliore per me potrebbe essere:
- material ui se devo deliverare un qualcosa che è più una dashboard che un sito. O se devo prototipare. O se devo creare un tool ad uso interno per semplificare la vita a qualche collega. Ant perde solo perchè l' ho usato una sola volta. 
- tailwind vincente su bootstrap. Ho usato molto di più tailwind. Mi sembra veramente potente. 
- styled-component: anche qui, ho usato solo styled-components al posto di emotion. Sicuramente tutti e due molto potenti. 