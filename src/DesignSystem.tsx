import { Link, useNavigate } from 'react-router-dom';
import { FC, KeyboardEvent } from 'react';
import './index.css'
import menuIcon from "./assets/shared/icon-hamburger.svg";
import closeIcon from "./assets/shared/icon-close.svg";
import { useMediaQuery, useToggle } from "usehooks-ts";

const Typography = ({ variant, children, _className = "", style={} }) => {
  let className = '';

  switch (variant) {
    case 'h1':
      className = 'fs-900 ff-serif uppercase';
      break;
    case 'h2':
      className = 'fs-800 ff-serif uppercase';
      break;
    case 'h3':
      className = 'fs-700 ff-serif uppercase';
      break;
    case 'h4':
      className = 'fs-600 ff-serif uppercase';
      break;
    case 'h5':
      className = 'text-accent fs-500 ff-sans-cond uppercase letter-spacing-1';
      break;
    case 'subheading1':
      className = 'fs-500 ff-serif uppercase';
      break;
    case 'subheading2':
      className = 'fs-200 uppercase ff-sans-cond letter-spacing-3';
      break;
    case 'navText':
      className = 'fs-300 uppercase ff-sans-cond letter-spacing-2';
      break;
    default:
      className = '';
  }
  className = className + " " + _className;

  return <p style={style} className={className}>{children}</p>;
}

const NumberedTitle = ({ number, title, style={} }) => (
    <h2 className="numbered-title" style={style}>
        <span aria-hidden="true">{number}</span>
        {title}
    </h2>
)

