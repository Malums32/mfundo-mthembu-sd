import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface InfoPanelData {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class InfoPanelService {
  private panelSubject = new BehaviorSubject<InfoPanelData | null>(null);
  panel$ = this.panelSubject.asObservable();

  show(title: string, content: string): void {
    this.panelSubject.next({ title, content });
  }

  hide(): void {
    this.panelSubject.next(null);
  }
}
