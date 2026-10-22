import { Link, useNavigate, useParams } from "react-router-dom";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = COUNTRIES.find(
    (c) => c.code.toUpperCase() === countryCode?.toUpperCase()
  );

  const handleRandom = () => {
    const others = COUNTRIES.filter((c) => c.code !== country.code);
    const random = others[Math.floor(Math.random() * others.length)];
    navigate(`/countries/${random.code}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <Link to="/countries" className="btn btn-outline mb-6">
          Back to Countries
        </Link>
      </div>

      <div className="card bg-base-100 shadow-xl p-6">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="text-8xl">{country.flag}</div>
          <h1 className="text-3xl font-bold">{country.name}</h1>
          <p className="text-lg opacity-80">Capital: {country.capital}</p>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="badge badge-primary">{country.region}</span>
            <span className="badge badge-secondary">
              {country.population.toLocaleString()} people
            </span>
          </div>
        </div>

        <div className="flex gap-3 justify-center mt-8">
          <button className="btn btn-outline" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleRandom}>
            Random Country
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
