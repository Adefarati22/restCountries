import { getAllCountries, getCountriesByRegion } from "@/api/Country";
import ErrorAlert from "@/components/ErrorAlert";
import Filter from "@/components/Filter";
import { SkeletonCard } from "@/components/LazyLoader";
import PageWrapper from "@/components/PageWrapper";
import Search from "@/components/Search";
import { useQuery } from "@tanstack/react-query";
import React, { lazy, Suspense } from "react";
import { useSearchParams } from "react-router";
const Card = lazy(() => import("@/pages/Card"));

export default function CardLayout() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || "";
  const selectRegion = searchParams.get("region") || "";

  const {
    isLoading,
    isError,
    data: countries = [],
    error,
  } = useQuery({
    queryKey: ["countries", selectRegion, query,],
    queryFn: () => selectRegion ? getCountriesByRegion(selectRegion) : getAllCountries(),
  });
  

  return (
    <PageWrapper classname="px-8 lg:px-20 mx-auto">
      <div className="mt-8 space-y-6">
        <div className="flex justify-between items-center">
          <Search id="countrySearch" />
          <Filter />
        </div>
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <>
            {isError ? (
              <ErrorAlert error={error?.response?.data?.message} />
            ) : (
              <>
                <Suspense fallback={<SkeletonCard />}>
                  <Card countries={countries} />
                </Suspense>
              </>
            )}
          </>
        )}
      </div>
    </PageWrapper>
  );
}
