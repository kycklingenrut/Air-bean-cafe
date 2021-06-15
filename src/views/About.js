/*
 *H1*
 *P*
 *P*
 *IMG*
 *H3*
 *P*
 */
import EvaImg from "../assets/EvaImg.svg";
function About() {
  return (
    <section className="aboutContainer">
      <h1>Vårt kaffe</h1>
      <p>
        Americano instant espresso beans, extra est dripper galão ristretto as
        qui viennese french press. Aromatic organic white single origin grounds
        half and half plunger pot, variety strong, et, cup redeye espresso et
        so, bar , mocha, java crema cup whipped steamed.{" "}
      </p>
      <p>
        Caramelization aged sit shop seasonal sit to go extra dark robusta
        skinny filter galão id caramelization. Dark, cup con panna, whipped
        kopi-luwak flavour cappuccino kopi-luwak, instant beans seasonal est,
        variety caffeine cultivar, half and half siphon robust to go aroma black
        carajillo. Beans arabica beans extraction wings, strong extra affogato
        froth percolator plunger pot that, robust, sit grinder sweet blue
        mountain spoon trifecta spoon con panna cortado pumpkin spice cream.
      </p>
      <img src={EvaImg} alt="Eva" className="evaImg"></img>
      <h3>Eva Cortado</h3>
      <p>VD & Grundare</p>
    </section>
  );
}

export default About;
