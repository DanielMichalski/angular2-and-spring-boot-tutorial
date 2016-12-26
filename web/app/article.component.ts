import { Component } from 'angular2/core';
import { Article } from './article';
import { MultiplyVotesPipe } from './multiply-votes.pipe';

@Component({
    selector: 'single-article',
    inputs: ['article'],
    host: {
        class: 'singlearticle'
    },
    templateUrl: 'app/article.component.html',
    pipes: [MultiplyVotesPipe]
})

export class ArticleComponent {

    article: Article;

    votePlus(): boolean {
        this.article.votePlus();
        return false;
    }

    voteMinus(): boolean {
        this.article.voteMinus();
        return false;
    }

}

