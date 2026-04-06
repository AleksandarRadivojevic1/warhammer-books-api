# warhammer-books-api

I’ve been a fan of the Warhammer 40k universe for years, both through its lore and its video games. This project came from the idea of building something that connects that interest with my work as a developer.

The API focuses on organizing and exposing Warhammer book data in a structured way, making it easy to explore authors, series, and characters programmatically.

Thank you in advance for checking it out, or using it!


## Base URL
https://warhammer-books-api.onrender.com/api/v1

## All Endpoints 
/books -> https://warhammer-books-api.onrender.com/api/v1/books \
/authors -> https://warhammer-books-api.onrender.com/api/v1/authors \
/series -> https://warhammer-books-api.onrender.com/api/v1/series \
/primarchs -> https://warhammer-books-api.onrender.com/api/v1/primarchs


### Example output 

**From -> https://warhammer-books-api.onrender.com/api/v1/books/horus-rising/**

```
{
  "id": "69d2ccf189f90b4567a06a9c",
  "title": "Horus Rising",
  "slug": "horus-rising",
  "author": {
    "name": "Dan Abnett",
    "url": "/api/v1/authors/dan-abnett"
  },
  "series": {
    "name": "The Horus Heresy Novels",
    "url": "/api/v1/series/the-horus-heresy-novels"
  },
  "pages": 416,
  "setting": {
    "era": "Horus Heresy",
    "millennium": "M31"
  },
  "primarchs": [
    {
      "name": "Horus Lupercal",
      "url": "/api/v1/primarchs/horus-lupercal"
    }
  ]
}
```


## Books

**GetAllBooks** \
https://warhammer-books-api.onrender.com/api/v1/books 

**GetBookBySlug \
(Slugs are lowercase identifiers with hyphens (e.g. "the-lost-and-the-damned".)** \
https://warhammer-books-api.onrender.com/api/v1/books/horus-rising

**GetRelatedBooks** \
https://warhammer-books-api.onrender.com/api/v1/books/horus-rising/related

### Filtering & Search

**You can combine multiple query parameters.**

/books?search=rising \
/books?author=dan-abnett \
/books?series=necromunda \
/books?primarch=corvus-corax \
/books?era=Old%20World \
/books?millennium=M31 \
/books?series=necromunda&author=denny-flowers

### Sorting

/books?sort=title&order=asc \
/books?sort=pages&order=desc \
/books?sort=orderInSeries&order=asc 

**You can also combine with other filters:**

/books?sort=title&order=asc&series=the-horus-heresy-novels

**If you omit sort, it defaults to orderInSeries. If you omit order, it defaults to asc.**

### Pagination 

/books?page=1 \
/books?page=2

## Authors

**GetAllAuthors** \
https://warhammer-books-api.onrender.com/api/v1/authors

**GetAuthorBySlug** \
https://warhammer-books-api.onrender.com/api/v1/authors/dan-abnett

### Filtering & Search

/authors?search=abnett 

### Pagination

/authors?page=2

## Series

**GetAllSeries** \
https://warhammer-books-api.onrender.com/api/v1/series

**GetSeriesBySlug** \
https://warhammer-books-api.onrender.com/api/v1/series/the-horus-heresy-novels

### Filtering & Search

**You can combine multiple query parameters.**

/series?search=heresy \
/series?era=Old%20World \
/series?era=41st%20Millennium&search=horus

### Pagination

/series?page=1 \
/series?page=2

## Primarchs

**GetAllPrimarchs** \
https://warhammer-books-api.onrender.com/api/v1/primarchs

**GetPrimarchBySlug** \
https://warhammer-books-api.onrender.com/api/v1/primarchs/corvus-corax

### Filtering & Search

**You can combine multiple query parameters.**

/primarchs?alignment=Loyalist \
/primarchs?status=Unknown \
/primarchs?alignment=Loyalist&status=Alive

**Only allowed values for status are : ("Alive", "Dead", "Missing", "Unknown") and for alignment : ("Loyalist", "Traitor")**

### Pagination

/primarchs?page=1 \
/primarchs?page=2


