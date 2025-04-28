import React from "react";
import { Link } from "react-router-dom";

// NavBar component: Renders the navigation bar for the news application.
const NavBar = (props) => {
  // Array of countries with their names and ISO 3166-1 alpha-2 codes.
  const countries = [
    {
      country: "United Arab Emirates",
      code: "ae"
    },
    {
      country: "Argentina",
      code: "ar"
    },
    {
      country: "Austria",
      code: "at"
    },
    {
      country: "Australia",
      code: "au"
    },
    {
      country: "Belgium",
      code: "be"
    },
    {
      country: "Bulgaria",
      code: "bg"
    },
    {
      country: "Brazil",
      code: "br"
    },
    {
      country: "Canada",
      code: "ca"
    },
    {
      country: "Switzerland",
      code: "ch"
    },
    {
      country: "China",
      code: "cn"
    },
    {
      country: "Colombia",
      code: "co"
    },
    {
      country: "Cuba",
      code: "cu"
    },
    {
      country: "Czech Republic",
      code: "cz"
    },
    {
      country: "Germany",
      code: "de"
    },
    {
      country: "Egypt",
      code: "eg"
    },
    {
      country: "France",
      code: "fr"
    },
    {
      country: "United Kingdom",
      code: "gb"
    },
    {
      country: "Greece",
      code: "gr"
    },
    {
      country: "Hong Kong",
      code: "hk"
    },
    {
      country: "Hungary",
      code: "hu"
    },
    {
      country: "Indonesia",
      code: "id"
    },
    {
      country: "Ireland",
      code: "ie"
    },
    {
      country: "Israel",
      code: "il"
    },
    {
      country: "India",
      code: "in"
    },
    {
      country: "Italy",
      code: "it"
    },
    {
      country: "Japan",
      code: "jp"
    },
    {
      country: "South Korea",
      code: "kr"
    },
    {
      country: "Lithuania",
      code: "lt"
    },
    {
      country: "Latvia",
      code: "lv"
    },
    {
      country: "Mexico",
      code: "mx"
    },
    {
      country: "Malaysia",
      code: "my"
    },
    {
      country: "Nigeria",
      code: "ng"
    },
    {
      country: "Netherlands",
      code: "nl"
    },
    {
      country: "Norway",
      code: "no"
    },
    {
      country: "New Zealand",
      code: "nz"
    },
    {
      country: "Philippines",
      code: "ph"
    },
    {
      country: "Poland",
      code: "pl"
    },
    {
      country: "Portugal",
      code: "pt"
    },
    {
      country: "Romania",
      code: "ro"
    },
    {
      country: "Russia",
      code: "ru"
    },
    {
      country: "Saudi Arabia",
      code: "sa"
    },
    {
      country: "Sweden",
      code: "se"
    },
    {
      country: "Singapore",
      code: "sg"
    },
    {
      country: "Slovenia",
      code: "si"
    },
    {
      country: "Slovakia",
      code: "sk"
    },
    {
      country: "Thailand",
      code: "th"
    },
    {
      country: "Turkey",
      code: "tr"
    },
    {
      country: "Taiwan",
      code: "tw"
    },
    {
      country: "Ukraine",
      code: "ua"
    },
    {
      country: "United States",
      code: "us"
    },
    {
      country: "Venezuela",
      code: "ve"
    },
    {
      country: "South Africa",
      code: "za"
    }
  ];

  return (
    <div>
      {/* Navigation bar component using Bootstrap classes */}
      <nav className="navbar fixed-top navbar-expand-lg bg-body-dark bg-dark">
        <div className="container-fluid">
          {/* Link to the home page with the brand name */}
          <Link className="navbar-brand" to="/">
            NewsJunk
          </Link>
          {/* Button for toggling the navigation on smaller screens */}
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Collapsible navigation links */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* List of navigation items for different news categories */}
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                {/* Link to the Home category */}
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Business category */}
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Entertainment category */}
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the General category */}
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Health category */}
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Science category */}
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Sports category */}
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to the Technology category */}
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            {/* Dropdown for selecting the country for news */}
            <div className="d-flex">
              <ul className="navbar-nav me-2">
                <li className="nav-item dropdown">
                  {/* Button to toggle the country dropdown */}
                  <button
                    className="btn btn-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </button>
                  {/* Dropdown menu with a list of countries */}
                  <ul className="dropdown-menu dropdown-menu-dark">
                    {/* Map through the countries array to render each country as a dropdown item */}
                    {countries.map((country) => {
                      return (
                        <li key={country.code}>
                          {/* Link that triggers the setCountry function in the parent component */}
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              props.setCountry(country.code);
                              // Reset the language when a new country is selected
                              props.setLanguage('');
                            }}
                          >
                            {/* Display the country name */}
                            {country.country}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;