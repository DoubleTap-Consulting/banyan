import React from "react";
import VideoPlayer from "containers/landing/video/videoPlayer";
import ThemeSection from "components/themeSection/themeSection";
import SalaryCalculator from "components/salaryCalculator/salaryCalculator"
import handsOnExpertiseImage from '../../images/hands-on-expertise.jpg'
import whyNotThemImage from '../../images/why-not-them.jpg'
import graduateAsEngineerImage from '../../images/graduate-as-engineer.jpg'
import hiringImage from '../../images/hiring.jpg'
import weKnowImage from '../../images/we-know.jpg'
import getOverpaidImage from '../../images/get-overpaid.jpg'
import localCuisineImage from '../../images/local-cuisine.jpg'
import "./home.scss";

function Home() {
  const sections = [
    {
      title: "Code",
      sellingPoints: [
        {
          subtitle: "Hands on expertise",
          text: [`We know how to teach because we've done this before at one of the top three coding bootcamps, and we know that there are gaps in what they're teaching and how to do it better.`, `Get taught by instructors that have built products for Blizzard, Zenimax and Macy's, and have led teams of over 50 engineers.`],
          backgroundImage: handsOnExpertiseImage
        },
        {
          subtitle: "Why not them",
          text: [`Other bootcamps use instructors that have no experience. This is not ok, and it won't ever happen here.`],
          backgroundImage: whyNotThemImage
        },
        {
          subtitle: "Graduate as a mid-level engineer",
          text: [`You're going to go through x number of projects, with the guidance of expert instructors, where you'll be taught how good engineers think through and solve problems, and output excellent code.`],
          backgroundImage: graduateAsEngineerImage
        },
        {
          subtitle: "We know what companies are hiring for",
          text: [`Our instructors have interviewed and hired over hundreds of engineers of all levels, and know what hiring managers are looking for.`],
          backgroundImage: hiringImage
        },
        {
          subtitle: "We know who you need to know",
          text: [`We've got a strong network of hiring partners to get your foot in the door. One of our founding partners is a trusted advisor to fortune 500 firms in building their technical recruiting strategies.`],
          backgroundImage: weKnowImage
        },
        {
          subtitle: "Get overpaid like the rest of us",
          text: [`Graduating form a junior to mid level increases your salary from $70k to $90k.`],
          backgroundImage: getOverpaidImage
        },
      ]
    },
    {
      title: "Eat",
      sellingPoints: [
        {
          subtitle: "Local cuisine",
          text: [`We're going to take you outside the tourist areas to experience real balinese life and cuisine. `],
          backgroundImage: localCuisineImage
        },
        {
          subtitle: "Nightlife",
          text: [`Experience great "views" while meeting people from all corners of the world`, `Bond with your classmates to create lifelong friendships`]
        }
      ]
    },
    {
      title: "Love",
      sellingPoints: [
        {
          subtitle: "Experience Bali",
          text: [`Take breaks from the curriculum with guided experiences around the island. This includes sunrise from one of Bali's volcanos, spend a day traveling around cliff side temples, and catch a sunset drinking Pina coladas over one of Bali's famous beaches.` ]
        },
        {
          subtitle: "Mix business with pleasure ",
          text: [`You're gonna work hard but we're going to make sure that you get rejuvenated through massages, meditation, and much more.`]
        },
        {
          subtitle: "Ingraining the experience with passion and like-minded individuals",
          text: [`Everyone in the program is screened to make sure they contribute to an environment of passion, ambition, and hard work. Our vision is to have an environment where you are surrounded by people who are ready to level up their lives.`]
        },
        {
          subtitle: "We take care of you",
          text: [`We're going to travel you around the island, and take care of your living in a beautiful home. You don't have to worry about rent or finding great places to stay.`]
        }
      ]
    }
  ]

  return (
    <div className="app">
      <VideoPlayer
        poster="http://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.jpg"
        url="https://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.mp4"
      />
      {
        sections.map((section, index) => (
          <ThemeSection section={section} key={`app-ThemeSection-${section.title}`} />
        ))
      }
      <SalaryCalculator />
    </div>
  );
}

export default Home;