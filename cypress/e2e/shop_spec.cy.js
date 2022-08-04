describe('Shop', () => {

  beforeEach(() => {
    cy.visit("localhost:3000/");
    cy.intercept("GET", "https://fortnite-api.com/v2/shop/br", {
      statusCode: 200,
      fixture: "itemShop.json"
    });
    cy.get(".shop-button").click()
  })

  it("Should show a shop when the shop button is clicked", () => {
    cy.get(".shop").should("exist")
  });

  it("Should show a message about when the shop updates", () => {
    cy.contains("Daily items updated every day at 0:00UTC");
  });

  it("Should show multiple items pulled from the shop", () => {
    cy.contains("Eternal Wanderer");
    cy.contains("Stellar Scanner");
    cy.contains("Maximilian");
    cy.contains("Para-Provisions");
    cy.contains("The Flow");
    cy.contains("Capoeira");
    cy.contains("Make It Plantain");
    cy.contains("Rock Paper Scissors");
  });

  it("Each shop item should have a name, type and rarity", () => {
    cy.get(".shop-thing").first().contains("Eternal Wanderer");
    cy.get(".shop-thing").eq(1).contains("Stellar Scanner");
    cy.get(".shop-thing").eq(2).contains("Maximilian");
    cy.get(".shop-thing").eq(3).contains("Para-Provisions");
    cy.get(".shop-thing").eq(4).contains("The Flow");
    cy.get(".shop-thing").eq(5).contains("Capoeira");
    cy.get(".shop-thing").eq(6).contains("Make It Plantain");
    cy.get(".shop-thing").eq(7).contains("Rock Paper Scissors");
  });

  it("Shop items should have an image", () => {
    cy.get("img").first().should("have.class", "item-image");
  });

  it("Each shop item should have a price", () => {
    cy.get(".shop-thing").first().contains("1200");
    cy.get(".shop-thing").eq(1).contains("1200");
    cy.get(".shop-thing").eq(2).contains("1200");
    cy.get(".shop-thing").eq(3).contains("1200");
    cy.get(".shop-thing").eq(4).contains("500");
    cy.get(".shop-thing").eq(5).contains("500");
    cy.get(".shop-thing").eq(6).contains("500");
    cy.get(".shop-thing").eq(7).contains("200");
  });

  it("Each shop item should have a description", () => {
    cy.get(".shop-thing").first().contains("Charting the dark fringes of the universe.");
    cy.get(".shop-thing").eq(1).contains("Unlock the mysteries of every star in the galaxy.");
    cy.get(".shop-thing").eq(2).contains("Pilot your way to victory.");
    cy.get(".shop-thing").eq(3).contains("Packed at altitude.");
    cy.get(".shop-thing").eq(4).contains("Crow Foe Flow? Let's go!");
    cy.get(".shop-thing").eq(5).contains("Are you ready to dance with danger?");
    cy.get(".shop-thing").eq(6).contains("It's bananas.");
    cy.get(".shop-thing").eq(7).contains("Best out of three.");
  });

  it("Each shop item should have a type and rarity", () => {
    cy.get(".shop-thing").first().contains("Rare Outfit");
    cy.get(".shop-thing").eq(1).contains("Rare Back Bling");
    cy.get(".shop-thing").eq(2).contains("Rare Outfit");
    cy.get(".shop-thing").eq(3).contains("Rare Back Bling");
    cy.get(".shop-thing").eq(4).contains("Icon Series Emote");
    cy.get(".shop-thing").eq(5).contains("Rare Emote");
    cy.get(".shop-thing").eq(6).contains("Rare Emote");
    cy.get(".shop-thing").eq(7).contains("Uncommon Emote");
  });
})