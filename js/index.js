import addPublications from './addPublications';

d3.json('./data/publicationMetadata.json', function(error, publications) {
    addPublications(publications, '.pubs');
});
