describe("Проверка совпадения окружностей", () => {
    it("Открытие сайта", () => {
      cy.visit("localhost:8000");
    });
    
    it("Заполнение данных первой окружности", () => {
      cy.get("#x1").type("1");
      cy.get("#y1").type("1");
      cy.get("#r1").type("1");
    });

    it("Заполнение данных второй окружности", () => {
      cy.get("#x2").type("1");
      cy.get("#y2").type("1");
      cy.get("#r2").type("1");
    });
   
    it("Заполнение точности вычислений", () => {
      cy.get("#accuracy").type("1");
    });

    it("Запрос результата", () => {
      cy.get('[type="submit"]').click();
    });

    it("Проверка результата", () => {
      cy.get("#answer").should("have.text", 'Это одна и та же окружность');
      cy.wait(5000);
    });    
});
  