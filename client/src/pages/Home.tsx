const Home: React.FC = () => {
  const handleClick = () => {
    alert("Leg is not responding, please try again later.");
  };

  return (
    <img
      onClick={handleClick}
      className="w-full h-screen"
      src="1000.png"
      alt="Kaoru"
    />
  );
};

export default Home;
