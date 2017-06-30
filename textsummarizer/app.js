var retext = require('retext');
var nlcstToString = require('nlcst-to-string');
var keywords = require('retext-keywords');

retext().use(keywords).process(
  /* First three paragraphs on Term Extraction from Wikipedia:
   * http://en.wikipedia.org/wiki/Terminology_extraction */
  'President Donald Trump continued his feud with two MSNBC hosts on Friday, alleging one of them asked him to intervene to stop a story in the National Enquirer tabloid.The latest skirmish began Thursday when Trump said the hosts, Mika Brzezinski and Joe Scarborough, tried to join him at Mar-a-Lago last winter while Brzezinski “was bleeding badly from a face-lift. His attack sparked outrage among Republican lawmakers who said he was behaving beneath the dignity of his office and distracting from their legislative agenda, including repealing Obamacare and cutting taxes. Senate Majority Leader Mitch McConnell is trying to negotiate a compromise on his health bill by the end of the week as Republicans seek to fulfill a major campaign promise.The hosts on Friday said in a Washington Post op-ed it was “false” they asked to join Trump at his Florida resort three nights in a row around New Year’s Eve, “laughable” that Trump says he refused to see them, and “a lie” that Brzezinski was badly bleeding from the cosmetic surgery Trump claimed.They also said top White House officials told them the Enquirer “was planning to publish a negative article about us unless we begged the president to have the story spiked. We ignored their desperate pleas.Trump said Friday on Twitter that Scarborough “called me to stop a National Enquirer article. I said no!” Scarborough responded on the social media network that it was “yet another lie. Trump has a history with the tabloid: He’s written first-person essays for the outlet, which endorsed him for president, held its 90th birthday party at his SoHo hotel in New York, and is published by his friend David Pecker.During the 2016 campaign, Trump praised the tabloid and trumpeted its claim that the father of one of his political rivals, Senator Ted Cruz, had been photographed with John F. Kennedy assassin Lee Harvey Oswald -- a claim Cruz denied and the nonpartisan fact-checker PolitiFact rated a “pants on fire” inaccuracy.On air Friday prior to Trump’s Enquirer tweet, Brzezinski called the incident “fascinating” and “sad for our country.',
  function (err, file) {
    console.log('Keywords:');

    file.data.keywords.forEach(function (keyword) {
      console.log(nlcstToString(keyword.matches[0].node));
    });

    console.log();
    console.log('Key-phrases:');

    file.data.keyphrases.forEach(function (phrase) {
      console.log(phrase.matches[0].nodes.map(nlcstToString).join(''));
    });
  }
);