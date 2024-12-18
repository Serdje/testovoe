describe('������������ ����� �������� �����', () => {
    beforeEach(() => {
        cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template'); // ������� �� �������� � ������
    });

    it('�������� �������� ����� � ��������� �������', () => {
        // ���������� ����� �����
        cy.get('input[name="user_name"]').type('���� ������'); // ���
        cy.get('input[name="user_email"]').type('ivan.ivanov@example.com'); // Email
        cy.get('textarea[name="user_message"]').type('��� �������� ���������.'); // ���������

        // �������� �����
        cy.get('button[type="submit"]').click(); // �������� ������ ��������

        // �������� ��������� ��������� �� �������� ��������
        cy.get('.success-message') // ����� ��������������, ��� ��������� �� ������ ����� ����� .success-message. �������� ��� �� ����������.
          .should('be.visible') // ���������, ��� ��������� �����
          .and('contain', '���� ��������� ������� ����������!'); // ���������, ��� ����� ��������� ������������� ����������
    });

    it('�������� ��������� ���� Email', () => {
        // ��������� ���� email ������ � �������� ��������� �����
        cy.get('input[name="user_name"]').type('���� ������'); // ���
        cy.get('textarea[name="user_message"]').type('��������� ��� email.'); // ���������

        cy.get('button[type="submit"]').click(); // �������� �����

        // �������� ��������� �� ������ ��� ������� ���� email
        cy.get('.error-message-email') // ����� ��������������, ��� ��������� �� ������ ��� email ����� ����� .error-message-email.
          .should('be.visible')
          .and('contain', '����������, ������� ��� email'); // ��������� ����� ������
    });
});