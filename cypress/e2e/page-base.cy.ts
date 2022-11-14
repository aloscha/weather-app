import { Config } from "../../src/helpers"

const localUrl: string = "http://localhost:3000";
const visibleTimeout: number = 5000;

describe('Weather app base Test', () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.clearLocalStorage();
    cy.clearCookies();

    cy.visit(localUrl);
    cy.get('[data-testid="cities-container"]', { timeout: visibleTimeout }).should("be.visible");
  })

  it("Should show correct amount of cities and names", () => {
    Config.Cities.forEach((item: string, index: number) => {
      cy.get('[data-testid="cities-container"]').children().eq(index).contains(item.toLocaleUpperCase());
    });
  });

  it("Should change city after changed selection", () => {
    cy.get('[data-testid="cities-container"]').children().eq(0).should('have.class', 'selected');
    cy.get('[data-testid="cities-container"]').children().eq(1).should('not.have.class', 'selected');
    cy.get('[data-testid="cities-container"]').children().eq(1).click();
    cy.get('[data-testid="cities-container"]').children().eq(1).should('have.class', 'selected');
    cy.get('[data-testid="cities-container"]').children().eq(0).should('not.have.class', 'selected');
  });

  it("Should show API result", () => {
    cy.get('[data-testid="information-container"]', { timeout: visibleTimeout }).should("not.exist");
    cy.get('[data-testid="mainview-day-name"]', { timeout: visibleTimeout }).should("be.visible");
  });
})
