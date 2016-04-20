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
    INTRODUCTION
  **************/
}
<Slide bgColor="primary">
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
    PROBLEM
  **************/
}
<Slide
  notes={`question fundamental to democracy`}
  >
  <Heading size={3} lineHeight={1.3}>
    What does a crowd think?
  </Heading>
</Slide>
{/*
  public opinion is a problem in three parts...
  the government isn't set up to receive it (consultation)
  the people aren't incentivized to give it (surveys / consultation)
  and the places people do express themselves render poor forms of it (social media graph)
  */}
<Slide notes={`
    60,000 at Emirates stadium, visualize it because it's hard to online
    a news site might get 10x that in a morning, but not engaging, just reading
  `}>
  <Image width="90%" src={images.emirates.replace("/", "")}/>
</Slide>
<Slide
  notes={``}
  >
  <Heading size={3} lineHeight={1.3}>
    Qualitative feedback is extremely time consuming
  </Heading>
</Slide>
{
  /*************
    Consultation
  **************/
}
<Slide
  notes={`
    Stuffy, Boring, Meaningless, Slow, Despairing, Rote, Uninteresting,
    Predictable, Forced but most damningly, serial. Regardless if a public
    comment box is being sifted through one by one by an unfortunate
    staffer, or one person at a time stands up at a consultation, the
    process is not designed to encourage feedback.
    `}
    bgImage={images.consultation.replace("/", "")}/>
  {
    /*************
      Surveys
    **************/
  }
  <Slide
    notes={`
      maybe something about inadequacy of surveys here
    `}
    >
    <Heading size={3} lineHeight={1.3}>
      Quantitative feedback / surveys tell you only what you already know
    </Heading>
  </Slide>
  <Slide
    notes={`
      social media *is* where we're talking... but it's problematic

      we should not be doing sentiment analysis on social media
      and saying it's what the country thinks.

      it's very problematic that there's no interaction with others' ideas.
      moderates are excluded from these groups, and they are going to say
      common sense things grounded in reality

      no one broadcasts the moderate. they retweet the ideas that define their group.
      `}
    >
    <Heading size={3} lineHeight={1.3}>
      Basing sentiment analysis on social media is problematic
    </Heading>
  </Slide>
<Slide
  notes={`
    These are images from Stanford researcher Emma Pierson.
    These groups are distinct, not just in their identity, but in that
    they are for the most part not seeing what the other groups are saying.
    The filter bubble is quantifiable.
  `}
bgImage={images.fergusonTweeters.replace("/", "")} bgDarken={.3}>
  <Heading
    size={3}
    lineHeight={1.3}>
      The filter bubble is quantifiable.
  </Heading>
</Slide>
<Slide
  notes={`
    What you are seeing is 2.5 days of Twitter activity in which
    different 'communities' or, literally, parts of the Twitter graph
    talk to themselves about the same topics.
  `}>
  <Image src={images.shoutyourabortion.replace("/", "")}/>
</Slide>
<Slide
  notes={`
    Instead of one conversation occurring where ideas bump up against
    each other, the conversation retreats into thousands of self
    selected networks of likeminded people. This isn't a bad thing.
    People feel safe with people they relate to and we don't need to
    change that. We do that in the physical world just as much.
    Facebook and twitter seem like one place, but they are not. They
    are a graph, and there are neighborhoods with different assumptions,
    values and patterns.

    these are not clusters that emerge from interaction with other people's ideas
    they are clusters that emerge from affinity, following your own. so there's
    no chance in any of the interactions to agree. You have, from the outset,
    pre-determined a shouting match.
  `}>
  <Image src={images.shoutyourabortion2.replace("/", "")}/>
</Slide>
<Slide
  notes={`Solve this, solve democracy in lots of other settings.`}
  >
  <Heading size={3} lineHeight={1.3}>
    These are problems in every organization, just biggest in government.
  </Heading>
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
<Slide notes={`and we have a different set of responses, agree and disagree`}>
  <Image style={{borderRadius: 5}} width="100%" src={images.vote.replace("/", "")}/>
