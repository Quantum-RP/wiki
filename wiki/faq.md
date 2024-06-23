---
title: ❓ FAQ
index: 2
---

# ❓ FAQ

Hier findest du Antworten auf häufig gestellte Fragen rund um den Quantum RP Server. Die FAQ ist in drei Kategorien unterteilt: Spielinternes FAQ, Technisches FAQ und Roleplay FAQ.

## Inhaltsverzeichnis
1. [Spielinternes FAQ](#spielinternes-faq)
2. [Technisches FAQ](#technisches-faq)
3. [Roleplay FAQ](#roleplay-faq)

## Spielinternes FAQ 🎮

## Kontowiederherstellung, Sicherheit und Daten
<details>
<summary>Ich musste meinen PC neu aufsetzen und muss einen neuen Charakter erstellen?</summary>
Hey,

solltest du nach einer Wiederherstellung deines Betriebssystems Schwierigkeiten haben, dich mit deinem alten Charakter einzuloggen, dann probiere folgende Schritte:

- Stelle sicher, dass du mit deinem richtigen Rockstar Games Account eingeloggt bist.
- Logge dich mit deinem FiveM Konto ein, auf welchem du bisher gespielt hast.
- Logge dich mit deinem aktuellen Steam Konto ein.
- Melde dich mit deinem richtigen Discord Account an, damit deine Discord ID entsprechend mit FiveM synchronisiert wird.

Der Rockstar Account ist essentiell wichtig, denn dieser wird mit ESX Framework verknüpft, also dein Charakter und dein Inventar sind verbunden.

Sollten diese Schritte dennoch nicht aushelfen, dann können wir deinen Account einmalig wiederherstellen.
Eine Wiederherstellung ist danach nicht mehr möglich und dein Charakter geht verloren.

Bitte melde dich nach den oben genannten Schritten noch einmal im Ticket, wir suchen die entsprechenden Benutzerinformationen dann heraus. Das Support Team erledigt den Rest. Wir ersetzen also deine neue License mit deiner alten License.
</details>

<details>
<summary>Phishing: Du darfst nicht anbeißen!</summary>
Obwohl Identitätsdiebstahl eines der ältesten Verbrechen im Internet ist, gibt es noch immer Menschen, die nicht wissen, wie er funktioniert. Die einfachste Methode ist, jemandem eine gefälschte Nachricht zu schicken, die seine Aufmerksamkeit erregt, um sie dann dazu zu verwenden, seine Daten unbemerkt zu stehlen.

Bei Discord handelt es sich oft um Webseiten, die kostenlose Dinge versprechen. Unter keinen Umständen wird ein Admin von Altera Vita jemals nach deinen Informationen fragen oder dich direkt über den Discord, das Spiel oder über soziale Netzwerke kontaktieren. Sollten wir dich kontaktieren wollen, dann wird ein entsprechendes Ticket eröffnet.
</details>

<details>
<summary>Konto-Sicherheit!</summary>
Wenn dein Konto bereits kompromittiert wurde, sende CFX eine Support Anfrage und sprich uns an, um deinen Account sicherheitshalber zu sperren.

#1 - Wähle ein sicheres Passwort
#2 - Benutze einen Passwortmanager
#3 - Schütze dein E-Mail-Konto
#4 - Melde dich an öffentlichen Orten ab
#5 - Teile dein FiveM-Konto mit niemandem
#6 - Nimm dich vor Phishing-Versuchen in Acht
</details>

## Lags, niedrige FPS, Hardware, technische Fehler
<details>
<summary>Die Stadt lädt nicht oder verschwindet.</summary>
Solltest du ein Problem beim Laden der Spielwelt haben oder unter die Map fallen, weil die Texturen nicht richtig geladen werden/wurden, dann solltest du deine Grafikeinstellung wie folgt übernehmen:
  
  - **FXAA:** 										AN
  - **MSAA:** 										Wenn nötig AN, sonst aus
  - **Bevölkerungsdichte:** 			0
  - **Bevölkerungsvielfalt:** 		0
  - **Darstellungsdistanz:** 			0
  - **Extended Texture Budget:** 	ca 3/4
</details>

<details>
<summary>Es laggt oder stottert beim Fahren am Würfelpark oder am VC Autohaus.</summary>
Hier solltest du die Texturen Qualität auf Normal stellen.
Ist sie höher, so laden die Texturen nicht schnell genug und bringen dein PC zum "stocken".
</details>

<details>
<summary>Wie richte ich mein SaltyChat ein?</summary>
Solltest du Probleme mit Saltychat haben können wir dir sicher helfen.
Für unerfahrene User haben wir ein kleines Tool erstellt was euch das ganze vereinfacht. Dieses findest du auf unserem Discord unter #saltychat.
  
Alternativ probiere folgendes:
- Gehe dafür bitte einmal in deine Systemsteuerung und in deine Netzwerkeinstellung [Netzwerk- und Freigabecenter]
- Dort gehst du in "Adaptereinstellungen ändern".
- Dort siehst du deine Lan/Wlan Adapter. Entweder einen oder mehrere. Dies variiert je nachdem was für ein PC du hast. Dort machst du einen Rechtsklick auf deinen Adapter der benutzt wird und gehst in die Eigenschaften.
- Nun siehst du eine Reihe von "Optionen". Hier sind nur zwei relevant für dich. Einmal die IPV4 und IPV6 Option.
- In beiden gehst du in die Eigenschaften und übernimmst bitte folgende DNS Optionen:
**IPV4:**
8.8.8.8
8.8.4.4
**IPV6:**
2001:4860:4860::8888
2001:4860:4860::8844
</details>

<details>
<summary>Das SaltyChat Plugin lässt sich nicht installieren.</summary>
Das kommt vor, da du für das .TS3 Plugin Format die TeamSpeak.exe ausgewählt hast. Du musst jetzt folgendes tun:
  
- Rechtsklick auf das Plugin und auf Eigenschaften.
  - Anschließend auf: Ändern -> Weitere Apps
- Darin findest du die .exe "package_inst". Diese wählst du aus und klickst auf übernehmen.
</details>

<details>
<summary>Ich höre alle reden, wie stelle ich das aus?</summary>
Bei Problemen mit Sounds oder das ihr Personen hört bzw. nur einzelne Personen die sich nicht in eurer Nähe befinden, dann schaut doch einmal bitte in euren Einstellungen nach:
  
- "ESC" um eure Einstellungen zu öffnen
- Reiter "Einstellungen"
- Option "Sprach-Chat"
- Sprach-Chat aktiviert auf AUS
</details>

<details>
<summary>Netzwerk Probleme - alle kommen drauf, ich aber nicht, was tun?</summary>
Dieser Fehler kann an vielen Gründen liegen. Bitte folge zunächst folgende Schritte und prüfe ob du dann auf den Server kommst.
  
#1: Status von CFX.re und Altera Vita prüfen:
       Auf https://status.cfx.re/ prüfen ob „All Systems Operational“ 
       Auf https://status.r3ktm8.de/ prüfen ob „Alle Systeme betriebsbereit“
#2: Cache löschen
#3: Computer neustarten
#4: via Console im Hauptmenü (F8= folgenden Befehl eingeben "connect alteravitarp.de"
#5: (Internet)-Router neustarten (z.B. Fritzbox, Netgear, etc.)
#6: Prüfen ob Windowsupdates verfügbar sind und diese ggf. installieren
#7: DNS Einstellungen überprüfen: (Google DNS https://developers.google.com/speed/public-dns/ | Open DNS https://use.opendns.com/)
#8: Auf den nächsten Serverrestart warten
#9: FiveM neuinstallieren
</details>

## Meldungen, Verwarnungen und Banns
<details>
<summary>Hilfe! Mein Konto wurde gesperrt!</summary>
Es ist ziemlich erschreckend, wenn du dich anmelden möchtest und dir dann gesagt wird, dass du gebannt worden bist! Du kannst einen Bann grundsätzlich immer in zwei Kategorien einteilen:
  
  - Ein Bann, welcher vom administrativen Team ausgesprochen worden ist.
  - Ein Bann, welcher vom Anti-Cheat-System erteilt worden ist.
  
Solltest du von einem Teammitglied gebannt worden sein, kannst du ein entsprechendes Entbannungsticket in unserem Discord öffnen und dich dort mit uns in Verbindung setzen.

Selbiges gilt übrigens für ein Anti-Cheat Bann, welchen wir nach ausreichender Überprüfung selbstverständlich aufheben, wenn wir keine merkwürdigen Kontobewegungen feststellen konnten.
  
Hilfreich im Ticket selbst ist immer ein Screenshot, welchen du beim Verbindungsaufbau erhältst.
</details>

<details>
<summary>Dein Freund wurde gebannt und kann keinen Entbannungsantrag schreiben?</summary>
Auch das soll kein Hindernis darstellen. Wir haben ein externes Entbannungsformular vorbereitet, auf welchem sich dein Freund bei uns melden kann. Völlig unverbindlich und ebenfalls schnell bearbeitet. Dafür öffne diesen Link:

  - https://bit.ly/3zYRycF
</details>

<details>
<summary>Eine Erklärung zu permanenten Banns!</summary>
Wenn du auf Altera Vita permanent gesperrt wirst, kannst du mit dem jeweiligen Konto nicht mehr auf unserem Server spielen.

Bisher ist Folgendes passiert:
  - **Du wurdest bereits** wegen schlechten Verhaltens gesperrt.
  - Du wusstest, dass du permanent gesperrt werden kannst, **wenn du dieses Verhalten fortsetzt**.
  
**Kann meine permanente Sperre aufgehoben werden?**
  
Permanente Sperren werden meistens nicht aufgehoben. In der Regel wurdest du bereits gesperrt, bevor du permanent gesperrt wirst. Du wusstest also, dass dein Verhalten laut dem Regelwerk inakzeptabel war. Sperren, die durch die Projektleitung verhängt werden, werden ebenfalls in den meisten Fällen nicht aufgehoben. Berechtigte Strafen werden ebenfalls nicht aufgehoben.

Bitte vergiss nicht, dass du abhängig von der Schwere deines Fehlverhaltens im Spiel auch ohne wiederholte Warnungen für zwei Wochen oder permanent gesperrt werden kannst. Schweres Fehlverhalten kann jederzeit und ohne Vorwarnungen oder Einschränkungen zu einer permanenten Sperre führen.
</details>

<details>
<summary>Ich möchte einen Regelverstoß melden!</summary>
Störende und oder rücksichtslose Spieler lassen sich gänzlich nicht immer vermeiden. Solltest du im Roleplay eine unangenehme Situation erleben, hast du prinzipiell immer die Möglichkeit, nach der Situation ein Teammitglied zu rufen.

Auf dem **Server** drückst du dafür "T" und schreibst /report
  - Du wählst eine entsprechende Kategorie aus
  - Beschreibe dein Problem kurz und knapp

Auf **Discord** kannst du dich jederzeit im Ticket-Bereich an uns wenden
  - Halte einen Clip mit einer Mindestlänge von 10 Minuten bereit
  - Warte auf eine entsprechende Antwort seitens des Teams
</details>

<details>
<summary>Was passiert, wenn Spieler verbotene Wörter verwenden?</summary>
Es gibt da einfach ein paar Dinge, die man zu einem lebenden, atmenden Mitmenschen nicht sagen sollte. Bei einigen dieser Dinge handelt es sich um eher harmlose Begriffe, die in einem sehr spezifischen Zusammenhang verwendet werden, um jemanden zu erklären, wie die Dinge im Spiel funktionieren.

Im Folgenden findest du Informationen darüber, was passiert, wenn du (oder ein anderer Spieler) verbotene Wörter verwendest:
  
- **Im Kopf (mache ich XY)**

- **Im Kopf (Äquivalent AFK)**

- **Suppe, Suppenküche, Suppenkoch etc.**

- **Götter, Powerranger, Obrigkeit, Engel etc.**

- **Buch Gottes, Bibel, Beten etc.**

- **Kopfschmerzen (Alle Synonyme für Lags oder Verbindungsabbrüche)**

- **Caillou (Alle Synonyme für Troller)**
 
Bei Verwendungen dieser Wörter wird in den meisten Fällen ein roter Bildschirm mit "Verwarnung" auftauchen. Damit machen wir dich darauf aufmerksam, dass diese Wörter - meistens im Sinne von "OOC-Talk" nicht im Roleplay gestattet sind und dieses Verhalten untersagt ist. Bei mehrmaligen Verstößen musst du mit einer temporären Sperre in Form eines Banns rechnen.
  
*Die folgende Liste wird stets erweitert. Diese Begriffe sind unter keinen Umständen im Roleplay zu nutzen!*
</details>

<details>
<summary>Melde einen Spieler nach einer Situation.</summary>
Regelbrechende Spieler führen oft zu verzweifelnden Situationen, oftmals zu unangenehmen Situationen. Trotzdem wird das Roleplay immer ausgespielt, bevor ein Report geschrieben wird.

Alles weitere findest du unter dem Reiter
  - **"Ich möchte einen Regelverstoß melden!"**
</details>

## Erstattungen und Verluste von Gegenständen
<details>
<summary>Wie sieht die Erstattungs-Policy auf dem Server aus?</summary>
Prinzipiell gilt:

- sind Verluste durch Serverfehler entstanden, kann eine Erstattung per Ticket Support angefragt werden.
- sind Verluste durch Spieler entstanden, erfolgt keine Erstattung.
- sind Verluste durch grobes Trolling (Massen RDM/VDM) entstanden, dann kann situationsabhängig eine Erstattung angefragt werden.
</details>

<details>
<summary>Ich habe mein Tuning durch einparken eines anderen Users verloren.</summary>
Bei jedem Leistungstuning erhält man in der Regel ein sogenanntes Teilegutachten, in welchem die verbauten Materialien (z.B. Motor, Fahrwerk, Chips etc.) detailliert aufgelistet sind. In solchen Fällen können wir eine Erstattung genehmigen. Ohne ein Teilegutachten kann mit ausreichendem Clip (mind. 10 Min) auch eine Erstattung erfolgen. Im Clip muss allerdings folgendes zu sehen sein:
  
- Wer hat das Leistungstuning verbaut?
- Welches Leistungstuning wurde verbaut?
- Welche Fraktion / Gewerbe hat das Leistungstuning verbaut?
- Unter welchen Bedingungen ist das Leistungstuning abhanden gekommen?
</details>
