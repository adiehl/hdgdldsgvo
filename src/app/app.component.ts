import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textblocks1 = [
    { name : 'text1', content: 'vollumfänglich sämtliche über mich bei Ihnen gespeicherten Daten in Kopie zu überlassen,' },
    { name : 'text2', content: 'den Zweck der Verarbeitung dieser Daten zu nennen,',
      selected : false },
    { name : 'text3', content: 'die Empfänger oder Kategorien von Empfängern, die meine Daten bereits erhalten haben oder' +
              ' zukünftig noch erhalten werden zu nennen,',
      selected : false },
    { name : 'text4', content: 'die geplante Dauer der Speicherung dieser Daten zu nennen,',
      selected : false },
    { name : 'text5', content: 'sofern die Daten nicht bei mir erhoben werden, mir alle verfügbaren Daten über die Herkunft der' +
                               ' Daten mitzuteilen,',
      selected : false },
    { name : 'text6', content: 'mir darzulegen, ob eine automatisierte Entscheidungsfindung einschließlich Profiling gmäß Art. 22 DSGVO ' +
              'besteht und mir in diesem Fall aussagekräftige Informationen über die involvierte Logik und die angestrebten' +
              ' Auswirkungen einer derartigen Verarbeitung für meine Person zukommen zu lassen,',
      selected : false }
  ];
  companyList = [
    { companyName : 'Netflix' },
    { companyName : 'Amazon' },
    { companyName : 'Google' }
  ];
}
