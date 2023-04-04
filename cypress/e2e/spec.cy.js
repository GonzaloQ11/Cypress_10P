import IframesPage from '../pages/iframesPage'

describe('Handle iframes', () => {
  const iframesPage = new IframesPage()

  it('Interact with Iframe element and print data', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')

    iframesPage.getAboutUsButton().click({force: true})

    iframesPage.getIframeContent().then(iframe => cy.task('log', iframe.baseURI))

    iframesPage.getLinks().then(links => cy.printAndSaveData(links, link => link.href, 'links'))
    
    iframesPage.getButtons().then(buttons => cy.printAndSaveData(buttons, button => button.innerText || button.id, 'buttons'))

    iframesPage.getInputs().then(inputs => cy.printAndSaveData(inputs, input => input.placeholder, 'inputs'))

    //skipped sign up since it had captcha
  })
})