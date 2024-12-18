describe('Тестирование формы обратной связи', () => {
    beforeEach(() => {
        cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template'); // Перейти на страницу с формой
    });

    it('Успешная отправка формы с валидными данными', () => {
        // Заполнение полей формы
        cy.get('input[name="user_name"]').type('Иван Иванов'); // Имя
        cy.get('input[name="user_email"]').type('ivan.ivanov@example.com'); // Email
        cy.get('textarea[name="user_message"]').type('Это тестовое сообщение.'); // Сообщение

        // Отправка формы
        cy.get('button[type="submit"]').click(); // Нажимаем кнопку отправки

        // Проверка появления сообщения об успешной отправке
        cy.get('.success-message') // Здесь предполагается, что сообщение об успехе имеет класс .success-message. Замените его на правильный.
          .should('be.visible') // Убедиться, что сообщение видно
          .and('contain', 'Ваше сообщение успешно отправлено!'); // Убедиться, что текст сообщения соответствует ожидаемому
    });

    it('Проверка валидации поля Email', () => {
        // Оставляем поле email пустым и пытаемся отправить форму
        cy.get('input[name="user_name"]').type('Иван Иванов'); // Имя
        cy.get('textarea[name="user_message"]').type('Сообщение без email.'); // Сообщение

        cy.get('button[type="submit"]').click(); // Отправка формы

        // Проверка сообщения об ошибке для пустого поля email
        cy.get('.error-message-email') // Здесь предполагается, что сообщение об ошибке для email имеет класс .error-message-email.
          .should('be.visible')
          .and('contain', 'Пожалуйста, введите ваш email'); // Проверить текст ошибки
    });
});