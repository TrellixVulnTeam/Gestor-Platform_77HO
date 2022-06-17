import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "quiz",
    component: QuizComponent
  },
  {
    path: "",
    redirectTo: "quiz",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliationRoutingModule { }
