import { ARTICLES } from './article-data';
import { Injectable } from 'angular2/core';

@Injectable()
export class ArticleService {

    getArticles() {
        return Promise.resolve(ARTICLES);
    }

}