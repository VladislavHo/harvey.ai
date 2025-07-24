import { ComposableMap, Geographies, Geography, Graticule } from "react-simple-maps";
import { useState } from "react";

export default function TestPage() {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  const [tooltip, setTooltip] = useState({ show: false, name: "", x: 0, y: 0 });
  const [selectedRegion, setSelectedRegion] = useState("Globe");

  // Список стран для выделения светлым цветом
  const highlightedCountries = [
    "United States of America",
    "Germany",
    "France",
    "United Kingdom",
    "Japan",
    "Canada",
    "Australia"
  ];

  // Список стран для выделения средним цветом
  const mediumHighlightedCountries = [
    "Brazil",
    "India",
    "China",
    "Russia",
    "South Korea",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Norway",
    "Singapore"
  ];

  // Конфигурации для разных регионов
  const regionConfigs = {
    Globe: {
      scale: 137,
      center: [0, 0]
    },
    Americas: {
      scale: 150,
      center: [-100, 10]
    },
    Europe: {
      scale:350,
      center: [10, 40]
    },
    APAC: {
      scale: 210,
      center: [120, 0]
    }
  };

  const handleMouseEnter = (geo, event) => {
    const countryName = geo.properties.name;
    const isInList = highlightedCountries.includes(countryName) || mediumHighlightedCountries.includes(countryName);
    
    if (isInList) {
      setTooltip({
        show: true,
        name: countryName,
        x: event.clientX,
        y: event.clientY
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, name: "", x: 0, y: 0 });
  };

  const handleMouseMove = (event) => {
    if (tooltip.show) {
      setTooltip(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY
      }));
    }
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Region Buttons */}
      <div style={{ 
        display: "flex", 
        gap: "12px", 
        marginBottom: "20px",
        justifyContent: "center"
      }}>
        {Object.keys(regionConfigs).map((region) => (
          <button
            key={region}
            onClick={() => handleRegionChange(region)}
            style={{
              // padding: "8px 16px",
              // backgroundColor: selectedRegion === region ? "var(--color-gray-400)" : "var(--color-gray-800)",
              color: selectedRegion === region ? "var(--color-gray-50-ivory)" : "var(--color-gray-600)",
              // border: "1px solid var(--color-gray-700)",
              // borderRadius: "6px",
              borderBottom: `1px solid ${selectedRegion === region ? "var(--color-gray-50-ivory)" : "var(--background-primary)"}`,
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.2s ease"
            }}
          >
            {region}
          </button>
        ))}
      </div>

      <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <ComposableMap
          projectionConfig={{
            scale: regionConfigs[selectedRegion].scale,
            center: regionConfigs[selectedRegion].center
          }}
          width={800}
          height={400}
        >
          <Graticule stroke="rgba(34, 35, 37, 0.704)" />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = highlightedCountries.includes(geo.properties.name);
                const isMediumHighlighted = mediumHighlightedCountries.includes(geo.properties.name);

                let fillColor = "var(--color-gray-800)"; // По умолчанию
                if (isHighlighted) {
                  fillColor = "var(--color-gray-400)"; // Светлый
                } else if (isMediumHighlighted) {
                  fillColor = "var(--color-gray-600)"; // Средний
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#1f2021"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        fill: fillColor,
                        outline: "none"
                      },
                      hover: {
                        fill: fillColor,
                        outline: "none"
                      },
                      pressed: {
                        fill: fillColor,
                        outline: "none"
                      }
                    }}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        
        {/* Tooltip */}
        {tooltip.show && (
          <div
            style={{
              position: "fixed",
              left: tooltip.x + 10,
              top: tooltip.y - 30,
              backgroundColor: "var(--color-gray-900)",
              color: "var(--color-gray-50-ivory)",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              border: "1px solid var(--color-gray-700)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              pointerEvents: "none",
              zIndex: 1000,
              whiteSpace: "nowrap"
            }}
          >
            {tooltip.name}
          </div>
        )}
      </div>
    </div>
  );
}