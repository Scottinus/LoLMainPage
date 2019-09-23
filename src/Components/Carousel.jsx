import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/img/champions_tanks.jpg',
    altText: 'Slide 1',
    caption: 'The tanks are massive thugs capable of withstanding blows that would kill the weakest allies.',
    title:"TANKS ABSORB DAMAGE",
    description: "The tanks are massive thugs capable of withstanding blows that would kill the weakest allies.",
    name: "tank",
    icon: "https://raw.communitydragon.org/7.20/plugins/rcp-fe-lol-champion-details/global/default/role-icon-tank.png"
  },
  {
    src: 'https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/img/champions_fighter.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    title:"FIGHTERS ADOR THE DUELS",
    description:"The fighters are a perfect mix of attack and defense and give their best in melee, where they can fight in close combat.", 
    name: "fighters",
    icon: "https://raw.communitydragon.org/7.20/plugins/rcp-fe-lol-champion-details/global/default/role-icon-fighter.png"
  },
  {
    src: 'https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/img/champions_mages.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    title:"THE MAGES DROPPED WITH POWER",
    description:"Mages are powerful spellcasters who destroy opponents using various attacks, spells and mystical abilities.",
    name: "mages",
    icon: "https://raw.communitydragon.org/7.20/plugins/rcp-fe-lol-champion-details/global/default/role-icon-mage.png"
  },
  {
    src: 'https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/img/champions_assassins.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    title:"ASSASSINS CRAVE THE HUNT",
    description:"Masters of precision, the killers are agile hunters always looking for the perfect kill.",
    name: "assassins",
    icon: "https://raw.communitydragon.org/7.20/plugins/rcp-fe-lol-champion-details/global/default/role-icon-assassin.png"
  },
  {
    src: 'https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/img/champions_marksmen.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5',
    title:"THE SHOOTERS PUT IN PAIN",
    description:"Experienced remote fighters, shooters are powerful but fragile. They rely on their defense partners for the rest of the team to rely on them for the attack.",
    name: "shooter",
    icon:"https://elofactory.com/sites/default/files/styles/260x260_card/public/user/avatar/adc_0.png?itok=kn1swg1N"
  },
  {
    src: "https://am-a.akamaihd.net/image?resize=1519:&quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/img/champions_support.jpg",
    altText: 'slide 6',
    caption: 'Slide 6',
    title:"THE SUPPORTS WATCH YOUR BACK",
    description:"The supports are irreplaceable elements of defense able to control the progress of the battle by strengthening the allies and weakening the enemies.",
    name: "supports",
    icon:"https://raw.communitydragon.org/7.20/plugins/rcp-fe-lol-champion-details/global/default/role-icon-support.png"
  }
];

class CarChamp extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
     
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
          
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} width="100%" alt={item.altText} />

        
 <div className="carousel-caption d-none d-md-block" captiontext={item.caption} captionheader={item.caption} >
             <h3>{item.title}</h3>
             <p>{item.description}</p>
          </div>
  

        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
     <ol className="carousel-indicators">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                onClickHandler={() => this.goToIndex(index)}
                className={activeIndex === index ? "selection active" : "selection" }
              >
                <img src={item.icon} className="float-left ml-4 mt-3" width="43px" height="40px"/>
                <h3>{item.name.toUpperCase()}</h3>
                </li>
            );
          })}
        </ol>
    


        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarChamp;
