# Publication Library

This repo creates a [webpage with a list of publications](https://rhoinc.github.io/publication-library/) from Rho's [graphics group](https://rhoinc.github.io/graphics/). 

# Adding a publication

To add a new publication, make a pull request that does the following: 
- Saves a thumbnail in the `./img` folder.
- Saves a copy of the publication in the `./pubs` folder.
- Adds a new object with the following properties to `./publicationMetadata.json` 
  - `title` - the name of the publication
  - `thumbnail` - name of the thumbnail file saved in the `./img` folder
  - `reference` - name of the journal or conference where the work was presented and date of publication
  - `authors` - list of authors. Please add a note explaining the graphics team involvement if we are not co-authors.
  - `links` - array of objects describing relevant links, each with a `href` and a `type` property. Valid types are "paper", "github", "slides", "poster", "abstract".
