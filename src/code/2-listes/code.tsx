import { ComposantParametre } from "../1-components/code";

const contents = ["Oh", "salut", "à tous", "pour le tuto", "React"]; //Ici, on a notre liste de contenus pour construire notre liste en fonction du type du composant précédent
const MaListe = () => {
  return (
    <div>
      {contents.map(// La fonction map (pour itérer sur une collection) est le standard pour effectuer ce type de chose, 
        (
          content, // donnée parcourue
          index // index de la donnée
          ) => (
          <ComposantParametre
            content={content}
            data={index}
            key={index} // Le prop key permet à React de bien identifier les éléments répétés dans un map, c'est nécessaire pour éviter beaucoup de problèmes
          ></ComposantParametre>
        )
      )}
    </div>
  );
};
