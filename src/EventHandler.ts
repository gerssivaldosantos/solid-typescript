export default class EventHandler{
    addEventListenerToClass(className: string, event: string, callback: any){
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener(event, callback);
        }
    }
}