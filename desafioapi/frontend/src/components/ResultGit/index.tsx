import './styles.css';

type props = {
  foto: string;
  perfil: string;
  seguidores: number;
  localidade: string;
  nome: string;
};

const ResultGit = ({ foto, perfil, seguidores, localidade, nome }: props) => {
  return (
    <div className="resultgit-container">
      <div className="resultgit-photo">
        <h4>{foto}</h4>
      </div>
      <div className="resultgit-informations">
        <h4>Informações</h4>
        <div className="resultgit-descriptions">
          <h5>Perfil: {perfil}</h5>
        </div>
        <div className="resultgit-descriptions">
          <h5>Seguidores: {seguidores}</h5>
        </div>
        <div className="resultgit-descriptions">
          <h5>Localidade: {localidade}</h5>
        </div>
        <div className="resultgit-descriptions">
          <h5>Nome: {nome}</h5>
        </div>
      </div>
    </div>
  );
};

export default ResultGit;
