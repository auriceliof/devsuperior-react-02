import ResultGit from 'components/ResultGit';
import { useState } from 'react';
import './styles.css';

type formData = {
  git: string;
};

const GitSearch = () => {

  const [ formData, setFormData ] = useState<formData>({
    git: '',
  }); 

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData( { ...formData, [name]:value } )
  }

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log( formData )
  }

  return (
    <div className="gitsearch-container">
      <>
        <div className="gitsearch-card">
          <div className="gitsearch-title">
            <h1>Encontre um perfil Github</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="gitsearch-form-container">
              <input
                type="text"
                name="git"
                value={formData.git}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
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
