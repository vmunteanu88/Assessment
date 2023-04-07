import dayjs from 'dayjs'

describe('UI tests', () => {

  beforeEach(() => {
    cy.visit({
      url: '/automation-practice-site.html',
      method: 'GET'
    })
  })

  it('Task - 01', () => {
    const myName = "Munteanu Victor";

    cy.get('a[href="alert.php"]')
      .invoke('removeAttr', 'target')
      .find('[alt="alert"]')
      .click();

    cy.get('a[href="#example-1-tab-2"]')
      .click().then(() => {
        cy.get('iframe[src="alert/input-alert.html"]').then(($iframe) => {
          cy.stub($iframe[0].contentWindow, 'prompt').returns(myName).as('windowsPrompt');
          cy.wrap($iframe.contents().find('button')).click()
        })
      })

    cy.get('.demo-frame')
      .its('1.contentDocument')
      .its('body')
      .find('#demo').should('contain', myName);
  })

  it('Task - 02', () => {
    const todaysDate = dayjs(new Date()).format("YYYY-MM-DD");

    cy.get('a[href="datepicker.php"]')
      .invoke('removeAttr', 'target')
      .find('[alt="date picker"]')
      .click();

    cy.get('a[href="#example-1-tab-4"]')
      .click()
      .then(() => {
        cy.get('iframe[src="datepicker/defult4.html"]').then(($iframe) => {
          const $body = $iframe.contents().find('body');
          cy.wrap($body).find('#datepicker').click()
          cy.wrap($body)
            .find('td[class=" ui-datepicker-days-cell-over  ui-datepicker-today"]').click();
          cy.wrap($body).find('#format').select('ISO 8601 - yy-mm-dd');
          cy.wrap($body).find('#datepicker').invoke('val').should('contain', todaysDate);
        })
      })
  })
})

Cypress.on('uncaught:exception', () => false)