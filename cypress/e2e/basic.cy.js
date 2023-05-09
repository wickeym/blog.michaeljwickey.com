describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains("I don't like writing, but I love sharing things that cause me to wonder in fascination.");
  });
});
