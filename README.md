# Stardew Valley Crafting Helper

This Project was Made to help Stardew Valley Players achieve the Craft Master Achievement

## Table of Contents

1. [Introduction](#Introduction)
2. [Technologies](#Technologies)
3. [Setup](#Setup)
4. [Design Decisions](#Design_Decisions)
5. [Testing](#Testing)
6. [Authors](#Authors)
7. [Credits](#Credits)

## Introduction

This website functions for people to select any items they want to craft in Stardew Valley, and it will display all of the materials the user need to craft all of the items they selected. The website also displays individual recipies for each item, and it allows for all items to be selected at once/cleared at once.

## Technologies

This project was created with:

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

## Deployment

The project is hosted via Github Pages at https://nerajm.github.io/stardew-helper/

[This guide](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom) was followed to learn how to deploy and host the project.

## Setup

To Run the project, you must:

- Install `Node.js` version >=10.18
- Clone the github repo: https://github.com/NerajM/stardew-helper.git
- Enter the repo using `cd PATH/stardew-helper`
- Install node modules using `npm install`
- Start the app using `npm start`
- Navigate to `http://localhost:PORT` on your browser

## Design Decisions:

The UI was created to emulate the menus in Stardew valley. The colours were taken from a screenshot of the game's menu. The font used on the title, buttons, and material counts is a font that appears in-game on scrolls and other collectable notes. The background image for the website appears in-game as the main menu background. The text colour and background colour had sufficient contrast to pass the WCAG 2.0 level AA.

## Testing

Manual Testing:

- User Clicks on unselected item => item becomes selected, material quantity increased based on recipe
- User Clicks on selected item => item becomes deselected, material quantity decreased based on recipe
- User Clicks on select all => all items become selected, material quantity increased based on recipes
- User Clicks on select all with some previously selected items => all items become selected, material quantity increased based on recipes of previously unselected items
- User clicks on clear selections => all items become deselected, material quantities all get set to 0
- User clicks on clear selections with some previously unselected items => all items become deselected, material quantities all get set to 0

Auto Testing:

- Used Jest to unit test all helper functions in BodyView
- Used React-testing-library for component testing of HeaderView, MaterialsView, BodyView

## Authors

[Neraj Manamperi](https://github.com/NerajM) (2021)

## Credits

[ConcernedApe](https://www.stardewvalley.net/) is the developer for Stardew Valley and as such holds all copyrights on game assets
All item data, recipes, and images were sourced from the [Stardew Valley Wiki](https://stardewvalleywiki.com/Stardew_Valley_Wiki)
