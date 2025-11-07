import React from 'react'
import { Link } from 'react-router'

export default function Card({countries}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <Link key={country.cca3} to={`/country/${country.cca3}`} className="block">
          <div
            className="pb-9 shadow-md rounded-lg hover:shadow-lg transition-all cursor-pointer"
          >
            <img
              src={country?.flags?.svg}
              alt={country?.name?.common}
              className="w-full h-50 object-cover rounded-t-md"
            />
            <div className="px-6 mt-6">
              <h2 className="mt-6 font-bold text-lg">{country?.name?.common}</h2>
              <p>Population: {country?.population?.toLocaleString()}</p>
              <p>Region: {country?.region}</p>
              <p>Capital: {country?.capital?.[0] || "N/A"}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
