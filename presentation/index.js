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
  jaclyn: require("../assets/jaclyn.png")


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
  notes={`
    this is the question our company has been trying to address with the product pol.is
    which many of you are familiar with ---

    every org ---

    simple and fast see the answer more often ---

    our company infrastructure for democratic behavior, part of gov zero's function as well ---

    have everyone shout out what they like ---

    `}>
  <Heading size={3} lineHeight={1.3}>
    What does a crowd think?
  </Heading>
</Slide>

<Slide
  bgImage={images.emirates.replace("/", "")}
  notes={`
    so let's begin with a crowd. This one is
    60,000 at Emirates stadium --

    visualize it because it's hard to think about online
    you may be reading a news article with 10x that in a morning ---

    What are our options? ---

    landscape of opinion ---

    public sphere ---

    midfield ---

    if you are listening to this on video after the conference,
    maybe pause and think about it - what would you do? what if everyone had a
    mobile phone?
  `}>
</Slide>
<Slide
  notes={`
    inconvenient ---

    stuffy, boring ---

    serial ---

    surveys are limiting, comment boxes don't produce useful data, interviews and other qual measures are time consumeing, pople don't show up to consultation
    `}
    bgDarken={.5}
    bgImage={images.consultation.replace("/", "")}>
    <Heading size={1} lineHeight={1.3}>
      Inefficient
    </Heading>
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
      Social media sentiment
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

    The following images produced by Stanford researcher and Rhodes Scholar Emma Pierson. ---

    These are liberal and conservative twitter users talking about Ferguson ---

    They are ignoring each other ---

    ferguson very controversial about race in america --

    the unit of interaction is affinity (person or idea) ---

    what emerges from these rules is a graph. ---

    The filter bubble is quantifiable.
  `}
  bgImage={images.fergusonTweeters.replace("/", "")} />
<Slide

  notes={`
    does this pattern repeat? ---

    2.5 days of Twitter activity ---

    different 'communities' or, literally, parts of the Twitter graph
    talk amongst themselves about the same topics. ---

    they are clusters that emerge from affinity, following your own. You are
    broadcasting ideas from people you agree with to people who agree with you. ---

    discovery was the goal
  `}>
  <Image width={"70%"} src={images.shoutyourabortion.replace("/", "")}/>
</Slide>
<Slide
notes={`
  Publishers are reaching both communities with articles, special role.
  polis is moving forward with publishers who are trying to move beyond
  vitriol on the comment threads below their articles and better serve
  this unique purpose of providing common ground, mediation and moderation
  `}
  bgImage={images.buzzfeedGuardian.replace("/", "")} />
<Slide
  notes={`
    twitter not 'one place' ---

    graphs, neighborhoods w/ diff assumptions, values and patterns. ---

    not one conversation occurring where ideas bump up against
    each other, the conversation retreats into thousands of self
    selected networks of likeminded people. ---

    a reply to a community a reply to a person, which is very heavy, hard to come off not as an attack.

  `}
  bgImage={images.shoutyourabortion2.replace("/", "")}>
</Slide>

<Slide
  bgImage={images.cheeseheads.replace("/", "")}
  bgDarken={.6}
  notes={`
    tribe isn't a bad thing. ---

    People feel safe with people they relate to ---

    intra group, not inter group. ---

    social media overall not a great place for inter-group argumentation ---
    `}>
  <Heading size={3} lineHeight={1.3}>
    Tribe is inevitable
  </Heading>
</Slide>

<Slide
  notes={`not accurate representation --- mob punishes viewpoints it doesn't agree with`}>
  <Text lineHeight={1.7} textAlign="left" textSize={36} textFont="Source Serif Pro">
    {"A submission's score is simply the number of upvotes minus the number of downvotes. - Reddit FAQ"}
  </Text>
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

    it gets you a matrix. and all those ones
    and zeros may not seem more useful than everyone talking at once in a confused way... but the fact is that you
    have run a kind of compression algorithm on the crowd's perspectives, an encoding you have transferred the
    state of the crowd's opinions into a mathematical structure that statistical
    operations can be run on.

    parallellize! everyone writes and votes at the same time, analysis
    done automatically. ---

    `}>
  <Image width="100%" src={images.matrix.replace("/", "")}/>
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
    A magical thing happened -
    broad consensus on a community building statement of mutual respect and trust
    it colors the other statements. it's now respectful disagreement
  `}>
  <Image style={{borderRadius: 5}} width="80%" src={images.jsdc_majority.replace("/", "")}/>
