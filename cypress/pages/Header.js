class Header {
    elements = {
        menuBtn: () => cy.get('#react-burger-menu-btn'),
        logoutLink: () => cy.get('#logout_sidebar_link')
    }

    logout() {
        this.elements.menuBtn().click();
        this.elements.logoutLink().click();
    }
}

export default new Header();