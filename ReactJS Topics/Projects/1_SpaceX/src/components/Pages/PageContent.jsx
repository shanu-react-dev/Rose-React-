import firstPage from "../../assets/firstPage.mp4";
import secondPage from "../../assets/second.jpg";
import thirdPage from "../../assets/thirdPage.mp4";
import fourthPage from "../../assets/fourthPage.jpg";
import fifthPage from "../../assets/fifthPage.mp4";
import PageIterator from "../PageIterator";

const PageContent = () => {
  let arrOfContent = [
    //First Page
    {
      pageMedia: firstPage,
      pageContent: {
        heading: "Making Life Multiplanetary",
        description:
          "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
        btnText: "Explore",
      },
    },

    //Second Page
    {
      pageMedia: secondPage,
      pageContent: {
        heading: "Revolutionizing space technology",
        description:
          "SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
        btnText: "Learn More",
      },
    },

    //THird Page
    {
      pageMedia: thirdPage,
      pageContent: {
        heading: "World’s leading launch service provider",
        description:
          "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
        btnText: "Reserve Your Ride",
      },
    },

    //Fourth Page
    {
      pageMedia: fourthPage,
      pageContent: {
        heading: "Advancing human spaceflight",
        description:
          "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
        btnText: "Join A Mission",
      },
    },

    //Fifth Page
    {
      pageMedia: fifthPage,
      pageContent: {
        heading: "Delivering high-speed internet from space",
        description:
          "Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
        btnText: "Explore",
      },
    },
  ];
  return <PageIterator data={arrOfContent} />;
};

export default PageContent;
