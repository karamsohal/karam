/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem{
        constructor(id, name, description, category){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category){
            if (this.id !== id && !name && !description && !category){
                return;
            } else {
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString(){
            const nameEl = document.createElement('h2');
            nameEl.textContent = this.name;
            
            const desEl = document.createElement('p');
            desEl.textContent = this.description;
            
            const catEl = document.createElement('div');
            catEl.textContent = this.category;

            const wrapperEl = document.createElement('div');
            wrapperEl.classList.add('content-item-wrapper');
            wrapperEl.id = `content-item-${this.id}`;
            wrapperEl.append(nameEl, desEl, catEl);  
            
            return wrapperEl;
        }
    }

    const software1 = new ContentItem(1, 'Intego Mac', 'Intego is a dedicated macOS antivirus solution that offers excellent protection against malware, viruses, and other online threats.', 'MacOS');

    const software2 = new ContentItem(2, 'Norton 360', 'Norton is known for its comprehensive security suite that includes antivirus protection, a firewall, identity theft protection, and more.', 'Windsows & MacOS');
    
    const software3 = new ContentItem(3, 'Bitdefender', 'Bitdefender is highly regarded for its excellent malware detection and low system impact. It offers a range of security solutions for different needs.', 'Windsows & MacOS');

    const software4 = new ContentItem(4, 'Kaspersky', 'Kaspersky Anti-Virus is known for its strong malware detection capabilities and a wide range of features to protect your computer and online activities.', 'Windsows & MacOS');

    const software5 = new ContentItem(5, 'McAfee', 'McAfee provides a variety of security products, including antivirus software, with features such as a firewall, secure browsing, and identity theft protection.', 'Windsows & MacOS');

    const softwares = [software1, software2, software3, software4, software5];

    softwares.forEach(software => {
        $('div#content-item-list').append(software.toString());
    });

    $('.content-item-wrapper').css({
        'border' : '2px solid blue',
        'width' : '75%',
        'padding' : '4px 8px',
        'margin' : '4px auto'
    })

});


