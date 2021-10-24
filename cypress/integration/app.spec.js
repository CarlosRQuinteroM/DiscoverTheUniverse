describe("Universe application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the h1 header", () => {
    cy.get("h1").should("have.text", "DISCOVER THE UNIVERSE");
  });

  it("should display the planets a user can view", () => {
    cy.get(".planet").should("exist");
  });

  describe("Planet view", () => {
    it("navigates to a page with the planet selected", () => {
      cy.get(".css-n53o17-Home > :nth-child(1)").click();
      cy.url().should("include", "/bodies/1");
    });
    it("shows planet name Mercury", () => {
      cy.get(".css-n53o17-Home > :nth-child(1)").click();
      cy.get("h1").should("have.text", "Mercury");
    });
    it("should show the Falcon Type XIV shuttle launch for Mercury", () => {
      cy.get(".css-n53o17-Home > :nth-child(1)").click();
      cy.get(":nth-child(1) > .ml-auto").should("exist");
    });
    it("should have a buy button to confirm a ticket purchase", () => {
      cy.get(".css-n53o17-Home > :nth-child(1)").click();
      cy.get(":nth-child(1) > .ml-auto").click();
      cy.get(".btn").should("exist");
    });

    describe("Confirmation Page", () => {
        it("should have a unique page for the payment confirmation", () => {
            cy.get(".css-n53o17-Home > :nth-child(1)").click();
            cy.get(":nth-child(1) > .ml-auto").click();
            cy.get(":nth-child(1) > .ml-auto").find('.btn').click();
            cy.url().should("include", "/bodies/confirmation");
        });
    });
  });
});

