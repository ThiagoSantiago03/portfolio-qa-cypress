// Importa os Page Objects que criamos
import loginPage from '../pages/LoginPage';
import productsPage from '../pages/ProductsPage';
import cartPage from '../pages/CartPage';
import header from '../pages/Header';

describe('Fluxo de Compra no Swag Labs', () => {

    beforeEach(() => {
        
        cy.visit('https://www.saucedemo.com/');
        
        loginPage.login('standard_user', 'secret_sauce');
        
        cy.url().should('include', '/inventory.html');
    });

    it('Deve adicionar um produto ao carrinho e fazer logout com sucesso', () => {
        
        productsPage.elements.title().should('be.visible');

        productsPage.addProductToCart();

        productsPage.goToCart();

        cartPage.checkItemInCart('Sauce Labs Backpack');

        header.logout();

        loginPage.elements.usernameInput().should('be.visible');
    });
});
//para testar o git