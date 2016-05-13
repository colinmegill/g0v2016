// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../themes/polis/index.js";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("../themes/polis/index.css");


const images = {
  tain: require("../assets/tain.png"),
  sunflowerRev: require("../assets/sunflowerRev.png"),
  pnyx: require("../assets/pnyx.jpg"),
  oldcrowd: require("../assets/oldcrowd.png"),
  matrix: require("../assets/matrix.png"),
  fergusonexplosion: require("../assets/fergusonexplosion.gif"),
  everyByEvery: require("../assets/everyByEvery.jpg"),
  emirates: require("../assets/emirates.png"),
  confFlameWar: require("../assets/confFlameWar.png"),
  assembly: require("../assets/assembly.png"),
  parisCafe: require("../assets/pariscafe.png"),
  consultation: require("../assets/consultation.jpg"),
  shoutyourabortion: require("../assets/shoutyourabortion.gif"),
  fergusonTweeters: require("../assets/fergusonTweeters.jpg"),
  shoutyourabortion2: require("../assets/shoutyourabortion2.jpg"),
  commentbot: require("../assets/commentbot.jpg"),
  bookquote: require("../assets/bookquote.jpg"),
  vtaiwan: require("../assets/vtaiwan.png"),
  jsdc_endorsement: require("../assets/jsdc_endorsement.png"),
  jsdc_invite: require("../assets/jsdc_invite.png"),
  jsdc_majority: require("../assets/jsdc_majority.png"),
  write: require("../assets/write.jpg"),
  vote: require("../assets/vote.jpg"),
  buzzfeedGuardian: require("../assets/buzzfeedGuardian.gif"),
  parliament: require("../assets/sunflowerParliament.jpg"),
  athensNumbered: require("../assets/athensNumbered.jpg"),
  athensFromAbove: require("../assets/athensFromAbove.jpg"),
  survey: require("../assets/survey.jpg"),
  leaveComment: require("../assets/leaveComment.png"),
  alien: require("../assets/alien.jpg"),
  cheeseheads: require("../assets/cheeseheads.jpg"),
  jaclyn: require("../assets/jaclyn.png"),
  recommender: require("../assets/recommender.png"),
  commentMatrix: require("../assets/commentMatrix.png"),
  monocle: require("../assets/monocle.png"),
  talkto: require("../assets/talkto.png"),
  alcohol_stats: require("../assets/alcohol_stats.png")


  // fergusonTweeters: require("../assets/fergusonTweeters.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "rgb(47, 49, 54)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} progress="number" transitionDuration={500}>
{
  /*************
    Welcome slide
  **************/
}
<Slide notes={`

  I'm colin, ---

  founder of seattle based startup pol.is, uses machine learning to making online discussions scale up ---

  thank you to clkao, audrey and the gov zero team for having me

  `} bgColor="primary">
  <Heading size={1} fit caps lineHeight={2}>
    pol.is in Taiwan: 跨越鴻溝
  </Heading>
  <Heading lineHeight={1.3} size={5}>
    Bridging the gap between
    public discourse & public policy
  </Heading>
  <Text lineHeight={2} bold textColor="tertiary">Taipei, g0v 2016</Text>
</Slide>

<Slide
  notes={`

  `}>
  <BlockQuote>
    <Quote>{"We need to have a platform to allow the entire society to engage in rational discussion"}</Quote>
    <Cite>{"Minister Jaclyn Tsai 蔡玉玲"}</Cite>
  </BlockQuote>
</Slide>

{
  /*************
    Robot how to argue on the internet
  **************/
}
<Slide
  notes={`
    more enlightened members of all communities are discouraged from engaging their strongest ideas in internet common spaces.
  `}>
  <Image style={{borderRadius: 5}} width="80%" src={images.commentbot.replace("/", "")}/>
</Slide>


<Slide
  notes={`

    inconvenient, boring and slow to participants ---

    to be clear, I'm not talking about scaling decision making directly,
    I'm talking about scaling sentiment analysis as a proxy for that

    `}
    bgDarken={.5}
    bgImage={images.consultation.replace("/", "")}>
    <Heading size={1} lineHeight={1.3}>
      Inefficient 冗長
    </Heading>
</Slide>
<Slide
  notes={`
    let's go back to the classical city state, the polis, a more human scale and see what they did ---

    The crowd was endlessly passing through the Agora freely discussing issues

  `}
  bgImage={images.athensFromAbove.replace("/", "")} />
<Slide notes={`
    surveys +-, comments +-
  `}>
  <Image
    style={{
      position: "relative",
      left: -300
    }}
    width="180%" src={images.assembly.replace("/", "")}/>
</Slide>
<Slide
  notes={`
    sometimes the stadium shows up ---

    find out exactly what they think. ---

    infrequent, not always constructive, not sustainable ---

    usually means something has broken down. ---

    the government would love to not do research like this.
    `}
    bgImage={images.parliament.replace("/", "")}/>

  {
    /*************
      Social media
    **************/
  }
  <Slide
    notes={`
      social media *is* where we're talking ---

      both q & q ---

      authentic ---

      why is it problematic ?
      `}
    >
    <Heading size={3} lineHeight={1.3}>
      {`Can't we just analyze social media? 社群媒體分析`}
    </Heading>
  </Slide>


{
  /*************
    Emma's work
  **************/
}



<Slide

  notes={`
    So let's say you do have a data scientist ---

    The following images produced by Emma Pierson Stanford researcher and Rhodes Scholar ---

    2.5 days of Twitter activity ---

    different 'communities' or, literally, parts of the Twitter graph
    talk amongst themselves about a topic ---

    You are
    broadcasting ideas from people you agree with to people who agree with you. ---

  `}>
  <Image width={"70%"} src={images.shoutyourabortion.replace("/", "")}/>
</Slide>

<Slide
  notes={`
    homophily === birds of a feather ---

    pattern repeats ---
  `}
  >
  <Heading size={2} lineHeight={1.3}>
    Homophily 趨同
  </Heading>
</Slide>

<Slide
  notes={`
    twitter not 'one place' ---

    graphs, neighborhoods w/ diff assumptions, values and patterns. ---

    not one conversation occurring where ideas bump up against
    each other, the conversation retreats into thousands of self
    selected networks of likeminded people. ---

    this is a feature, not a bug: built for discovery ---

    tribe isn't a bad thing. ---

    People feel safe with people they relate to ---

    within groups, not between them ---



  `}
  bgImage={images.shoutyourabortion2.replace("/", "")}>
</Slide>


{
  /*************
    Case Study
  **************/
}
<Slide
  notes={`
    lots of people, strongly divergent views, in real-time
    what it grew into here in Taiwan, the implications for other places.
    overview of pol.is for those of you who are not familiar
  `}
  >
  <Heading size={3} lineHeight={1.3}>
    I want to tell you about a time that arguing on the internet went well. 翻轉戰文！
  </Heading>
</Slide>
<Slide notes={`200 comment thread, fast and furious, here are the last comments`}>
  <Image style={{borderRadius: 5}} width="60%" src={images.confFlameWar.replace("/", "")}/>
</Slide>
<Slide notes={`what did this mean? well everyone came into the conversation and if they had something to say, they could write it, just like on facebook or any other platform`}>
  <Image style={{borderRadius: 5}} width="100%" src={images.write.replace("/", "")}/>
</Slide>
<Slide notes={`
  and we have a different set of responses, agree and disagree, you cannot reply
  `}>
  <Image style={{borderRadius: 5}} width="100%" src={images.vote.replace("/", "")}/>
</Slide>

<Slide notes={`

    matrix ---
    scalable ---
    may not seem more useful ---
    kind of compression algorithm on the crowd's perspectives, an encoding you have transferred the
    state of the crowd's opinions into a mathematical structure that statistical
    operations can be run on.

    parallellization ---

    `}>
  <Image style={{borderRadius: 5}} width="70%" src={images.commentMatrix.replace("/", "")}/>
</Slide>

<Slide
  notes={`
    but you know about this already, it's a recommender! efficient isn't really the right word, it happens in the background after
    people take simple, natural actions in parallel.it's invisible.
  `}>
  <Image style={{borderRadius: 5}} width="70%" src={images.recommender.replace("/", "")}/>
</Slide>
<Slide notes={`todo`}>
  <Heading lineHeight={1.3}> Real-time Machine Learning 即時機器學習</Heading>
</Slide>
<Slide notes={`
    polis identifies groups based on similar voting patterns, per conversation
    `}>
    <Heading lineHeight={1.3}> {`Clustering (formation of groups) 自動分群`} </Heading>
</Slide>
<Slide notes={`Allowing Qihoo employees to share tech isn't an endorsement`}>
  <Image style={{borderRadius: 5}} width="80%" src={images.jsdc_endorsement.replace("/", "")}/>
</Slide>
<Slide notes={``}>
  <Image style={{borderRadius: 5}} width="80%" src={images.jsdc_invite.replace("/", "")}/>
</Slide>
<Slide notes={`
    magical, consensus shows mutual respect ---

    like the good of surveys, this is structured, useful data. but like commenting it's emergent, bottom up, organic, authentic.
    has the best features of both, and overcomes the disadvantages of both.
  `}>
  <Image style={{borderRadius: 5}} width="80%" src={images.jsdc_majority.replace("/", "")}/>
</Slide>
{
  /*************
    talkto.tw
  **************/
}
<Slide
  notes={`
    polis has grown ---

    Guest list: Mayor of Taipei, a professor from National Taiwan University, Director of Urban Development of Taipei,
    multiple administration officials, Simon Chang, the Premier of Taiwan
  `}
  bgImage={images.talkto.replace("/", "")} />
<Slide
  notes={`
    international recognition, effort recently profiled in Monocle
    `}>

  <Image style={{borderRadius: 5}} width="80%" src={images.monocle.replace("/", "")}/>
</Slide>

  <Slide
  notes={`
    Publishers reaching all communities with articles, special role. ---

    unique position ability to provide common ground, mediation and moderation.
    reporting and the codifying of the narrative are naturally places of
    conflict over that narrative. ---

    new media, bridge, facilitating productive discourse, weaving satisfying conversations back into people's lives ---
    `}
    bgImage={images.buzzfeedGuardian.replace("/", "")} />
{
  /*************
    vTaiwan
  **************/
}

<Slide
  bgImage={images.jaclyn.replace("/", "")}
  notes={`

    Jaclyn reaching out to g0v ---


  `}>
</Slide>

<Slide notes={`
  "at the time — if you remember the post-Sunflower days — the entire society was very chaotic. - Minister Jacyln Tsai" ---

  turning raw crowd energy into meaningful feedback --> vTaiwan. ---

  Making this scale and character crowd energy and feedback a daily, weekly, monthly occurrance.
  Make it sustainable ---


`} bgImage={images.sunflowerRev.replace("/", "")}/>



<Slide
  bgImage={images.vtaiwan.replace("/", "")}
  notes={`
    vTaiwan is a project initiated by the government, run by helpful hackers,
    meant to get better feedback from citizens about policies. ---

    sunflower energy has been maintained & extended ---

    activists didn't realize everyone agreed with them ---

    two people on opposite sides of the issue ---

    model for the world ---

  `}/>
  {
    /*************
      PROCESS
    **************/
  }
<Slide
  notes={`
    energy bc bindingness of consultation ---
  `}>
    <Heading size={3} lineHeight={1.3}>
      The process of vTaiwan 正當程序
    </Heading>
</Slide>

<Slide
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>
      {"1: Identify & qualify an issue (stakeholders must be digitally enabled) 具體政策問題規劃（各方利益關係人都必須能上網）"}
    </Heading>
</Slide>

<Slide
  notes={`
    government does this part
  `}>
    <Heading size={3} lineHeight={1.3}>
      {"2: Identify stakeholders & gather information 連絡各方利益關係人，取得論點"}
    </Heading>
</Slide>

<Slide
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>
      {"3: Facebook ads to target / draw people to conversation 灑廣告請大家來討論"}
    </Heading>
</Slide>

<Slide
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>
      {"4. F2F meetings with all stakeholders framed by pol.is results 利益關係人實體直播會議，議程由線上共識決定"}
    </Heading>
</Slide>

<Slide
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>
      {"5. Administration drafts law 行政機關將共識轉譯成法規"}
    </Heading>
</Slide>

<Slide
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>
      {"6. Legislature votes on that law 交由立法院審議"}
    </Heading>
</Slide>
{
  /*************
    Online alcohol sales
  **************/
}
<Slide
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>
      ie., online alcohol sales 開放試辦網路販酒
    </Heading>
</Slide>

<Slide
  notes={`

    ministries constituents ---
    minimal agreement... ---

    vTaiwan could trace the breakdown in government process backwards to the breakdown of civil discourse,
    encouraging & empowering ---

  `}>
    <Heading size={3} lineHeight={1.3}>
      {`The government couldn't move forward because the constituents couldn't agree 閉門會議吵了六年沒有結果`}
    </Heading>
</Slide>

<Slide
  notes={`
    more voters than comments and commenters - consistently 10x
    `}>

  <Image style={{borderRadius: 5}} width="90%" src={images.alcohol_stats.replace("/", "")}/>
</Slide>

<Slide
  notes={`
    "I think this is a solid platform for civil collaboration with the government. The platform has operated for a period of time, people generally trust this process of policy formulation — early-stage communication and transparency really helps. I think it should continue. I really hope g0v friends can work with the new administration after May 20." ---

    in great conversations you build on shared consensus as building blocks to get to the good stuff and all learn ---

    if we are not measuring consensus, how can we tell if it changes? ---
  `}>
    <Heading size={1} lineHeight={1.3}>
      {"Strong disagreements coexist with consensus 立場不同的人，也可以有共識"}
    </Heading>
</Slide>

<Slide
  notes={`
    "When I worked on cyberspace regulations, often I hear people saying 'Minister, this is impossible,
    you need at least 3 years or 5 years to make progress.' But in the business world, because I've
    been in the technology industry, technology moves much faster. We are in a world of rapid change,
    how is it possible for each policy to always take 3 to 5 years? That's just not workable."
    `}>
  <Text lineHeight={1.7} textAlign="left" textSize={36} textFont="Source Serif Pro">
    {`
      Democratic governance rests on the capacity of and opportunity for
      citizens to engage in enlightened debate. Although deciding public
      policy through argument has little to recommend it in terms of
      efficiency, the purpose of public deliberation, as Aristotle recognized
      in his Rhetoric, is not efficient government but educated judgement.
      公民審議，是為了共同學習如何判斷，而不是一味求快
    `}
  </Text>
  <Link
    textColor="white"
    textSize={24}
    href="https://books.google.com/books?id=7UuCvESagZsC&lpg=PA82&ots=dNr1WC9gmm">
    {"Gerald Hauser, On Habermas & the Public Sphere"}
  </Link>
</Slide>

<Slide notes={`

    at a time when governments all over are blocked by civil society's inability to communicate and find the core of what unites them,
    at a time when the very concept of democracy is being challenged by our society's scale and the difficulty of participation,
    what has happened here between civil society, activists, media and government is an enormous cause for hope. thank you for inspiring
    me and showing me what is possible. May we together take this message to the world.

    shadow ---

    deepest respect ---

    fulfil mission ---

    thank you for sharing our vision and helping us build a better tool ---

  `}
    bgImage={images.tain.replace("/", "")}>
  </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
