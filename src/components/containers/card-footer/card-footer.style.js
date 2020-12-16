const styles = theme => ({
  footer: {
    position: "relative"
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    padding: " 10px 0",
  },
  li: {
    color: "#707070",
    padding: "2px 10px 0px",
    fontSize: 12,
    cursor: "default",
    fontFamily: "lato",
    "&:last-child":{
      marginLeft:"auto"
    }
  },
  img: {
    width: 14
  },
  svgIcon: {
    fill: "none",
    stroke: "#505050",
    strokeWidth: 3,
    strokeMiterlimit: 10,
    cursor: "pointer",
    width: 14
  },
  button: {
    color: "#707070",
    padding: "0 10px 6px"
  },
  likeCountStyle:{
    padding: "0 0 0 5px"
  }
});

export { styles };
