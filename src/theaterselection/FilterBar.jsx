import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FilterBar = () => {
  const [active, setActive] = useState("Language");

  const filters = [
    { label: "Tamil - 2D", key: "Language" },
    { label: "Price Range", key: "Price" },
    { label: "Preferred Time", key: "Time" }
  ];

  return (
    <div style={styles.container}>
      {filters.map((filter) => (
        <div
          key={filter.key}
          style={{
            ...styles.filterItem,
            borderBottom:
              active === filter.key ? "2px solid #e94e5a" : "2px solid transparent"
          }}
          onClick={() => setActive(filter.key)}
        >
          <span style={styles.label}>{filter.label}</span>
          <span style={styles.arrow}>▾</span>
          {/* <span style={styles.arrow}>▾</span> */}
        </div>
      ))}
      <div style={styles.searchIcon}>
        <FaSearch size={16} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    // border:"1px solid black",
    width: "fit-content",
    // backgroundColor:"aqua",
    height:"80px",
    // margin:"50px 0px 0px 0px",
  },
  filterItem: {
    fontSize:"14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px 15px",
    minWidth: "120px",
    cursor: "pointer",
    borderRight: "1px solid #ddd"
  },
  label: {
    flex: 1,
    color: "#333"
  },
  arrow: {
    color: "#e94e5a",
    marginLeft: "6px"
  },
  searchIcon: {
    padding: "0 15px",
    cursor: "pointer",
    color: "#888"
  }
};

export default FilterBar;
