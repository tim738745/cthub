import PropTypes from "prop-types";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UploadIssuesDetail = ({ type, issues, totalIssueCount, msg }) => {
  const [showAllRowsMap, setShowAllRowsMap] = useState({}); // State to toggle showing all rows for each issue
  const classname = type === "error" ? "error" : "warning";
  const toggleShowAllRows = (column, errorType) => {
    const key = `${column}_${errorType}`;
    setShowAllRowsMap((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Box
      p={2}
      sx={{
        border: type === "Error" ? "1px solid #ce3e39" : "1px solid #fcba19",
        mb: "1rem",
      }}
    >
      <InfoOutlinedIcon
        className={classname}
        sx={{ marginLeft: 1, marginRight: 1 }}
      />
      <span className={classname}>
        <strong>
          {totalIssueCount} {type}&nbsp;
        </strong>
      </span>
      ({msg})
      {Object.keys(issues).map((column) => (
        <Box key={column} sx={{ marginTop: 2 }}>
          <strong>Column: {column}</strong>
          {Object.keys(issues[column]).map((errorType, index) => (
            <div key={index} style={{ marginTop: "0.5rem" }}>
              <div>{type.charAt(0).toUpperCase() + type.slice(1)} Name: {errorType}</div>
              <div>
                Expected value:{" "}
                {issues[column][errorType].ExpectedType ||
                  issues[column][errorType].ExpectedFormat}
              </div>
              <div>
                Rows with {type}:{" "}
                <b>
                  {issues[column][errorType].Rows.slice(
                    0,
                    showAllRowsMap[`${column}_${errorType}`] ? undefined : 15,
                  ).join(", ")}
                  {issues[column][errorType].Rows.length > 15 &&
                    !showAllRowsMap[`${column}_${errorType}`] &&
                    "..."}
                </b>
              </div>
              {issues[column][errorType].Rows.length > 15 && (
                <Button
                  variant="text"
                  onClick={() => toggleShowAllRows(column, errorType)}
                >
                  {showAllRowsMap[`${column}_${errorType}`]
                    ? "Show less"
                    : "Show more"}{" "}
                  <ExpandMoreIcon />
                </Button>
              )}
            </div>
          ))}
        </Box>
      ))}
    </Box>
  );
};

UploadIssuesDetail.propTypes = {
  type: PropTypes.string.isRequired,
  issues: PropTypes.object.isRequired,
  totalIssueCount: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired,
};

export default UploadIssuesDetail;