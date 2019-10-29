# Riser Sizer
### The all-in-one tool for sizing plumbing riser diagrams.
---

## Intro
Riser Sizer lets engineers easily calculate plumbing pipes for their riser diagrams. It's as easy as adding a riser to your project, creating a floor, and selecting fixtures. Riser Sizer will automatically calculate the total of Fixture Units, Gallons Per Minute, and Pipe Sizes with every addition/deletion of a fixture.

This app really shines when using it for large residential buildings with a lot a floors and units. Large residential buildings have risers and floors that are pretty typical so this app can easily calculate pipe sizes instead of going through the time consuming process of calculating each floor and riser manually.

## Tutorial

### Create an Account 
To use Riser Sizer, please create an account first, providing an email and password, and complete the confirmation form with the code sent to your email.


### Dashboard 
After logging in or signing up, you will be redirected to your dashboard. Here you can view your projects, create new ones, and access your settings.

#### Projects
On the Dashboard you will see a list of your projects. This will be empty when you first sign up but you can create a new project by clicking the "New Project" button in top right of the screen. Projects on the list will have a name, address, description, and amount of risers.

### Creating a project
Create a new project by clicking the "New Project" button in the top right of the dashboard. Clicking this button will redirect you to the new project page where a form will be displayed. Here you will fill out the project name, and optional address and description. Here you can also enter building settings that will apply the desired properties. Explanations of each building setting will be explained below.

#### Riser Count
Providing a number in the riser count input will automatically add that number of empty risers to the project, instead of having to manually add each individual riser on the project edit page.

#### Floor Settings

##### Floor Count
After providing the riser count, provide a floor count so that each added riser will also have the desired number of floors. This provides a basic template for your project so that you don't have to manually add each individual floor to every riser. (Note: Not all risers in a building provide service for the same number of floors, but this setting easily provides a template to work with, so provide a number of floors that most risers have in common.)

##### First Floor
For this setting, provide the floor where the risers start, starting from the bottom. This setting is used in tandem with the floor count setting to accurately provide floor labels on the risers. For example, if you provide 8 floors for the floor count, and the "First Floor" as 2, then all risers will have pre-created floors labelled 2-10. (Note: As with the floor count, not all risers begin on the same floor but this helps provide a template to easily work with, so provide a number that is common to most risers.)

#### Source Floors

##### Cold Source Floor
This setting is for defining the floor in which the cold water is being serviced from and will automatically apply this to each riser.

##### Hot Source Floor
Similar to cold source floor setting, this setting defines the floor where hot water is being serviced from.

#### Example
If a user provides 10 for Riser Count, 20 for Floor Count, 2 as the First Floor, 2 as the Cold Source Floor, and 20 as the Hot Source Floor, then the building they created will have 10 risers with floors 2-21, with cold water being serviced from the 2nd floor and hot water being serviced from the 21st floor.

#### New Project Created
Once the new project form is completed and submitted, you will be redirected to your dashboard where you will find your new project.

### Editing a Project
To edit a project, click the project you would like to work on and you will be redirected to that project's editing page. If you predefined a number of risers when creating the project then you will see a list of your risers already created. If not, then this page will be empty and you can begin by creating a new riser by clicking the "Create Riser" button in the top right. 

#### Creating a Riser
After clicking on the "Create Riser" button a new riser will be added to the list. There will be an input field that says "Label". Here you can provide a label for the riser that should correspond with the label on your riser diagram.

#### Editing a Riser
Once you have created a riser and provided a label, now you can begin editing it. To do so, click the "Pencil" button. This will redirect you to the Riser Editing page.

### Riser Editor Page
This page has several main components, the Action Menu on the left, the Fixture Selector on the right, and the actual Riser Editing Area in the middle. Below are explanations of each.

#### Action Menu
The action menu displays the Riser Label and actions you can perform while editing. Two of these actions have to do with creating floors. You can add a floor to the top of list by clicking "plus and up arrow" button. Similarly, you can add a new floor to the bottom of list with the "plus and down arrow" button. Adding a new floor in either direction will also automatically label it using the labels from the floors that precede it. Another action you can perform is the "Multiple Floor Select" indicated by the checkbox button. Clicking this button will allow you to select multiple floors and then edit all of them at the same time. This is useful for editing floors that are typical. When you click "Multiple Select" all of the floors will display a fourth button that is a checkbox. Check each floor that you would like to edit. When you are done using "Multiple Select" just simply click the button again to disable it.

#### Fixture Selector
This selector is a list of all fixtures found in the International Plumbing Code by the International Code Council. Use this list to select and add the fixture to the floor you are currently editing. All fixtures are already defined with their respective Fixture Units, Occupancy, and Type. 

#### Riser Editing Area
The main part of the Riser Editor page is the actual riser. If you predefined a floor count when creating the project, there will already riser full of floors with the correct labels. If not, then there will be a single floor item with an empty input box for the initial floor's label. Provide a label for the initial floor then you can start editing the riser and it's floors.

##### Riser Editing Area Floors
Each Floor item on this Riser has cold and hot pipe sizes, floor label, total fixture units, and a fixture list. When a floor is being edited and a fixture is selected, it will be added and displayed on the floor's fixture list. 

Also each Floor item has three buttons on the top right corner, Edit, Hot Source, and Cold Source. Clicking Edit will select that floor as the current floor to be editing. Now you can select fixtures from the selector to add to the floor. While editing a floor, all fixtures on the floor will also display an 'X' in the top right corner. This button is how you delete fixtures. With each addition and deletion of a fixture, the total Fixture Units for both hot and cold will be updated. Clicking the Hot/Cold buttons will indicate that floor as the source floors for hot/cold water. This is how the app then calculates the pipe sizes based of the total fixture units per floor.

#### Finish Editing Riser
Once you are done editing the riser, you can click the "Back" arrow in the top left corner to go back to the Project Page.

#### Deleting a Riser
To delete a riser, just simply click the 'x' button at the end of the riser, next to the "Edit" button.

#### Delete Project
From the project page, you can also delete the project by clicking the "Trash" icon in the top right of the page.


### Settings
This page is still currently barebones, only listing various fixtures coming soon. Once these features are fleshed out, there will be settings to toggle these features. Eventually, this page will also allow users to make changes to their account, like email and password changes.
