export enum HomePageText {
    HeroText = 'Stay organized. Track your tasks. Get things done.',
    DescriptionHeader = 'About Listelle',
    DescriptionText = 'Manage your work and personal life, one task at a time. Create to-dos, mark them complete and stay on top of your daily goals effortlessly!'
}

export enum LoginText {
    WrongAccount = 'You may have entered the wrong email address or password. Please try again!',
    RequiredEmailError = 'Email is required',
    InvalidEmailError = 'Must be a valid email format',
    RequiredPasswordError = 'Password is required',
    RegisterMessage = "Don't have an account yet?"
}

export enum RegisterText {
    FirstNameError = 'First Name is required',
    LastNameError = 'Last Name is required',
    EmailError = 'Email is required',
    InvalidEmailError = 'Must be a valid email format',
    PasswordError = 'Password is required',
    PasswordsNotMatchingError = 'Passwords do not match!',
    ExistingAccountError = 'An account with this email address already exists. Try again with another email address or Sign In!'
}

export enum PasswordRules {
    Title = 'Password must include:',
    MinLength = "At least 8 characters",
    Uppercase = "An uppercase letter",
    Lowercase = "A lowercase letter",
    Number = "A number",
    SpecialChar = "A special character",
}
