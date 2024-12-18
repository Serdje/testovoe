Тестовые сценарии

Проверка доступности формы
Убедиться, что форма доступна на странице и отображается корректно.

Тестирование всех полей формы
Проверить наличие всех необходимых полей: имени, email, сообщения.
Убедиться, что каждый элемент формы имеет правильные метки (label).

Валидация полей
Имя:
Оставить поле пустым – проверить, должно ли появиться сообщение об ошибке.
Ввести валидное имя (без специальных символов) – убедиться, что форма отправляется успешно.
Email:
Ввести некорректный email (например, без символа @) – проверить сообщение об ошибке.
Ввести валидный email – подтвердить, что форма отправляется успешно.
Сообщение:
Оставить поле пустым – проверить сообщение об ошибке.
Ввести сообщение длиной более 500 символов (если есть лимит) – проверить сообщение об ошибке.
Ввести валидное сообщение – убедиться, что форма отправляется успешно.

Отправка формы
Заполнить все поля корректно и нажать кнопку "Отправить" – проверить, что появляется сообщение об успешной отправке.
Нажать на кнопку "Отправить" без заполнения обязательных полей – убедиться, что форма не отправляется и показываются сообщения об ошибках.

Проверка сообщений об ошибках
Проверить текст сообщений об ошибках на всех полях – убедиться, что они информативные и понятные.

Проверка динамики формы (если применимо)
Проверить, что форма реагирует на изменения. Например, в зависимости от выбранного типа запроса отображаются дополнительные поля.

Позитивные сценарии
Убедиться, что после успешной отправки формы поля очищаются и форма возвращается в исходное состояние.

Партионное тестирование
Проверить поведение при быстром многократном нажатии на кнопку "Отправить".
