$(document).ready(function () {
    // JSON data for fictional characters
    const charactersData = [
    { firstName: 'Jim', lastName: 'Gordon', image: 'img/jim_gordon.jpg', info: 'Police Commissioner Jim Gordon is a dedicated ally of Batman, sharing a commitment to rid Gotham City of crime. He relies on Batman\'s assistance and trusts him implicitly.', date: '2021-01-15' },
    { firstName: 'Harvey', lastName: 'Dent', image: 'img/harvey_dent.jpg', info: 'Harvey Dent, once Gotham\'s District Attorney, transforms into Two-Face after a tragic incident. Driven by chance, he becomes a vigilante with a dual personality, making decisions with a coin flip.', date: '2004-03-22' },
    { firstName: 'Carmine', lastName: 'Falcone', image: 'img/carmine_falcone.jpg', info: 'Carmine Falcone is a powerful crime lord in Gotham City, controlling a significant part of its underworld. He often clashes with Batman as one of the city\'s primary antagonists.', date: '2006-11-05' },
    { firstName: 'The', lastName: 'Penguin', image: 'img/the_penguin.jpg', info: 'The Penguin, Oswald Cobblepot, is a cunning and eccentric villain with a love for birds and umbrella-themed gadgets. A frequent adversary of Batman, he plays a prominent role in Gotham\'s criminal landscape.', date: '2008-06-18' },
    { firstName: 'The', lastName: 'Batman', image: 'img/the_batman.jpg', info: 'Batman, the Dark Knight, is Gotham City\'s vigilante protector. Using intellect, detective skills, and advanced technology, Batman fights crime and defends the city against a gallery of villains.', date: '2010-09-30' },
    { firstName: 'The', lastName: 'Catwoman', image: 'img/the_catwoman.jpg', info: 'Catwoman, Selina Kyle, is a skilled cat burglar with a complex relationship with Batman. Her agile moves and affinity for feline motifs make her a unique and sometimes unpredictable ally or adversary.', date: '2012-01-12' },
    { firstName: 'Fish', lastName: 'Mooney', image: 'img/fish_mooney.jpg', info: 'Fish Mooney is a powerful and cunning crime boss in Gotham City. Known for her intelligence and strategic thinking, she navigates the city\'s underworld with a bold and ambitious demeanor.', date: '2001-07-25' },
    { firstName: 'Alfred', lastName: 'Pennyworth', image: 'img/alfred_pennyworth.jpg', info: 'Alfred Pennyworth is Bruce Wayne\'s loyal butler and confidant. He provides guidance, support, and even steps into the action when needed, showcasing both wisdom and a strong sense of duty.', date: '2003-12-09' },
    { firstName: 'Hugo', lastName: 'Strange', image: 'img/hugo_strange.jpg', info: 'Dr. Hugo Strange is a brilliant but sinister scientist in Gotham City. Often depicted as a foe of Batman, he uses his intellect to manipulate and create formidable challenges for the Dark Knight.', date: '2005-04-28' },
    { firstName: 'The', lastName: 'Joker', image: 'img/the_joker.jpg', info: 'The Joker is Batman\'s iconic and chaotic arch-nemesis. Known for his unpredictable nature and obsession with anarchy, the Joker is a criminal mastermind who thrives on creating chaos and challenging Batman\'s moral code.', date: '2014-10-03' },
];

    // Populating characters
    function populateTable(data) {
        const tbody = $('#characters-table tbody');
        tbody.empty();

        data.forEach(character => {
            const row = $('<tr>');
            row.append($('<td>').text(character.firstName));
            row.append($('<td>').text(character.lastName));
            const imageCell = $('<td>');
            const image = $('<img>').attr('src', character.image).attr('alt', `${character.firstName} ${character.lastName}`);
            imageCell.append(image);
            row.append(imageCell);
            row.append($('<td>').text(character.info));
            row.append($('<td>').text(character.date));
            tbody.append(row);
        });
    }

    let sortColumn = null;
    let sortOrder = 'asc';
    let clickCount = 0;

    $('th a').click(function (e) {
        e.preventDefault();
        const column = $(this).data('sort');

        if (sortColumn === column) {
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = column;
            sortOrder = 'asc';
        }

        charactersData.sort((a, b) => {
            const valueA = a[column].toUpperCase();
            const valueB = b[column].toUpperCase();

            if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        clickCount++;
        if (clickCount === 3) {
            charactersData.sort((a, b) => 0); // Reset to original order
            clickCount = 0;
        }

        populateTable(charactersData);
        updateChevrons();
    });

    function updateChevrons() {
        $('th a').each(function () {
            const column = $(this).data('sort');
            if (column === sortColumn) {
                $(this).html(`${column} ${sortOrder === 'asc' ? '&#x25B2;' : '&#x25BC;'}`);
            } else {
                $(this).html(`${column} &#x25B2;&#x25BC;`);
            }
        });
    }
});