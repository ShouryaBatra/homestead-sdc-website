import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { searching, getBlockById } from "../assets/content";

export function ResultItemCard({ route, description, query }) {
  const highlightQuery = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  const truncateText = (text, maxLength, mode = "chars") => {
    if (mode === "words") {
      const words = text.split(" ");
      if (words.length <= maxLength) return text;
      return words.slice(0, maxLength).join(" ") + "...";
    } else {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + "...";
    }
  };

  const truncatedDescription = truncateText(description, 10, "words"); // Truncate to 10 words

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <Link style={{ textDecoration: "none" }}>
        <Typography variant="p" sx={{ fontSize: "18px" }}>
          {route}
        </Typography>{" "}
      </Link>
      <Typography>{highlightQuery(truncatedDescription, query)}</Typography>
    </div>
  );
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Stack spacing={2} sx={{}}>
      <Autocomplete
        freeSolo
        // id=""

        disableClearable
        // autoComplete={false}
        // openOnFocus={false}
        value={searchQuery}
        onChange={(event, newValue) => {
          setSearchQuery(newValue);
          setSearchResults(searching(newValue));
        }}
        options={searchResults.map((option) => option.id)}
        renderOption={(option) => {
          const blockId = option?.key;
          const blockContent = getBlockById(blockId);

          return (
            <ResultItemCard
              key={blockId}
              route={blockContent.tabKey}
              description={blockContent.content}
              query={searchQuery}
            />
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
              },
            }}
          />
        )}
      />
    </Stack>
  );
}
