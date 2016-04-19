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
          <Slide
            notes={`
              Gerard Hauser, writing about Habermas' conceptualization of the public
              sphere, wrote the following. At the core, we're all here because of our
              belief in and will to improve democracy. I'm here to talk about
              the role of the public sphere, public opinion, and relationship between
              people and government. We'll also talk about that efficiency bit.
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
              {"Gerald Hauser, on Habermas"}
            </Link>
          </Slide>
          <Slide
            notes={`
              But, of course, there's a problem.
              We're all too afraid to hope that this can be fixed.
              The thing is, it hasn't been like this for that long, let's
              take a step back - we've never been here before.
              * the more enlightened members of all communities are discouragedfrom engaging in common spaces.
            `}>
            <Image width="80%" src={images.commentbot.replace("/", "")}/>
          </Slide>
          <Slide>
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/PJiRijiLwbQ?rel=0&amp;showinfo=0"
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </Slide>
          {
            /*************
              HOOK
            **************/
          }
          <Slide
            notes={`
              how it was different, what it's grown into with vTaiwan
            `}
            bgImage={images.parisCafe.replace("/", "")} bgDarken={.7}>
            <Heading size={3} lineHeight={1.3}>
              I want to tell you a story about a time that thousands of people arguing on the internet in real-time went well.
            </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Image width="70%" src={images.confFlameWar.replace("/", "")}/>
          </Slide>
          <Slide notes={`todo`}>
            <Heading lineHeight={1.3}> EVERY OPINION IS DATA </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading lineHeight={1.3}> REACTIONS ARE TOO </Heading>
          </Slide>

          {
            /*************
              PROBLEM
            **************/
          }
          <Slide notes={`
              whoa, we're informed, we're online, we're ready, we're communicating a lot
              `}>
            <Image width="90%" src={images.fergusonexplosion.replace("/", "")}/>
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
            `}>
            <Image src={images.shoutyourabortion2.replace("/", "")}/>
          </Slide>
          <Slide notes={``}>
            <Image width="90%" src={images.emirates.replace("/", "")}/>
          </Slide>

          <Slide notes={`
            Emergent opinion. maybe a majority of
            americans think we need to move beyond parties. maybe that's the surprise
            waiting when we can see majority opinion. no one will ask that in a poll.
            no one asks likert scale questions 'on a scale of one to ten how likely do you think it is the
            company is going to tank?' in polls, we ask only the questions we are prepared
            to handle the answers to.
            `}>
            <Heading> Emergent opinion over surveys </Heading>
          </Slide>


          {
            /*************
              IMPLICATIONS OF PROBLEM
            **************/
          }
          <Slide notes={`todo`} bgImage={images.sunflowerRev.replace("/", "")}/>
          <Slide notes={`
              people are discouraged. they don't show up to this.
            `}>
            <Image width="90%" src={images.oldcrowd.replace("/", "")}/>
          </Slide>
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
              PRELUDE/INTERLUDE
            **************/
          }
          <Slide notes={`todo`}>
            <Image width="100%" src={images.assembly.replace("/", "")}/>
          </Slide>
          {
            /*************
              SOLUTION
            **************/
          }
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
            `}>
            <Image width="90%" src={images.matrix.replace("/", "")}/>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> What is the algorithm of productive public discourse? </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> 1. Hear everyone out / gather perspectives & dimensions </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> 2. See what everyone thinks about each perspective & dimension </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> Per issue, every opinion * every opinion on each opinion </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> {`We're running a really expensive algorithm`} </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> {`Is it worth it?`} </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> {`Absolutely.`} </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> Opinions are heuristics for interests. </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Heading> How do we not have a map of interests? Data. </Heading>
          </Slide>
          {
            /*************
              vTaiwan as a model
            **************/
          }

          <Slide notes={`
              Vital, Undirected, Chaotic, Aimless, Authentic, Surprising,
              Interesting, Unpredictable, Emergent
              * what THEY have done - listened, put into practice
            `} bgImage={images.parisCafe.replace("/", "")} bgDarken={.7}>
            <Heading
              size={3}
              lineHeight={1.3}>
                People speaking freely in public spaces is a kind of magic.
            </Heading>
          </Slide>
          <Slide notes={`todo`}>
            <Image width="100%" src={images.vtaiwan.replace("/", "")}/>
          </Slide>

          {
            /*************
              EPILOGUE
            **************/
          }
          <Slide notes={`
              The spirit of public discourse is alive throughout the ages
              and while we have an enormous challenge to reconstitute it at
              such extraordinary scales, we have an enormous responsibility to
              do so. If we can succeed, I believe we have an opportunity to do it
              in a way that our forebears could only have dreamed.
            `}>
            <Image width="90%" src={images.pnyx.replace("/", "")}/>
          </Slide>
          <Slide notes={`todo`}
            bgImage={images.tain.replace("/", "")}>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
