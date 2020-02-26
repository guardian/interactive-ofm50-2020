import mainTemplate from './src/templates/main.html!text'
import Mustache from 'mustache'
import rp from 'request-promise'

export function render() {
    return rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/1qtOKNErcHKEN8tP480AdvqgDhREvcQtka_NaTPSF5W4.json',
        json: true
    }).then((data) => {
        var sheets = data.sheets;
        var html = Mustache.render(mainTemplate, sheets);
        return html;
    });
}
