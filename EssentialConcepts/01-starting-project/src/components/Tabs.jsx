export default function Tabs({ children, buttons, wrapper = "menu" }) {
  const ButtonsContainer = wrapper;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
