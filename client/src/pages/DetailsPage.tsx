import Card from "../components/Card";
import CardDev from "../components/CardDev";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import Search from "../components/Search";
import { useContextProvider } from "../components/context/ContextProvider";

export default function DetailsPage() {
  const {
    filteredHeroes,
    numPage,
    page,
    setPage,
    currentData,
    isLoading,
    error,
    selectedHero,
  } = useContextProvider();
  function handleNext() {
    if (page < numPage) setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) setPage(page - 1);
  }
  return (
    <>
      <header className="header">
        <Search />
      </header>
      <main className="container">
        <div className="leftSection">
          {filteredHeroes.length !== 0 ? (
            <>
              {isLoading && <Loading />}
              {currentData && !error && !isLoading && <Card />}
              {error && <ErrorMessage message={error} name={""} />}
              {currentData?.length > 7 && (
                <div className="btnLeft">
                  {page > 1 && (
                    <button
                      type="button"
                      className="btnFirst"
                      onClick={handlePrev}
                    >
                      &larr;
                    </button>
                  )}
                  {page < numPage && (
                    <button
                      type="button"
                      className="btnSecond"
                      onClick={handleNext}
                    >
                      &rarr;
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="heroSearch">
              search for super hero by using the correct hero name😇
            </p>
          )}
        </div>
        {currentData?.length > 0 && (
          <div className="rightSection">
            {selectedHero ? (
              <CardDev />
            ) : (
              <p className="NoSuperHero">
                Click on a super hero show button at the left for all details.
                Happy exploring!😇
              </p>
            )}
          </div>
        )}
      </main>
    </>
  );
}
