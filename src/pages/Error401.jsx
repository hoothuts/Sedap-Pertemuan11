import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      description="Authorization Required."
      image="/img/401.png"
    />
  );
}