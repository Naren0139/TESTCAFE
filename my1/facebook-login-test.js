import { Selector, t } from 'testcafe';

fixture('Facebook Login Test')
    .page('https://www.facebook.com/login/'); // Open the Facebook login page

test('Login to Facebook', async t => {
    // Selectors for input fields and the login button
    const emailInput = Selector('#email');
    const passwordInput = Selector('#pass');
    const loginButton = Selector('#loginbutton');

    // Fill in email and password fields and click the login button
    await t
        .typeText(emailInput, 'your_email_or_phone_number')
        .typeText(passwordInput, 'your_password')
        .click(loginButton);

    // You can add assertions here to verify the login was successful, e.g., by checking for a welcome message or a user-specific element on the home page.
});
