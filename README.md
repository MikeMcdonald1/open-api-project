# OpenAPI-Project
[My Open API Project](https://github.com/MikeMcdonald1/open-api-project2)
This is my open API Project for the Introduction to Programming class at Code the Dream.

## Table of Contents
- [OpenAPI-Project](#openapi-project)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage (screenshots, code examples, demos, external resources, etc)](#usage-screenshots-code-examples-demos-external-resources-etc)
  - [Lessons Learned](#lessons-learned)
  - [Contributing](#contributing)
  - [License](#license)

## Installation
1. Clone the repository:
```bash
 git clone https://github.com/MikeMcdonald1/open-api-project2.git
```
## Usage (screenshots, code examples, demos, external resources, etc)
To run project, open cloned repository files in a code editor like VS Code.
Enable a Live Preview extension if not already using one.
Open project with Live Server to see live preview of webpage in a browser.

Use navigation links in top right corner to navigate to homepage, cat page, or dog page.
User can also use the two links under the images on homepage to navigate to cat page or dog page.

The cat page functions as a hypoallergenic generator. There is a dropdown menu with 67 cat breeds.
Choose a cat breed from the dropdown menu and a random photo of the cat breed will appear.
Text will display below the photo saying whether the cat breed will cause allergies or not.

The dog page functions as a "good dog" generator. There is a dropdown menu with 172 dog breeds.
Choose a dog breed from the dropdown menu and a random photo of the dog breed will appear.
Text will display below the photo saying whether the dog breed is good or not. 
Since all dogs are essentially good at heart, this will be the only option displayed. This is meant to be humorous.

*** The cat page was built with an open API. Each cat breed had various properties including hypoallergenic: true/false. There were links
on their page for a version of the API using dogs instead of cats. After days of building the cat page, I realized the hard way that the dog open API DID NOT include this hypoallergenic property option. A compromise had to be made for dogs.

I started to refactor using a different endpoint for dogs only such as breed group, life span, or temperament, but I thought the good dog/bad dog approach was a more fun and exciting. These other endpoints really wouldn't have matched up with the hypoallergenic cat idea. Neither does whether a dog breed is good or not, but at least it adds some fun to the experience. ***

## Lessons Learned
Always check to ensure all expected endpoint properties exist BEFORE building a project for days and days.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.
   
## License
This project is licensed under the [Mike McDonald License](LICENSE).