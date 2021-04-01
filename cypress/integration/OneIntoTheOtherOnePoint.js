describe("Одна в другой и пересекаются в одной точке", () => {
    it("Открытие сайта", () => {
      cy.visit("localhost:8000");
    });
    
    it("Заполнение данных первой окружности", () => {
      cy.get("#x1").type("1");
      cy.get("#y1").type("0");
      cy.get("#r1").type("2");
    });

    it("Заполнение данных второй окружности", () => {
      cy.get("#x2").type("1");
      cy.get("#y2").type("1");
      cy.get("#r2").type("1");
    });
   
    it("Заполнение точности вычислений", () => {
      cy.get("#accuracy").type("2");
    });

    it("Запрос результата", () => {
      cy.get('[type="submit"]').click();
    });

    it("Проверка результата", () => {
      cy.get("#answer").should("have.text", 'Окружности пересекаются в одной точке');
    });    
});