const country = /What does (.*) export/.exec(document.querySelector('iframe').contentDocument.title)[1];
inputCountryAnswer(country);
