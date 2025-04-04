import React, { useRef, useState } from "react";
import { styled } from "@mui/system";
import TextTag, { textVariants } from "Components/Typography/TextTag";

const TooltipWrapperStyles = styled("div")(
  ({ theme, isEllipses, ellipses }) => ({
    position: "relative",
    display: "block",
    width: "95%",
    // minWidth: "min-content",
    ".tooltipPopup": {
      display: "none",
    },
    "&:hover": {
      ".tooltipPopup": {
        display: isEllipses || ellipses ? "flex" : "none",
        position: "absolute",
        backgroundColor: "rgba(33, 42, 54, 0.80)",
        bottom: "27px",
        padding: "4px 8px",
        width: "max-content",
        borderRadius: "4px",
        zIndex: "9",
        span: {
          color: theme.palette.white.main,
        },
      },
    },
    "&:has(.customTagTextTooltip)": {
      width: "80%",
    },
    "&.uploadTooltip ": {
      ".tooltipPopup": {
        span: {
          div: {
            display: "block",
            "&:not(:last-child)": {
              marginBottom: "8px",
            },
          },
        },
      },
    },
  }),
);

const TooltipWrapper = ({
  tooltipText,
  children,
  delay = 300,
  style,
  className,
  ellipses,
}) => {
  const timeoutRef = useRef();

  const [showTooltip, setShowTooltip] = useState(false);
  const [isEllipses, setIsEllipses] = useState(false);

  const handleMouseEnter = (event) => {
    const isOverFlow =
      event.target.offsetHeight < event.target.scrollHeight ||
      event.target.offsetWidth < event.target.scrollWidth;
    setIsEllipses(isOverFlow);
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setIsEllipses(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <TooltipWrapperStyles
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      isEllipses={isEllipses}
      className={className}
      ellipses={ellipses}
    >
      {showTooltip && (
        <div className="tooltipPopup">
          <TextTag variant={textVariants._12px.medium}>{tooltipText}</TextTag>
        </div>
      )}
      {children}
    </TooltipWrapperStyles>
  );
};

export default TooltipWrapper;
