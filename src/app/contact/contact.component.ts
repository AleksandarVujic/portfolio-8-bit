import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fileUrl: SafeResourceUrl;
  dataCV: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.httpClient.get('assets/resources/files/aleksandar_vujic.pdf', { responseType: 'blob' })
      .subscribe(data => this.dataCV = data);
  }

  ngDoCheck() {
    const data = this.dataCV;
    const blob = new Blob([data], { type: 'application/pdf' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
