const styles = theme => ({
  redioBtn: {
    lineHeight: "40px",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "var(--text-color)",
    paddingLeft: "25px",
    paddingBottom: "5px",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      color: "#6394b4"
    }
  },
  shareButton: {
    display: "flex",
    alignItems: "center"
  }
});

export { styles };
