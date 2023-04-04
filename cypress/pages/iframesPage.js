export default class IframesPage {
    iframe1 = 'iframe[src="/html/src/iframes.htm"]'
    iframe2 = 'iframe[src="/html/menu.htm"]'

    getIframeContent() {
        return cy.get(this.iframe1)
            .its('0.contentDocument')
            .its('body')
            .find(this.iframe2)
            .its('0.contentDocument')
    }
    
    getAboutUsButton() {
        return this.getIframeContent().its('body').find('[class*=fa-globe]')
    }

    getLinks() {
        return this.getIframeContent().its('body').find('a[href]')
    }

    getButtons() {
        return this.getIframeContent().its('body').find('[class*=btn]')
    }

    getInputs() {
        return this.getIframeContent().its('body').find('input')
    }
}