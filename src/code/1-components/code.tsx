const Composant = () => {
  // Ici on retrouve une fonction fléchée qui fera office de composant, c'est-à-dire un bloc de code réutilisable
  return (
    <div>
      <p>Je suis un composant réutilisable</p>
    </div>
  );
};

type ComposantParametreProps = { // Le type pour les paramètres du composant, par convention personnelle, je le nomme par mon composant + "Props"
  content: string;
  data? : number; // Paramètre non obligatoire
};

export const ComposantParametre = ({ content,data }: ComposantParametreProps) => { // Dans les paramètres, on destructure les paramètres dont le type est le précédent
  return (
    <div>
      <p>Je suis également un composant réutilisable</p>
      <p>
        La valeur peut changer : {content}
        {/*Ce bloc entre accolades est un bloc JSX : on peut y mettre une expression JS qui sera évaluée au rendu du composant*/}
      </p>
      {data !== null ? <p>{data}</p> : ""}{/* Affichage conditionnel si data !== null, on affiche le bloc p, sinon rien*/}
    </div>
  );
};

const ExempleComponent = ()=>{
    return(
        <div>
            <p>On peut retrouver plusieurs contenus dans ce composant</p>
            <Composant></Composant>
            <Composant></Composant>
            <ComposantParametre content="Bonjour"></ComposantParametre>
            <ComposantParametre content="Bonsoir" data={12}></ComposantParametre> {/*Dans son affichage, le bloc p sera affiché*/}
        </div>
    )
}