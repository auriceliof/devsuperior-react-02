import './styles.css';
const GitSearch = () => {
  return (
    <div className="gitsearch-container">
      <>
        <div className="gitsearch-card">
          <div className="gitsearch-title">
            <h1>Encontre um perfil Github</h1>
          </div>
          <div className="gitsearch-form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              onChange={() => {}}
            />
          </div>
          <div className="btn-container">
            <button className="btn btn-primary gitsearch-button">
              Encontrar
            </button>
          </div>
        </div>
        <div className="gitsearch-perfil-container">
          <div className="gitsearch-perfil-photo">
            <h4>Foto</h4>
          </div>
          <div className="gitsearch-perfil-informations">
            <h4>Informações</h4>
            <div>
              <h5>Perfil</h5>
            </div>
            <div>
              <h5>Seguidores</h5>
            </div>
            <div>
              <h5>Localidade</h5>
            </div>
            <div>
              <h5>Nome</h5>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default GitSearch;
