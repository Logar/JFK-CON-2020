import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  
  public constructor(private _domSanitizer: DomSanitizer) { }

  transform(html: string): SafeHtml {
    html = html.replace(/\\/g, '');
    return this._domSanitizer.bypassSecurityTrustHtml(html);
  }
}
