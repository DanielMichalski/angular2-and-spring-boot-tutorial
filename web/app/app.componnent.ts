import { Component, OnInit } from 'angular2/core';
import { FormBuilder, FORM_DIRECTIVES, Validators, ControlGroup, Control, NgClass } from 'angular2/common';
import { Article } from './article';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';

@Component({
    selector: 'articles',
    directives: [ArticleComponent, FORM_DIRECTIVES, NgClass],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {

    articles: Article[];
    articleForm: ControlGroup;

    selectedArticle: Article;

    title: Control = new Control("", Validators.required);
    link: Control = new Control("", Validators.required);
    description: Control = new Control("", Validators.required);
    image: Control = new Control("", Validators.required);

    constructor(private articleService: ArticleService, formBuilder: FormBuilder) {
        this.articleForm = formBuilder.group({
            'title': this.title,
            'link': this.link,
            'description': this.description,
            'image': this.image,
        })
    }

    getArticles() {
        this.articleService.getArticles()
            .then(articles => this.articles = articles);
    }

    ngOnInit() {
        return this.getArticles();
    }

    onSelect(article: Article, event) {
        event.preventDefault();
        this.selectedArticle = article;
    }

    onSubmit() {
        let article = new Article(
            this.title.value,
            this.link.value,
            this.description.value,
            this.image.value
        );

        this.articles.push(article);
        this.clearForm();
    }

    private clearForm() {
        this.title.updateValue("");
        this.link.updateValue("");
        this.description.updateValue("");
        this.image.updateValue("");
    }
}
