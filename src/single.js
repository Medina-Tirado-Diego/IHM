import Perros from "./data/perros.json";

const Single = () => {
  const currentRoute = window.location.pathname;
  const perro = Perros.find((it) => currentRoute.includes(it.slug));

  return (
    <>
      <h1>{perro.name}</h1>
      <hr></hr>
      <img src={perro.picture}></img>
      <p>{perro.description}</p>
    </>
  );
};

export default Single;
