

import EventHandler from "./EventHandler";

export default class SharedButton {
    eventHandler: EventHandler;
    url: string;

    constructor(url: string) {
        this.url = url;
        this.eventHandler = new EventHandler();
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

        this.eventHandler.addEventListenerToClass(className, "click", ()=> window.open(link))
       
    }
}