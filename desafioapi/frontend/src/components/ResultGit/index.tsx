import './styles.css';

type props = {
  foto: any;
  perfil: string;
  seguidores: number;
  localidade: string;
  nome: string;
};

const ResultGit = ({ foto, perfil, seguidores, localidade, nome }: props) => {
  return (
    <div className="resultgit-container">
      <div className="resultgit-photo">
        <h4>
          <img src={foto} alt="" className="resultgit-img" />
        </h4>
      </div>
      <div className="resultgit-informations">
        <h4>Informações</h4>
        <div className="resultgit-descriptions">
          <h5>
            Perfil:
            <h6>{perfil}</h6>
          </h5>
        </div>
        <div className="resultgit-descriptions">
          <h5>
            Seguidores: <h6>{seguidores}</h6>
          </h5>
        </div>
        <div className="resultgit-descriptions">
          <h5>
            Localidade: <h6>{localidade}</h6>
          </h5>
        </div>
        <div className="resultgit-descriptions">
          <h5>
            Nome: <h6>{nome}</h6>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ResultGit;