</Slide>

{
  /*************
    Algorithm of public opinion / dis
  **************/
}
<Slide notes={`
  fundamental unit of productive discussion
  should be the idea, not the individual. ---

  not a new idea, just a new medium and a new scale
  `}>
  <Heading> What is the algorithm of productive public discourse? </Heading>
</Slide>
{
  /*************
    ASSEMBLY
  **************/
}
<Slide
  notes={`
    let's go back to the classical city state, the polis, a more human scale and see what they did ---

    The crowd was endlessly passing through the Agora freely discussing issues

  `}
  bgImage={images.athensFromAbove.replace("/", "")} />

<Slide
  bgImage={images.athensFromAbove.replace("/", "")}
  bgDarken={.5}
  notes={`
    *as data* (Qualitative)
    `}>
  <Heading size={3} lineHeight={1.3}>
    {`
      Hear everyone out & gather perspectives
    `}
  </Heading>
</Slide>

<Slide
  bgImage={images.athensFromAbove.replace("/", "")}
  bgDarken={.5}
  notes={`
     & dimension (Quantitative)
    `}>
  <Heading size={3} lineHeight={1.3}>
    {`
      See what everyone thinks about each perspective
    `}
  </Heading>
</Slide>
<Slide
  bgImage={images.athensFromAbove.replace("/", "")}
  bgDarken={.5}
  notes={`
    this is roughly 'polite, fulfilling conversation'
    `}>
  <Heading size={3} lineHeight={1.3}>
    {`
      Do this for each issue
    `}
  </Heading>
</Slide>

<Slide
  notes={`
    Per issue, every opinion * every opinion on each opinion ---
    This is all very time consuming
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


<Slide notes={`todo`}>
  <Image
    style={{
      position: "relative",
      left: -300
    }}
    width="180%" src={images.assembly.replace("/", "")}/>
</Slide>

<Slide notes={`
  how do you turn a mob into a deliberative body? ---

  polis is just a medium, it takes people who want a better world to use it
  that, meaning all of you, is what inspires us.

  as a methodology for creating change I believe we can think about digital infrastructure much the same way
  as in the physical world, where installing an airport in a remote region
  might encourage new growth and economic activity. Make it easy, people will do it. --

  turning raw crowd energy into meaningful feedback --> vTaiwan.
  Making this scale and character crowd energy and feedback a daily, weekly, monthly occurrance.
  Make it sustainable
`} bgImage={images.sunflowerRev.replace("/", "")}/>

{
  /*************
    vTaiwan as a model
  **************/
}

<Slide
  bgImage={images.vtaiwan.replace("/", "")}
  notes={`
    into legislative impact
    vTaiwan is a model for the world
    Quote / discuss with Audrey

    what is so extraordinary is that sunflower has been treasured and maintained and collaborated on
  `}>
    <Heading size={3} lineHeight={1.3}>

    </Heading>
</Slide>

<Slide
  bgImage={images.jaclyn.replace("/", "")}
  notes={`

  `}>
    <Heading size={3} lineHeight={1.3}>

    </Heading>
</Slide>


<Slide notes={`
    leading the world in the implementation of digital
    democracy practices, you're doing it in the shadow of a regime that is moving
    full speed in the other direction. ---

    deepest respect for your efforts in this regard and am humbled to able to contribute. ---

    polis has been used in other places by other groups, adoption in Taiwan
    has been taken to its conclusion of influencing a legislative decision. ---

    We can't fulfil our mission of building a
    tool to affect policy without a people and a government willing to engage in
    listening, and for that we thank you too. It motivates and inspires us.

    run a polis convo with the crowd here?

  `}
    bgImage={images.tain.replace("/", "")}>
  </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
