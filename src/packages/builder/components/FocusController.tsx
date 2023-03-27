import { Box, useTheme, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { focusedEl, HoveredElement, SelectedElement } from "../state";

const FocusController: React.FC = () => {
  const focusElzIndex = 999999;
  const theme = useTheme();
  const selectedEl = useRecoilValue(SelectedElement);
  const hoveredEls = useRecoilValue(HoveredElement);
  const hoveredEl = hoveredEls[hoveredEls.length - 1];
  let selectedElProps: focusedEl = selectedEl || ({} as any);
  let hoverElProps: focusedEl = hoveredEl || ({} as any);

  let [hoveredLabelPos, setHoveredLabelPos] = useState({});
  let [selectedLabelPos, setSelectedLabelPos] = useState({});

  const getLabelPosition = (rect: DOMRect) => {
    const labelPos = {} as any;

    if (rect?.width < 25 && rect?.height < 25) {
      if (rect?.left < 25) {
        labelPos.right = `-${rect.width * 2 + 2}px`;
      } else if (rect?.right < 25) {
        labelPos.left = `-${rect.width * 2 + 2}px`;
      }
    } else if (rect?.width < 50) {
      if (rect?.left < 20) {
        labelPos.right = `-${rect.width + 5}px`;
      } else if (rect?.right < 20) {
        labelPos.left = `-${rect.width + 5}px`;
      }
    }

    return labelPos;
  };

  useEffect(() => {
    setHoveredLabelPos(getLabelPosition(hoverElProps.DOMRect));
  }, [hoverElProps.DOMRect]);

  useEffect(() => {
    // console.log('selectedElProps >> ', selectedElProps);
    // console.log('hoverElProps >> ', hoverElProps);
    setSelectedLabelPos(getLabelPosition(selectedElProps.DOMRect));
  }, [selectedElProps.DOMRect]);

  return (
    <>
      <Box
        id="selectedBox"
        sx={{
          backgroundColor: "transparent",
          position: "absolute",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: theme.palette.secondary.main,
          display: selectedElProps?.DOMRect?.height ? "block" : "none",
          pointerEvents: "none",
          zIndex: focusElzIndex - 1,
        }}
        style={{
          top: selectedElProps?.DOMRect?.top,
          left: selectedElProps?.DOMRect?.left,
          width: selectedElProps?.DOMRect?.width,
          height: selectedElProps?.DOMRect?.height,
        }}
      >
        <Typography
          component="span"
          sx={{
            padding: "5px",
            backgroundColor: theme.palette.secondary.main,
            fontSize: "10px",
            display: "inline-block",
            position: "absolute",
            right: "4px",
            borderRadius: 0,
            zIndex: focusElzIndex - 1,
            pointerEvents: "none",
          }}
          style={selectedLabelPos}
        >
          {selectedElProps?.type}
        </Typography>
      </Box>
      <Box
        id="hoverBox"
        sx={{
          backgroundColor: "transparent",
          position: "absolute",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: theme.palette.secondary.main,
          display: hoverElProps?.DOMRect?.height ? "block" : "none",
          zIndex: focusElzIndex,
          pointerEvents: "none",
        }}
        style={{
          top: hoverElProps?.DOMRect?.top,
          left: hoverElProps?.DOMRect?.left,
          width: hoverElProps?.DOMRect?.width,
          height: hoverElProps?.DOMRect?.height,
        }}
      >
        <Typography
          component="span"
          sx={{
            padding: "5px",
            backgroundColor: theme.palette.secondary.main,
            fontSize: "10px",
            display: "inline-block",
            position: "absolute",
            right: "4px",
            borderRadius: 0,
            zIndex: focusElzIndex,
            pointerEvents: "none",
          }}
          style={hoveredLabelPos}
        >
          {hoverElProps?.type}
        </Typography>
      </Box>
    </>
  );
};

export default FocusController;
