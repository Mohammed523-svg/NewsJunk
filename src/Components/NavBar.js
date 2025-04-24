import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) =>{

  const countries = [
    {
      country: "India",
      code: "in"
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
      country: "Italy",
      code: "it"
    },
    {
      country: "Japan",
      code: "jp"
    },
    {
      country: "Latvia",
      code: "lv"
    },
    {
      country: "Lithuania",
      code: "lt"
    },
    {
      country: "Malaysia",
      code: "my"
    },
    {
      country: "Mexico",
      code: "mx"
    },
    {
      country: "Morocco",
      code: "ma"
    },
    {
      country: "Netherlands",
      code: "nl"
    },
    {
      country: "New Zealand",
      code: "nz"
    },
    {
      country: "Nigeria",
      code: "ng"
    },
    {
      country: "Norway",
      code: "no"
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
      country: "Saudi Arabia",
      code: "sa"
    },
    {
      country: "Serbia",
      code: "rs"
    },
    {
      country: "Singapore",
      code: "sg"
    },
    {
      country: "Slovakia",
      code: "sk"
    },
    {
      country: "Slovenia",
      code: "si"
    },
    {
      country: "Argentina",
      code: "ar"
    },
    {
      country: "Australia",
      code: "au"
    },
    {
      country: "Austria",
      code: "at"
    },
    {
      country: "Belgium",
      code: "be"
    },
    {
      country: "Brazil",
      code: "br"
    },
    {
      country: "Bulgaria",
      code: "bg"
    },
    {
      country: "Canada",
      code: "ca"
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
      country: "Czech Republic",
      code: "cz"
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
      country: "Germany",
      code: "de"
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
      country: "South Africa",
      code: "za"
    },
    {
      country: "South Korea",
      code: "kr"
    },
    {
      country: "Sweden",
      code: "se"
    },
    {
      country: "Switzerland",
      code: "ch"
    },
    {
      country: "Taiwan",
      code: "tw"
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
      country: "UAE",
      code: "ae"
    },
    {
      country: "Ukraine",
      code: "ua"
    },
    {
      country: "United Kingdom",
      code: "gb"
    },
    {
      country: "United States",
      code: "us"
    },
    {
      country: "Venezuela",
      code: "ve"
    }
  ];
  const languages = [
    {
      language: "Arabic",
      code: "ar"
    },
    {
      language: "German",
      code: "de"
    },
    {
      language: "English",
      code: "en"
    },
    {
      language: "Spanish",
      code: "es"
    },
    {
      language: "French",
      code: "fr"
    },
    {
      language: "Hebrew",
      code: "he"
    },
    {
      language: "Italian",
      code: "it"
    },
    {
      language: "Dutch",
      code: "nl"
    },
    {
      language: "Norwegian",
      code: "no"
    },
    {
      language: "Portuguese",
      code: "pt"
    },
    {
      language: "Russian",
      code: "ru"
    },
    {
      language: "Swedish",
      code: "se"
    },
    {
      language: "Chinese",
      code: "zh"
    }
  ];

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsJunk
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarScroll">

            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-2">
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                  {countries.map((country) => {
                    return (
                      <li key={country.code}>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            props.setCountry(country.code);
                          }}
                        >
                          {country.country}
                        </a>
                      </li>
                    );})}
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav ms-2">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                {languages.map((language) => {
                    return (
                      <li key={language.code}>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            props.setLanguage(language.code);
                          }}
                        >
                          {language.language}
                        </a>
                      </li>
                    );})}
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