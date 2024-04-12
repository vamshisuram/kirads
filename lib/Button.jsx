// eslint-disable-next-line react/prop-types
function Button({ label }) {
  const handleClick = () => {
    console.log("VAMSHI");
  };
  return <button onClick={handleClick}>VAMSHI {label}</button>;
}

export default Button;
