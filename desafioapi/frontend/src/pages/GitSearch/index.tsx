import axios from 'axios';
import ResultGit from 'components/ResultGit';
import { useState } from 'react';
import './styles.css';

type formData = {
  git: string;
};

type Perfil = {
  avatar_url: string;
  url: '';
  followers: number;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [perfil, setPerfil] = useState<Perfil>();

  const [formData, setFormData] = useState<formData>({
    git: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.git}`)
      .then((response) => {
        setPerfil(response.data);
      })
      .catch((error) => {
        setPerfil(undefined);
      });
  };

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
          {perfil && (
            <div>
              <ResultGit
                foto={perfil.avatar_url}
                perfil={perfil.url}
                seguidores={perfil.followers}
                localidade={perfil.location}
                nome={perfil.name}
              />
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default GitSearch;
