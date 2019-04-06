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
    }
  ];
}
