class CartPage {
    elements = {
        inventoryItemName: () => cy.get('.inventory_item_name')
    }

    checkItemInCart(productName) {
        this.elements.inventoryItemName().should('have.text', productName);
    }
}

export default new CartPage();