</Slide>

<Slide notes={`todo`}>
  <Heading lineHeight={1.3}> Real-time Machine Learning </Heading>
</Slide>
<Slide notes={`todo`}>
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

    so why doesn't this happen more often?
  `}>
  <Image style={{borderRadius: 5}} width="80%" src={images.jsdc_majority.replace("/", "")}/>
</Slide>

{
  /*************
    Algorithm of public opinion / dis
  **************/
}
<Slide notes={`todo`}>
  <Heading> What is the algorithm of productive public discourse? </Heading>
</Slide>
{
  /*************
    ASSEMBLY
  **************/
}
<Slide notes={`todo`}>
  <Image width="100%" src={images.assembly.replace("/", "")}/>
</Slide>
<Slide notes={`todo`}>
  <Heading size={3}> 1. Hear everyone out / gather perspectives & dimensions as data (Qualitative) </Heading>
</Slide>
<Slide notes={`todo`}>
  <Heading size={3}> 2. See what everyone thinks about each perspective & dimension (Quantitative) </Heading>
</Slide>
<Slide notes={`todo`}>
  <Heading size={3}> Per issue, every opinion * every opinion on each opinion </Heading>
</Slide>
<Slide notes={`is it ok? can we make it better?`}>
  <Heading> {`This is all very time consuming`} </Heading>
</Slide>
<Slide
  notes={`
    At the core, we're all here because of our
    belief in and will to improve democracy. I'm here to talk about
    the role of the public sphere, public opinion, and relationship between
    people and government. this is a worthy problem to address.
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
  By following and sharing, you are moving information from people who you agree with to
  people who agree with you.
  what if we bake in listening to the information design instead?
  what are the actions? what information structues do they create?
  how does that impact behavior and dispersal? following creates graphs.
    `}>
  <Image width="90%" src={images.everyByEvery.replace("/", "")}/>
</Slide>
<Slide notes={`
    ** probably move this point but, we need to find the right
    information structures to get what we want - if we want division
    let's do voting and graphs. that will get us division. if we want
    to transcend that we need to allow individual actors to move in
    different ways with constraints that are appropriate to the culture
    (ie saving face or elder deference) and the medium (ie., not paper anymore)
    ** if it's bad enough, enough people won't participate that the number
    of people this tool CAN handle will be left.

    parallellize! everyone writes and votes at the same time, analysis
    done automatically. people are lazy. if we want people to eat
    more vegetables (high quality, bottom up feedback) let's
    get them a personal chef.

    so what does this get you? it gets you a matrix. and all those ones
    and zeros maybe seem about as useful as... but the fact is that you
    have run a kind of compression or encryption algorithm, an encoding you have transferred the
    state of the crowd's opinions into a data structure that statistical
    operations can be run on. and that is a very powerful thing to do.
    our analysis that we show you is only one thing that can be done
    with a matrix.

    an interesting side effect is that these structures can be merged and
    combined with more voting
  `}>
  <Image width="100%" src={images.matrix.replace("/", "")}/>
</Slide>

{
  /*************
    The Assembly / Ecclesia
  **************/
}
<Slide notes={`these problems weren't present in `}>
  <Image width="100%" src={images.assembly.replace("/", "")}/>
</Slide>

<Slide notes={`
  polis is just a medium, it takes people who want a better world to use it
  that, meaning all of you, is what inspires us

  turning raw crowd energy
`} bgImage={images.sunflowerRev.replace("/", "")}/>

{
  /*************
    vTaiwan as a model
  **************/
}

<Slide notes={`into legislative impact
    vTaiwan is a model for the world
    GET A QUOTE`}>
  <Image width="100%" src={images.vtaiwan.replace("/", "")}/>
</Slide>

<Slide notes={`
    because you're not only leading the world in the implementation of digital
    democracy practices, you're doing it in the shadow of a regime that is moving
    full speed in the other direction. I have the deepest respect for your
    efforts in this regard and am humbled to able to contribute.
  `}
    bgImage={images.tain.replace("/", "")}>
  </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
