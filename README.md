# NewsJunk - Your Source for the Latest News

## Overview

NewsJunk is a web application built with React that provides you with the latest news from around the world. You can browse news by category, country.

## Features

* **Top Headlines:** Stay updated with the latest news across various categories.

* **Categorized News:** Explore news from different categories such as business, entertainment, general, health, science, sports, and technology.

* **Country Selection:** Select the country to view news from that region.

## Technologies Used

* React

* React Router DOM

* React Top Loading Bar

* Infinite Scroll

## Installation

1.  Clone the repository:

    ```

    git clone [https://github.com/Mohammed523-svg/NewsJunk.git](https://github.com/Mohammed523-svg/NewsJunk.git)

    ```

2.  Navigate to the project directory:

    ```

    cd your-repo-name

    ```

3.  Install dependencies:

    ```

    npm install

    ```

4.  Set up your environment variables:

    * Create a `.env` file in the root directory.

    * Add your News API key:

        ```

        REACT_APP_NEWS_API=YOUR_NEWS_API_KEY

        ```

5.  Run the application:

    ```

    npm start

    ```

    The app will be accessible at \`http://localhost:3000\`.

## Usage

* **Home Page:** Displays the top headlines from the selected country and default category.

* **Category Navigation:** Use the navigation menu to select a news category.

* **Country Selection:** Use the country dropdown menu to choose the news source.

## API

The application uses the News API to fetch news data. You will need to sign up for a free API key at [News API](https://newsapi.org/) and add it to your \`.env\` file.

## Key Files and Components

* \`src/App.js\`: Main application component that sets up routing and renders the main layout.

* \`src/Components/NavBar.js\`: Navigation bar component with category links and country selection.

* \`src/Components/News.js\`: Fetches and displays news articles, including infinite scrolling.

* \`src/Components/NewsItem.js\`: Displays individual news article cards.

* \`src/Components/Spinner.js\`: Loading spinner component.

## Contribution

Contributions are welcome! Feel free to submit pull requests to improve the project.

