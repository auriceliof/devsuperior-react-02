import ResultGit from 'components/ResultGit';
import './styles.css';
const GitSearch = () => {
  return (
    <div className="gitsearch-container">
      <>
        <div className="gitsearch-card">
          <div className="gitsearch-title">
            <h1>Encontre um perfil Github</h1>
          </div>
          <form>
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
          </form>
          <div>
            <ResultGit
              foto="Foto"
              perfil="Perfil"
              seguidores={1000}
              localidade="Localidade"
              nome="Nome"
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default GitSearch;
