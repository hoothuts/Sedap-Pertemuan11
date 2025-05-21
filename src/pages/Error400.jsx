import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage
      code="400"
      description="Bad Request."
      image="/img/400.png"
    />
  );
}
