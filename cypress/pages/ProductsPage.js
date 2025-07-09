class ProductsPage {
    elements = {
        title: () => cy.get('.title'),
        addToCartBackpackBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        cartLink: () => cy.get('.shopping_cart_link')
    }

    addProductToCart() {
        this.elements.addToCartBackpackBtn().click();
    }

    goToCart() {
        this.elements.cartLink().click();
    }
}

export default new ProductsPage();