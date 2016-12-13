import {Component} from "angular2/core";
import {NgFor} from "angular2/common";
import {Article} from "./article";
import {ArticleComponent} from "./article.component";

@Component({
    selector: 'articles',
    directives: [ArticleComponent],
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    articles: Article[] = articles;
}

const articles: Article[] = [
    new Article('Semantic UI', 'http://semantic-ui.com',
        'Semantic empowers designers and developers by creating a shared vocabulary for UI.',
        'http://semantic-ui.com/images/logo.png', 12),
    new Article('Angular 2', 'https://angular.io/',
        'Headers may be oriented to give the hierarchy of a section in the context of the page..',
        'resources/images/ang.png', 5),
    new Article('Co to jest Bower?', 'https://github.com/bower/bower.com',
        'A header provides a short summary of content..',
        'http://bower.io/img/bower-logo.png', 20)
];
