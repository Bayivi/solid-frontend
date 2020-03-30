import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { QuizSession } from '../../state/quiz.model';

@Component({
  selector: 'solid-quiz-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  QuizSession: Observable<QuizSession | null>;

  constructor(service: QuizService, store: Store) {
    service.loadQuestions();
    this.QuizSession = store.select(s => s.quiz.session);
  }

  test() {
    this.QuizSession = of(null);
  }
}
