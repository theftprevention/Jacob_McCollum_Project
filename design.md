# Design notes

The design of the app is rather minimalist, since the app mainly focuses on functionality.

Based on the project requirements, I determined that the easiest way to make the API data user-navigable was to provide two searchable lists directly upfront: one for movies, and another for characters. Users may then click on a specific movie or character to see detailed information.

Since the quotes are linked to a character and a movie by referencing the character `id` and the movie `id`, I opted to only show quotes when viewing details for a specific character.

If I had more time to spend on the design and functionality, here are some of the things I would implement:

- Add quotes to movie details, and not just character details.
- Implement pagination for movies, characters, and quotes using the `limit`, `offset`, and `page` fields made available by the API.
- Make the design responsive on mobile.
- Currently, the API doesn't offer a way to fetch the movies in which a particular character appears. One way to do this would be to fetch a character's quotes, and then use the `movie` property of each quote to create a distinct set of movie IDs. This would only result in a list of movies in which the character has *spoken lines*, but it should be adequate for most use cases.
