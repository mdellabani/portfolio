import React, {memo} from 'react';

type Paper = {
  title: string;
  authors: string;
  publication: string;
  year: number;
  link: string;
};

const papers: Paper[] = [
  {
    title: 'Local Planning Semantics: A Semantics for Distributed Real-Time Systems',
    authors: 'Mahieddine Dellabani, Jacques Combaz, Saddek Bensalem, Marius Bozga',
    publication: 'Leibniz Trans. Embed. Syst. 6(1): 01:1-01:27 (2019)',
    year: 2019,
    link: 'https://drops.dagstuhl.de/storage/07lites/lites_vol006/lites_vol006_issue001/LITES-v006-i001-a001/LITES-v006-i001-a001.pdf',
  },
  {
    title: 'Formal methods for distributed real-time systems. (Méthodes formelles pour les systèmes distribués temps-réel)',
    authors: 'Mahieddine Dellabani',
    publication: 'Grenoble Alpes University, France, 2018',
    year: 2018,
    link: 'https://theses.hal.science/tel-02146390v1',
  },
  {
    title: 'S BIP 2.0: Statistical Model Checking Stochastic Real-Time Systems',
    authors: 'Braham Lotfi Mediouni, Ayoub Nouri, Marius Bozga, Mahieddine Dellabani, Axel Legay, Saddek Bensalem',
    publication: 'ATVA 2018: 536-542',
    year: 2018,
    link: 'https://hal.science/hal-01888538/document',
  },
  {
    title: 'Knowledge Based Optimization for Distributed Real-Time Systems',
    authors: 'Mahieddine Dellabani, Jacques Combaz, Saddek Bensalem, Marius Bozga',
    publication: 'APSEC 2017: 751-756',
    year: 2017,
    link: 'https://hal.science/hal-01888605/document',
  },
  {
    title: 'Local Planning of Multiparty Interactions with Bounded Horizons',
    authors: 'Mahieddine Dellabani, Jacques Combaz, Marius Bozga, Saddek Bensalem',
    publication: 'FM 2016: 199-216',
    year: 2016,
    link: 'https://hal.science/hal-01867241v1/file/main.pdf',
  },
];

const Publications = memo(() => {
  const groupedPapers = papers.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<number, Paper[]>);

  return (
    <section>
      {Object.keys(groupedPapers).map((year) => {
        const yearPapers = groupedPapers[parseInt(year)];
        return (
          <div key={year}>
            {/* <h3>{year}</h3> */}
            <ul>
              {yearPapers.map((paper, index) => (
                <li key={index}>
                  <a href={paper.link} rel="noopener noreferrer" target="_blank">
                    {paper.title}
                  </a>
                  <p>Authors: {paper.authors}</p>
                  <p>{paper.publication}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
});

export default Publications;
