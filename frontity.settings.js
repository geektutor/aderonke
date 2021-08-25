const settings = {
  "name": "aderonke",
  "state": {
    "frontity": {
      "url": "https://api.geektutor.xyz",
      "title": "Geektutor's Website",
      "description": "The WordPress Babalawo"
    }
  },
  "packages": [
    {
      "name": "rukky",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Bio",
              "/category/nature/"
            ],
            [
              "Showcase",
              "/category/travel/"
            ],
            [
              "Blog",
              "/tag/japan/"
            ],
            [
              "Contact",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://api.geektutor.xyz"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
