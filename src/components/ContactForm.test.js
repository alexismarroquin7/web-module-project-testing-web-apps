import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', () => {
    //Arrange
    render(<ContactForm />);
});

test('renders the contact form header', () => {
    // Arrange
    render(<ContactForm />);
    
    // Act
    const headerRegex = /contact form/i;
    const header = screen.queryByText(headerRegex);

    //Assert
    expect(header).toBeInTheDocument();
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    //Arrange
    render(<ContactForm />);

    //Act
    const fnameInput = screen.getByLabelText("First Name*");
    userEvent.type(fnameInput, "Bob")

    const fnameError = screen.queryByText("Error: firstName must have at least 5 characters.");
    
    //Assert
    expect(fnameError).toBeInTheDocument();

});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    //Arrange
    render(<ContactForm />);

    //Act
    const submitButton = screen.getByTestId("submit");
    userEvent.click(submitButton);

    const errors = screen.getAllByTestId("error");

    //Assert
    // console.log("Errors: ", errors.length)

    expect(errors.length === 3).toBeTruthy();
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    //Arrange
    render(<ContactForm />);
    
    //Act
    const fnameInput = screen.getByLabelText("First Name*");
    const lnameInput = screen.getByLabelText("Last Name*");
    const submitButton = screen.getByTestId("submit");

    userEvent.type(fnameInput, "Alexis");
    userEvent.type(lnameInput, "Marroquin");
    userEvent.click(submitButton);

    const errors = screen.getAllByTestId("error");
    
    //Assert
    expect(errors.length === 1).toBeTruthy();
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});