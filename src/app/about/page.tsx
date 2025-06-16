"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Home } from "@/components/about";
import { Profile } from "@/components/about";

import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/footer/footer";

export default function About() {
  return (
    <div className="flex h-screen flex-col">
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={false}
        hideMenu={false}
        clickableAuthorInfo={true}
        currentPath="/about"
      />
      <main className="flex-1">
        <Home />
        <Profile />

        <section className="h-screen w-full">
          <div className="flex h-full">
            <div className="w-1/2 border-r">
              {/* Left column content */}
              <div className="h-full overflow-y-auto p-8">
                <h2 className="mb-4 text-2xl font-bold">Blueprint</h2>

                <article className="prose prose-sm max-w-none">
                  <h1 className="mb-4 text-xl font-bold">
                    [TITOLO PRINCIPALE], [SOTTOTITOLO CHE SPIEGA IL
                    FOCUS/ASPETTO SPECIFICO]
                  </h1>

                  <p className="mb-4">
                    «[CITAZIONE SIGNIFICATIVA DI UN PROTAGONISTA/ESPERTO CHE
                    INTRODUCE IL TEMA CENTRALE]», commenta così [NOME E RUOLO]
                    il tema chiave di [PROGETTO/EVENTO/MOSTRA] che vuole
                    [OBIETTIVO PRINCIPALE]. [INFORMAZIONI PRATICHE: dove,
                    quando, durata] nella sede di [LUOGO] a [CITTÀ], lungo il
                    percorso [DESCRIZIONE GENERALE DELL&apos;ESPERIENZA] sono
                    presenti [NUMERO] oggetti/opere/elementi, [PERIODO
                    TEMPORALE/CARATTERISTICHE], da [TIPOLOGIA DI CREATORI]. Tra
                    questi, [ESEMPIO SPECIFICO 1], [ESEMPIO SPECIFICO 2] e
                    [ESEMPIO SPECIFICO 3 CON DESCRIZIONE TECNICA].
                  </p>

                  <p className="mb-4">
                    L&apos;allestimento/progetto, suddiviso in [NUMERO] sezioni,
                    [NOME SEZIONE 1], [NOME SEZIONE 2] e [NOME SEZIONE 3],
                    permette di [DIMOSTRAZIONE/OBIETTIVO PRINCIPALE]. Nella
                    prima area si [DESCRIZIONE PRIMA SEZIONE]. Tra i pezzi,
                    [ESEMPIO SPECIFICO CON AUTORE E CARATTERISTICHE] e [SECONDO
                    ESEMPIO CON DETTAGLI].
                  </p>

                  <p className="mb-4">
                    In [NOME SECONDA SEZIONE] emerge [TEMA CENTRALE DELLA
                    SEZIONE]: spicca [OPERA/ELEMENTO PRINCIPALE] di [AUTORE], un
                    oggetto che, come racconta [FONTE], è [DESCRIZIONE E
                    SIGNIFICATO], ed è &quot;[CITAZIONE ESPLICATIVA]&quot;,
                    spiegano [CHI]. [ULTERIORI ESEMPI DELLA SEZIONE].
                  </p>

                  <p className="mb-4">
                    L&apos;ultima area [FUNZIONE TERZA SEZIONE]: dal [ESEMPIO 1]
                    al [ESEMPIO 2] di [AUTORE]. [DESCRIZIONE DELL&apos;ELEMENTO
                    CONCLUSIVO O CARATTERISTICA PARTICOLARE].
                  </p>

                  <p className="mb-6">
                    [ELEMENTI DI SERVIZIO E ACCESSIBILITÀ]. Lungo il percorso
                    [DETTAGLI PRATICI PER IL PUBBLICO].
                  </p>

                  <hr className="my-6" />

                  <h2 className="mb-3 text-lg font-bold">
                    Approfondimento storico/teorico
                  </h2>

                  <p className="mb-4 font-medium">
                    [NOME PROTAGONISTA/ESPERTO] racconta [PROGETTO/CONCETTO
                    SPECIFICO] che [METAFORA O PARAGONE NATURALE/CONCETTUALE]
                  </p>

                  <p className="mb-4">
                    [TEMA FILOSOFICO/CONCETTUALE PRINCIPALE]: parole chiave e
                    matrici progettuali da riscoprire, sono al centro dei
                    recenti lavori ma anche di [RIFERIMENTI STORICI].
                    «[CITAZIONE PERSONALE CHE RIVELA LA FILOSOFIA]». A dirlo è
                    [NOME] che racconta da vicino [PROGETTO SPECIFICO], uno dei
                    suoi ultimi progetti. Si tratta di [DESCRIZIONE TECNICA] che
                    riflette sul concetto di [TEMA FILOSOFICO] a partire da
                    [ELEMENTO CONCRETO]. [NOME] precisa: «[LUNGA CITAZIONE CHE
                    SPIEGA LA FILOSOFIA PROGETTUALE E LE SFIDE]».
                  </p>

                  <p className="mb-6">
                    La volontà di pensare [AL TEMA] a partire non da [APPROCCIO
                    TRADIZIONALE], ma dalla sua [CARATTERISTICA INNOVATIVA] è
                    ciò che ha dato vita a [PROGETTO] e alla sua [CARATTERISTICA
                    TECNICA/ESTETICA]. In [CONTESTO/AZIENDA], il tema della
                    [CARATTERISTICA] non è solo [ASPETTO SUPERFICIALE] ma
                    [SIGNIFICATO PIÙ PROFONDO], aggiunge [NOME] «[CITAZIONE
                    SULLA FILOSOFIA DEL BRAND/APPROCCIO]».
                  </p>

                  <hr className="my-6" />

                  <h2 className="mb-3 text-lg font-bold">
                    Dimensione sociale/politica
                  </h2>

                  <p className="mb-4 font-medium">
                    [TEMATICA SOCIALE], [DESCRIZIONE DELLA SITUAZIONE
                    PROBLEMATICA]
                  </p>

                  <p className="mb-4">
                    [EVENTO/CONTESTO] che comincia ufficialmente [QUANDO] non è
                    fatta solo di [ASPETTI SUPERFICIALI]. Nella moltitudine di
                    [MANIFESTAZIONI] ci sono anche [CONTENUTI DI SOSTANZA] come
                    [TITOLO EVENTO SPECIFICO], l&apos;appuntamento di [QUANDO]
                    della serie [NOME INIZIATIVA], che [DESCRIZIONE DELLA
                    FILOSOFIA DELL&apos;INIZIATIVA]. Al [LUOGO], ci saranno
                    [NOME ESPERTO 1], [DESCRIZIONE COMPETENZE], e [NOME ESPERTO
                    2], [DESCRIZIONE COMPETENZE]. I due esperti parleranno di
                    [TEMI SPECIFICI], e il modo in cui [FATTORI SISTEMICI]
                    influenzano [FENOMENO OGGETTO DI STUDIO].
                  </p>

                  <p className="mb-6">
                    «[DICHIARAZIONE SULL&apos;IMPORTANZA DEL TEMA]», dice
                    [FONTE], «[SPIEGAZIONE DEL COLLEGAMENTO CON IL CONTESTO].
                    [DEFINIZIONE ESTESA DEL PROBLEMA]. [ANEDDOTO O ESEMPIO
                    CONCRETO CHE ILLUSTRA IL PROBLEMA]». E questo come
                    c&apos;entra? «[SPIEGAZIONE DELLA RICERCA/METODOLOGIA]»,
                    spiega [FONTE], «[DESCRIZIONE DEI DATI E DELLE SCOPERTE].
                    [CONCLUSIONE DELLA RICERCA]». [DESCRIZIONE DEL PATTERN
                    IDENTIFICATO]. «[DATI ECONOMICI O QUANTITATIVI].
                    [DESCRIZIONE DELLE COLLABORAZIONI CREATIVE PER COMUNICARE I
                    DATI]». Un esempio? «[ESEMPIO SPECIFICO DI TRADUZIONE
                    CREATIVA DEI DATI]».
                  </p>

                  <p className="mt-8 text-sm italic">
                    *In collaborazione con [PARTNER/ISTITUZIONE]*
                  </p>
                </article>
              </div>
            </div>

            <div className="w-1/2">
              {/* Right column content */}
              <div className="h-full overflow-y-auto p-8">
                <h2 className="mb-4 text-2xl font-bold">Esempio</h2>

                <article className="prose prose-sm max-w-none">
                  <h1 className="mb-4 text-xl font-bold">
                    Intelligenza artificiale e arte, quando la macchina diventa
                    co-autore dell&apos;opera
                  </h1>

                  <p className="mb-4">
                    «L&apos;intelligenza artificiale non sostituisce la
                    creatività umana, ma la amplifica in modi che non avremmo
                    mai immaginato. Ogni algoritmo che creiamo è un pennello
                    nuovo nella nostra tavolozza», commenta così Mario
                    Klingemann, pioniere dell&apos;AI art, il tema chiave della
                    mostra &quot;Synthetic Visions&quot; che vuole esplorare il
                    confine sempre più sfumato tra creatività umana e
                    artificiale.
                  </p>

                  <p className="mb-4">
                    Visitabile fino al 30 settembre nella sede del MAXXI a Roma,
                    lungo il percorso espositivo sono presenti 85 opere,
                    realizzate dal 2018 ad oggi, da artisti, designer e
                    ricercatori che utilizzano algoritmi generativi. Tra queste,
                    &quot;Memories of Passersby I&quot; di Mario Klingemann,
                    un&apos;installazione che genera infinite variazioni di
                    ritratti mai esistiti, &quot;The Next Rembrandt&quot; del
                    team Microsoft e &quot;Refik Anadol Data Paintings&quot;,
                    visualizzazioni di dataset trasformati in paesaggi digitali.
                  </p>

                  <p className="mb-4">
                    L&apos;allestimento, suddiviso in tre sezioni, Genesi,
                    Collaborazione e Futuro, permette di dimostrare che
                    tecnologia e sensibilità artistica possono intrecciarsi
                    creando nuove forme espressive. Nella prima area si osserva
                    come gli artisti immaginano la nascita
                    dell&apos;intelligenza creativa. Tra i pezzi, una serie di
                    autoritratti generativi di Helena Sarin, artista e ingegnere
                    software, e &quot;AI Portraits&quot;, che racconta
                    l&apos;evoluzione del volto umano attraverso reti neurali.
                  </p>

                  <p className="mb-4">
                    In Collaborazione emerge la creatività condivisa: spicca
                    &quot;AICAN&quot; di Ahmed Elgammal, un sistema che non solo
                    replica stili artistici ma ne inventa di nuovi, un oggetto
                    che, come racconta la curatrice Valentina Tanni, è &quot;un
                    perfetto esempio di come l&apos;AI possa diventare partner
                    creativo piuttosto che strumento passivo&quot;, spiegano gli
                    organizzatori. Presente anche &quot;Edmond de Belamy&quot;
                    del collettivo Obvious, il primo ritratto generato da AI
                    venduto all&apos;asta da Christie&apos;s per 432.500
                    dollari.
                  </p>

                  <p className="mb-4">
                    L&apos;ultima area immagina un mondo dove la creatività
                    artificiale è completamente integrata: dal software
                    &quot;RunwayML&quot; che democratizza l&apos;accesso agli
                    strumenti di AI generativa alle installazioni interattive di
                    Stephanie Dinkins che esplorano bias algoritmici e diversità
                    culturale. La sezione si conclude con uno spazio di
                    sperimentazione dove i visitatori possono interagire
                    direttamente con algoritmi creativi.
                  </p>

                  <p className="mb-4">
                    L&apos;ultima area immagina un mondo dove la creatività
                    artificiale è completamente integrata: dal software
                    &quot;RunwayML&quot; che democratizza l&apos;accesso agli
                    strumenti di AI generativa alle installazioni interattive di
                    Stephanie Dinkins che esplorano bias algoritmici e diversità
                    culturale. La sezione si conclude con uno spazio di
                    sperimentazione dove i visitatori possono interagire
                    direttamente con algoritmi creativi.
                  </p>

                  <p className="mb-6">
                    La mostra prevede visite guidate con interpreti
                    specializzati, percorsi tattili per non vedenti e workshop
                    interattivi per rendere l&apos;esperienza accessibile a
                    tutti i pubblici.
                  </p>

                  <hr className="my-6" />

                  <h2 className="mb-3 text-lg font-bold">
                    Approfondimento storico/teorico
                  </h2>

                  <p className="mb-4 font-medium">
                    Refik Anadol racconta &quot;Machine Hallucinations&quot; che
                    come un organismo digitale fonde precisione computazionale e
                    capacità di evolversi con imprevedibilità e adattamento
                    continuo
                  </p>

                  <p className="mb-4">
                    L&apos;universo dell&apos;AI art tra determinismo e
                    casualità: parole chiave e matrici creative da riscoprire,
                    sono al centro dei recenti lavori ma anche di pionieristiche
                    creazioni che hanno lasciato il segno. «Quello che mi ha
                    sempre affascinato, nel mio lavoro, è il paradosso. Come può
                    una macchina, programmata da regole rigide, generare
                    qualcosa di inaspettato e poetico?». A dirlo è Refik Anadol
                    che racconta da vicino &quot;Machine Hallucinations&quot;,
                    una delle sue installazioni più ambiziose.
                  </p>

                  <p className="mb-6">
                    Si tratta di una proiezione immersiva che riflette sul
                    concetto di memoria artificiale e percezione a partire
                    dall&apos;elaborazione di milioni di immagini di New York.
                    Anadol precisa: «Il limite, in questo caso, è
                    nell&apos;intento di superare la rigidità della
                    programmazione tradizionale: l&apos;essere esclusivamente
                    calcolo, elaborazione, output prevedibile. Direi un limite
                    di immaginazione artificiale, perché, se da un lato
                    l&apos;algoritmo esiste nel codice in modo determinato,
                    dall&apos;altro progettarlo significa farlo sognare secondo
                    logiche che emergono spontaneamente. I limiti
                    computazionali, certo, sono diversi tra loro, da quelli
                    tecnici fino a quelli etici, ma sono tutti parametri
                    stimolanti e carichi di potenziale. Eppure, l&apos;assenza
                    di limite, l&apos;idea di creatività emergente e di ciò che
                    non è rigidamente programmabile – pur mantenendo una
                    coerenza estetica – rappresenta per me una sfida
                    straordinaria».
                  </p>

                  <hr className="my-6" />

                  <h2 className="mb-3 text-lg font-bold">
                    Dimensione sociale/politica
                  </h2>

                  <p className="mb-4 font-medium">
                    Algoritmi che decidono chi può essere artista, dataset che
                    escludono intere culture, AI che replica stereotipi di
                    genere e razza nella generazione di immagini
                  </p>

                  <p className="mb-4">
                    La settimana dell&apos;arte contemporanea che comincia
                    ufficialmente oggi non è fatta solo di gallerie e
                    collezionisti. Nella moltitudine di eventi si contano anche
                    incontri su temi cruciali come &quot;Bias Algoritmici
                    nell&apos;Arte Generativa&quot;, l&apos;appuntamento di
                    domani della serie Digital Ethics, che alla seconda edizione
                    conferma la vocazione per i contenuti critici chiamando non
                    celebrità ma i ricercatori più preparati
                    sull&apos;argomento.
                  </p>

                  <p className="mb-6">
                    Al Palazzo delle Esposizioni, ci saranno Safiya Noble,
                    esperta di discriminazione algoritmica e autrice di
                    &quot;Algorithms of Oppression&quot;, professoressa alla
                    UCLA, e Timnit Gebru, ricercatrice in AI ethics, ex Google,
                    fondatrice di DAIR (Distributed Artificial Intelligence
                    Research). Le due esperte parleranno dei fattori che
                    favoriscono o ostacolano l&apos;inclusività nell&apos;arte
                    generativa, dai dataset non rappresentativi ai modelli che
                    perpetuano stereotipi, fino alle piattaforme che censurano
                    opere di artisti non occidentali.
                  </p>

                  <p className="mt-8 text-sm italic">
                    In collaborazione con il Dipartimento di Digital Humanities
                    dell&apos;Università La Sapienza di Roma
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        preventCityAnimation={false}
        preventTimeAnimation={false}
        preventCoordinatesAnimation={false}
        preventPageNumberAnimation={false}
        city={DEFAULT_CITY}
        time={""}
        coordinates={DEFAULT_COORDINATES}
        pageNumber={DEFAULT_PAGE_NUMBER}
        isLoading={false}
        fadeOut={false}
      />
    </div>
  );
}