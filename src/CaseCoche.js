function CaseCocher({ id, texte = "Cocher la bonne réponse" }) {
  return (
    <div className="css-objet">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{texte}</label>
    </div>
  );
}

export default CaseCocher;