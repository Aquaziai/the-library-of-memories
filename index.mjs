import { PageFlip } from "./node_modules/page-flip/dist/js/page-flip.module.js";
const pageFlip = new PageFlip(document.getElementById('book'), {
    width: 710, // required parameter - base page width
    height: 789, // required parameter - base page height
    startZIndex: 0,
    autoSize: false,
    showCover: true,
    mobileScrollSupport: true,
});
pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
pageFlip.loadFromImages(["belveth.png, monkey.png, years.png"]);
