Feature: Newtours Landing Page Tests
    Scenarios Related to Newtours Application Landing Page

    # Scenario: Newtours Landing Page Title Validation
    #     Given User Navigate Newtours application
    #     Then User validates the page title

    # Scenario: Newtours Landing Page URL Validation
    #     Given User Navigate Newtours application
    #     Then User validates the landing page URL

    Scenario: Newtours User Login Positive Flow
        Given User Navigate Newtours application
        When User Enter Valid "standard_user" as username
        And User Enter Valid "secret_sauce" as password
        And Click On Login Button
        Then User is able to login to the application
        And Title of Page is "Login: Mercury Tours"