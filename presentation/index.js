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
<Slide notes={`I'm colin, thank you to clkao, audrey and the gov zero team for having me`} bgColor="primary">
  <Heading size={1} fit caps lineHeight={2}>
    pol.is in Taiwan
  </Heading>
  <Heading lineHeight={1.3} size={5}>
    Bridging the gap between
    public discourse & public policy
  </Heading>
  <Text lineHeight={2} bold textColor="tertiary">Taipei, g0v 2016</Text>
</Slide>

{
  /*************
    What does a crowd think?
  **************/
}
<Slide
  bgDarken={.3}
  bgImage={images.emirates.replace("/", "")}
  notes={`

    figuring out what crowds think is central to the problem of democracy.
    our tools for figuring out what they think are seriously lacking.

    emirates ---

    surveys +-, comments +-, interviews +-

    every org ---

    especially bad at the government level ---

    fundamental process of government

    `}>
  <Heading size={3} lineHeight={1.3}>
    What does this crowd think?
  </Heading>
</Slide>
<Slide
  notes={`

    inconvenient, boring and slow to participants ---

    incomplete to gov

    `}
    bgDarken={.5}
    bgImage={images.consultation.replace("/", "")}>
    <Heading size={1} lineHeight={1.3}>
      Inefficient
    </Heading>
</Slide>
<Slide
  notes={`
    let's go back to the classical city state, the polis, a more human scale and see what they did ---

    The crowd was endlessly passing through the Agora freely discussing issues

  `}
  bgImage={images.athensFromAbove.replace("/", "")} />
<Slide notes={`todo`}>
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
      {`Can't we just analyze social media?`}
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

    ferguson was ---

    They are ignoring ---

    ferguson very controversial about race in america --

    the unit of interaction is affinity (person or idea) ---

    The filter bubble is quantifiable.
  `}
  bgImage={images.fergusonTweeters.replace("/", "")} />
<Slide

  notes={`
    homophily === birds of a feather ---

    pattern repeats ---

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
<Slide
notes={`
  Publishers are reaching both communities with articles, special role.
  unique position ability to provide common ground, mediation and moderation.
  reporting and the codifying of the narrative are naturally places of
  conflict over that narrative.
  `}
  bgImage={images.buzzfeedGuardian.replace("/", "")} />

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
    I want to tell you about a time that arguing on the internet went well.
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
  <Heading lineHeight={1.3}> Real-time Machine Learning </Heading>
</Slide>
<Slide notes={`
    polis identifies groups based on similar voting patterns, per conversation
    `}>
    <Heading lineHeight={1.3}> {`Clustering (formation of groups)`} </Heading>
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
<Slide
  notes={`
    polis has grown ---

    also new media gathering perspectives
    and putting it to politicians. authentic,
    impactful, transparent political discourse ---

    given the success of vTaiwan it is not hard to see the complementary nature
    of consultative and investigative aspects - they are the same at their root ---

    Guest list: Mayor of Taipei, a professor from National Taiwan University, Director of Urban Development of Taipei,
    multiple administration officials, Simon Chang, the Premier of Taiwan
  `}
  bgImage={images.talkto.replace("/", "")} />
{
  /*************
    vTaiwan as a model
  **************/
}
<Slide
  bgImage={images.jaclyn.replace("/", "")}
  notes={`

    Jaclyn reaching out to g0v ---

    "When I worked on cyberspace regulations, often I hear people saying 'Minister, this is impossible,
    you need at least 3 years or 5 years to make progress.' But in the business world, because I've
    been in the technology industry, technology moves much faster. We are in a world of rapid change,
    how is it possible for each policy to always take 3 to 5 years? That's just not workable."
  `}>
    <Heading size={3} lineHeight={1.3}>

    </Heading>
</Slide>
<Slide notes={`
  turning raw crowd energy into meaningful feedback --> vTaiwan. ---

  Making this scale and character crowd energy and feedback a daily, weekly, monthly occurrance.
  Make it sustainable ---


`} bgImage={images.sunflowerRev.replace("/", "")}/>
<Slide
  bgImage={images.vtaiwan.replace("/", "")}
  notes={`
    into legislative impact
    vTaiwan is a model for the world ---

    sunflower energy has been maintained & extended ---

    civil society yelling - didn't realize everyone agreed with them. not just one person - 6 people arguing from their own feelings ---

    two people on opposite sides of the issue shot down someone trying to minimize what had been accomplished, validation of methods ---
  `}>
    <Heading size={3} lineHeight={1.3}>

    </Heading>
</Slide>

<Slide
  notes={`
    admin proposed bill - can demonstrate a mandate -
    never got to this stage before because all the ministries didn't agree and they couldn't because their constituents couldn't...
    now that there is minimal agreement... ---

    vTaiwan could trace the breakdown in government process backwards to the breakdown of civil discourse,
    encouragign because it's on the people, but only empowering if we have a way forward ---

    energy of revolution, bindingness of consultation ---

    facebook advertising was done sponsored link is always a polis link - pay to distribute this.
    that's great - invest in democratic behavior as if we value it. make it quick, make it good.
    this is a plan. it works. it is efficient, organic and robust. ---

    crowd source agenda - percentage of the majority group + one half of the minority group.
    for your voice to be heard it must get 90%...
    everyone in the majority... a majority in the minority...
    strong conensus. otherwise it's just how many people can you bring to vote. ---
  `}>
    <Heading size={3} lineHeight={1.3}>
      The process of vTaiwan
    </Heading>
</Slide>



<Slide
  notes={`
    efficient educated judgement is the holy grail - broke a deadlock that lasted 6 years in 3months
    `}>
  <Text lineHeight={1.7} textAlign="left" textSize={36} textFont="Source Serif Pro">
    {`
      Democratic governance rests on the capacity of and opportunity for
      citizens to engage in enlightened debate. Although deciding public
      policy through argument has little to recommend it in terms of
      efficiency, the purpose of public deliberation, as Aristotle recognized
      in his Rhetoric, is not efficient government but educated judgement.
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
    leading the world in the implementation of digital
    democracy practices, you're doing it in the shadow of a regime that is moving
    full speed in the other direction. ---

    deepest respect for your efforts in this regard and am humbled to able to contribute. ---

    polis has been used in other places by other groups, adoption in Taiwan
    has been taken to its conclusion of influencing a legislative decision. ---

    it is so powerful and exciting to see people have agenda setting power in vTaiwan because that's where the real power is, we started polis to break the media stranglehold on agenda setting power of the parties, we wanted agenda setting, which is the real power, to be bottom up. ---

    We can't fulfil our mission of building a
    tool to affect policy without a people and a government willing to engage in
    listening, and for that we thank you too. It motivates and inspires us. ---

    good people on all sides of the problem - civil society government media who are frustrated
    if we can realize this, that there are good people on all sides, we are free to solve the
    problem by creating new information structures, tools and processes and solve
    communication problems at that level ---

    run a polis convo with the crowd here?

    want people to see the answer more often b/c foundation of democratic behavior ---


  `}
    bgImage={images.tain.replace("/", "")}>
  </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
