import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      description="Forbidden Cuh"
      image="/img/403.png"
    />
  );
}