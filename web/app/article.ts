export class Article {
    title: string;
    link: string;
    description: string;
    image: string;
    votes: number;

    constructor(title: string, link: string, description: string, image: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.description = description;
        this.image = image;
        this.votes = votes || 0;
    }

    votePlus(): void {
        this.votes += 1;
    }

    voteMinus(): void {
        this.votes -= 1;
    }

}