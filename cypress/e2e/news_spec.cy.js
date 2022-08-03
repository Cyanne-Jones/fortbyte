describe('News/Home', () => {

  beforeEach(() => {
    cy.visit("localhost:3000/");
    cy.intercept("GET", "https://fortnite-api.com/v2/news", {
      statusCode: 201,
      fixture: "news.json"
    })
  })
  it('Should visit the landing page with the title', () => {
    cy.contains("FORTBYTE");
  });

  it("Should have nav bar containing all the nav headers",() => {
    cy.get("nav").contains("News");
    cy.get("nav").contains("Stats");
    cy.get("nav").contains("Item Shop");
  });

  it("Should have several news items on page load", () => {
    cy.get(".news-item").contains("Indiana Jones Is Here");
    cy.get(".news-item").contains("No Sweat Summer");
    cy.get(".news-item").contains("GeForce Now");
    cy.get(".news-item").contains("Arena Zero Build Update");
  });

  it("Should contain a star button in the news items", () => {
    cy.get(".news-item").contains("p", "★");
  });

  it("Should start with no news items favorited", () => {
    cy.get(".filter-button").click();
    cy.should('not.have.class', ".news-item");
  });

  it("Should let a user store favorited news items", () => {
    cy.get(".star").first().click();
    cy.get(".filter-button").click();
    cy.get(".news-item").contains("Indiana Jones Is Here");
  });

  it("Should let a user unfavorite news items", () => {
    cy.get(".star").first().click();
    cy.get(".filter-button").click();
    cy.get(".star").click();
    cy.get(".news").should('not.have.class', ".news-item");
  })
})