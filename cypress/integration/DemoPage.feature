Feature: Demo Application Landing Page Test
    Scenarios Related to the demo application landing page

    Background: Launch the Demo Application
        Given User launch the application

    @smoke
    Scenario: TC001_Application Landing Page Title Test
        Then Page title "Practice Page" is displayed
        And Page title contains "Practice" keyword

    @smoke
    Scenario: TC002_Application Logo Visibility Test
        Then Logo is visible on application landing page

    @smoke
    Scenario: TC003_Application Page Header Title Validation
        Then On landing page "Practice Page" text is visible

    @sanity
    Scenario: TC004_Application Radio - 1  Button click validation
        When User click on first radio button as "radio1" value associated it
        Then The radio button as "radio1" value associated it is clicked

    @sanity
    Scenario: TC005_Application Radio - 2 Button click validation
        When User click on first radio button as "radio2" value associated it
        And The radio button as "radio1" and "radio3" are not selected

    @sanity
    Scenario: TC006_Application Option2 selection form dropdown
        When User select value "Option1" form drop dropdown
        Then Value form dropdown as "Option1" is selected

    @sanity
    Scenario: TC007_Application Dynamic drop down handling
        When User enter the keyword "India" in dynamic drop down
        Then Value as "India" is get displayed as suggestion

    @sanity
    Scenario: TC008_Application Alert handling
        When Alert button is visible on the page
        Then Alert generated with text "Hello , share this practice page and share your knowledge" on it

    @sanity
    Scenario: TC009_Application window handling
        When Open Window button is visible on the page
        Then Child window is opened after user click on open window button

    @regression
    Scenario: TC010_Application headers for webtables
        When Data table with "Web Table Fixed header" header text is displayed
        Then The data table headers column names as below is displayed
        | columnOneName | columnTwoName  | columnThreeName  | columnFourName  |
        | Name          | Position       | City             | Amount          |

    @regression
    Scenario Outline: TC011_Application dynamic search functionality
        When Application header is displayed
        And Dyanmic search box is visible
        Then user type <partialCountryName> in search box
        And user get the <completeCountyName> result form search box
    Examples:
        | partialCountryName | completeCountyName |
        | saudi              | Saudi Arabia       |
        | singa              | Singapore          |
        | Baha               | Bahamas            |
        

    

        


