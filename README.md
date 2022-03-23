# Coding Challenge

### Overview
---
Here we have a starter project for you and we want you to finish it. Our app uses the [Dog API](https://thedogapi.com/) to get some data. We want to see a list of dog breeds and have you add pagination. That's pretty much it! We designed this project to not take too long for you (~1hr. ), but give you a chance to show us how you think in code. We didn't do much styling here and aren't too concerned about the look of this project, but if you want to take the opportunity to show off your styling skills, feel free to do so.

### Getting Set Up
---
1. First, [Import this repo to your Github account](https://github.com/new/import) **IMPORTANT: Select "Private", not "Public"** and then clone it to your machine.
2. Run `npm i` to install dependencies.
3. Get an API key from [Dog API signup page](https://thedogapi.com/signup). The free one is all you need for this project and it should only take a minute to get your key.
4. Create a file at the top level of the repo called `.env` and give it a property called `REACT_APP_DOGS_API_KEY` and put your API key as the value.
5. Run `npm start` to run the app locally.
6. Navigate to `localhost:3000/breeds` in the browser to see the dog breeds component.

### Instructions
---
We've created `Breeds` and `BreedCard` components, and a `BreedsService` that's set up to make the API call to get dog breeds. Use the Dogs API docs page as a reference while you work through these steps.
1. Wire up an API call to the dogs API using our `BreedsService`, and fetch the **first 12** dog breeds when the `Breeds` component is mounted. You can use the `BreedCard` component to display the breeds.
2. Implement a loading state for the `Breeds` component. Don't worry too much about any fancy styling, you can just have it say 'Loading Dogs...' on the screen while it is fetching data.
3. Wire up the 'Load More' button so that it fetches the next batch of dog breeds and adds them on to the list.
4. When there are no more dog breeds left to fetch, instead of the 'Load More' button there should be a message letting the user know there are no more dog breeds.
> Feel free to update the styling and create new components, hooks, utility functions or anything as you see fit.

### Bonuses
---
* Improve the code as you see fit, fix any problems you find with the current implementation.
* Use a custom hook to extract all the logic related to fetching data.
* If you want to go the extra mile and you have time, add a search box that filters down the loaded dog breeds based on your search criteria.

### Submitting Your Code Challenge
---
* Add your own notes to the Notes sections below. We'd like to see:
    * Any issues or challenges you had with the code challenge.
    * Anything you'd like to explain about how you implemented your solution. This can be a step-by-step explaining your approach if you'd like.
    * Improvements you would make if you had more time.
* When you are done with your coding challenge, push it up to your repo, share a link to your repo with us (we will share our github ID's with you so that you can give us access) so we can pull it down, run it, and take a look at your code.

### Notes
---
* Your notes here
### License
---
This project is [MIT licensed](./LICENSE).
