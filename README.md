# Parliament Listening (แอบฟังเสียงรัฐสภา)

## Setup
**Requirements** NodeJS v11.4.0 or above.

```
$ npm install 
```

## Development
```
$ npm run develop
```

### Build Environments
| Name | URL |
|---|---|
| Staging | https://kind-bardeen-92630a.netlify.com |

## Datasets (WIP)
| Date | Links |
|---|---|
| 25-07-2019 | [![Raw Data][sheet-badge]](https://docs.google.com/spreadsheets/d/1058PcZHySzumcATrGdv0fBVEyrfbhrOGnLhaMC7wYt0/edit#gid=432547432) [![Data Preparation][data-prep-badge]](https://colab.research.google.com/drive/12cejltipBUCh4c61OC9KH7B1MyftMEOM) |

## Future developments
- Use machine learning algorithms to automatically identify speakers in each part of meetings. From what I see, this scenario is probably a [Blind Source Separation][bss] problem. Hence, we might start with [Independent Component Analysis (ICA)][ica].

## Potential Downstream Applications
Apart from being a tool that provides an efficient way to listen to parliament meetings, its datasets are also valuable. These datasets could results in several applications including:
1. **Performance metric** of each member of parliament (MP). Althought it's a rough estimation, having this metric would allow people to see how their representatives perform.
2. Inspired by the famous online game [Fantasy Football][fantasy-premiere], we could build **Fantasy Politics** in which people will play by picking a squad of politicians before next meeting. How members in the squad participate in the meeting will result scores that the player will receive after the meeting.
3. Inspired by music streaming services, i.e. Spotify or Fungjai,  we could have a similar platform, **Fungkai Dee**,  but contains tracks of politicans talking in parliament meetings.


## Acknowledgements
- This projects was bootstrapped with [Gatsby][gatsby].

[gatsby]: https://www.gatsbyjs.org
[data-prep-badge]: https://img.shields.io/badge/-Data%20Preparation-brightgreen
[sheet-badge]: https://img.shields.io/badge/-Raw%20Data-brightgreen
[fantasy-premiere]: https://fantasy.premierleague.com
[ica]: https://en.wikipedia.org/wiki/Independent_component_analysis
[bss]: https://en.wikipedia.org/wiki/Signal_separation