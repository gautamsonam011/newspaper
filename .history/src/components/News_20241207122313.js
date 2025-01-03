import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Brian Thompson: Who is UnitedHealth CEO shot dead in New York? - BBC.com",
          "description": "Police are still searching for the suspect who shot dead the UnitedHealth CEO in Manhattan on Wednesday.",
          "url": "https://www.bbc.com/news/articles/cvgpl2qn7l5o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2c63/live/87331c50-b27b-11ef-a0f2-fd81ae5962f4.png",
          "publishedAt": "2024-12-05T07:10:34Z",
          "content": "UnitedHealth CEO Brian Thompson was shot dead on a New York City street\r\nBrian Thompson, the US health care insurance CEO who was gunned down in an apparent targeted attack in Manhattan on Wednesday,… [+4940 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Romania hit by major election influence campaign, amid Russian cyber-attacks - BBC.com",
          "description": "Romania's intelligence service reveals details of what it says is an attempt from abroad to meddle in the country's presidential election.",
          "url": "https://www.bbc.com/news/articles/cgq18w507dko",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/255d/live/c3e48aa0-b274-11ef-949f-7f8197011881.jpg",
          "publishedAt": "2024-12-05T07:02:48Z",
          "content": "Authorities in Romania have revealed details of what appears to be a major attempt to interfere in the countrys presidential elections using the social media platform TikTok, and with a series of cyb… [+3666 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Jack Baer",
          "title": "No. 9 Duke's triumph over No. 2 Auburn can't salvage ACC-SEC Challenge for their conference - Yahoo Sports",
          "description": "The ACC went 2-14 against the SEC.",
          "url": "https://sports.yahoo.com/no-9-dukes-triumph-over-no-2-auburn-cant-salvage-acc-sec-challenge-for-their-conference-045024775.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/K0wn1WsYgAlBO7fvVFws9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-11/44484470-b2bb-11ef-aeff-b39fe9813bc4",
          "publishedAt": "2024-12-05T06:55:00Z",
          "content": "Duke at least let the ACC end the ACC-SEC Challenge on a high note. (Photo by Lance King/Getty Images)\r\nNo. 9 Duke picked up its biggest win of the season on Wednesday, handing No. 2 Auburn its first… [+3313 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Emma Tucker",
          "title": "2 children in critical condition after gunman opens fire at California school, sheriff says - CNN",
          "description": "Two kindergarten students were wounded in a shooting at a school in northern California on Wednesday afternoon and a male suspect was found dead with what appears to be a self-inflicted gunshot wound, authorities said.",
          "url": "https://www.cnn.com/2024/12/04/us/california-school-shooting/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-21175620-3914712-377-still.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-12-05T06:44:00Z",
          "content": "Two kindergarten students remain in extremely critical condition after they were wounded in a shooting at a school north of Sacramento, authorities said on Wednesday.\r\nThe boys, aged 5 and 6, were be… [+2907 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Tom Westbrook",
          "title": "Rate cut bets boost stocks as bitcoin breaks $100,000 - Reuters",
          "description": "Bitcoin broke $100,000 on Thursday as investors bet on a friendly regulatory shift in the U.S., while Asian stocks were firm after Wall Street indexes notched record highs on growing confidence in U.S. interest rate cuts.",
          "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2024-12-05/",
          "urlToImage": "https://www.reuters.com/resizer/v2/W67OAYD25ZOIVCCYS6HHQOEGPA.jpg?auth=d62a850f07ebd5156aedba4989d4fc491edbb2d6cf4523e1afad4749b92363ff&height=1005&width=1920&quality=80&smart=true",
          "publishedAt": "2024-12-05T05:33:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "ScienceAlert"
          },
          "author": "David Nield",
          "title": "One Type of Chocolate Could Reduce Type 2 Diabetes Risk by 21% - ScienceAlert",
          "description": "Most of us will have a preference for chocolate in terms of the taste and texture.",
          "url": "https://www.sciencealert.com/one-type-of-chocolate-could-reduce-type-2-diabetes-risk-by-21",
          "urlToImage": "https://www.sciencealert.com/images/2024/12/DarkChocolateBrightlyLit.jpg",
          "publishedAt": "2024-12-05T04:40:39Z",
          "content": "Most of us will have a preference for chocolate in terms of the taste and texture. According to a new study, those who choose dark over milk might find a hidden benefit in a reduced risk of type 2 di… [+2887 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "OregonLive"
          },
          "author": "James Crepea | The Oregonian/OregonLive",
          "title": "Dan Lanning, Oregon football flip their way to another historic national signing day - OregonLive",
          "description": "The Ducks signed 20 players on Wednesday to a group that ends the day ranked No. 4 in the 247Sports Composite with the highest point evaluation (300.6) in UO history and highest average player rating (93.77) in the country.",
          "url": "https://www.oregonlive.com/ducks/2024/12/dan-lanning-oregon-football-flip-their-way-to-another-historic-national-signing-day.html",
          "urlToImage": "https://www.oregonlive.com/resizer/v2/T4VRN343EFHHFI767BAZ2T3NXU.jpg?auth=9a63a5d38b0de9f673561628229aea4cbef448801ae6efe7a30f16b73dd939ae&width=1280&quality=90",
          "publishedAt": "2024-12-05T04:36:00Z",
          "content": null
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Edward Segarra",
          "title": "Prince Harry brushes off Duchess Meghan divorce rumors: 'It's hard to keep up with' - USA TODAY",
          "description": "While speaking at a New York Times event, Prince Harry addressed speculation about his relationship with Duchess Meghan.",
          "url": "https://www.usatoday.com/story/entertainment/celebrities/2024/12/04/prince-harry-duchess-meghan-divorce-rumors/76782178007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/15/USAT/70864945007-gty-1682735486.jpg?crop=4837,2734,x0,y644&width=3200&height=1809&format=pjpg&auto=webp",
          "publishedAt": "2024-12-05T04:17:07Z",
          "content": "The trolls can keep throwing stones, but Prince Harry and Duchess Meghan are not on the rocks.\r\nThe Duke of Sussex addressed speculation about his relationship with wife Duchess Meghan during an appe… [+2476 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "Kansas vs. Creighton score: Bluejays upset Jayhawks, defeat No. 1 team for second straight season - CBS Sports",
          "description": "Like last season when Creighton defeated top-ranked UConn, the Bluejays beat the No. 1 Jayhawks on Wednesday",
          "url": "https://www.cbssports.com/college-basketball/news/kansas-vs-creighton-score-bluejays-upset-jayhawks-defeat-a-no-1-team-for-second-straight-season/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/12/05/6c5ce746-0c09-48ff-90ed-b8916a115e9b/thumbnail/1200x675/450bc9d39604dd7d8198dc7b7547e0ce/usatsi-24911687.jpg",
          "publishedAt": "2024-12-05T03:43:00Z",
          "content": "No. 1 Kansas took its first loss of the season Wednesday as unranked Creighton secured a 76-63 home win over the Jayhawks and shook off its recent funk with force. The Bluejays never trailed in the b… [+3504 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Michael Kranish, Dan Lamothe, Sarah Ellison, John Hudson",
          "title": "Hegseth’s history with alcohol shadows Pentagon selection - The Washington Post",
          "description": "A review of Pete Hegseth’s writings and interviews shows that he has been blunt about what he called his use of alcohol.",
          "url": "https://www.washingtonpost.com/politics/2024/12/04/pete-hegseth-drinking-defense-secretary-nomination/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VVUHHHQKHZHF2F3A52MEVWITJU_size-normalized.JPG&w=1440",
          "publishedAt": "2024-12-05T03:36:00Z",
          "content": "By Pete Hegseths account, his heavy drinking began after a brush with death when an RPG ricocheted off his vehicle but didnt explode while serving in Iraq with an Army infantry unit. When he returned… [+186 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "ALEX VEIGA",
          "title": "Trump nominates cryptocurrency advocate Paul Atkins as SEC chair - The Associated Press",
          "description": "President-elect Donald Trump says he intends to nominate cryptocurrency advocate Paul Atkins to chair the Securities and Exchange Commission. Atkins is the CEO of Patomak Partners and a former SEC commissioner. Trump calls Atkins a “proven leader for common s…",
          "url": "https://apnews.com/article/sec-chair-atkins-gensler-investors-financial-markets-d1c544f1846071b33c75b9f2dd0c1ba4",
          "urlToImage": "https://dims.apnews.com/dims4/default/72e71b8/2147483647/strip/true/crop/3998x2249+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe5%2Fd3%2F3c8094fde7ef13a434a4163320b4%2F5cb751d63ddc4b808ea4469a68ae1bdd",
          "publishedAt": "2024-12-05T03:15:00Z",
          "content": "President-elect Donald Trump announced Wednesday that he intends to nominate cryptocurrency advocate Paul Atkins to chair the Securities and Exchange Commission.\r\nTrump said Atkins, the CEO of Patoma… [+4167 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "ESPN",
          "title": "Heat 134-93 Lakers (Dec 4, 2024) Game Recap - ESPN",
          "description": null,
          "url": "https://www.espn.com/nba/recap?gameId\\\\u003d401704887",
          "urlToImage": null,
          "publishedAt": "2024-12-05T02:49:49Z",
          "content": null
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Joshua Nelson",
          "title": "Supreme Court justice sparks social media fire storm for her comments on gender transitions for minors - Fox News",
          "description": "A Supreme Court Justice triggered backlash after she compared the case weighing in on states banning gender transitions for minors to past state laws of banning interracial marriage",
          "url": "https://www.foxnews.com/media/supreme-court-justice-sparks-social-media-fire-storm-her-comments-gender-transitions-minors",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/supreme-court-justice-ketanji-brown-jackson.jpg",
          "publishedAt": "2024-12-05T02:00:00Z",
          "content": "Supreme Court Justice Ketanji Brown Jackson was slammed on Wednesday after she compared a Tennessee law banning gender transitions for minors to past laws banning interracial marriage.\r\nJackson and t… [+2306 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Variety"
          },
          "author": "Michael Schneider",
          "title": "‘The Masked Singer’ Reveals Identity of Goo: Here Is the Celebrity Under the Costume - Variety",
          "description": "On \"The Masked Singer\" Season 12 Episode 10, \"Quarter Finals: Merging of the Masks,\" a celebrity was revealed as Goo. Here's who it was.",
          "url": "https://variety.com/2024/tv/news/the-masked-singer-season-12-episode-10-recap-kobie-turner-goo-1236234530/",
          "urlToImage": "https://variety.com/wp-content/uploads/2024/12/MS-S12_EP1210-Show-MB_00163_f.jpg?w=1000&h=563&crop=1",
          "publishedAt": "2024-12-05T02:00:00Z",
          "content": "SPOILER ALERT: Details follow for Season 12, Episode 10 of “The Masked Singer,” “Quarter Finals: Merging of the Masks,” which aired Wednesday, December 4 on Fox.\r\nSorry, Los Angeles Rams defensive ta… [+11180 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Sean Conlon",
          "title": "Stock futures are little changed after S&P 500, Nasdaq notch new closing highs: Live updates - CNBC",
          "description": "The three major averages posted fresh records on Wednesday.",
          "url": "https://www.cnbc.com/2024/12/04/stock-market-today-live-updates.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/108068289-1732637587260-gettyimages-2186978912-ms1_1898_60alnbxq.jpeg?v=1732637744&w=1920&h=1080",
          "publishedAt": "2024-12-05T00:23:00Z",
          "content": "U.S. stock futures were relatively unchanged on Wednesday night following a record day for stocks.\r\nFutures tied to the Dow Jones Industrial Average fell 18 points, or 0.04%. On the other hand, S&amp… [+2441 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "2024-12-05T00:20:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": null,
            "name": "Spaceflight Now"
          },
          "author": null,
          "title": "SpaceX to launch 350th mission using a flight-proven Falcon 9 rocket booster during Starlink mission from California - Spaceflight Now",
          "description": null,
          "url": "https://spaceflightnow.com/2024/12/04/spacex-to-launch-350th-mission-using-a-flight-proven-falcon-9-rocket-booster-during-starlink-mission-from-california/",
          "urlToImage": null,
          "publishedAt": "2024-12-04T23:52:55Z",
          "content": "File: A Falcon 9 rocket stands ready to launch a Starlink mission. Image: SpaceX\r\nSpaceX aims notched another milestone in spaceflight reusability Wednesday night when it not only launched a flight-p… [+4186 chars]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": "Nicholas Wu, Daniella Diaz, Marcia Brown",
          "title": "Jeffries stays out of the way as Dems mutiny against senior panel leaders - POLITICO",
          "description": "Democrats are increasingly anxious about the incoming Trump administration and are no longer bowing to seniority rules to pick their committee leaders.",
          "url": "https://www.politico.com/news/2024/12/04/democrats-mutiny-against-leaders-jeffries-00192665",
          "urlToImage": "https://static.politico.com/db/46/cc1801754ae5abd2ee682f44042c/u-s-congress-46607.jpg",
          "publishedAt": "2024-12-04T23:07:57Z",
          "content": "At the center of it all is Jeffries, the minority leader, and his leadership team, who also skipped the seniority line in many ways when they rose to the top ranks two years ago. They have publicly s… [+2667 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": null,
          "title": "A surprising turn in Syria's civil war - The Washington Post",
          "description": "In the past week, the civil war in Syria reignited. Islamist rebels seized control of Aleppo, triggering a new phase in a years-long civil war. The Post’s Middle East bureau chief, Kareem Fahim, talks with host Elahe Izadi about why this moment matters.",
          "url": "https://www.washingtonpost.com/podcasts/post-reports/a-surprising-turn-in-syrias-civil-war/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://podcast.posttv.com/series/20241204/t_1733349412769_name_R3WADZL22NGP7HXOZ5T2TD43AA.jpg&w=1440",
          "publishedAt": "2024-12-04T22:57:04Z",
          "content": "Last weekends assault on Aleppo, Syrias economic capital, poses the most serious challenge to President Bashar al-Assad in years. Government forces, supported by Russia and Iran, have controlled the … [+863 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Leslie Josephs",
          "title": "JetBlue cuts more unprofitable routes, tweaks Europe flights - CNBC",
          "description": "JetBlue is in the middle of a new plan to return to consistent profitability and cut costs.",
          "url": "https://www.cnbc.com/2024/12/04/jetblue-cuts-routes-europe-flights.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107403141-1713445374566-gettyimages-2147827677-economou-jetbluea240411_npwJI.jpeg?v=1713445401&w=1920&h=1080",
          "publishedAt": "2024-12-04T22:32:02Z",
          "content": "JetBlue Airways told staff Wednesday that it is axing more unprofitable flights, redeploying aircraft outfitted with its high-value business class and tweaking Europe service, the carrier's latest mo… [+2053 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hello I am constructor from news component");

        this.state = {
            articles: this.articles,
            loading:false,
            page:1,
        }
       }
    async componentDidMount(){
        console.log("Hello I am component did mount.");

        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4ed330cbd0974333a944910a0fa0ea4d";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles: parseData.articles})
    }   

    handlePrevClick = async() =>{
      console.log("Prev");
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4ed330cbd0974333a944910a0fa0ea4d&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

      this.setState({
        page:this.state.page - 1,
        articles: parseData.articles
      })
    }

    handleNextClick = async() =>{
      console.log("Next");

      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4ed330cbd0974333a944910a0fa0ea4d&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

      this.setState({
        page:this.state.page + 1,
        articles: parseData.articles
      })
    }
  render() {
    console.log("Hello I am render.")
    return (
      <>
      <div className="container my-2">
        <h2>NewsMonkey</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key ={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0, 88): " "} urlImage={element.urlToImage} newsUrl={element.url} />
        </div>
        })}
        
        </div>
      </div>

      <div className='container d-flex justify-content-between'>
        <button type="button" className="btn btn-sm btn-primary" onClick={this.handlePrevClick} disbled={this.state.page<=1}>&larr; Previous</button>
        <button type="button" className="btn btn-sm btn-primary" onClick={this.handleNextClick}> Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News
