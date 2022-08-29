import { useEffect, useRef, useState } from 'react';
import Rythm from 'rythm.js';

import './App.scss';
import muse from "./muse.mp3";
import horse from "./horse.mp3";

import h1 from "./images/horse1.jpg";
import h2 from "./images/horse2.jpg";
import h3 from "./images/horse3.jpg";
import h4 from "./images/horse4.jpg";
import h5 from "./images/horse5.jpg";

const rythm = new Rythm()

export default function App() {
  const [started, setStarted] = useState();
  useEffect(() => {
    if (started) {
      neigh.current.play();
      setInterval(() => {
        neigh.current.play();
      }, 3300);
      rythm.start();
    }
  }, [started])
  rythm.setMusic(muse);
  rythm.addRythm("image-dance", "neon", 0, 10, {from: [128, 8, 34], to: [255, 255, 167]});
  const neigh = useRef();
  return (
    <div className="App">
      <audio ref={neigh}>
        <source src={horse} type="audio/ogg"/>
      </audio>
      {started && <><div className="bokeh">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="images">
        <img src={h1} alt="Presumably somewhere in Southern Italy, Food Network super-star Giada De Laurentiis rides a coffee-colored thoroughbred horse wearing a white baseball cap, orange-tinted sunglasses, a white long-sleeved shirt with one-too-many buttons unbuttoned, and classic American jeans. A child on a different horse is by her. A red heart emoji is overlaid in the sky betwixt them - this is presumably added in post, though it's entirely possible it was actually there - I've heard anything can happen in Italy." className="image-dance"/>
        <img src={h1} alt="Presumably somewhere in Southern Italy, Food Network super-star Giada De Laurentiis rides a coffee-colored thoroughbred horse wearing a white baseball cap, orange-tinted sunglasses, a white long-sleeved shirt with one-too-many buttons unbuttoned, and classic American jeans. A child on a different horse is by her. A red heart emoji is overlaid in the sky betwixt them - this is presumably added in post, though it's entirely possible it was actually there - I've heard anything can happen in Italy." className="image-dance"/>
        <img src={h1} alt="Presumably somewhere in Southern Italy, Food Network super-star Giada De Laurentiis rides a coffee-colored thoroughbred horse wearing a white baseball cap, orange-tinted sunglasses, a white long-sleeved shirt with one-too-many buttons unbuttoned, and classic American jeans. A child on a different horse is by her. A red heart emoji is overlaid in the sky betwixt them - this is presumably added in post, though it's entirely possible it was actually there - I've heard anything can happen in Italy." className="image-dance"/>
        <img src={h1} alt="Presumably somewhere in Southern Italy, Food Network super-star Giada De Laurentiis rides a coffee-colored thoroughbred horse wearing a white baseball cap, orange-tinted sunglasses, a white long-sleeved shirt with one-too-many buttons unbuttoned, and classic American jeans. A child on a different horse is by her. A red heart emoji is overlaid in the sky betwixt them - this is presumably added in post, though it's entirely possible it was actually there - I've heard anything can happen in Italy." className="image-dance"/>
        <img src={h2} alt="World-infamous culinary legend Giada De Laurentiis proves again that she never misses a beat, as she rides a suede and cream colored steed, sporting a vintage leather cowboy hat, a sweater(?), a mauve coat, and of course - American-made jeans. Another child atop a similar horse holds her hand to her right. De Laurentiis has to lean over significantly in her stirup to reach the scrawny 10-year-old's hand. Legend has it she fell off the horse after this picture and her shirt busted open. The child had to be evacuated immediately." className="image-dance"/>
        <img src={h2} alt="World-infamous culinary legend Giada De Laurentiis proves again that she never misses a beat, as she rides a suede and cream colored steed, sporting a vintage leather cowboy hat, a sweater(?), a mauve coat, and of course - American-made jeans. Another child atop a similar horse holds her hand to her right. De Laurentiis has to lean over significantly in her stirup to reach the scrawny 10-year-old's hand. Legend has it she fell off the horse after this picture and her shirt busted open. The child had to be evacuated immediately." className="image-dance"/>
        <img src={h2} alt="World-infamous culinary legend Giada De Laurentiis proves again that she never misses a beat, as she rides a suede and cream colored steed, sporting a vintage leather cowboy hat, a sweater(?), a mauve coat, and of course - American-made jeans. Another child atop a similar horse holds her hand to her right. De Laurentiis has to lean over significantly in her stirup to reach the scrawny 10-year-old's hand. Legend has it she fell off the horse after this picture and her shirt busted open. The child had to be evacuated immediately." className="image-dance"/>
        <img src={h2} alt="World-infamous culinary legend Giada De Laurentiis proves again that she never misses a beat, as she rides a suede and cream colored steed, sporting a vintage leather cowboy hat, a sweater(?), a mauve coat, and of course - American-made jeans. Another child atop a similar horse holds her hand to her right. De Laurentiis has to lean over significantly in her stirup to reach the scrawny 10-year-old's hand. Legend has it she fell off the horse after this picture and her shirt busted open. The child had to be evacuated immediately." className="image-dance"/>
        <img src={h3} alt="Standing on a sandy beach with the waves crashing behind her and ocean mist rising up her silky legs, renowned kitchen legend Giada De Laurentiis strokes a pearl-white stallion and grabs its reigns, seemlingly to assert her dominance - even though she's sporting a less-than memorable green cardigan and again - American hand-woven jeans." className="image-dance"/>
        <img src={h3} alt="Standing on a sandy beach with the waves crashing behind her and ocean mist rising up her silky legs, renowned kitchen legend Giada De Laurentiis strokes a pearl-white stallion and grabs its reigns, seemlingly to assert her dominance - even though she's sporting a less-than memorable green cardigan and again - American hand-woven jeans." className="image-dance"/>
        <img src={h3} alt="Standing on a sandy beach with the waves crashing behind her and ocean mist rising up her silky legs, renowned kitchen legend Giada De Laurentiis strokes a pearl-white stallion and grabs its reigns, seemlingly to assert her dominance - even though she's sporting a less-than memorable green cardigan and again - American hand-woven jeans." className="image-dance"/>
        <img src={h3} alt="Standing on a sandy beach with the waves crashing behind her and ocean mist rising up her silky legs, renowned kitchen legend Giada De Laurentiis strokes a pearl-white stallion and grabs its reigns, seemlingly to assert her dominance - even though she's sporting a less-than memorable green cardigan and again - American hand-woven jeans." className="image-dance"/>
        <img src={h4} alt="Now Giada De Laurentiis has done the unthinkable. She's taken a picture with a horse's mouth in it. Careful not to mix up the mouths though, hers' is the one that contains completely implausibly white teeth. Filters, much? Eeugh." className="image-dance"/>
        <img src={h4} alt="Now Giada De Laurentiis has done the unthinkable. She's taken a picture with a horse's mouth in it. Careful not to mix up the mouths though, hers' is the one that contains completely implausibly white teeth. Filters, much? Eeugh." className="image-dance"/>
        <img src={h4} alt="Now Giada De Laurentiis has done the unthinkable. She's taken a picture with a horse's mouth in it. Careful not to mix up the mouths though, hers' is the one that contains completely implausibly white teeth. Filters, much? Eeugh." className="image-dance"/>
        <img src={h4} alt="Now Giada De Laurentiis has done the unthinkable. She's taken a picture with a horse's mouth in it. Careful not to mix up the mouths though, hers' is the one that contains completely implausibly white teeth. Filters, much? Eeugh." className="image-dance"/>
        <img src={h5} alt="it's giada" className="image-dance"/>
        <img src={h5} alt="it's giada" className="image-dance"/>
        <img src={h5} alt="it's giada" className="image-dance"/>
        <img src={h5} alt="it's giada" className="image-dance"/>
      </div></>}
      <header className={`App-header${started ? " started" : ""}`}>
        <button onClick={setStarted} className={`startButton rythm-bass${started ? " started" : ""}`}>Giddy up</button>
        <button onClick={() => window.location.assign("https://olivegarden.com")} className={`giadaButton rythm-bass${started ? " started" : ""}`}>Giada</button>
      </header>
    </div>
  );
}