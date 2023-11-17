$(document).ready(function () {
    // JSON data for fictional characters
    const charactersData = [
    { firstName: 'Jim', lastName: 'Gordon', image: 'img/jim_gordon.jpg', info: 'Police Commissioner Jim Gordon is a dedicated ally of Batman, sharing a commitment to rid Gotham City of crime. He relies on Batman\'s assistance and trusts him implicitly.' },
    { firstName: 'Harvey', lastName: 'Dent', image: 'img/harvey_dent.jpg', info: 'Harvey Dent, once Gotham\'s District Attorney, transforms into Two-Face after a tragic incident. Driven by chance, he becomes a vigilante with a dual personality, making decisions with a coin flip.' },
    { firstName: 'Carmine', lastName: 'Falcone', image: 'img/carmine_falcone.jpg', info: 'Carmine Falcone is a powerful crime lord in Gotham City, controlling a significant part of its underworld. He often clashes with Batman as one of the city\'s primary antagonists.' },
    { firstName: 'The', lastName: 'Penguin', image: 'img/the_penguin.jpg', info: 'The Penguin, Oswald Cobblepot, is a cunning and eccentric villain with a love for birds and umbrella-themed gadgets. A frequent adversary of Batman, he plays a prominent role in Gotham\'s criminal landscape.' },
    { firstName: 'The', lastName: 'Batman', image: 'img/the_batman.jpg', info: 'Batman, the Dark Knight, is Gotham City\'s vigilante protector. Using intellect, detective skills, and advanced technology, Batman fights crime and defends the city against a gallery of villains.' },
    { firstName: 'The', lastName: 'Catwoman', image: 'img/the_catwoman.jpg', info: 'Catwoman, Selina Kyle, is a skilled cat burglar with a complex relationship with Batman. Her agile moves and affinity for feline motifs make her a unique and sometimes unpredictable ally or adversary.' },
    { firstName: 'Fish', lastName: 'Mooney', image: 'img/fish_mooney.jpg', info: 'Fish Mooney is a powerful and cunning crime boss in Gotham City. Known for her intelligence and strategic thinking, she navigates the city\'s underworld with a bold and ambitious demeanor.' },
    { firstName: 'Alfred', lastName: 'Pennyworth', image: 'img/alfred_pennyworth.jpg', info: 'Alfred Pennyworth is Bruce Wayne\'s loyal butler and confidant. He provides guidance, support, and even steps into the action when needed, showcasing both wisdom and a strong sense of duty.' },
    { firstName: 'Hugo', lastName: 'Strange', image: 'img/hugo_strange.jpg', info: 'Dr. Hugo Strange is a brilliant but sinister scientist in Gotham City. Often depicted as a foe of Batman, he uses his intellect to manipulate and create formidable challenges for the Dark Knight.' },
    { firstName: 'The', lastName: 'Joker', image: 'img/the_joker.jpg', info: 'The Joker is Batman\'s iconic and chaotic arch-nemesis. Known for his unpredictable nature and obsession with anarchy, the Joker is a criminal mastermind who thrives on creating chaos and challenging Batman\'s moral code.' },
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
            tbody.append(row);
        });
    }

    // Initial population of the table
    populateTable(charactersData);

    // Search functionality
    $('#search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();

        $('#characters-table tbody tr').each(function () {
            const firstName = $(this).find('td:first-child').text().toLowerCase();
            const containsSearchTerm = firstName.includes(searchTerm);

            if (searchTerm === '' || containsSearchTerm) {
                $(this).addClass('highlighted');
            } else {
                $(this).removeClass('highlighted');
            }
        });
    });

    // Filter buttons functionality
    $('#filter-a-m').on('click', function () {
        filterTable('A', 'M');
    });

    $('#filter-n-z').on('click', function () {
        filterTable('N', 'Z');
    });

    // Function to filter the table based on last name range
    function filterTable(startLetter, endLetter) {
        $('#characters-table tbody tr').each(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            const isInRange = lastName >= startLetter && lastName <= endLetter;

            if (isInRange) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        updateFilterButtonCounts();
    }

    // Function to update filter button counts
    function updateFilterButtonCounts() {
        const countAtoM = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'A' && lastName <= 'M';
        }).length;

        const countNtoZ = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'N' && lastName <= 'Z';
        }).length;

        $('#filter-a-m').text(`A - M (${countAtoM})`);
        $('#filter-n-z').text(`N - Z (${countNtoZ})`);
    }
});
