// eslint-disable-next-line react/prop-types
function Button({ label, onClick }) {
  const handleClick = (evt) => {
    onClick(evt);
  };
  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
