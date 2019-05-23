import {Letter} from './Letter';

export class Templates {
  Templates: Letter[] = [
    {
      name: 'DSGVO-Auskunft',
      titleText : 'Datenschutzrechliche Selbstauskunft gemäß DSGVO',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
      'hiermit mache ich mein Recht aus Art. 15 Abs. 1 DSGVO geltend. Hierfür bitte ich um Bestätigung, ' +
      'ob mich betreffende personenbezogene Daten von Ihnen verarbeitet werden. (vgl. Art. 4 Nr. 1 und 2 ' +
      'DSGVO). Sofern dies der Fall ist, beantrage ich weiterhin die Erteilung einer Auskunft.\n' +
      '\n' +
      'Bitte stellen Sie sicher, dass die Auskunft insbesondere folgende Informationen enthält:\n',
      endClause : '\n' +
          'Sollten Sie meine personenbezogenen Daten an ein Drittland oder an eine internationale Organisation ' +
          'übermittelt haben, bitte ich um Unterrichtung über geeignete Garantien i. S. d. Art. 46 DSGVO im ' +
          'Zusammenhang mit der Übermittlung.\n' +
          'Ebenfalls eingeschlossen von meiner Anfrage ist der Antrag auf Erhalt einer vollständigen Kopie meiner ' +
          'Daten, die Gegenstand der Verarbeitung sind (vgl. Art. 15 Abs. 1 S. 1 DSGVO). \n' +
          'Ich bitte Sie, mir die betreffenden personenbezogenen Daten, die ich Ihnen zur Verfügung gestellt habe, ' +
          'im Sinne des Art. 20 Abs. 1 DSGVO in einem strukturierten, gängigen und maschinenlesbaren Format zu übermitteln.\n' +
          'Die Auskunft ist nach Art. 12 Abs. 3 DSGVO unverzüglich, in jedem Fall aber innerhalb eines Monats nach Eingang ' +
          'der Anfrage zu erteilen. Sie hat nach Art. 15 Abs. 3 DSGVO kostenlos zu erfolgen. \n' +
          'Sollten Sie meiner Anfrage nicht innerhalb der genannten Frist nachkommen, behalte ich mir vor rechtliche Schritte ' +
          'gegen Sie einzuleiten und Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzureichen ' +
          '(vgl. Art. 77 Abs. 1 DSGVO).\n' +
          '\n' +
          '\n' +
          '\n' +
      'Mit freundlichen Grüßen,',
      textblocks : [
        { name : 'text1', content: 'vollständige Auskunft über personenbezogene Daten, die verarbeitet und gespeichert werden',
          selected: true },
        { name : 'text2', content: 'der Zweck der Verarbeitung der Daten (lit. a)',
          selected : true },
        { name : 'text3', content: 'die Kategorien personenbezogener Daten, die verarbeitet werden (lit. b)',
          selected : true },
        { name : 'text4', content: 'die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen' +
              ' Daten offengelegt worden sind oder noch offengelegt werden (lit. c)',
          selected : true },
        { name : 'text5', content: 'die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder,' +
              ' falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer (lit. d)',
          selected : true },
        { name : 'text6', content: 'wenn die personenbezogenen Daten nicht bei mir erhoben wurden, alle verfügbaren' +
              ' Informationen über die Herkunft der Daten (lit. g)',
          selected : true },
        { name : 'text7', content: 'falls zutreffend, das Bestehen einer automatisierten Entscheidungsfindung ' +
              'einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und - sofern gegeben - aussagekräftige ' +
              'Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen ' +
              'einer derartigen Verarbeitung meine Person. (lit. h)',
          selected : true },
      ]
    },
    {
      name: 'DSGVO-Beanstandung',
      titleText : 'Beanstandung Ihrer Antwort auf das DSGVO-Auskunftsersuchen',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
      'Ihre Antwort auf meine Anfrage war fehlerhaft. Bitte korrigieren Sie Ihre Angaben umgehend,' +
      'Ansonsten sehe ich mich gezwungen Sie der zuständigen Aufsichtsbehörde zu melden sowie die' +
      'Ansprüche gerichtlich durchzusetzen.\n' +
      '\n' +
      'Fehlerhaft oder unvollständig waren insbesondere folgende Angaben:\n',
      endClause : '\n' +
      '\n' +
      '\n' +
      'Mit freundlichen Grüßen,',
      textblocks : [
        { name : 'return1', content: 'Es fehlten Konto- bzw. Abrechnungsdaten.',
          selected: true },
        { name : 'return2', content: 'Es fehlten Daten über mein Kaufverhalten.',
          selected : true },
        { name : 'return3', content: 'Es fehlten Nutzungsprotokolle.',
          selected : true },
        { name : 'return4', content: 'Es fehlten Zutrittsprotokolle.',
          selected : true },
        { name : 'return5', content: 'Es fehlten Standortdaten und -verläufe.',
          selected : true },
        { name : 'return6', content: 'Es fehlten Datenbankeinträge.',
          selected : true },
        { name : 'return7', content: 'Es fehlten technische Daten.',
          selected : true },
        { name : 'return8', content: 'Es fehlten interne Notizen und Aufzeichnungen.',
          selected : true },
      ]
    },
    {
      name: 'Unber. Anfrage Ausweiskopie',
      titleText : 'Unberechtigt angeforderte Ausweiskopie',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
          'kürzlich haben Sie weitere Informationen zur eindeutigen Identifikation meiner Person angefragt. Ihnen liegen bereits ' +
          'Informationen zu meiner Identität vor. Daher fordere ich Sie auf, unverzüglich das von mir beantragte Auskunftsersuchen, ' +
          'sowie dem ggf. gestellten Antrag auf Herausgabe einer Datenkopie nachzukommen. Sollte dies aufgrund der vorhandenen ' +
          'Informationen zu meiner Person nicht möglich sein, bitte ich um weitergehende Begründung, weshalb die von Ihnen ' +
          'angefragten Identifikationsmittel für eine Bearbeitung meiner Anfrage notwendig sind (vgl. ErwGr 64 DSGVO). ' +
          'Sollten Sie Ihre Einschätzung auf Grundlage einer Risikoprognose treffen, bitte ich weiterhin um Erläuterung der ' +
          'verwendeten Kriterien für eine Risikoeinschätzung.',
      endClause : '\n' +
          '\n' +
          '\n' +
          'Mit freundlichen Grüßen,',
      textblocks : []
    },
    {
      name: 'Verweis auf Kundenportal',
      titleText : 'Verweis auf Entnahmemöglichkeit aus dem Kundenportal',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
          'hiermit nehme ich Bezug auf Ihren Verweis auf die Verfügbarkeit der Daten im Kundenportal. Ich möchte Sie freundlich ' +
          'darauf hinweisen, dass dies gegen die Anforderungen, die Art. 15 Abs. 1 DSGVO an die Beantwortung eines Auskunftsersuchens ' +
          'gegen Art. 12 Abs. 2 S. 1 DSGVO verstößt. Hiernach ist dem Betroffenen die Wahrnehmung seiner Rechte zu erleichtern. Durch ' +
          'die Notwendigkeit des eigenhändigen Zusammenstellens der gewünschten Informationen ist dies vorliegend nicht gewährleistet. ' +
          'Daher bitte ich Sie erneut, umgehend dem von mir beantragten Auskunftsersuchen in datenschutzkonformer Weise nachzukommen.',
      endClause : '\n' +
          '\n' +
          '\n' +
          'Mit freundlichen Grüßen,',
      textblocks : []
    },
    {
      name: 'Antrag auf Löschung',
      titleText : 'Löschung personenbezogener Daten nach Art. 17 DSGVO',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
          'hiermit mache ich mein Recht auf Löschung gem. Art. 17 Abs. 1 DSGVO geltend. Ich fordere Sie herimit auf, ' +
          'sämtliche bei Ihnen über mich gespeicherten personenbezogenen Daten unverzüglich und vollumfassend zu löschen.\n' +
          '\n' +
          '\n' +
          'Gründe für die Löschung:\n' +
          '\n',
      endClause : '\n' +
          'Falls eine wirksame Einwilligung erteilt wurde, erfolgt hiermit hilfsweise deren Widerruf. Gleichzeitig widerspreche ich ' +
          'der Datenverarbeitung nach Art. 21 DSGVO.' +
          '\n' +
          'Sollten Sie i. S. v. Art. 17 Abs. 2 DSGVO meine personenbezogenen Daten anderen offengelegt haben, verlange ich, dass Sie ' +
          'die Empfänger über die Wahrnehmung meiner Rechte auf Löschung aller Links zu den genannten personenbezogenen Daten umfassend ' +
          'unterrichten.' +
          '\n' +
          'Mit freundlichen Grüßen,',
      textblocks : [
        { name : 'text1', content: 'Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise ' +
              'verarbeitet wurden, nicht mehr notwendig.',
          selected: true },
        { name : 'text2', content: 'Ich widerrufe meine Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a) ' +
              'oder Art. 9 Abs. 2 lit. a) DSGVO bezieht. Eine anderweitige Rechtsgrundlage für die Verarbeitung besteht nicht.',
          selected : true },
        { name : 'text3', content: 'Ich habe bereits gem. Art. 21 Abs. 1 DSGVO aus persönlichen Gründen Widerspruch gegen die ' +
              'Verarbeitung erhoben und es liegen keine vorrangigen berechtigten Gründe für eine Verarbeitung vor oder ich habe gem. ' +
              'Art. 21 Abs. 2 DSGVO infolge von Direktwerbung Widerspruch erhoben.',
          selected : true },
        { name : 'text4', content: 'Es wurde keine wirksame Einwilligung in die Verarbeitung der Daten erteilt oder die Einwilligung ' +
              'wurde wirksam widerrufen. Daher war die Verarbeitung der Daten rechtswidrig.',
          selected : true },
        { name : 'text5', content: 'Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach ' +
              'dem Unionsrecht) oder dem Recht der Mitgliedstaaten erforderlich, dem Sie als Verantwortlicher unterliegen.',
          selected : true },
        { name : 'text6', content: 'Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft ' +
              'gemäß Art. 8 Abs. 1 DSGVO erhoben. Zu diesem Zeitpunkt war ich noch nicht 16 Jahre alt.',
          selected : true },
      ]
    },
    {
      name: 'Antrag auf Einschränkung',
      titleText : 'Einschränkung der Verarbeitung nach Art. 18 DSGVO',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
          'hiermit mache ich mein Recht auf Einschränkung der Verarbeitung gem. Art. 18 Abs. 1 DSGVO geltend. Die betroffenen Daten ' +
          'dürfen daher fortan gem. Art. 18 Abs. 2 DSGVO  lediglich mit meiner Einwilligung oder zur Geltendmachung, Ausübung oder ' +
          'Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen bzw. juristischen Person oder aus ' +
          'Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.\n' +
          '\n' +
          'Gründe für die Einschränkung der Verarbeitung:' +
          '\n' +
          '\n',
      endClause : '\n' +
          'Sollten Sie die Einschränkung der Verarbeitung aufheben, bin ich zuvor gem. Art. 18 Abs. 3 DSGVO hierüber in Kenntnis ' +
          'zu setzen.' +
          '\n' +
          '\n' +
          '\n' +
          'Mit freundlichen Grüßen,',
      textblocks : [
        { name : 'text1', content: 'Ich bestreite die Richtigkeit der personenbezogenen Daten für die Dauer, die es Ihnen ermöglicht, ' +
              'deren Richtigkeit zu überprüfen\n' +
              'Dies bezieht sich auf folgende Daten: […]',
          selected: true },
        { name : 'text2', content: 'Ich halte die Verarbeitung für unrechtmäßig und Sie haben die Löschung der personenbezogenen Daten ' +
              'abgelehnt und stattdessen die Einschränkung der Verarbeitung verlangt',
          selected : true },
        { name : 'text3', content: 'Sie benötigen die personenbezogenen Daten für Verarbeitungszwecke nicht länger, ich benötige die ' +
              'Daten allerdings zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen',
          selected : true },
        { name : 'text4', content: 'Ich habe bereits gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung eingelegt, es steht ' +
              'jedoch noch nicht fest, ob berechtigte Gründe vorliegen, die die Interessen meiner Person überwiegen',
          selected : true },
      ]
    },
  ];
}
