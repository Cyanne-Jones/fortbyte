describe('Stats page', () => {

  beforeEach(() => {
    cy.visit("localhost:3000/stats")
    cy.intercept("https://fortnite-api.com/v2/stats/br/v2?name=hails8n666", {
      statusCode: 200,
      fixture: "userStats.json"
    })
  });

  it("Should contain a login form when user navigates to the stats page", () => {
    cy.contains("Enter an Epic Username");
    cy.get("form").contains("LEMME SEE THOSE STATS");
  });

  it("Should let a user login with an Epic Games username", () => {
    cy.get("input").type("hails8n666");
    cy.get(".login-button").click();
    cy.contains("SCORE INFO");
  });

  it("Should display user's stat information after logging in", () => {
    cy.get("input").type("hails8n666");
    cy.get(".login-button").click();
    cy.contains("overall");
    cy.contains("solo");
    cy.contains("duos");
    cy.contains("squads");
    cy.contains("RANKING INFO");
    cy.contains("HITS INFO");
    cy.contains("MISC INFO");
  });

  it("Should display an error message if a user entered a bad username", () => {
    cy.intercept('GET', "https://fortnite-api.com/v2/stats/br/v2?name=invalid-username", {
      statusCode: 400,
      body: "cypress error"
    });
    cy.get("input").type("invalid-username");
    cy.get(".login-button").click();
    cy.contains("Looks like you've entered an invalid username!")
  });

  it("Should let you go back and enter another username from the stats page", () => {
    cy.get("input").type("hails8n666");
    cy.get(".login-button").click();
    cy.get(".try-again-button").click();
    cy.contains("Enter an Epic Username");
    cy.get("form").contains("LEMME SEE THOSE STATS");
  });
});