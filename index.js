(function(factory) {
    typeof define === 'function' && define.amd ? define(factory) : factory();
})(function() {
    'use strict';

    function addPublications(meta, parentElement) {
        var parentDiv = d3.select(parentElement);
        var list = parentDiv.append('ul').attr('class', 'pubs');
        var items = list
            .selectAll('li')
            .data(meta)
            .enter()
            .append('li')
            .attr('class', 'pub'); //thumb

        items.append('img').attr('src', function(d) {
            return './img/' + d.thumbnail;
        }); //    .text(d => (d.description ? d.description : "<no description available>"));

        var wraps = items.append('div').attr('class', 'pub-wrap'); //title

        wraps
            .append('p')
            .attr('class', 'title')
            .text(function(d) {
                return d.title;
            }); //description

        wraps
            .append('p')
            .attr('class', 'reference')
            .text(function(d) {
                return d.reference;
            }); //author

        wraps
            .append('p')
            .attr('class', 'author')
            .text(function(d) {
                return d.authors;
            }); //tags

        function cap1(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        var taglist = wraps.append('ul').attr('class', 'tags');
        taglist
            .selectAll('li')
            .data(function(d) {
                return d.links;
            })
            .enter()
            .append('li')
            .append('a')
            .attr('href', function(d) {
                return d.href.indexOf('http') > -1 ? d.href : './pubs/' + d.href;
            })
            .attr('class', function(d) {
                return d.type;
            })
            .html(function(d) {
                return d.type == 'github' ? d.type : cap1(d.type);
            });
    }

    d3.json('./data/publicationMetadata.json', function(error, publications) {
        addPublications(publications, '.pubs');
    });
});
