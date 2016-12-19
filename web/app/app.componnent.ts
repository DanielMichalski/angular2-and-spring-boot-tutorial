import {Component, OnInit} from "angular2/core";
import {Article} from "./article";
import {ArticleComponent} from "./article.component";
import {ArticleService} from "./article.service";

@Component({
    selector: 'articles',
    directives: [ArticleComponent],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    articles: Article[];

    constructor(private articleService: ArticleService) {
    }

    getArticles() {
        this.articleService.getArticles()
            .then(articles => this.articles = articles);
    }

    ngOnInit() {
        return this.getArticles();
    }
}
