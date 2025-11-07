import PageWrapper from "@/components/PageWrapper";
import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getCountryByCode } from "@/api/Country";
import {  SkeletonCardDetails } from "@/components/LazyLoader";
import ErrorAlert from "@/components/ErrorAlert";
import { RiArrowLeftLine } from "@remixicon/react";

export default function CardDetails() {
  const { code } = useParams();

  const {
    data: country,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["country", code],
    queryFn: () => getCountryByCode(code),
  });
  

  return (
    <PageWrapper>
      <div className="px-8 lg:px-20 mx-auto py-8">
        <Link to="/" className="btn btn-ghost mb-6 shadow">
          <RiArrowLeftLine size={24} /> Back
        </Link>

        {isLoading && <SkeletonCardDetails />}
        {isError && <ErrorAlert error={error} />}

        {country && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <img
                src={country?.flags?.svg}
                alt={country?.name?.common}
                className="w-full h-90"
              />
            </div>
            <div className="space-y-15">
              <h1 className="text-2xl font-bold mb-4">
                {country?.name?.common}
              </h1>
              <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-0">
                <div className="space-y-4">
                  <p>
                    <strong>Native Name:</strong>{" "}
                    {country?.name?.nativeName
                      ? Object.values(country.name.nativeName)
                          .map((n) => n.common)
                          .join(", ")
                      : "N/A"}
                  </p>

                  <p>
                    <strong>Population:</strong>{' '}{country?.population ? country.population.toLocaleString() : 'N/A'}
                  </p>
                  <p>
                    <strong>Region:</strong> {country?.region}
                  </p>
                  <p>
                    <strong>Subregion:</strong> {country?.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country?.capital?.[0] || "N/A"}
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {country?.tld?.[0] || "N/A"}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {country?.currencies
                      ? Object.values(country.currencies)
                          .map((c) => c.name)
                          .join(", ")
                      : "N/A"}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {country?.languages
                      ? Object.values(country.languages).join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
              <p>
                <strong>Border Countries:</strong>{" "}
                {country?.borders ? country.borders.join(", ") : "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
