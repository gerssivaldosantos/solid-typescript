

export default class SharedButton {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    bind(className: string, socialNetwork: string) {
        let link: string;
        if (socialNetwork == "twitter") {
            link = "https://twitter.com/intent/tweet?url=" + this.url;
        }
        //same for facebook, linkedin 
        else if (socialNetwork == "facebook") {
            link = "https://www.facebook.com/sharer/sharer.php?u=" + this.url;
        }
        else if (socialNetwork == "linkedin") {
            link = "https://www.linkedin.com/shareArticle?url=" + this.url;
        }

        const elements: any = document.querySelectorAll(className);

        for (const element of elements) {
            element.addEventListener("click", () => {
                window.open(link, '_blank');
            });
        }
    }
}