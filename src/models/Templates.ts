import {Letter} from './Letter';

export class Templates {
  Templates: Letter[] = [
    {
      name: 'DSGVO-Auskunft',
      titleText : 'Datenschutzrechliche Selbstauskunft gemäß DSGVO',
      introText : 'Sehr geehrte Damen und Herren,\n\n' +
      'nach Art. 15 DSGVO habe ich das Recht, von Ihnen eine Bestätigung darüber zu verlangen' +
      ', ob sie personenbezogene Daten über mich gespeichert haben. Sofern dies der Fall ist, so habe ich ein' +
      ' Recht auf Auskunft über diese Daten.\n' +
      '\n' +
      'Ich darf Sie in diesem Fall bitten, mir\n',
      endClause : '\n' +
      '\n' +
      '\n' +
      'Mit freundlichen Grüßen,',
      textblocks : [
        { name : 'text1', content: 'vollumfänglich sämtliche über mich bei Ihnen gespeicherten Daten in Kopie zu überlassen,',
          selected: true },
        { name : 'text2', content: 'den Zweck der Verarbeitung dieser Daten zu nennen,',
          selected : true },
        { name : 'text3', content: 'die Empfänger oder Kategorien von Empfängern, die meine Daten bereits erhalten haben oder' +
          ' zukünftig noch erhalten werden zu nennen,',
          selected : true },
        { name : 'text4', content: 'die geplante Dauer der Speicherung dieser Daten zu nennen,',
          selected : true },
        { name : 'text5', content: 'sofern die Daten nicht bei mir erhoben werden, mir alle verfügbaren Daten über die Herkunft der' +
          ' Daten mitzuteilen,',
          selected : true },
        { name : 'text6', content: 'mir darzulegen, ob eine automatisierte Entscheidungsfindung einschließlich Profiling gmäß ' +
          'Art. 22 DSGVO ' +
          'besteht und mir in diesem Fall aussagekräftige Informationen über die involvierte Logik und die angestrebten' +
          ' Auswirkungen einer derartigen Verarbeitung für meine Person zukommen zu lassen,',
          selected : true }
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