type NavigationItem = {
    number: string;
    text: string;
    link: string;
}
type NavigationProps = {
    items: NavigationItem[];
    activeItem: string;
}
const Navigation: FC<NavigationProps> = ({ items, activeItem })  => {
    const isMobile = useMediaQuery("(max-width: 35em)");
    const [openDrawer, toggle] = useToggle(false);
    return(
    <>
        {
            isMobile ? (
                <button className="mobile-nav-toggle" onClick={toggle}
                    style={{ backgroundImage: `url(${ openDrawer? closeIcon: menuIcon })` }} >
                    <span className='sr-only' aria-expanded={openDrawer}>Menu</span>
                </button>
            ) : null
        }
        <nav>
            <ul id="primary-navigation" 
            className={`primary-navigation underline-indicators flex 
            ${ openDrawer? "active" : "" }`}>
                {items.map((item, index) => (
                    <li key={index} className={item.link === activeItem ? 'active' : ''}>
                        <Link className="ff-sans-cond uppercase text-white letter-spacing-2" to={item.link}>
                            <span aria-hidden="true">{item.number}</span>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
    
}
type TabProps = {
    items: {
        label: string,
        value: string,
    }[],
    activeItem: string,
    onClick: (value: string) => void,
    onKeyDown?: (e: KeyboardEvent) => void,
    style?: object,
}


const Tabs: FC<TabProps> = ({ items, activeItem, onClick, onKeyDown=(e) => {}, style={} })  => (
    <div className="tab-list underline-indicators flex" style={style}>
        {items.map(item => (
            <button
                key={item.value}
                aria-selected={`${item.value === activeItem}`}
                onClick={() => onClick(item.value)}
                onKeyDown={onKeyDown}
                className="uppercase ff-sans-cond text-accent letter-spacing-2"
            >
                {item.label}
            </button>
        ))}
    </div>
)

type DotProps = {
    items: string[],
    activeItem: number,
    onClick: (value: number) => void,
    style?: object,
}
const Dots: FC<DotProps> = ({ items, activeItem, onClick, style={} }) => (
    <div style={style} className="dot-indicators flex">
        {items.map((item, index) => (
            <button key={index} aria-selected={`${index === activeItem}`} 
                onClick={() => onClick(index)}>
                <span className="sr-only">{item}</span>
            </button>
        ))}
    </div>
)

const ExploreButton = () => (
    <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
)

function DesignSystem() {

  return (
    <>
      <div className="container flow">
            <h1 className="uppercase">Design system</h1>
            
            <section className="flow" id="colors" style={{ margin: "4rem 0" }}>
                {/* <h2 className="numbered-title"><span>01</span> colors</h2> */}
                <NumberedTitle number="01" title="Colors" />
                <div className="flex">
                  <div className="flow" style={{ flexGrow: 1 }}>
                    <div className="bg-dark text-white ff-serif fs-500" style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>
                      #0B0D17
                    </div>
                    <p><span className="text-accent">RGB</span> 11, 13, 23</p>
                    <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                  </div>
                  <div className="flow" style={{ flexGrow: 1 }}>
                    <div className="bg-accent text-dark ff-serif fs-500" style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>
                      #D0D6F9
                    </div>
                    <p><span className="text-accent">RGB</span> 208, 214, 249</p>
                    <p><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
                  </div>
                  <div className="flow" style={{ flexGrow: 1 }}>
                    <div className="bg-white text-dark ff-serif fs-500" style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>
                      #FFFFFF
                    </div>
                    <p><span className="text-accent">RGB</span> 255, 255, 255</p>
                    <p><span className="text-accent">HSL</span> 0°, 0%, 100%</p>
                  </div>
                </div>
            </section>
            
            <section className="flow" id="typography"  style={{ margin: "4rem 0" }}>
                {/* <h2 className="numbered-title"><span>02 </span>Typography</h2> */}
                <NumberedTitle number="02" title="Typography" />
                <div className="flex">
                    <div className="flow flow-space-4em" style={{ flexBasis: "100%"}}>
                        <div> 
                            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                            <Typography variant="h1">Earth</Typography>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                            <Typography variant="h2">Venus</Typography>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                            <Typography variant="h3">Jupiter & Saturn</Typography>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                            <Typography variant="h4">Uranus, Neptune, & Pluto</Typography>
                        </div> 
                        <div> 
                            <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                            <Typography variant="h5">So, you want to travel to space</Typography>
                        </div>
                    
                    </div>
                    
                    <div className="flow flow-space-4em" style={{ flexBasis: "100%"}}>
                        <div> 
                            <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                            <Typography variant="subheading1">384,400 km</Typography>
                        </div>
                        <div> 
                            <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <Typography variant="subheading2">Avg. Distance</Typography>
                        </div>
                        <div> 
                            <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                            <Typography variant="navText">Europa</Typography>
                        </div>
                        <div> 
                            <p className="text-accent">Body Text</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                        </div> 
                    </div>
                </div>
            </section>
            
            <section className="flow" id="interactive-elements">
                {/* <h2 className="numbered-title"><span>03</span> Interactive elements</h2> */}
                {/* Somehow, the HTML tags will have a larger separation between the number and the title.  */}
                <NumberedTitle number="03" title="Interactive elements" />
                {/*  navigation */}
                <Navigation items={[
                        { number: '01', link: "1", text: 'Active' },
                        { number: '02', link: "2", text: 'Hovered' },
                        { number: '03', link: "3", text: 'Idle' },
                    ]} activeItem="01" />
                
                <div className="flex">
                    <div style={{ marginTop: "5rem" }}>
                        {/*  explore button */}
                        <ExploreButton />
                    </div>
                    
                    <div className="flow flow-space-4em" style={{ marginBottom: '50vh'}}>
                        {/*  Tabs */}
                        <Tabs items={[
                            { label: 'Moon', value: 'moon' },
                            { label: 'Mars', value: 'mars' },
                            { label: 'Europa', value: 'europa' },
                        ]} activeItem="moon" onClick={console.log} onKeyDown={console.log} />
                        
                        {/*  Dots */}
                        <Dots items={[
                            'Moon',
                            'Mars',
                            'Europa',
                        ]} activeItem={0} onClick={console.log}/>
                        
                        {/*  Numbers */}
                    </div>
                </div>
            </section>
        </div>

    </>
  )
}

export default DesignSystem;
export { Typography, NumberedTitle, Navigation, Tabs, Dots, ExploreButton }
