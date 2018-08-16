describe('Comic List', function () {
	beforeEach(function () {
		cy.visit('http://localhost:3000');
	});
	it('should sadfjhk', function () {
		cy.url().should('contain', '/');
	});
	it('should type in input fields', function () {
		cy.get('input[name=thumbnail]').type('https://3.bp.blogspot.com/-iYtFZ2bz5fk/WIKgOTZoyYI/AAAAAAABPB8/bWLYkt8uJ54RdcUB43MSgG2TUfo3ST1ogCLcB/s1600/wtayteu75gqx.jpg');
		cy.get('input[name=id]').type('28365472634');
		cy.get('input[name=title]').type('MAKE AMERICA GREAT AGAIN');
		cy.get('input[name=description]').type('TRUMP VISITS THE WHITE HOUSE');
		cy.get('input[name=quantity]').type('666');
	});
});