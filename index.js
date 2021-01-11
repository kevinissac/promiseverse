var books = [
    'Genesis',
    'Exodus',
    'Leviticus',
    'Numbers',
    'Deuteronomy',
    'Joshua',
    'Judges',
    'Ruth',
    '1 Samuel',
    '2 Samuel',
    '1 Kings',
    '2 Kings',
    '1 Chronicles',
    '2 Chronicles',
    'Ezra',
    'Nehemiah',
    'Esther',
    'Job',
    'Psalm',
    'Proverbs',
    'Ecclesiastes',
    'Song of Solomon',
    'Isaiah',
    'Jeremiah',
    'Lamentations',
    'Ezekiel',
    'Daniel',
    'Hosea',
    'Joel',
    'Amos',
    'Obadiah',
    'Jonah',
    'Micah',
    'Nahum',
    'Habakkuk',
    'Zephaniah',
    'Haggai',
    'Zechariah',
    'Malachi',
    'Matthew',
    'Mark',
    'Luke',
    'John',
    'Acts',
    'Romans',
    '1 Corinthians',
    '2 Corinthians',
    'Galatians',
    'Ephesians',
    'Philippians',
    'Colossians',
    '1 Thessalonians',
    '2 Thessalonians',
    '1 Timothy',
    '2 Timothy',
    'Titus',
    'Philemon',
    'Hebrews',
    'James',
    '1 Peter',
    '2 Peter',
    '1 John',
    '2 John',
    '3 John',
    'Jude',
    'Revelation'
    ];


    //API Methods

    class PromiseVerse{

        array = [
                "28.6.11",
                "28.6.1",
                "19.91.3",
                "19.16.5",
                "19.91.7",
                "19.91.10",
                "19.27.14",
                "19.118.6",
                "19.32.8",
                "19.48.14",
                "19.45.7",
                "19.4.8",
                "19.84.11",
                "27.4.3",
                "40.11.28",
                "23.41.13",
                "23.41.10",
                "1.28.15",
                "1.8.22",
                "1.22.18",
                "1.16.10",
                "5.6.6",
                "23.58.8",
                "23.60.22",
                "23.41.13",
                "19.145.18",
                "19.71.20",
                "42.10.19",
                "58.12.1",
                "42.15.31",
                "46.16.13",
                "38.9.12",
                "1.12.2",
                "44.2.25",
                "47.13.11",
                "9.1.17",
                "60.5.6",
                "60.2.9",
                "19.55.22",
                "20.3.26",
                "20.3.3",
                "20.6.22",
                "2.15.26",
                "33.7.7",
                "51.3.23",
                "9.12.24",
                "19.122.2",
                "19.2.4",
                "19.34.10",
                "19.121.7",
                "19.23.1",
                "19.46.7",
                "19.55.22",
                "19.23.6"
            ]



        constructor(file){
            this.xmlDoc = this.loadXMLFile(file)
        }

        useCustom(array){
            this.array = array
            this.arrayRandom = this.getRandomInt(0, array.length-1)
            this.verseSelected = array[this.arrayRandom].split(".")
        }

        useDefault(){
            this.arrayRandom = this.getRandomInt(0, this.array.length-1)
            this.verseSelected = this.array[this.arrayRandom].split(".")
        }

        loadXMLFile(file) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", file, false);
            xhttp.send("");
            return xhttp.responseXML;
        }

        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
    
        getVerse(){
            var verse = this.xmlDoc.getElementsByTagName("Book")[this.verseSelected[0]-1].getElementsByTagName("Chapter")[this.verseSelected[1]-1].getElementsByTagName("Verse")[this.verseSelected[2]-1].firstChild.nodeValue.replace(/\\"/g, "").replace(/\"/g, "");
            return verse
        }

    
        getReference(array){
            var ref = books[this.verseSelected[0]-1] + " " + this.verseSelected[1] +":"+this.verseSelected[2]; 
            return ref
        }
    }